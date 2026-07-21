
// Tags
Ponder.tags((event) => {

    // MC Paint
    event.createTag("mc_paint:painting", "kubejs:custom_painting", "Custom Paintings", "Learn how to make your own paintings", [
        "minecraft:painting",
        "minecraft:bucket"
    ]);
    event.createTag("mc_paint:modifiers", "minecraft:shears", "Painting Modifiers", "These items can be applied to custom paintings to enable a variety of effects", [
        "minecraft:shears",
        "minecraft:white_wool",
        "minecraft:deepslate",
        "minecraft:observer",
        "minecraft:tinted_glass",
        "minecraft:name_tag",
        "minecraft:writable_book",
        "minecraft:glow_ink_sac",
        "minecraft:ink_sac",
        "minecraft:tripwire_hook",
        "minecraft:ender_eye",
        "minecraft:paper",
        "minecraft:ice",
        "minecraft:compass",
        "minecraft:spyglass"
    ]);
    
    // Computercraft Categories
    event.createTag("computercraft:devices", "computercraft:computer_advanced", "Computers & Peripherals", "All Computers and Peripherals that can be linked to Computers",
        ['computercraft:computer_normal',
        'computercraft:computer_advanced',
        'computercraft:turtle_normal',
        'computercraft:turtle_advanced',
        'computercraft:pocket_computer_normal',
        'computercraft:pocket_computer_advanced',
        'computercraft:wireless_modem_normal',
        'computercraft:wireless_modem_advanced',
        'computercraft:cable',
        'computercraft:wired_modem',
        'computercraft:wired_modem_full',
        'computercraft:redstone_relay',
        'computercraft:monitor_normal',
        'computercraft:monitor_advanced',
        'computercraft:speaker',
        'computercraft:printer',
        'computercraft:disk_drive']
    );
    event.createTag("computercraft:advanced_peripherals", "advancedperipherals:chat_box", "Advanced Peripherals", "Powerful Peripherals for advanced scenarios", [
        "advancedperipherals:player_detector",
        "advancedperipherals:environment_detector",
        "advancedperipherals:chat_box",
        "advancedperipherals:block_reader",
        "advancedperipherals:nbt_storage"
    ]);
    event.createTag("computercraft:create_peripherals", "cccbridge:animatronic_block", "Create Peripherals", "These Peripherals allow further interaction with Create components", [
        "@cccbridge"
    ]);
});

/**
 * Helper function for fading in a section.
 *
 * scene => the scene to fade the section in
 * section => the section to fade in
 * movingOffset => the offset to move the section by (a value, not a position)
 * direction => fade direction
 * idleTicks => number of ticks to idle
 */
function fadeInSection(scene, selection, movingOffset, direction, idleTicks) {
    let link = scene.world.showIndependentSection(selection, direction);
    scene.world.moveSection(link, movingOffset, 0); // 0 to instantly move
    scene.idle(idleTicks);
    scene.world.hideIndependentSection(link, direction);
    scene.idle(idleTicks);
}

Ponder.registry((event) => {
    
    // Studio
    event.create("minecraft:painting").scene("getting_started", "Creating a Studio for painting", (scene, util) => {
        scene.showStructure();

        const paintingPos = [2.5, 2.5, 2.98];

        scene.world.setBlocks([2, 1, 3, 2, 2, 3], "create:andesite_casing", false);
        const painting = scene.world.createEntity("minecraft:painting", paintingPos);
        scene.idle(10);
        scene.text(60, "If you throw any egg at a painting...", paintingPos).placeNearTarget();
        scene.idle(50);

        const egg = scene.world.createItemEntity([2.5, 2.5, 0], util.vector.of(0, 0, 0.55), "minecraft:egg");
        scene.idle(5);
        scene.particles.simple(5, "explosion", paintingPos);
        scene.world.removeEntity(painting);
        scene.world.setBlock([2, 2, 2], "kubejs:studio", false);
        scene.idle(15);

        scene.text(60, "You can create a Studio", paintingPos).placeNearTarget();
        scene.idle(60);

        scene.addKeyframe();
        scene
            .showControls(60, paintingPos, "down")
            .rightClick();
        scene.idle(10);
        scene.text(100, "Right click with an empty hand to pick up the brush and start painting", paintingPos).placeNearTarget();
        scene.idle(100);
    });

    // Paint Bucket
    event.create("minecraft:bucket").scene("paint_bucket", "Using Paint Buckets to save and load colours", (scene, util) => {
        
        const bucketPos = [3, 1.5, 2];
        const bucket = scene.world.createEntity("minecraft:item_display", bucketPos);

        scene.world.modifyEntity(bucket, (entity) => {
            const nbt = entity.getNbt();
            nbt.item = {"id" :"kubejs:paint_bucket", "Count" : 1};
            entity.setNbt(nbt);
        });

        scene.showBasePlate();
        scene.world.setBlocks([2, 1, 3, 2, 2, 3], "create:andesite_casing", false);
        scene.world.setBlock([2, 2, 2], "kubejs:studio", false);

        // start
        scene.idle(20);
        scene.text(60, "Paint Buckets can be crafted with a Bucket and 3 Dye", bucketPos).placeNearTarget();
        scene.idle(60);

        scene.world.showSection([2, 1, 3], Facing.DOWN);
        scene.idle(3);
        scene.world.showSection([2, 2, 3], Facing.DOWN);
        scene.idle(3);
        scene.world.showSection([2, 2, 2], Facing.DOWN);
        scene.idle(30);

        scene
            .showControls(20, [2.5, 2.5, 3], "down")
            .rightClick();
        scene.idle(20);
        scene.text(60, "While using a Studio...", [2.5, 2.5, 3]).placeNearTarget();
        scene.idle(70);
        
        scene.addKeyframe();
        scene
            .showControls(30, bucketPos, "down")
            .rightClick();
        scene.idle(30);
        scene.text(120, "Right click the Paint Bucket with an Empty Hand to copy its colour to the Brush", bucketPos).placeNearTarget();
        scene.idle(60);
        scene.world.replaceBlocks([2, 2, 2], "kubejs:blue_studio", true);
        scene.idle(70);

        scene.addKeyframe();
        scene.world.replaceBlocks([2, 2, 2], "kubejs:pink_studio", true);
        scene.idle(20);
        scene
            .showControls(30, bucketPos, "down")
            .whileSneaking()
            .rightClick();
        scene.idle(30);
        scene.world.modifyEntity(bucket, (entity) => {
            const nbt = entity.getNbt();
            nbt.item = {"id" :"kubejs:pink_paint_bucket", "Count" : 1};
            entity.setNbt(nbt);
        });
        scene.particles.simple(3, "effect", bucketPos).motion([0, 0.2, 0]);
        scene.idle(20);
        scene.text(120, "Sneak-right click the Paint Bucket with an Empty Hand to change the paint colour to the Studio's active colour", bucketPos).placeNearTarget();
        scene.idle(130);

        scene.addKeyframe();
        scene
            .showControls(30, bucketPos, "down")
            .withItem("minecraft:writable_book")
            .rightClick();
        scene.idle(30);
        scene.world.modifyEntity(bucket, (entity) => {
            const nbt = entity.getNbt();
            nbt.item = {"id" :"kubejs:green_paint_bucket", "Count" : 1};
            entity.setNbt(nbt);
        });
        scene.particles.simple(3, "effect", bucketPos).motion([0, 0.2, 0]);
        scene.idle(20);
        scene.text(120, "Sneak-right click the Paint Bucket with a Book and Quill to change the paint colour to a Hex Code that is written in the book", bucketPos).placeNearTarget();
        scene.idle(130);
    });
});