const $EntityTravelToDimensionEvent = Java.loadClass("net.neoforged.neoforge.event.entity.EntityTravelToDimensionEvent")
const $CosArmorAPI = Java.loadClass("lain.mods.cos.api.CosArmorAPI")
const playSound = 'playSound(net.minecraft.world.entity.Entity,net.minecraft.core.BlockPos,net.minecraft.sounds.SoundEvent,net.minecraft.sounds.SoundSource,float,float)'

/* Survival Dimensions Pool - Players can teleport to and from creative to these dimensions */
const survivalDimensions = ["minecraft:overworld", "minecraft:the_nether", "minecraft:the_end"]
/* Advancement namespaces that should not be revoked */
const essentialAdvancements = ["mcpaint", "eroxified2", "vanillatweaks", "custom_roleplay_data", "sb", "painting_picker", "silence_mobs"]
const rootAdvancements = ["aeronautics:root", "create:root", "simulated:root", "minecraft:story/root", "pipeorgans:csosintro"]

function playerGamemode(serverPlayer) {
    const player = /** @type {Internal.ServerPlayer}*/ (/** @type {any} */ (serverPlayer))

    if(player.isCreative()) { return "creative" }
    else if(player.isSpectator()) { return "spectator" }
    else if(!player.abilities.mayBuild) { return "adventure" }
    else { return "survival" }
}
function isCarryingObject(serverPlayer) {
    const player = /** @type {Internal.ServerPlayer}*/ (/** @type {any} */ (serverPlayer))
    // Messy solution that might fail?
    return (player.nbt.getCompound("neoforge:attachments").getCompound("carryon:carry_on_data").size() > 3)
}
function loadAndUpdate(serverPlayer, gamemode) {
    const player = /** @type {Internal.ServerPlayer}*/ (/** @type {any} */ (serverPlayer))
    const pData = player.persistentData
    let cosArmor = $CosArmorAPI.getCAStacks(player.uuid)

    // Previously used clear (or set to air) before merging, seems to not be needed
    player.mergeNbt({Inventory: pData.get(`${gamemode}InventoryData`)});
    player.mergeNbt({EnderItems: pData.get(`${gamemode}EnderChest`)})
    player.setXp(pData.get(`${gamemode}Xp`))
    player.setFoodLevel(pData.get(`${gamemode}Food`))
    player.setHealth(pData.get(`${gamemode}Health`))
    player.mergeNbt({"neoforge:attachments": pData.get(`${gamemode}NeoforgeAttachments`)})

    for (let i = 0; i <= 3; i++) {
        // Sliced to remove (single digit) number at start
        cosArmor.setItem(i, Item.of(pData.get(`${gamemode}Cos${i}`).toString().slice(3))) 
    }
    player.inventoryMenu.broadcastFullState()
}
function savePData(serverPlayer, gamemode) {
    const player = /** @type {Internal.ServerPlayer}*/ (/** @type {any} */ (serverPlayer))
    const pData = player.persistentData
    let cosArmor = $CosArmorAPI.getCAStacks(player.uuid)
    
    pData.putString(`${gamemode}Dim`, player.level.dimension)
    pData.putDouble(`${gamemode}X`, player.x)
    pData.putDouble(`${gamemode}Y`, player.y)
    pData.putDouble(`${gamemode}Z`, player.z)
    pData.putFloat(`${gamemode}Yaw`, player.yRotO)
    pData.putFloat(`${gamemode}Pitch`, player.xRotO)
    pData.put(`${gamemode}InventoryData`, player.nbt.get("Inventory"))
    pData.put(`${gamemode}EnderChest`, player.nbt.get("EnderItems"))
    pData.put(`${gamemode}NeoforgeAttachments`, player.nbt.get("neoforge:attachments"))
    pData.putInt(`${gamemode}Xp`, getCurrentXp(player))
    pData.putInt(`${gamemode}Food`, player.getFoodLevel())
    pData.putInt(`${gamemode}Health`, player.getHealth())
    for (let i = 0; i <= 3; i++) {
        pData.putString(`${gamemode}Cos${i}`, cosArmor.getItem(i))
    }
}
function swapToDimension(serverPlayer, gamemode) {
    const player = /** @type {Internal.ServerPlayer}*/ (/** @type {any} */ (serverPlayer))
    const pData = player.persistentData
    let dimension = player.level.dimension.toString()
    const shouldRotate = (dimension == "moddedulo:complex" && gamemode == "survival")

    if (gamemode == "adventure" || shouldRotate) {
        pData.putDouble(`${gamemode}Yaw`, pData.getDouble(`${gamemode}Yaw`) - 180)
    }

    player.teleportTo(
        pData.getString(`${gamemode}Dim`),
        pData.getDouble(`${gamemode}X`),
        pData.getDouble(`${gamemode}Y`),
        pData.getDouble(`${gamemode}Z`),
        pData.getFloat(`${gamemode}Yaw`),
        pData.getFloat(`${gamemode}Pitch`))
    player.setGameMode(gamemode)
}
function dimConsoleLog(serverPlayer, gamemode) {
    const player = /** @type {Internal.ServerPlayer}*/ (/** @type {any} */ (serverPlayer))

    console.log(player.getUsername() + " (UUID: " + player.uuid + ")" + ` left ${player.level.dimension}!`)
    console.log("With INVENTORY: ")
    console.log(player.nbt.get("Inventory"))
    console.log("With ENDER CHEST: ")
    console.log(player.nbt.get("EnderItems"))
    console.log("With NEOFORGE ATTACHMENTS: ")
    console.log(player.nbt.getCompound("neoforge:attachments"))
    console.log("XP: " + player.getXp() + " FOOD: " + player.getFoodLevel() + " HP: " + player.getHealth())
    
    console.log(player.xp)
    console.log(player.getXpLevel())
    console.log(player.getXpNeededForNextLevel())
    console.log(player.totalExperience)
    console.log(player.experienceProgress)
}
function getCurrentXp(serverPlayer) {
    const player = /** @type {Internal.ServerPlayer}*/ (/** @type {any} */ (serverPlayer))
    let currentLevel = player.getXpLevel()
    let totalXp

    if (currentLevel <= 16) {
        totalXp = (currentLevel**2) + 6 * currentLevel
    }
    else if (currentLevel <= 31) {
        totalXp = 2.5 * (currentLevel**2) - 40.5 * currentLevel + 360
    }
    else {
        totalXp = 4.5 * (currentLevel**2) - 162.5 * currentLevel + 2220
    }

    return Math.round(totalXp + (player.experienceProgress * player.getXpNeededForNextLevel()))
}

/* REVOKE ADVANCEMENTS */
PlayerEvents.advancement(event => {
    const {advancement, player, server, level} = event
    let shouldDisableAdvancements = (!survivalDimensions.includes(player.level.dimension.toString()))
    if (essentialAdvancements.includes(advancement.id.getNamespace()) || rootAdvancements.includes(advancement.getId().toString())) return;
    
    else if(!shouldDisableAdvancements) {
        // This is stupid, there'll be a better way of doing this
        // Could check to see if translation key contains "goal" or "challenge" but who cares
        server.tell(Text.of(`${player.getUsername()} has made the advancement `).append(Text.of(advancement.getDisplayText())))
        return
    }
    else {
        if(advancement.advancement.display) {
            server.runCommand(`advancement revoke ${player.username} only ${advancement.id}`)
            console.log(`Player is ${playerGamemode(player)} in ${player.level.dimension.toString()}, Advancement revoked`)
        }
        else {
            server.runCommandSilent(`advancement revoke ${player.username} only ${advancement.id}`)
            console.log(`Player is ${playerGamemode(player)} in ${player.level.dimension.toString()}, Advancement revoked`)
        }
    }
})

ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event
  
    event.register(Commands.literal('test')
        .executes(ctx => test(ctx.source.player))
    )
    const test = (player) => {
        console.log(player.getUsername() + " has " + getCurrentXp(player))
        return 1
    }
})

/* DIMENSION SWITCH COMMAND */
ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event
  
    event.register(Commands.literal('creative')
        .executes(ctx => creativeSwitch(ctx.source.player))
    )
    const creativeSwitch = (player) => {
        let dimension = player.level.dimension.toString()
        
        if (isCarryingObject(player)) {
            player.displayClientMessage(Component.red('Put down whatever you\'re carrying!'), true)
            return 0
        }
        else if (survivalDimensions.includes(dimension)) {
            player.displayClientMessage(Component.blue('Switching to Creative'), true)
            dimConsoleLog(player, "survival")
            savePData(player, "survival")
            swapToDimension(player, "creative")
            loadAndUpdate(player, "creative")
            return 1
        }
        else if (dimension == "moddedulo:creative") {
            player.displayClientMessage(Component.green('Switching to Survival'), true)
            savePData(player, "creative")
            swapToDimension(player, "survival")
            loadAndUpdate(player, "survival")
            return 1
        }
        else {
            player.displayClientMessage(Component.red('You can\'t do that here!'), true)
            return 0
        }
    }
})

/* COMPLEX SWITCH */
BlockEvents.rightClicked('kubejs:complex_door', event => {
    const { player, block } = event
    let dimension = player.level.dimension.toString()

    if (dimension == "moddedulo:creative") {
        player.displayClientMessage(Component.red('You can\'t do that here!'), true)
        return
    }
    else if (survivalDimensions.includes(dimension)){
        player.displayClientMessage(Component.red('Entering the Complex...'), true)
        dimConsoleLog(player, "survival")
        savePData(player, "survival")
        swapToDimension(player, "adventure")
        loadAndUpdate(player, "adventure")
        event.level[playSound](null, player.blockPosition(), 'kubejs:block.complex_door.close', 'blocks', 1, 1)
        player.swing()
    }
    else if (dimension == "moddedulo:complex") {
        player.displayClientMessage(Component.green('Leaving the Complex'), true)
        savePData(player, "adventure")
        swapToDimension(player, "survival")
        loadAndUpdate(player, "survival")
        event.level[playSound](null, player.blockPosition(), 'kubejs:block.complex_door.close', 'blocks', 1, 1)
        player.swing()
    }
})
BlockEvents.placed('kubejs:complex_door', event => {
    let dimension = event.player.level.dimension.toString()
    if (dimension == "moddedulo:creative") {
        event.player.displayClientMessage(Component.red('You can\'t place that here!'), true)
        event.cancel()
    }
    else if (event.block.down.id != "kubejs:unbreakable_andesite") {
        event.player.displayClientMessage(Component.red('Please place on Unbreakable Andesite!'), true)
        event.cancel()
    }
})
