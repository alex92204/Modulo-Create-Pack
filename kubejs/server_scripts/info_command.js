const infoTypes = [ "server", "mods" ]
const ccTypes = [ "tutorial", "docs", "craftos" ]
const x = 0xc7954b
const xAlt = 0x916c36
const h = 0xeeda78
const greenAlt = 0x42c742
const aquaAlt = 0x42c7c7
const yellowAlt = 0xc7c742

ServerEvents.commandRegistry(event => {
    function info(player) {
        player.tell(Text.of("\n-- Moddedulo Help Menu --\n").bold().gold())
        player.tell(Text.of("- Useful Server Commands").yellow()
            .hover("Commands for Datapacks and the Creative dimension!")
            .clickRunCommand("/modulo server")
        )
        player.tell(Text.of("- Ponder Index").color(yellowAlt)
            .hover("Learn about Create or other mods with this interactive wiki!")
            .clickRunCommand("/ponder")
        )
        player.tell(Text.of("- Mod Wikis & Documentation").yellow()
            .hover("See mod information online!")
            .clickRunCommand("/modulo mods")
        )
        player.tell(Text.of("- ComputerCraft Guides").color(yellowAlt)
            .hover("Get started with Programmable Computers in CC: Tweaked!")
            .clickRunCommand("/cc")
        )
        player.tell(Text.of("- Server Resource Pack").yellow()
            .hover("Link to Github page where you can add your own custom models!")
            .clickOpenUrl("https://github.com/alex92204/Modulo-Create-Server-Resource-Pack/tree/main")
        )
        player.tell(Text.of("\n-----------------------").bold().gold())
    }

    function infoAdvanced(player, args) {
        switch (args) {
            case ("server"): 
                player.tell(Text.of("\n-- Server Commands --\n").bold().color(h))
                player.tell(Text.of("- Change Name Colour").color(x)
                    .hover("/trigger color")
                    .clickRunCommand("/trigger color")
                )
                player.tell(Text.of("- Format Name of Item in Hand").color(xAlt)
                    .hover("/trigger FormatName")
                    .clickRunCommand("/trigger FormatName")
                )
                player.tell(Text.of("- Switch to and from the Creative Dimension").color(x)
                    .hover("/creative")
                    .clickRunCommand("/creative")
                )
                player.tell(Text.of("\n---------------------").bold().color(h))
                break;
            case ("mods"):
                player.tell(Text.of("\n-- Mod Wikis & Documentation --\n").bold().darkGreen())
                player.tell(Text.of("- MCPaint").green()
                    .hover("How to make Custom Paintings!")
                    .clickOpenUrl("https://github.com/Eroxen/MC-Paint-datapack/wiki")
                )
                player.tell(Text.of("- Areas").color(greenAlt)
                    .hover("Make pop-up Titles for an Area!")
                    .clickOpenUrl("https://github.com/Serilum/Areas")
                )
                player.tell(Text.of("- Exposure").green()
                    .hover("Take and Process your own Photos!")
                    .clickOpenUrl("https://moddedmc.wiki/en/project/exposure/latest/docs")
                )
                player.tell(Text.of("- Supplementaries & Amendments").color(greenAlt)
                    .hover("A Variety of Vanilla+ Additions, note that several are disabled!")
                    .clickOpenUrl("https://github.com/MehVahdJukaar/Supplementaries/wiki")
                )
                player.tell(Text.of("- ComputerCraft Documentations").green()
                    .hover("Includes CC addons and Lua Guides!")
                    .clickRunCommand("/cc docs")
                )
                player.tell(Text.of("- Create: Steam 'n' Rails").color(greenAlt)
                    .hover("More Features for making Trains!")
                    .clickOpenUrl("https://github.com/Layers-of-Railways/Railway/wiki")
                )
                player.tell(Text.of("- Create: Sound of Steam").green()
                    .hover("Make Music with Organs!")
                    .clickOpenUrl("https://github.com/CSOS-Team/SoundOfSteam/wiki")
                )
                player.tell(Text.of("- Create: Railways Navigator").color(greenAlt)
                    .hover("Advanced Features for Train Navigation!")
                    .clickOpenUrl("https://wiki.mrjulsen.net/createrailwaysnavigator/")
                )
                player.tell(Text.of("\n---------------------------").bold().darkGreen())
                break;
            default:
                player.tell(Text.of("Invalid Info Type! Try /modulo").red())
                break;
        }
    }

    function cc(player) {
        player.tell(Text.of("\n-- ComputerCraft Guide --\n").bold().blue())
        player.tell(Text.of("Welcome to ComputerCraft! I've tried my best to make an intuitive help menu so that anyone can get into making their own programs!").color(aquaAlt))
        player.tell(Text.of("Tip: Access this Menu at any time with /cc\n").color(aquaAlt))
        player.tell(Text.of("- Tutorial").aqua()
            .hover("Start Here!")
            .clickRunCommand("/cc tutorial")
        )
        player.tell(Text.of("- CraftOS").aqua()
            .hover("Easy Program Editing!")
            .clickRunCommand("/cc craftos")
        )
        player.tell(Text.of("- Documentations").aqua()
            .hover("Documentation for all things CC!")
            .clickRunCommand("/cc docs")
        )
        player.tell(Text.of("\n-----------------------").bold().blue())
    }

    function ccAdvanced(player, args) {
        switch (args) {
            case ("tutorial"):
                player.tell(Text.of("\n-- CC Tutorial --\n").bold().blue())
                player.tell(Text.of("First, we need an easy way to edit programs, because the in-game computers are not very user-friendly!").color(aquaAlt))
                player.tell(Text.of("Luckily, CraftOS exists, which lets us edit programs on our PC and synchronise them with the game in real-time!\n").color(aquaAlt))
                player.tell(Text.of("- CraftOS Setup").aqua()
                    .hover("Edit Programs in real-time!")
                    .clickRunCommand("/cc craftos")    
                )
                player.tell(Text.of("\nAfter setting up CraftOS:\n").color(aquaAlt))
                player.tell(Text.of("- Cyber Quills Video Tutorial").aqua()
                    .hover("Youtube Playlist")
                    .clickOpenUrl("https://www.youtube.com/playlist?list=PLmbcahvoLw0D9MkmTwsrRuEApoY4BTr3a")
                )
                player.tell(Text.of("Modern Tutorial Series. Very well made and covers everything you need to get started!").color(aquaAlt))
                player.tell(Text.of("\n----------------").bold().blue())
                break;
            case ("docs"):
                player.tell(Text.of("\n-- CC Documentation --\n").bold().blue())
                player.tell(Text.of("- Get Started with Lua").aqua()
                    .hover("A Beginner's Guide to the Lua Programming Language")
                    .clickOpenUrl("https://www.lua.org/pil/contents.html")
                )
                player.tell(Text.of("- Lua Reference Manual").color(aquaAlt)
                    .hover("Full Lua Documentation")
                    .clickOpenUrl("https://www.lua.org/manual/5.5/")
                )
                player.tell(Text.of("- CC: Tweaked (ComputerCraft)").aqua()
                    .hover("Full CC Documentation")
                    .clickOpenUrl("https://tweaked.cc/")
                )
                player.tell(Text.of("- Advanced Peripherals").color(aquaAlt)
                    .hover("Full Advanced Peripherals Documentation")
                    .clickOpenUrl("https://docs.advanced-peripherals.de/latest/")
                )
                player.tell(Text.of("- Create Mod Integration").aqua()
                    .hover("Create's Built-in CC Integration")
                    .clickOpenUrl("https://wiki.createmod.net/users/cc-tweaked-integration/logistics/packager")
                )
                player.tell(Text.of("- Create: CC Bridge").color(aquaAlt)
                    .hover("Extra CC-Controlled Features for Create")
                    .clickOpenUrl("https://cccbridge.kleinbox.dev/")
                )
                player.tell(Text.of("- Create: Avionics").aqua()
                    .hover("CC Integration for Simulated, Aeronautics, and Offroad")
                    .clickOpenUrl("https://solastrius.github.io/CreateAvionics/")
                )
                
                player.tell(Text.of("\n--------------------").bold().blue())
                break;
            case ("craftos"):
                player.tell(Text.of("\n-- Setting Up CraftOS --\n").bold().blue())
                player.tell(Text.of("A ComputerCraft emulator and Plugin for Visual Studio Code that lets you create and edit CC programs in real-time!").color(aquaAlt))
                player.tell(Text.of("\n- VSCode and CraftOS Installation Tutorial").aqua()
                    .hover("Youtube Video")
                    .clickOpenUrl("https://youtu.be/y4VbgFn5W_Q"))
                player.tell(Text.of("\nDownload Links:\n").color(aquaAlt))
                player.tell(Text.of("- CraftOS Website").aqua()
                    .hover("CraftOS Website")
                    .clickOpenUrl("https://www.craftos-pc.cc/"))
                player.tell(Text.of("- Visual Studio Code Website").aqua()
                    .hover("VSCode Website in all its AI slop glory")
                    .clickOpenUrl("https://code.visualstudio.com/"))
                player.tell(Text.of("\n---------------------").bold().blue())
                break; 
            default:
                player.tell(Text.of("Invalid Info Type! Try /cc").red())
                break;
        }
    }
    
    const { commands: Commands, arguments: Arguments } = event
  
    event.register(Commands.literal('modulo')
        .executes(ctx => {
            let player = ctx.source.player
            info(player)
            return 1
        })
        .then(Commands.argument("infoType", Arguments.STRING.create(event))
        .suggests((ctx, builder) => {
            infoTypes.forEach(validToken => builder.suggest(validToken))
            return builder.buildFuture()
        })
        .executes(ctx => {
            let player = ctx.source.player
            let infoType = Arguments.STRING.getResult(ctx, 'infoType')
            infoAdvanced(player, infoType)
            return 1
        })
    ))

    event.register(Commands.literal('cc')
        .executes(ctx => {
            let player = ctx.source.player
            cc(player)
            return 1
        })
        .then(Commands.argument("ccType", Arguments.STRING.create(event))
        .suggests((ctx, builder) => {
            ccTypes.forEach(validToken => builder.suggest(validToken))
            return builder.buildFuture()
        })
        .executes(ctx => {
            let player = ctx.source.player
            let ccType = Arguments.STRING.getResult(ctx, 'ccType')
            ccAdvanced(player, ccType)
            return 1
        })
    ))
})