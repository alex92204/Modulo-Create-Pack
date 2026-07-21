ClientEvents.generateAssets("after_mods", (event) => {
    /**
     * Add a new group to EMI++
     * @param {Special.Mod | 'pack' | 'c'} mod
     * @param {string} name The name of the group
     * @param {'group' | 'tag' | 'regex'} type
     * @param {Special.ItemTag | Special.Item[]} data
     */
    function add(mod, name, type, data) {
        let file = `${mod}:stack_groups/${name}`;
        let obj = {
            type: `emixx:${type}`,
        };

        if (type === "group") {
            obj.type = "emixx:group";
            obj.contents = data;
        }

        if (type === "tag") {
            obj.type = "emixx:tag";
            obj.tag = data;
        }

        if (type === "regex") {
            obj.type = "emixx:group";
            obj.contents = Ingredient.of(new RegExp(data)).itemIds.toArray();
        }

        event.json(file, obj);
    }

    //Make entries here
    //add("moddedulo", "x", "group", 
    //);
    add("moddedulo", "hats", "tag",
        "accessories:hat"
    );
    add("moddedulo", "hat_bags", "group",
        ['simplehats:hatbag_common', 'simplehats:hatbag_uncommon', 'simplehats:hatbag_rare', 'simplehats:hatbag_epic', 'simplehats:hatbag_easter', 'simplehats:hatbag_summer', 'simplehats:hatbag_halloween', 'simplehats:hatbag_festive', 'simplehats:hatscraps_common', 'simplehats:hatscraps_uncommon', 'simplehats:hatscraps_rare', 'simplehats:hatscraps_easter', 'simplehats:hatscraps_summer', 'simplehats:hatscraps_halloween', 'simplehats:hatscraps_festive']
    );
    add("moddedulo", "andesite_fluid_manipulators", "group",
        ['createcasing:andesite_fluid_pipe', 'createcasing:andesite_mechanical_pump', 'createcasing:andesite_smart_fluid_pipe', 'createcasing:andesite_fluid_tank', 'createcasing:andesite_steam_engine', 'createcasing:andesite_item_drain', 'createcasing:andesite_fluid_valve', 'createcasing:andesite_valve_handle', 'createcasing:andesite_hose_pulley', 'createcasing:andesite_portable_fluid_interface', 'createcasing:andesite_steam_whistle', 'createcasing:andesite_spout']
    );
    add("moddedulo", "brass_fluid_manipulators", "group",
        ['createcasing:brass_fluid_pipe', 'createcasing:brass_mechanical_pump', 'createcasing:brass_smart_fluid_pipe', 'createcasing:brass_fluid_tank', 'createcasing:brass_steam_engine', 'createcasing:brass_item_drain', 'createcasing:brass_fluid_valve', 'createcasing:brass_valve_handle', 'createcasing:brass_hose_pulley', 'createcasing:brass_portable_fluid_interface', 'createcasing:brass_steam_whistle', 'createcasing:brass_spout']
    );
    add("moddedulo", "zinc_fluid_manipulators", "group",
        ['createcasing:zinc_fluid_pipe', 'createcasing:zinc_mechanical_pump', 'createcasing:zinc_smart_fluid_pipe', 'createcasing:zinc_fluid_tank', 'createcasing:zinc_steam_engine', 'createcasing:zinc_item_drain', 'createcasing:zinc_fluid_valve', 'createcasing:zinc_valve_handle', 'createcasing:zinc_hose_pulley', 'createcasing:zinc_portable_fluid_interface', 'createcasing:zinc_steam_whistle', 'createcasing:zinc_spout']
    );
    add("moddedulo", "shelves", "group", [
        'minecraft:oak_shelf', 'minecraft:spruce_shelf', 'minecraft:birch_shelf', 'minecraft:jungle_shelf', 'minecraft:acacia_shelf', 'minecraft:dark_oak_shelf', 'minecraft:mangrove_shelf', 'minecraft:cherry_shelf', 'minecraft:bamboo_shelf', 'minecraft:crimson_shelf', 'minecraft:warped_shelf', 'minecraft:pale_oak_shelf'
    ]);
    add("moddedulo", "bars", "group", [
        'supplementaries:gold_bars', 'createdeco:andesite_bars', 'createdeco:brass_bars', 'createdeco:copper_bars', 'createdeco:industrial_iron_bars', 'createdeco:zinc_bars', 'create:andesite_bars', 'create:brass_bars', 'create:copper_bars', 'minecraft:iron_bars', 'minecraft:copper_bars', 'minecraft:exposed_copper_bars', 'minecraft:weathered_copper_bars', 'minecraft:oxidized_copper_bars', 'minecraft:waxed_copper_bars', 'minecraft:waxed_exposed_copper_bars', 'minecraft:waxed_weathered_copper_bars', 'minecraft:waxed_oxidized_copper_bars'
    ]);
    add("moddedulo", "copper_chests", "group", [
        'minecraft:copper_chest', 'minecraft:exposed_copper_chest', 'minecraft:weathered_copper_chest', 'minecraft:oxidized_copper_chest', 'minecraft:waxed_copper_chest', 'minecraft:waxed_exposed_copper_chest', 'minecraft:waxed_weathered_copper_chest', 'minecraft:waxed_oxidized_copper_chest'
    ]);
    add("moddedulo", "copper_golems", "group", 
        ['minecraft:copper_golem_statue', 'minecraft:exposed_copper_golem_statue', 'minecraft:weathered_copper_golem_statue', 'minecraft:oxidized_copper_golem_statue', 'minecraft:waxed_copper_golem_statue', 'minecraft:waxed_exposed_copper_golem_statue', 'minecraft:waxed_weathered_copper_golem_statue', 'minecraft:waxed_oxidized_copper_golem_statue']
    );
    add("moddedulo", "lanterns", "group", [
        'minecraft:lantern', 'minecraft:soul_lantern', 'minecraft:copper_lantern', 'minecraft:exposed_copper_lantern', 'minecraft:weathered_copper_lantern', 'minecraft:oxidized_copper_lantern', 'minecraft:waxed_copper_lantern', 'minecraft:waxed_exposed_copper_lantern', 'minecraft:waxed_weathered_copper_lantern', 'minecraft:waxed_oxidized_copper_lantern'
    ]);
    add("moddedulo", "harnesses", "group", [
        'minecraft:white_harness', 'minecraft:light_gray_harness', 'minecraft:gray_harness', 'minecraft:black_harness', 'minecraft:brown_harness', 'minecraft:red_harness', 'minecraft:orange_harness', 'minecraft:yellow_harness', 'minecraft:lime_harness', 'minecraft:green_harness', 'minecraft:cyan_harness', 'minecraft:light_blue_harness', 'minecraft:blue_harness', 'minecraft:purple_harness', 'minecraft:magenta_harness', 'minecraft:pink_harness'
    ]);
    add("moddedulo", "chains", "group", 
        ['minecraft:chain', 'minecraft:copper_chain', 'minecraft:exposed_copper_chain', 'minecraft:weathered_copper_chain', 'minecraft:oxidized_copper_chain', 'minecraft:waxed_copper_chain', 'minecraft:waxed_exposed_copper_chain', 'minecraft:waxed_weathered_copper_chain', 'minecraft:waxed_oxidized_copper_chain']
    );
    add("moddedulo", "lightning_rods", "group", 
        ['minecraft:lightning_rod', 'minecraft:exposed_lightning_rod', 'minecraft:weathered_lightning_rod', 'minecraft:oxidized_lightning_rod', 'minecraft:waxed_lightning_rod', 'minecraft:waxed_exposed_lightning_rod', 'minecraft:waxed_weathered_lightning_rod', 'minecraft:waxed_oxidized_lightning_rod']
    );
    add("emixx", "buttons", "group", 
        ['copperagebackport:waxed_copper_button', 'copperagebackport:waxed_exposed_copper_button', 'copperagebackport:waxed_weathered_copper_button', 'copperagebackport:waxed_oxidized_copper_button', 'minecraft:pale_oak_button', 'minecraft:mangrove_button', 'minecraft:cherry_button', 'minecraft:dark_oak_button', 'minecraft:acacia_button', 'minecraft:jungle_button', 'minecraft:birch_button', 'minecraft:spruce_button', 'minecraft:oak_button', 'copperagebackport:oxidized_copper_button', 'copperagebackport:weathered_copper_button', 'copperagebackport:exposed_copper_button', 'copperagebackport:copper_button', 'minecraft:polished_blackstone_button', 'minecraft:stone_button', 'minecraft:warped_button', 'minecraft:crimson_button', 'minecraft:bamboo_button']
    );
    add("minecraft", "pressure_plates", "group",
        ['minecraft:polished_blackstone_pressure_plate', 'minecraft:pale_oak_pressure_plate', 'minecraft:cherry_pressure_plate', 'minecraft:mangrove_pressure_plate', 'minecraft:dark_oak_pressure_plate', 'minecraft:acacia_pressure_plate', 'minecraft:jungle_pressure_plate', 'minecraft:birch_pressure_plate', 'minecraft:spruce_pressure_plate', 'minecraft:oak_pressure_plate', 'minecraft:polished_blackstone_pressure_plate', 'minecraft:stone_pressure_plate', 'minecraft:warped_pressure_plate', 'minecraft:crimson_pressure_plate', 'minecraft:bamboo_pressure_plate']
    );
    add("emixx", "doors", "group",
        ['supplementaries:netherite_door', 'supplementaries:gold_door', 'minecraft:waxed_exposed_copper_door', 'minecraft:waxed_oxidized_copper_door', 'createdeco:andesite_door', 'createdeco:brass_door', 'createdeco:zinc_door', 'createdeco:industrial_iron_door', 'createframed:red_stained_framed_glass_door', 'createframed:orange_stained_framed_glass_door', 'createframed:yellow_stained_framed_glass_door', 'createframed:gray_stained_framed_glass_door', 'createframed:light_gray_stained_framed_glass_door', 'createdeco:locked_zinc_door', 'createdeco:locked_industrial_iron_door', 'createdeco:locked_copper_door', 'createdeco:locked_brass_door', 'createdeco:locked_andesite_door', 'minecraft:iron_door', 'create:framed_glass_door', 'minecraft:oak_door', 'minecraft:spruce_door', 'minecraft:birch_door', 'minecraft:jungle_door', 'minecraft:acacia_door', 'minecraft:mangrove_door', 'minecraft:dark_oak_door', 'minecraft:cherry_door', 'minecraft:pale_oak_door', 'minecraft:oxidized_copper_door', 'minecraft:waxed_copper_door', 'minecraft:weathered_copper_door', 'minecraft:exposed_copper_door', 'minecraft:copper_door', 'minecraft:warped_door', 'minecraft:crimson_door', 'minecraft:bamboo_door', 'minecraft:waxed_weathered_copper_door',
        'createframed:lime_stained_framed_glass_door', 'createframed:green_stained_framed_glass_door', 'create:train_door', 'create:copper_door', 'create:brass_door', 'create:andesite_door', 'createframed:tinted_framed_glass_door', 'createframed:brown_stained_framed_glass_door', 'createframed:white_stained_framed_glass_door', 'createframed:black_stained_framed_glass_door', 'createframed:pink_stained_framed_glass_door', 'createframed:magenta_stained_framed_glass_door', 'createframed:purple_stained_framed_glass_door', 'createframed:cyan_stained_framed_glass_door', 'createframed:light_blue_stained_framed_glass_door', 'createframed:blue_stained_framed_glass_door']
    );
    add("minecraft", "trapdoors", "group",
        ['minecraft:oak_trapdoor', 'minecraft:spruce_trapdoor', 'minecraft:birch_trapdoor', 'minecraft:jungle_trapdoor', 'minecraft:acacia_trapdoor', 'minecraft:dark_oak_trapdoor', 'minecraft:mangrove_trapdoor', 'minecraft:cherry_trapdoor', 'minecraft:pale_oak_trapdoor', 'minecraft:bamboo_trapdoor', 'minecraft:crimson_trapdoor', 'minecraft:warped_trapdoor', 'minecraft:iron_trapdoor', 'minecraft:copper_trapdoor', 'minecraft:exposed_copper_trapdoor', 'minecraft:weathered_copper_trapdoor', 'minecraft:oxidized_copper_trapdoor', 'minecraft:waxed_copper_trapdoor', 'minecraft:waxed_exposed_copper_trapdoor', 'minecraft:waxed_weathered_copper_trapdoor', 'minecraft:waxed_oxidized_copper_trapdoor', 'createdeco:andesite_trapdoor', 'createdeco:brass_trapdoor', 'createdeco:industrial_iron_trapdoor', 'createdeco:zinc_trapdoor', 'supplementaries:netherite_trapdoor', 'supplementaries:gold_trapdoor', 'createframed:red_stained_framed_glass_trapdoor', 'createframed:orange_stained_framed_glass_trapdoor', 'createframed:yellow_stained_framed_glass_trapdoor', 'createframed:green_stained_framed_glass_trapdoor', 'createframed:lime_stained_framed_glass_trapdoor', 'createframed:blue_stained_framed_glass_trapdoor', 'createframed:light_blue_stained_framed_glass_trapdoor', 'createframed:cyan_stained_framed_glass_trapdoor', 'createframed:purple_stained_framed_glass_trapdoor',
        'createframed:magenta_stained_framed_glass_trapdoor', 'createframed:pink_stained_framed_glass_trapdoor', 'createframed:black_stained_framed_glass_trapdoor', 'createframed:gray_stained_framed_glass_trapdoor', 'createframed:light_gray_stained_framed_glass_trapdoor', 'createframed:white_stained_framed_glass_trapdoor', 'createframed:brown_stained_framed_glass_trapdoor', 'createframed:tinted_framed_glass_trapdoor', 'create:train_trapdoor', 'create:framed_glass_trapdoor']
    );
    add("moddedulo", "locometal_doors", "group",
         ['railways:hinged_locometal_door', 'railways:sliding_locometal_door', 'railways:folding_locometal_door', 'railways:brown_hinged_locometal_door', 'railways:brown_sliding_locometal_door', 'railways:brown_folding_locometal_door', 'railways:maroon_hinged_locometal_door', 'railways:maroon_sliding_locometal_door', 'railways:maroon_folding_locometal_door', 'railways:red_hinged_locometal_door', 'railways:red_sliding_locometal_door', 'railways:red_folding_locometal_door', 'railways:vermilion_hinged_locometal_door', 'railways:vermilion_sliding_locometal_door', 'railways:vermilion_folding_locometal_door', 'railways:orange_hinged_locometal_door', 'railways:orange_sliding_locometal_door', 'railways:orange_folding_locometal_door', 'railways:granite_hinged_locometal_door', 'railways:granite_sliding_locometal_door', 'railways:granite_folding_locometal_door', 'railways:dripstone_hinged_locometal_door', 'railways:dripstone_sliding_locometal_door', 'railways:dripstone_folding_locometal_door', 'railways:ochrum_hinged_locometal_door', 'railways:ochrum_sliding_locometal_door', 'railways:ochrum_folding_locometal_door', 'railways:yellow_hinged_locometal_door', 'railways:yellow_sliding_locometal_door', 'railways:yellow_folding_locometal_door', 'railways:chartreuse_hinged_locometal_door', 'railways:chartreuse_sliding_locometal_door', 'railways:chartreuse_folding_locometal_door', 'railways:olive_green_hinged_locometal_door', 'railways:olive_green_sliding_locometal_door', 'railways:olive_green_folding_locometal_door',
        'railways:lime_hinged_locometal_door', 'railways:lime_sliding_locometal_door', 'railways:lime_folding_locometal_door', 'railways:green_hinged_locometal_door', 'railways:green_sliding_locometal_door', 'railways:green_folding_locometal_door', 'railways:pine_green_hinged_locometal_door', 'railways:pine_green_sliding_locometal_door', 'railways:pine_green_folding_locometal_door', 'railways:cyan_hinged_locometal_door', 'railways:cyan_sliding_locometal_door', 'railways:cyan_folding_locometal_door', 'railways:sea_green_hinged_locometal_door', 'railways:sea_green_sliding_locometal_door', 'railways:sea_green_folding_locometal_door', 'railways:turquoise_hinged_locometal_door', 'railways:turquoise_sliding_locometal_door', 'railways:turquoise_folding_locometal_door', 'railways:light_blue_hinged_locometal_door', 'railways:light_blue_sliding_locometal_door', 'railways:light_blue_folding_locometal_door', 'railways:blue_hinged_locometal_door', 'railways:blue_sliding_locometal_door', 'railways:blue_folding_locometal_door', 'railways:royal_blue_hinged_locometal_door', 'railways:royal_blue_sliding_locometal_door', 'railways:royal_blue_folding_locometal_door', 'railways:purple_hinged_locometal_door', 'railways:purple_sliding_locometal_door', 'railways:purple_folding_locometal_door', 'railways:magenta_hinged_locometal_door', 'railways:magenta_sliding_locometal_door', 'railways:magenta_folding_locometal_door', 'railways:pink_hinged_locometal_door', 'railways:pink_sliding_locometal_door', 'railways:pink_folding_locometal_door',
        'railways:white_hinged_locometal_door', 'railways:white_sliding_locometal_door', 'railways:white_folding_locometal_door', 'railways:diorite_hinged_locometal_door', 'railways:diorite_sliding_locometal_door', 'railways:diorite_folding_locometal_door', 'railways:limestone_hinged_locometal_door', 'railways:limestone_sliding_locometal_door', 'railways:limestone_folding_locometal_door', 'railways:light_gray_hinged_locometal_door', 'railways:light_gray_sliding_locometal_door', 'railways:light_gray_folding_locometal_door', 'railways:tuff_hinged_locometal_door', 'railways:tuff_sliding_locometal_door', 'railways:tuff_folding_locometal_door', 'railways:gray_hinged_locometal_door', 'railways:gray_sliding_locometal_door', 'railways:gray_folding_locometal_door', 'railways:scorchia_hinged_locometal_door', 'railways:scorchia_sliding_locometal_door', 'railways:scorchia_folding_locometal_door', 'railways:black_hinged_locometal_door', 'railways:black_sliding_locometal_door', 'railways:black_folding_locometal_door']
    );
    add("moddedulo", "decals", "group",
        ['createdeco:decal_fire_diamond', 'createdeco:decal_no_entry', 'createdeco:decal_warning', 'createdeco:decal_creeper', 'createdeco:decal_skull', 'createdeco:decal_flow', 'createdeco:decal_ice', 'createdeco:decal_radioactive', 'createdeco:decal_top_left', 'createdeco:decal_up', 'createdeco:decal_top_right', 'createdeco:decal_left', 'createdeco:decal_cross', 'createdeco:decal_right', 'createdeco:decal_down_left', 'createdeco:decal_down', 'createdeco:decal_down_right', 'createdeco:decal_fluid', 'createdeco:decal_fire', 'createdeco:decal_electrical']
    );
    add("moddedulo", "placards", "group",
        ['createdeco:cyan_placard', 'createdeco:light_gray_placard', 'createdeco:gray_placard', 'createdeco:pink_placard', 'createdeco:lime_placard', 'createdeco:yellow_placard', 'createdeco:magenta_placard', 'createdeco:light_blue_placard', 'createdeco:orange_placard', 'createdeco:purple_placard', 'createdeco:blue_placard', 'createdeco:brown_placard', 'createdeco:green_placard', 'createdeco:red_placard', 'createdeco:black_placard', 'create:placard']
    );
    add("moddedulo", "cage_lamps", "group",
        ['createdeco:green_industrial_iron_lamp', 'createdeco:blue_industrial_iron_lamp', 'createdeco:yellow_zinc_lamp', 'createdeco:red_zinc_lamp', 'createdeco:green_zinc_lamp', 'createdeco:blue_zinc_lamp', 'createdeco:yellow_andesite_lamp', 'createdeco:green_andesite_lamp', 'createdeco:red_andesite_lamp', 'createdeco:blue_andesite_lamp', 'createdeco:yellow_brass_lamp', 'createdeco:red_brass_lamp', 'createdeco:green_brass_lamp', 'createdeco:blue_brass_lamp', 'createdeco:yellow_iron_lamp', 'createdeco:red_industrial_iron_lamp', 'createdeco:yellow_industrial_iron_lamp', 'createdeco:blue_copper_lamp', 'createdeco:green_copper_lamp', 'createdeco:red_copper_lamp', 'createdeco:yellow_copper_lamp', 'createdeco:blue_iron_lamp', 'createdeco:green_iron_lamp', 'createdeco:red_iron_lamp']
    );
    add("moddedulo", "handles", "group", 
        ['simulated:iron_handle', 'simulated:copper_handle', 'simulated:white_handle', 'simulated:orange_handle', 'simulated:magenta_handle', 'simulated:light_blue_handle', 'simulated:lime_handle', 'simulated:yellow_handle', 'simulated:pink_handle', 'simulated:gray_handle', 'simulated:cyan_handle', 'simulated:purple_handle', 'simulated:light_gray_handle', 'simulated:blue_handle', 'simulated:brown_handle', 'simulated:green_handle', 'simulated:red_handle', 'simulated:black_handle']
    );
    add("moddedulo", "backpack_upgrades", "group",
        ['sophisticatedbackpacks:pickup_upgrade', 'sophisticatedbackpacks:advanced_pickup_upgrade', 'sophisticatedbackpacks:filter_upgrade', 'sophisticatedbackpacks:advanced_filter_upgrade', 'sophisticatedbackpacks:restock_upgrade', 'sophisticatedbackpacks:advanced_restock_upgrade', 'sophisticatedbackpacks:deposit_upgrade', 'sophisticatedbackpacks:advanced_deposit_upgrade', 'sophisticatedbackpacks:refill_upgrade', 'sophisticatedbackpacks:advanced_refill_upgrade', 'sophisticatedbackpacks:stack_upgrade_starter_tier', 'sophisticatedbackpacks:stack_upgrade_tier_1', 'sophisticatedbackpacks:stack_upgrade_tier_2', 'sophisticatedbackpacks:stack_upgrade_tier_3', 'sophisticatedbackpacks:stack_upgrade_tier_4', 'sophisticatedbackpacks:stack_downgrade_tier_1', 'sophisticatedbackpacks:stack_downgrade_tier_2', 'sophisticatedbackpacks:stack_downgrade_tier_3', 'sophisticatedbackpacks:tool_swapper_upgrade', 'sophisticatedbackpacks:advanced_tool_swapper_upgrade', 'sophisticatedbackpacks:upgrade_base']
    );
    add("moddedulo", "backpacks", "group", 
        ['sophisticatedbackpacks:netherite_backpack', 'sophisticatedbackpacks:diamond_backpack', 'sophisticatedbackpacks:gold_backpack', 'sophisticatedbackpacks:iron_backpack', 'sophisticatedbackpacks:copper_backpack', 'sophisticatedbackpacks:backpack']
    );
    add("moddedulo", "portable_engines", "group",
        ['simulated:white_portable_engine', 'simulated:orange_portable_engine', 'simulated:magenta_portable_engine', 'simulated:light_blue_portable_engine', 'simulated:yellow_portable_engine', 'simulated:lime_portable_engine', 'simulated:pink_portable_engine', 'simulated:gray_portable_engine', 'simulated:light_gray_portable_engine', 'simulated:cyan_portable_engine', 'simulated:purple_portable_engine', 'simulated:blue_portable_engine', 'simulated:brown_portable_engine', 'simulated:green_portable_engine', 'simulated:red_portable_engine', 'simulated:black_portable_engine']
    );
    add("moddedulo", "nameplates", "group",
        ['simulated:white_nameplate', 'simulated:orange_nameplate', 'simulated:magenta_nameplate', 'simulated:light_blue_nameplate', 'simulated:yellow_nameplate', 'simulated:lime_nameplate', 'simulated:pink_nameplate', 'simulated:gray_nameplate', 'simulated:light_gray_nameplate', 'simulated:cyan_nameplate', 'simulated:purple_nameplate', 'simulated:blue_nameplate', 'simulated:brown_nameplate', 'simulated:green_nameplate', 'simulated:red_nameplate', 'simulated:black_nameplate']
    );
    add("moddedulo", "hot_air_envelopes", "group",
        ['aeronautics:white_envelope', 'aeronautics:orange_envelope', 'aeronautics:magenta_envelope', 'aeronautics:light_blue_envelope', 'aeronautics:yellow_envelope', 'aeronautics:lime_envelope', 'aeronautics:pink_envelope', 'aeronautics:gray_envelope', 'aeronautics:light_gray_envelope', 'aeronautics:cyan_envelope', 'aeronautics:purple_envelope', 'aeronautics:blue_envelope', 'aeronautics:brown_envelope', 'aeronautics:green_envelope', 'aeronautics:red_envelope', 'aeronautics:black_envelope']
    );
    add("moddedulo", "bundles", "group",
        ['minecraft:bundle', 'minecraft:white_bundle', 'minecraft:light_gray_bundle', 'minecraft:gray_bundle', 'minecraft:black_bundle', 'minecraft:brown_bundle', 'minecraft:red_bundle', 'minecraft:orange_bundle', 'minecraft:yellow_bundle', 'minecraft:lime_bundle', 'minecraft:green_bundle', 'minecraft:cyan_bundle', 'minecraft:light_blue_bundle', 'minecraft:blue_bundle', 'minecraft:purple_bundle', 'minecraft:magenta_bundle', 'minecraft:pink_bundle']
    );
    add("moddedulo", "conductor_caps", "group",
        ['railways:white_conductor_cap', 'railways:orange_conductor_cap', 'railways:magenta_conductor_cap', 'railways:light_blue_conductor_cap', 'railways:yellow_conductor_cap', 'railways:lime_conductor_cap', 'railways:pink_conductor_cap', 'railways:gray_conductor_cap', 'railways:light_gray_conductor_cap', 'railways:cyan_conductor_cap', 'railways:purple_conductor_cap', 'railways:blue_conductor_cap', 'railways:brown_conductor_cap', 'railways:green_conductor_cap', 'railways:red_conductor_cap', 'railways:black_conductor_cap']
    );
    add("moddedulo", "postboxes", "group",
        ['create:white_postbox', 'create:orange_postbox', 'create:magenta_postbox', 'create:light_blue_postbox', 'create:yellow_postbox', 'create:lime_postbox', 'create:pink_postbox', 'create:gray_postbox', 'create:light_gray_postbox', 'create:cyan_postbox', 'create:purple_postbox', 'create:blue_postbox', 'create:brown_postbox', 'create:green_postbox', 'create:red_postbox', 'create:black_postbox']
    );
    add("moddedulo", "seats", "group",
        ['create:white_seat', 'create:orange_seat', 'create:magenta_seat', 'create:light_blue_seat', 'create:yellow_seat', 'create:pink_seat', 'create:gray_seat', 'create:light_gray_seat', 'create:cyan_seat', 'create:purple_seat', 'create:blue_seat', 'create:brown_seat', 'create:green_seat', 'create:red_seat', 'create:black_seat', 'create:lime_seat']
    );
    add("moddedulo", "toolboxes", "group",
        ['create:white_toolbox', 'create:orange_toolbox', 'create:light_blue_toolbox', 'create:magenta_toolbox', 'create:yellow_toolbox', 'create:lime_toolbox', 'create:pink_toolbox', 'create:gray_toolbox', 'create:light_gray_toolbox', 'create:cyan_toolbox', 'create:blue_toolbox', 'create:brown_toolbox', 'create:green_toolbox', 'create:red_toolbox', 'create:black_toolbox', 'create:purple_toolbox']
    );
    add("moddedulo", "flywheels", "group",
        ['railways:white_locometal_flywheel', 'railways:locometal_flywheel', 'railways:brown_locometal_flywheel', 'railways:maroon_locometal_flywheel', 'railways:red_locometal_flywheel', 'railways:vermilion_locometal_flywheel', 'railways:orange_locometal_flywheel', 'railways:granite_locometal_flywheel', 'railways:dripstone_locometal_flywheel', 'railways:ochrum_locometal_flywheel', 'railways:yellow_locometal_flywheel', 'railways:chartreuse_locometal_flywheel', 'railways:olive_green_locometal_flywheel', 'railways:lime_locometal_flywheel', 'railways:green_locometal_flywheel', 'railways:pine_green_locometal_flywheel', 'railways:cyan_locometal_flywheel', 'railways:sea_green_locometal_flywheel', 'railways:turquoise_locometal_flywheel', 'railways:light_blue_locometal_flywheel', 'railways:blue_locometal_flywheel', 'railways:royal_blue_locometal_flywheel', 'railways:purple_locometal_flywheel', 'railways:magenta_locometal_flywheel', 'railways:pink_locometal_flywheel', 'railways:diorite_locometal_flywheel', 'railways:limestone_locometal_flywheel', 'railways:light_gray_locometal_flywheel', 'railways:tuff_locometal_flywheel', 'railways:gray_locometal_flywheel', 'railways:scorchia_locometal_flywheel', 'railways:black_locometal_flywheel', 'dndecor:white_flywheel', 'dndecor:orange_flywheel', 'dndecor:magenta_flywheel', 'dndecor:light_blue_flywheel', 'dndecor:yellow_flywheel', 'dndecor:lime_flywheel', 'dndecor:pink_flywheel', 'dndecor:gray_flywheel', 'dndecor:light_gray_flywheel', 'dndecor:cyan_flywheel', 'dndecor:purple_flywheel', 'dndecor:blue_flywheel', 'dndecor:brown_flywheel', 'dndecor:green_flywheel', 'dndecor:red_flywheel', 'dndecor:black_flywheel', 'create:flywheel']    
    );
    add("moddedulo", "valve_handles", "group",
        ['create:copper_valve_handle', 'create:white_valve_handle', 'create:orange_valve_handle', 'create:magenta_valve_handle', 'create:light_blue_valve_handle', 'create:yellow_valve_handle', 'create:lime_valve_handle', 'create:pink_valve_handle', 'create:gray_valve_handle', 'create:light_gray_valve_handle', 'create:cyan_valve_handle', 'create:purple_valve_handle', 'create:blue_valve_handle', 'create:brown_valve_handle', 'create:green_valve_handle', 'create:red_valve_handle', 'create:black_valve_handle']
    );
    add("moddedulo", "table_cloths", "group",
        ['create:white_table_cloth', 'create:orange_table_cloth', 'create:magenta_table_cloth', 'create:light_blue_table_cloth', 'create:yellow_table_cloth', 'create:lime_table_cloth', 'create:pink_table_cloth', 'create:gray_table_cloth', 'create:light_gray_table_cloth', 'create:cyan_table_cloth', 'create:purple_table_cloth', 'create:blue_table_cloth', 'create:brown_table_cloth', 'create:green_table_cloth', 'create:red_table_cloth', 'create:black_table_cloth']
    );
    add("moddedulo", "velvet_blocks", "group",
        ['dndecor:white_velvet_block', 'dndecor:orange_velvet_block', 'dndecor:magenta_velvet_block', 'dndecor:light_blue_velvet_block', 'dndecor:yellow_velvet_block', 'dndecor:lime_velvet_block', 'dndecor:pink_velvet_block', 'dndecor:gray_velvet_block', 'dndecor:light_gray_velvet_block', 'dndecor:cyan_velvet_block', 'dndecor:purple_velvet_block', 'dndecor:blue_velvet_block', 'dndecor:brown_velvet_block', 'dndecor:green_velvet_block', 'dndecor:red_velvet_block', 'dndecor:black_velvet_block']
    );
    add("moddedulo", "crushing_wheels", "group",
        ['create:crushing_wheel', 'dndecor:stone_crushing_wheel', 'dndecor:packed_mud_crushing_wheel', 'dndecor:amethyst_crushing_wheel', 'dndecor:netherrack_crushing_wheel', 'dndecor:basalt_crushing_wheel', 'dndecor:blackstone_crushing_wheel', 'dndecor:weathered_limestone_crushing_wheel', 'dndecor:gabbro_crushing_wheel', 'dndecor:dolomite_crushing_wheel', 'dndecor:granite_crushing_wheel', 'dndecor:diorite_crushing_wheel', 'dndecor:calcite_crushing_wheel', 'dndecor:dripstone_crushing_wheel', 'dndecor:deepslate_crushing_wheel', 'dndecor:tuff_crushing_wheel', 'dndecor:asurine_crushing_wheel', 'dndecor:crimsite_crushing_wheel', 'dndecor:limestone_crushing_wheel', 'dndecor:ochrum_crushing_wheel', 'dndecor:scoria_crushing_wheel', 'dndecor:scorchia_crushing_wheel', 'dndecor:veridium_crushing_wheel']
    );
    add("moddedulo", "millstones", "group",
        ['create:millstone', 'dndecor:stone_millstone', 'dndecor:packed_mud_millstone', 'dndecor:amethyst_millstone', 'dndecor:netherrack_millstone', 'dndecor:basalt_millstone', 'dndecor:blackstone_millstone', 'dndecor:weathered_limestone_millstone', 'dndecor:gabbro_millstone', 'dndecor:dolomite_millstone', 'dndecor:granite_millstone', 'dndecor:diorite_millstone', 'dndecor:calcite_millstone', 'dndecor:dripstone_millstone', 'dndecor:deepslate_millstone', 'dndecor:tuff_millstone', 'dndecor:asurine_millstone', 'dndecor:crimsite_millstone', 'dndecor:limestone_millstone', 'dndecor:ochrum_millstone', 'dndecor:scoria_millstone', 'dndecor:scorchia_millstone', 'dndecor:veridium_millstone']
    );
    add("moddedulo", "containers", "group",
        ['dndecor:container', 'dndecor:white_container', 'dndecor:orange_container', 'dndecor:magenta_container', 'dndecor:light_blue_container', 'dndecor:yellow_container', 'dndecor:lime_container', 'dndecor:pink_container', 'dndecor:gray_container', 'dndecor:light_gray_container', 'dndecor:cyan_container', 'dndecor:purple_container', 'dndecor:blue_container', 'dndecor:brown_container', 'dndecor:green_container', 'dndecor:red_container', 'dndecor:black_container', 'dndecor:solid_white_container', 'dndecor:solid_orange_container', 'dndecor:solid_magenta_container', 'dndecor:solid_light_blue_container', 'dndecor:solid_yellow_container', 'dndecor:solid_lime_container', 'dndecor:solid_pink_container', 'dndecor:solid_gray_container', 'dndecor:solid_light_gray_container', 'dndecor:solid_cyan_container', 'dndecor:solid_purple_container', 'dndecor:solid_blue_container', 'dndecor:solid_brown_container', 'dndecor:solid_green_container', 'dndecor:solid_red_container', 'dndecor:solid_black_container']
    );
    add("moddedulo", "dark_metal_blocks", "group",
        ['dndecor:dark_metal_block', 'dndecor:white_dark_metal_block', 'dndecor:orange_dark_metal_block', 'dndecor:magenta_dark_metal_block', 'dndecor:light_blue_dark_metal_block', 'dndecor:yellow_dark_metal_block', 'dndecor:lime_dark_metal_block', 'dndecor:pink_dark_metal_block', 'dndecor:gray_dark_metal_block', 'dndecor:light_gray_dark_metal_block', 'dndecor:cyan_dark_metal_block', 'dndecor:purple_dark_metal_block', 'dndecor:blue_dark_metal_block', 'dndecor:brown_dark_metal_block', 'dndecor:green_dark_metal_block', 'dndecor:red_dark_metal_block', 'dndecor:black_dark_metal_block']
    );
    add("moddedulo", "dark_metal_plating", "group",
        ['dndecor:dark_metal_plating', 'dndecor:white_dark_metal_plating', 'dndecor:orange_dark_metal_plating', 'dndecor:magenta_dark_metal_plating', 'dndecor:light_blue_dark_metal_plating', 'dndecor:yellow_dark_metal_plating', 'dndecor:lime_dark_metal_plating', 'dndecor:pink_dark_metal_plating', 'dndecor:gray_dark_metal_plating', 'dndecor:light_gray_dark_metal_plating', 'dndecor:cyan_dark_metal_plating', 'dndecor:purple_dark_metal_plating', 'dndecor:blue_dark_metal_plating', 'dndecor:brown_dark_metal_plating', 'dndecor:green_dark_metal_plating', 'dndecor:red_dark_metal_plating', 'dndecor:black_dark_metal_plating']
    );
    add("moddedulo", "small_deepslate_tiles", "group",
        ['dndecor:black_small_deepslate_tiles', 'dndecor:red_small_deepslate_tiles', 'dndecor:green_small_deepslate_tiles', 'dndecor:brown_small_deepslate_tiles', 'dndecor:blue_small_deepslate_tiles', 'dndecor:purple_small_deepslate_tiles', 'dndecor:cyan_small_deepslate_tiles', 'dndecor:light_gray_small_deepslate_tiles', 'dndecor:gray_small_deepslate_tiles', 'dndecor:pink_small_deepslate_tiles', 'dndecor:lime_small_deepslate_tiles', 'dndecor:yellow_small_deepslate_tiles', 'dndecor:light_blue_small_deepslate_tiles', 'dndecor:magenta_small_deepslate_tiles', 'dndecor:orange_small_deepslate_tiles', 'dndecor:white_small_deepslate_tiles', 'dndecor:small_deepslate_tiles']
    );
    add("moddedulo", "large_metal_girders", "group",
        ['dndecor:large_metal_girder', 'dndecor:white_large_metal_girder', 'dndecor:orange_large_metal_girder', 'dndecor:magenta_large_metal_girder', 'dndecor:light_blue_large_metal_girder', 'dndecor:yellow_large_metal_girder', 'dndecor:lime_large_metal_girder', 'dndecor:pink_large_metal_girder', 'dndecor:gray_large_metal_girder', 'dndecor:light_gray_large_metal_girder', 'dndecor:cyan_large_metal_girder', 'dndecor:purple_large_metal_girder', 'dndecor:blue_large_metal_girder', 'dndecor:brown_large_metal_girder', 'dndecor:green_large_metal_girder', 'dndecor:red_large_metal_girder', 'dndecor:black_large_metal_girder']
    );
    add("moddedulo", "sheet_metal_blocks", "group",
        ['dndecor:brass_sheet_metal', 'dndecor:andesite_sheet_metal', 'dndecor:zinc_sheet_metal', 'dndecor:copper_sheet_metal', 'dndecor:industrial_sheet_metal', 'dndecor:gold_sheet_metal', 'dndecor:iron_sheet_metal', 'dndecor:netherite_sheet_metal', 'dndecor:white_sheet_metal', 'dndecor:orange_sheet_metal', 'dndecor:magenta_sheet_metal', 'dndecor:light_blue_sheet_metal', 'dndecor:yellow_sheet_metal', 'dndecor:lime_sheet_metal', 'dndecor:pink_sheet_metal', 'dndecor:gray_sheet_metal', 'dndecor:light_gray_sheet_metal', 'dndecor:cyan_sheet_metal', 'dndecor:purple_sheet_metal', 'dndecor:blue_sheet_metal', 'dndecor:brown_sheet_metal', 'dndecor:green_sheet_metal', 'dndecor:red_sheet_metal', 'dndecor:black_sheet_metal']
    );
    add("moddedulo", "stone_metal_blocks", "group",
        ['dndecor:stone_metal', 'dndecor:white_stone_metal', 'dndecor:orange_stone_metal', 'dndecor:magenta_stone_metal', 'dndecor:light_blue_stone_metal', 'dndecor:yellow_stone_metal', 'dndecor:lime_stone_metal', 'dndecor:pink_stone_metal', 'dndecor:gray_stone_metal', 'dndecor:light_gray_stone_metal', 'dndecor:cyan_stone_metal', 'dndecor:purple_stone_metal', 'dndecor:blue_stone_metal', 'dndecor:brown_stone_metal', 'dndecor:green_stone_metal', 'dndecor:red_stone_metal', 'dndecor:black_stone_metal']
    );
    add("moddedulo", "display_boards", "group",
        ['create:display_board', 'dndecor:white_display_board', 'dndecor:orange_display_board', 'dndecor:magenta_display_board', 'dndecor:light_blue_display_board', 'dndecor:yellow_display_board', 'dndecor:lime_display_board', 'dndecor:pink_display_board', 'dndecor:gray_display_board', 'dndecor:light_gray_display_board', 'dndecor:cyan_display_board', 'dndecor:purple_display_board', 'dndecor:blue_display_board', 'dndecor:brown_display_board', 'dndecor:green_display_board', 'dndecor:red_display_board', 'dndecor:black_display_board']
    );
    add("moddedulo", "large_fans", "group",
        ['dndecor:large_fan', 'dndecor:white_large_fan', 'dndecor:orange_large_fan', 'dndecor:magenta_large_fan', 'dndecor:light_blue_large_fan', 'dndecor:yellow_large_fan', 'dndecor:lime_large_fan', 'dndecor:pink_large_fan', 'dndecor:gray_large_fan', 'dndecor:light_gray_large_fan', 'dndecor:cyan_large_fan', 'dndecor:purple_large_fan', 'dndecor:blue_large_fan', 'dndecor:brown_large_fan', 'dndecor:green_large_fan', 'dndecor:red_large_fan', 'dndecor:black_large_fan']
    );
    add("moddedulo", "metal_lamps", "group",
        ['dndecor:brass_lamp', 'dndecor:andesite_lamp', 'dndecor:zinc_lamp', 'dndecor:copper_lamp', 'dndecor:industrial_lamp', 'dndecor:gold_lamp', 'dndecor:iron_lamp', 'dndecor:netherite_lamp']
    );
    add("moddedulo", "boilers", "group",
        ['dndecor:brass_boiler', 'dndecor:andesite_boiler', 'dndecor:zinc_boiler', 'dndecor:copper_boiler', 'dndecor:industrial_boiler', 'dndecor:gold_boiler', 'dndecor:iron_boiler', 'dndecor:netherite_boiler']
    );
    add("moddedulo", "catwalks", "group",
        ['dndecor:brass_catwalk', 'dndecor:andesite_catwalk', 'dndecor:zinc_catwalk', 'dndecor:copper_catwalk', 'dndecor:industrial_catwalk', 'dndecor:gold_catwalk', 'dndecor:iron_catwalk', 'dndecor:netherite_catwalk']
    );
    add("moddedulo", "bolts", "group",
        ['dndecor:brass_cross_bolt', 'dndecor:brass_dash_bolt', 'dndecor:brass_dot_bolt', 'dndecor:brass_flat_bolt', 'dndecor:andesite_cross_bolt', 'dndecor:andesite_dash_bolt', 'dndecor:andesite_dot_bolt', 'dndecor:andesite_flat_bolt', 'dndecor:zinc_cross_bolt', 'dndecor:zinc_dash_bolt', 'dndecor:zinc_dot_bolt', 'dndecor:zinc_flat_bolt', 'dndecor:copper_cross_bolt', 'dndecor:copper_dash_bolt', 'dndecor:copper_dot_bolt', 'dndecor:copper_flat_bolt', 'dndecor:industrial_cross_bolt', 'dndecor:industrial_dash_bolt', 'dndecor:industrial_dot_bolt', 'dndecor:industrial_flat_bolt', 'dndecor:gold_cross_bolt', 'dndecor:gold_dash_bolt', 'dndecor:gold_dot_bolt', 'dndecor:gold_flat_bolt', 'dndecor:iron_cross_bolt', 'dndecor:iron_dash_bolt', 'dndecor:iron_dot_bolt', 'dndecor:iron_flat_bolt', 'dndecor:netherite_cross_bolt', 'dndecor:netherite_dash_bolt', 'dndecor:netherite_dot_bolt', 'dndecor:netherite_flat_bolt']
    );
    add("moddedulo", "large_chains", "group",
        ['dndecor:large_brass_chain', 'dndecor:large_andesite_chain', 'dndecor:large_zinc_chain', 'dndecor:large_copper_chain', 'dndecor:large_industrial_chain', 'dndecor:large_gold_chain', 'dndecor:large_iron_chain', 'dndecor:large_netherite_chain']
    );
    add("moddedulo", "dark_metal_cogwheels", "group",
        ['dndecor:dark_metal_cogwheel', 'dndecor:large_dark_metal_cogwheel', 'dndecor:white_large_cogwheel', 'dndecor:orange_large_cogwheel', 'dndecor:magenta_large_cogwheel', 'dndecor:light_blue_large_cogwheel', 'dndecor:yellow_large_cogwheel', 'dndecor:lime_large_cogwheel', 'dndecor:pink_large_cogwheel', 'dndecor:gray_large_cogwheel', 'dndecor:light_gray_large_cogwheel', 'dndecor:cyan_large_cogwheel', 'dndecor:purple_large_cogwheel', 'dndecor:blue_large_cogwheel', 'dndecor:brown_large_cogwheel', 'dndecor:green_large_cogwheel', 'dndecor:red_large_cogwheel', 'dndecor:black_large_cogwheel', 'dndecor:white_cogwheel', 'dndecor:orange_cogwheel', 'dndecor:magenta_cogwheel', 'dndecor:light_blue_cogwheel', 'dndecor:yellow_cogwheel', 'dndecor:lime_cogwheel', 'dndecor:pink_cogwheel', 'dndecor:gray_cogwheel', 'dndecor:light_gray_cogwheel', 'dndecor:cyan_cogwheel', 'dndecor:purple_cogwheel', 'dndecor:blue_cogwheel', 'dndecor:brown_cogwheel', 'dndecor:green_cogwheel', 'dndecor:red_cogwheel', 'dndecor:black_cogwheel']
    );
    add("moddedulo", "industrial_cogwheels", "group",
        ['dndecor:industrial_cogwheel', 'dndecor:large_industrial_cogwheel', 'dndecor:white_industrial_cogwheel', 'dndecor:orange_industrial_cogwheel', 'dndecor:magenta_industrial_cogwheel', 'dndecor:light_blue_industrial_cogwheel', 'dndecor:yellow_industrial_cogwheel', 'dndecor:lime_industrial_cogwheel', 'dndecor:pink_industrial_cogwheel', 'dndecor:gray_industrial_cogwheel', 'dndecor:light_gray_industrial_cogwheel', 'dndecor:cyan_industrial_cogwheel', 'dndecor:purple_industrial_cogwheel', 'dndecor:blue_industrial_cogwheel', 'dndecor:brown_industrial_cogwheel', 'dndecor:green_industrial_cogwheel', 'dndecor:red_industrial_cogwheel', 'dndecor:black_industrial_cogwheel', 'dndecor:white_large_industrial_cogwheel', 'dndecor:orange_large_industrial_cogwheel', 'dndecor:magenta_large_industrial_cogwheel', 'dndecor:light_blue_large_industrial_cogwheel', 'dndecor:yellow_large_industrial_cogwheel', 'dndecor:lime_large_industrial_cogwheel', 'dndecor:pink_large_industrial_cogwheel', 'dndecor:gray_large_industrial_cogwheel', 'dndecor:light_gray_large_industrial_cogwheel', 'dndecor:cyan_large_industrial_cogwheel', 'dndecor:purple_large_industrial_cogwheel', 'dndecor:blue_large_industrial_cogwheel', 'dndecor:brown_large_industrial_cogwheel', 'dndecor:green_large_industrial_cogwheel', 'dndecor:red_large_industrial_cogwheel', 'dndecor:black_large_industrial_cogwheel']
    );
    add("moddedulo", "helmets", "group",
        ['minecraft:leather_helmet', 'minecraft:chainmail_helmet', 'minecraft:copper_helmet', 'minecraft:iron_helmet', 'minecraft:golden_helmet', 'minecraft:diamond_helmet', 'minecraft:netherite_helmet', 'minecraft:turtle_helmet', 'create:copper_diving_helmet', 'create:netherite_diving_helmet', 'create:cardboard_helmet']
    );
    add("moddedulo", "chestplates", "group",
        ['minecraft:leather_chestplate', 'minecraft:chainmail_chestplate', 'minecraft:copper_chestplate', 'minecraft:iron_chestplate', 'minecraft:golden_chestplate', 'minecraft:diamond_chestplate', 'minecraft:netherite_chestplate', 'create:cardboard_chestplate']
    );
    add("moddedulo", "leggings", "group",
        ['minecraft:leather_leggings', 'minecraft:chainmail_leggings', 'minecraft:copper_leggings', 'minecraft:iron_leggings', 'minecraft:golden_leggings', 'minecraft:diamond_leggings', 'minecraft:netherite_leggings', 'create:cardboard_leggings']
    );
    add("moddedulo", "boots", "group",
        ['minecraft:leather_boots', 'minecraft:chainmail_boots', 'minecraft:copper_boots', 'minecraft:iron_boots', 'minecraft:golden_boots', 'minecraft:diamond_boots', 'minecraft:netherite_boots', 'create:copper_diving_boots', 'create:netherite_diving_boots', 'create:cardboard_boots']
    );
    add("moddedulo", "supports", "group",
        ['createdeco:andesite_support', 'createdeco:brass_support', 'createdeco:iron_support', 'createdeco:copper_support', 'createdeco:industrial_iron_support', 'createdeco:zinc_support']
    );
    add("moddedulo", "catwalk_stairs", "group",
        ['createdeco:andesite_catwalk_stairs', 'createdeco:brass_catwalk_stairs', 'createdeco:iron_catwalk_stairs', 'createdeco:copper_catwalk_stairs', 'createdeco:industrial_iron_catwalk_stairs', 'createdeco:zinc_catwalk_stairs']
    );
    add("moddedulo", "support_wedges", "group",
        ['createdeco:andesite_support_wedge', 'createdeco:brass_support_wedge', 'createdeco:iron_support_wedge', 'createdeco:copper_support_wedge', 'createdeco:industrial_iron_support_wedge', 'createdeco:zinc_support_wedge']
    );
    add("moddedulo", "catwalk_railings", "group",
        ['createdeco:andesite_catwalk_railing', 'createdeco:brass_catwalk_railing', 'createdeco:iron_catwalk_railing', 'createdeco:copper_catwalk_railing', 'createdeco:industrial_iron_catwalk_railing', 'createdeco:zinc_catwalk_railing']
    );
    add("moddedulo", "coins", "group",
        ['createdeco:gold_coin', 'createdeco:gold_coinstack', 'createdeco:netherite_coin', 'createdeco:netherite_coinstack', 'createdeco:brass_coin', 'createdeco:brass_coinstack', 'createdeco:iron_coin', 'createdeco:iron_coinstack', 'createdeco:copper_coin', 'createdeco:copper_coinstack', 'createdeco:industrial_iron_coin', 'createdeco:industrial_iron_coinstack', 'createdeco:zinc_coin', 'createdeco:zinc_coinstack']
    );
    add("moddedulo", "cardboard_blocks", "group",
        ['createframed:red_cardboard_block', 'createframed:orange_cardboard_block', 'createframed:yellow_cardboard_block', 'createframed:green_cardboard_block', 'createframed:lime_cardboard_block', 'createframed:blue_cardboard_block', 'createframed:light_blue_cardboard_block', 'createframed:cyan_cardboard_block', 'createframed:purple_cardboard_block', 'createframed:magenta_cardboard_block', 'createframed:pink_cardboard_block', 'createframed:black_cardboard_block', 'createframed:gray_cardboard_block', 'createframed:light_gray_cardboard_block', 'createframed:white_cardboard_block', 'createframed:brown_cardboard_block', 'create:cardboard_block']
    );
    add("moddedulo", "bound_cardboard_blocks", "group",
        ['createframed:bound_red_cardboard_block', 'createframed:bound_orange_cardboard_block', 'createframed:bound_yellow_cardboard_block', 'createframed:bound_green_cardboard_block', 'createframed:bound_lime_cardboard_block', 'createframed:bound_blue_cardboard_block', 'createframed:bound_light_blue_cardboard_block', 'createframed:bound_cyan_cardboard_block', 'createframed:bound_purple_cardboard_block', 'createframed:bound_magenta_cardboard_block', 'createframed:bound_pink_cardboard_block', 'createframed:bound_black_cardboard_block', 'createframed:bound_gray_cardboard_block', 'createframed:bound_light_gray_cardboard_block', 'createframed:bound_white_cardboard_block', 'createframed:bound_brown_cardboard_block', 'create:bound_cardboard_block']
    );
    add("moddedulo", "cardboard_peephole_panes", "group",
        ['createframed:cardboard_window_pane', 'createframed:red_cardboard_window_pane', 'createframed:orange_cardboard_window_pane', 'createframed:yellow_cardboard_window_pane', 'createframed:green_cardboard_window_pane', 'createframed:lime_cardboard_window_pane', 'createframed:blue_cardboard_window_pane', 'createframed:light_blue_cardboard_window_pane', 'createframed:cyan_cardboard_window_pane', 'createframed:purple_cardboard_window_pane', 'createframed:magenta_cardboard_window_pane', 'createframed:pink_cardboard_window_pane', 'createframed:black_cardboard_window_pane', 'createframed:gray_cardboard_window_pane', 'createframed:light_gray_cardboard_window_pane', 'createframed:white_cardboard_window_pane', 'createframed:brown_cardboard_window_pane']
    );
    add("moddedulo", "cardboard_peepholes", "group",
        ['createframed:cardboard_window', 'createframed:red_cardboard_window', 'createframed:orange_cardboard_window', 'createframed:yellow_cardboard_window', 'createframed:green_cardboard_window', 'createframed:lime_cardboard_window', 'createframed:blue_cardboard_window', 'createframed:light_blue_cardboard_window', 'createframed:cyan_cardboard_window', 'createframed:purple_cardboard_window', 'createframed:magenta_cardboard_window', 'createframed:pink_cardboard_window', 'createframed:black_cardboard_window', 'createframed:gray_cardboard_window', 'createframed:light_gray_cardboard_window', 'createframed:white_cardboard_window', 'createframed:brown_cardboard_window']
    );
    add("moddedulo", "rare_packages", "group",
        ['deployer:rare_liukrast_package', 'deployer:rare_swzo_package', 'createframed:axolotl_lucy_package', 'createframed:fordalels_package', 'createframed:karpboard_package', 'createframed:brown_package', 'createframed:white_package', 'createframed:light_gray_package', 'createframed:gray_package', 'createframed:black_package', 'createframed:pink_package', 'createframed:red_package', 'createframed:orange_package', 'createframed:yellow_package', 'createframed:green_package', 'createframed:lime_package', 'createframed:blue_package', 'createframed:light_blue_package', 'createframed:cyan_package', 'createframed:purple_package', 'createframed:magenta_package']
    );
    add("moddedulo", "brass_encased_machinery", "group",
        ['createcasing:brass_gearbox', 'createcasing:vertical_brass_gearbox', 'createcasing:brass_press', 'createcasing:brass_mixer', 'createcasing:brass_depot', 'createcasing:brass_encased_chain_drive', 'createcasing:brass_adjustable_chain_gearshift', 'createcasing:brass_configurable_gearbox', 'createcasing:brass_chain_conveyor', 'createcasing:brass_gearshift', 'createcasing:brass_clutch', 'createcasing:brass_automatic_clutch', 'createcasing:brass_deployer', 'createcasing:brass_portable_storage_interface', 'createcasing:brass_encased_fan', 'createcasing:brass_mechanical_harvester', 'createcasing:brass_mechanical_saw', 'createcasing:brass_mechanical_drill', 'createcasing:brass_mechanical_plough', 'createcasing:brass_mechanical_roller']
    );
    add("moddedulo", "copper_encased_machinery", "group",
        ['createcasing:copper_gearbox', 'createcasing:vertical_copper_gearbox', 'createcasing:copper_press', 'createcasing:copper_mixer', 'createcasing:copper_depot', 'createcasing:copper_encased_chain_drive', 'createcasing:copper_adjustable_chain_gearshift', 'createcasing:copper_configurable_gearbox', 'createcasing:copper_chain_conveyor', 'createcasing:copper_gearshift', 'createcasing:copper_clutch', 'createcasing:copper_automatic_clutch', 'createcasing:copper_deployer', 'createcasing:copper_portable_storage_interface', 'createcasing:copper_encased_fan', 'createcasing:copper_mechanical_harvester', 'createcasing:copper_mechanical_saw', 'createcasing:copper_mechanical_drill', 'createcasing:copper_mechanical_plough', 'createcasing:copper_mechanical_roller']
    );
    add("moddedulo", "train_encased_machinery", "group",
        ['createcasing:railway_gearbox', 'createcasing:vertical_railway_gearbox', 'createcasing:railway_press', 'createcasing:railway_mixer', 'createcasing:railway_depot', 'createcasing:railway_encased_chain_drive', 'createcasing:railway_adjustable_chain_gearshift', 'createcasing:railway_configurable_gearbox', 'createcasing:railway_chain_conveyor', 'createcasing:railway_gearshift', 'createcasing:railway_clutch', 'createcasing:railway_automatic_clutch', 'createcasing:railway_deployer', 'createcasing:railway_portable_storage_interface', 'createcasing:railway_encased_fan', 'createcasing:railway_mechanical_harvester', 'createcasing:railway_mechanical_saw', 'createcasing:railway_mechanical_drill', 'createcasing:railway_mechanical_plough', 'createcasing:railway_mechanical_roller']
    );
    add("moddedulo", "creative_encased_machinery", "group",
        ['createcasing:creative_gearbox', 'createcasing:vertical_creative_gearbox', 'createcasing:creative_press', 'createcasing:creative_mixer', 'createcasing:creative_depot', 'createcasing:creative_encased_chain_drive', 'createcasing:creative_adjustable_chain_gearshift', 'createcasing:creative_configurable_gearbox', 'createcasing:creative_chain_conveyor', 'createcasing:creative_gearshift', 'createcasing:creative_clutch', 'createcasing:creative_automatic_clutch', 'createcasing:creative_deployer', 'createcasing:creative_portable_storage_interface', 'createcasing:creative_encased_fan', 'createcasing:creative_mechanical_harvester', 'createcasing:creative_mechanical_saw', 'createcasing:creative_mechanical_drill', 'createcasing:creative_mechanical_plough', 'createcasing:creative_mechanical_roller']
    );
    add("moddedulo", "industrial_iron_encased_machinery", "group",
        ['createcasing:industrial_iron_gearbox', 'createcasing:vertical_industrial_iron_gearbox', 'createcasing:industrial_iron_press', 'createcasing:industrial_iron_mixer', 'createcasing:industrial_iron_depot', 'createcasing:industrial_iron_encased_chain_drive', 'createcasing:industrial_iron_adjustable_chain_gearshift', 'createcasing:industrial_iron_configurable_gearbox', 'createcasing:industrial_iron_chain_conveyor', 'createcasing:industrial_iron_gearshift', 'createcasing:industrial_iron_clutch', 'createcasing:industrial_iron_automatic_clutch', 'createcasing:industrial_iron_deployer', 'createcasing:industrial_iron_portable_storage_interface', 'createcasing:industrial_iron_encased_fan', 'createcasing:industrial_iron_mechanical_harvester', 'createcasing:industrial_iron_mechanical_saw', 'createcasing:industrial_iron_mechanical_drill', 'createcasing:industrial_iron_mechanical_plough', 'createcasing:industrial_iron_mechanical_roller']
    );
    add("moddedulo", "weathered_iron_encased_machinery", "group",
        ['createcasing:weathered_iron_gearbox', 'createcasing:vertical_weathered_iron_gearbox', 'createcasing:weathered_iron_press', 'createcasing:weathered_iron_mixer', 'createcasing:weathered_iron_depot', 'createcasing:weathered_iron_encased_chain_drive', 'createcasing:weathered_iron_adjustable_chain_gearshift', 'createcasing:weathered_iron_configurable_gearbox', 'createcasing:weathered_iron_chain_conveyor', 'createcasing:weathered_iron_gearshift', 'createcasing:weathered_iron_clutch', 'createcasing:weathered_iron_automatic_clutch', 'createcasing:weathered_iron_deployer', 'createcasing:weathered_iron_portable_storage_interface', 'createcasing:weathered_iron_encased_fan', 'createcasing:weathered_iron_mechanical_harvester', 'createcasing:weathered_iron_mechanical_saw', 'createcasing:weathered_iron_mechanical_drill', 'createcasing:weathered_iron_mechanical_plough', 'createcasing:weathered_iron_mechanical_roller']
    );
    add("moddedulo", "metal_cogwheels", "group",
        ['createcasing:andesite_cogwheel', 'createcasing:andesite_large_cogwheel', 'createcasing:brass_cogwheel', 'createcasing:brass_large_cogwheel', 'createcasing:copper_cogwheel', 'createcasing:copper_large_cogwheel', 'createcasing:zinc_cogwheel', 'createcasing:zinc_large_cogwheel']
    );
    add("moddedulo", "locometal_blocks", "group",
        ['railways:locometal_vent', 'railways:wrapped_locometal_smokebox', 'railways:copper_wrapped_locometal_smokebox', 'railways:iron_wrapped_locometal_smokebox', 'railways:slashed_locometal', 'railways:riveted_locometal', 'railways:locometal_pillar', 'railways:locometal_smokebox', 'railways:plated_locometal', 'railways:flat_slashed_locometal', 'railways:flat_riveted_locometal', 'railways:brass_wrapped_locometal', 'railways:copper_wrapped_locometal', 'railways:iron_wrapped_locometal']
    );
    add("moddedulo", "locometal_boilers", "group",
        ['railways:locometal_boiler', 'railways:brass_wrapped_locometal_boiler', 'railways:copper_wrapped_locometal_boiler', 'railways:iron_wrapped_locometal_boiler']
    );
    add("moddedulo", "white_locometal_blocks", "group",
        ['railways:white_locometal_vent', 'railways:white_wrapped_locometal_smokebox', 'railways:white_copper_wrapped_locometal_smokebox', 'railways:white_iron_wrapped_locometal_smokebox', 'railways:white_slashed_locometal', 'railways:white_riveted_locometal', 'railways:white_locometal_pillar', 'railways:white_locometal_smokebox', 'railways:white_plated_locometal', 'railways:white_flat_slashed_locometal', 'railways:white_flat_riveted_locometal', 'railways:white_brass_wrapped_locometal', 'railways:white_copper_wrapped_locometal', 'railways:white_iron_wrapped_locometal']
    );
    add("moddedulo", "white_locometal_boilers", "group",
        ['railways:white_locometal_boiler', 'railways:white_brass_wrapped_locometal_boiler', 'railways:white_copper_wrapped_locometal_boiler', 'railways:white_iron_wrapped_locometal_boiler']
    );
    add("moddedulo", "light_gray_locometal_blocks", "group",
        ['railways:light_gray_locometal_vent', 'railways:light_gray_wrapped_locometal_smokebox', 'railways:light_gray_copper_wrapped_locometal_smokebox', 'railways:light_gray_iron_wrapped_locometal_smokebox', 'railways:light_gray_slashed_locometal', 'railways:light_gray_riveted_locometal', 'railways:light_gray_locometal_pillar', 'railways:light_gray_locometal_smokebox', 'railways:light_gray_plated_locometal', 'railways:light_gray_flat_slashed_locometal', 'railways:light_gray_flat_riveted_locometal', 'railways:light_gray_brass_wrapped_locometal', 'railways:light_gray_copper_wrapped_locometal', 'railways:light_gray_iron_wrapped_locometal']
    );
    add("moddedulo", "light_gray_locometal_boilers", "group",
        ['railways:light_gray_locometal_boiler', 'railways:light_gray_brass_wrapped_locometal_boiler', 'railways:light_gray_copper_wrapped_locometal_boiler', 'railways:light_gray_iron_wrapped_locometal_boiler']
    );
    add("moddedulo", "gray_locometal_blocks", "group",
        ['railways:gray_locometal_vent', 'railways:gray_wrapped_locometal_smokebox', 'railways:gray_copper_wrapped_locometal_smokebox', 'railways:gray_iron_wrapped_locometal_smokebox', 'railways:gray_slashed_locometal', 'railways:gray_riveted_locometal', 'railways:gray_locometal_pillar', 'railways:gray_locometal_smokebox', 'railways:gray_plated_locometal', 'railways:gray_flat_slashed_locometal', 'railways:gray_flat_riveted_locometal', 'railways:gray_brass_wrapped_locometal', 'railways:gray_copper_wrapped_locometal', 'railways:gray_iron_wrapped_locometal']
    );
    add("moddedulo", "gray_locometal_boilers", "group",
        ['railways:gray_locometal_boiler', 'railways:gray_brass_wrapped_locometal_boiler', 'railways:gray_copper_wrapped_locometal_boiler', 'railways:gray_iron_wrapped_locometal_boiler']
    );
    add("moddedulo", "black_locometal_blocks", "group",
        ['railways:black_locometal_vent', 'railways:black_wrapped_locometal_smokebox', 'railways:black_copper_wrapped_locometal_smokebox', 'railways:black_iron_wrapped_locometal_smokebox', 'railways:black_slashed_locometal', 'railways:black_riveted_locometal', 'railways:black_locometal_pillar', 'railways:black_locometal_smokebox', 'railways:black_plated_locometal', 'railways:black_flat_slashed_locometal', 'railways:black_flat_riveted_locometal', 'railways:black_brass_wrapped_locometal', 'railways:black_copper_wrapped_locometal', 'railways:black_iron_wrapped_locometal']
    );
    add("moddedulo", "black_locometal_boilers", "group",
        ['railways:black_locometal_boiler', 'railways:black_brass_wrapped_locometal_boiler', 'railways:black_copper_wrapped_locometal_boiler', 'railways:black_iron_wrapped_locometal_boiler']
    );
    add("moddedulo", "brown_locometal_blocks", "group",
        ['railways:brown_locometal_vent', 'railways:brown_wrapped_locometal_smokebox', 'railways:brown_copper_wrapped_locometal_smokebox', 'railways:brown_iron_wrapped_locometal_smokebox', 'railways:brown_slashed_locometal', 'railways:brown_riveted_locometal', 'railways:brown_locometal_pillar', 'railways:brown_locometal_smokebox', 'railways:brown_plated_locometal', 'railways:brown_flat_slashed_locometal', 'railways:brown_flat_riveted_locometal', 'railways:brown_brass_wrapped_locometal', 'railways:brown_copper_wrapped_locometal', 'railways:brown_iron_wrapped_locometal']
    );
    add("moddedulo", "brown_locometal_boilers", "group",
        ['railways:brown_brass_wrapped_locometal_boiler', 'railways:brown_copper_wrapped_locometal_boiler', 'railways:brown_iron_wrapped_locometal_boiler', 'railways:brown_locometal_boiler']
    );
    add("moddedulo", "red_locometal_blocks", "group",
        ['railways:red_locometal_vent', 'railways:red_wrapped_locometal_smokebox', 'railways:red_copper_wrapped_locometal_smokebox', 'railways:red_iron_wrapped_locometal_smokebox', 'railways:red_slashed_locometal', 'railways:red_riveted_locometal', 'railways:red_locometal_pillar', 'railways:red_locometal_smokebox', 'railways:red_plated_locometal', 'railways:red_flat_slashed_locometal', 'railways:red_flat_riveted_locometal', 'railways:red_brass_wrapped_locometal', 'railways:red_copper_wrapped_locometal', 'railways:red_iron_wrapped_locometal']
    );
    add("moddedulo", "red_locometal_boilers", "group",
        ['railways:red_locometal_boiler', 'railways:red_brass_wrapped_locometal_boiler', 'railways:red_copper_wrapped_locometal_boiler', 'railways:red_iron_wrapped_locometal_boiler']
    );
    add("moddedulo", "orange_locometal_blocks", "group",
        ['railways:orange_locometal_vent', 'railways:orange_wrapped_locometal_smokebox', 'railways:orange_copper_wrapped_locometal_smokebox', 'railways:orange_iron_wrapped_locometal_smokebox', 'railways:orange_slashed_locometal', 'railways:orange_riveted_locometal', 'railways:orange_locometal_pillar', 'railways:orange_locometal_smokebox', 'railways:orange_plated_locometal', 'railways:orange_flat_slashed_locometal', 'railways:orange_flat_riveted_locometal', 'railways:orange_brass_wrapped_locometal', 'railways:orange_copper_wrapped_locometal', 'railways:orange_iron_wrapped_locometal']
    );
    add("moddedulo", "orange_locometal_boilers", "group",
        ['railways:orange_locometal_boiler', 'railways:orange_brass_wrapped_locometal_boiler', 'railways:orange_copper_wrapped_locometal_boiler', 'railways:orange_iron_wrapped_locometal_boiler']
    );
    add("moddedulo", "yellow_locometal_blocks", "group",
        ['railways:yellow_locometal_vent', 'railways:yellow_wrapped_locometal_smokebox', 'railways:yellow_copper_wrapped_locometal_smokebox', 'railways:yellow_iron_wrapped_locometal_smokebox', 'railways:yellow_slashed_locometal', 'railways:yellow_riveted_locometal', 'railways:yellow_locometal_pillar', 'railways:yellow_locometal_smokebox', 'railways:yellow_plated_locometal', 'railways:yellow_flat_slashed_locometal', 'railways:yellow_flat_riveted_locometal', 'railways:yellow_brass_wrapped_locometal', 'railways:yellow_copper_wrapped_locometal', 'railways:yellow_iron_wrapped_locometal']
    );
    add("moddedulo", "yellow_locometal_boilers", "group",
        ['railways:yellow_locometal_boiler', 'railways:yellow_brass_wrapped_locometal_boiler', 'railways:yellow_copper_wrapped_locometal_boiler', 'railways:yellow_iron_wrapped_locometal_boiler']
    );
    add("moddedulo", "lime_locometal_blocks", "group",
        ['railways:lime_locometal_vent', 'railways:lime_wrapped_locometal_smokebox', 'railways:lime_copper_wrapped_locometal_smokebox', 'railways:lime_iron_wrapped_locometal_smokebox', 'railways:lime_slashed_locometal', 'railways:lime_riveted_locometal', 'railways:lime_locometal_pillar', 'railways:lime_locometal_smokebox', 'railways:lime_plated_locometal', 'railways:lime_flat_slashed_locometal', 'railways:lime_flat_riveted_locometal', 'railways:lime_brass_wrapped_locometal', 'railways:lime_copper_wrapped_locometal', 'railways:lime_iron_wrapped_locometal']
    );
    add("moddedulo", "lime_locometal_boilers", "group",
        ['railways:lime_locometal_boiler', 'railways:lime_brass_wrapped_locometal_boiler', 'railways:lime_copper_wrapped_locometal_boiler', 'railways:lime_iron_wrapped_locometal_boiler']
    );
    add("moddedulo", "green_locometal_blocks", "group",
        ['railways:green_locometal_vent', 'railways:green_wrapped_locometal_smokebox', 'railways:green_copper_wrapped_locometal_smokebox', 'railways:green_iron_wrapped_locometal_smokebox', 'railways:green_slashed_locometal', 'railways:green_riveted_locometal', 'railways:green_locometal_pillar', 'railways:green_locometal_smokebox', 'railways:green_plated_locometal', 'railways:green_flat_slashed_locometal', 'railways:green_flat_riveted_locometal', 'railways:green_brass_wrapped_locometal', 'railways:green_copper_wrapped_locometal', 'railways:green_iron_wrapped_locometal']
    );
    add("moddedulo", "green_locometal_boilers", "group",
        ['railways:green_locometal_boiler', 'railways:green_brass_wrapped_locometal_boiler', 'railways:green_copper_wrapped_locometal_boiler', 'railways:green_iron_wrapped_locometal_boiler']
    );
    add("moddedulo", "cyan_locometal_blocks", "group",
        ['railways:cyan_locometal_vent', 'railways:cyan_wrapped_locometal_smokebox', 'railways:cyan_copper_wrapped_locometal_smokebox', 'railways:cyan_iron_wrapped_locometal_smokebox', 'railways:cyan_slashed_locometal', 'railways:cyan_riveted_locometal', 'railways:cyan_locometal_pillar', 'railways:cyan_locometal_smokebox', 'railways:cyan_plated_locometal', 'railways:cyan_flat_slashed_locometal', 'railways:cyan_flat_riveted_locometal', 'railways:cyan_brass_wrapped_locometal', 'railways:cyan_copper_wrapped_locometal', 'railways:cyan_iron_wrapped_locometal']
    );
    add("moddedulo", "cyan_locometal_boilers", "group",
        ['railways:cyan_locometal_boiler', 'railways:cyan_brass_wrapped_locometal_boiler', 'railways:cyan_copper_wrapped_locometal_boiler', 'railways:cyan_iron_wrapped_locometal_boiler']
    );
    add("moddedulo", "light_blue_locometal_blocks", "group",
        ['railways:light_blue_locometal_vent', 'railways:light_blue_wrapped_locometal_smokebox', 'railways:light_blue_copper_wrapped_locometal_smokebox', 'railways:light_blue_iron_wrapped_locometal_smokebox', 'railways:light_blue_slashed_locometal', 'railways:light_blue_riveted_locometal', 'railways:light_blue_locometal_pillar', 'railways:light_blue_locometal_smokebox', 'railways:light_blue_plated_locometal', 'railways:light_blue_flat_slashed_locometal', 'railways:light_blue_flat_riveted_locometal', 'railways:light_blue_brass_wrapped_locometal', 'railways:light_blue_copper_wrapped_locometal', 'railways:light_blue_iron_wrapped_locometal']
    );
    add("moddedulo", "light_blue_locometal_boilers", "group",
        ['railways:light_blue_locometal_boiler', 'railways:light_blue_brass_wrapped_locometal_boiler', 'railways:light_blue_copper_wrapped_locometal_boiler', 'railways:light_blue_iron_wrapped_locometal_boiler']
    );
    add("moddedulo", "blue_locometal_blocks", "group",
        ['railways:blue_locometal_vent', 'railways:blue_wrapped_locometal_smokebox', 'railways:blue_copper_wrapped_locometal_smokebox', 'railways:blue_iron_wrapped_locometal_smokebox', 'railways:blue_slashed_locometal', 'railways:blue_riveted_locometal', 'railways:blue_locometal_pillar', 'railways:blue_locometal_smokebox', 'railways:blue_plated_locometal', 'railways:blue_flat_slashed_locometal', 'railways:blue_flat_riveted_locometal', 'railways:blue_brass_wrapped_locometal', 'railways:blue_copper_wrapped_locometal', 'railways:blue_iron_wrapped_locometal']
    );
    add("moddedulo", "blue_locometal_boilers", "group",
        ['railways:blue_locometal_boiler', 'railways:blue_brass_wrapped_locometal_boiler', 'railways:blue_copper_wrapped_locometal_boiler', 'railways:blue_iron_wrapped_locometal_boiler']
    );
    add("moddedulo", "purple_locometal_blocks", "group",
        ['railways:purple_locometal_vent', 'railways:purple_wrapped_locometal_smokebox', 'railways:purple_copper_wrapped_locometal_smokebox', 'railways:purple_iron_wrapped_locometal_smokebox', 'railways:purple_slashed_locometal', 'railways:purple_riveted_locometal', 'railways:purple_locometal_pillar', 'railways:purple_locometal_smokebox', 'railways:purple_plated_locometal', 'railways:purple_flat_slashed_locometal', 'railways:purple_flat_riveted_locometal', 'railways:purple_brass_wrapped_locometal', 'railways:purple_copper_wrapped_locometal', 'railways:purple_iron_wrapped_locometal']
    );
    add("moddedulo", "purple_locometal_boilers", "group",
        ['railways:purple_locometal_boiler', 'railways:purple_brass_wrapped_locometal_boiler', 'railways:purple_copper_wrapped_locometal_boiler', 'railways:purple_iron_wrapped_locometal_boiler']
    );
    add("moddedulo", "magenta_locometal_blocks", "group",
        ['railways:magenta_locometal_vent', 'railways:magenta_wrapped_locometal_smokebox', 'railways:magenta_copper_wrapped_locometal_smokebox', 'railways:magenta_iron_wrapped_locometal_smokebox', 'railways:magenta_slashed_locometal', 'railways:magenta_riveted_locometal', 'railways:magenta_locometal_pillar', 'railways:magenta_locometal_smokebox', 'railways:magenta_plated_locometal', 'railways:magenta_flat_slashed_locometal', 'railways:magenta_flat_riveted_locometal', 'railways:magenta_brass_wrapped_locometal', 'railways:magenta_copper_wrapped_locometal', 'railways:magenta_iron_wrapped_locometal']
    );
    add("moddedulo", "magenta_locometal_boilers", "group",
        ['railways:magenta_locometal_boiler', 'railways:magenta_brass_wrapped_locometal_boiler', 'railways:magenta_copper_wrapped_locometal_boiler', 'railways:magenta_iron_wrapped_locometal_boiler']
    );
    add("moddedulo", "pink_locometal_blocks", "group",
        ['railways:pink_locometal_vent', 'railways:pink_wrapped_locometal_smokebox', 'railways:pink_copper_wrapped_locometal_smokebox', 'railways:pink_iron_wrapped_locometal_smokebox', 'railways:pink_slashed_locometal', 'railways:pink_riveted_locometal', 'railways:pink_locometal_pillar', 'railways:pink_locometal_smokebox', 'railways:pink_plated_locometal', 'railways:pink_flat_slashed_locometal', 'railways:pink_flat_riveted_locometal', 'railways:pink_brass_wrapped_locometal', 'railways:pink_copper_wrapped_locometal', 'railways:pink_iron_wrapped_locometal']
    );
    add("moddedulo", "pink_locometal_boilers", "group",
        ['railways:pink_locometal_boiler', 'railways:pink_brass_wrapped_locometal_boiler', 'railways:pink_copper_wrapped_locometal_boiler', 'railways:pink_iron_wrapped_locometal_boiler']
    );
    add("moddedulo", "maroon_locometal_blocks", "group",
        ['railways:maroon_riveted_locometal', 'railways:maroon_slashed_locometal', 'railways:maroon_brass_wrapped_locometal', 'railways:maroon_copper_wrapped_locometal', 'railways:maroon_iron_wrapped_locometal', 'railways:maroon_locometal_vent', 'railways:maroon_flat_riveted_locometal', 'railways:maroon_flat_slashed_locometal', 'railways:maroon_plated_locometal', 'railways:maroon_locometal_pillar', 'railways:maroon_locometal_smokebox', 'railways:maroon_wrapped_locometal_smokebox', 'railways:maroon_copper_wrapped_locometal_smokebox', 'railways:maroon_iron_wrapped_locometal_smokebox']
    );
    add("moddedulo", "maroon_locometal_boilers", "group",
        ['railways:maroon_locometal_boiler', 'railways:maroon_brass_wrapped_locometal_boiler', 'railways:maroon_copper_wrapped_locometal_boiler', 'railways:maroon_iron_wrapped_locometal_boiler']
    );
    add("moddedulo", "vermilion_locometal_blocks", "group",
        ['railways:vermilion_riveted_locometal', 'railways:vermilion_slashed_locometal', 'railways:vermilion_brass_wrapped_locometal', 'railways:vermilion_copper_wrapped_locometal', 'railways:vermilion_iron_wrapped_locometal', 'railways:vermilion_locometal_vent', 'railways:vermilion_flat_riveted_locometal', 'railways:vermilion_flat_slashed_locometal', 'railways:vermilion_plated_locometal', 'railways:vermilion_locometal_pillar', 'railways:vermilion_locometal_smokebox', 'railways:vermilion_wrapped_locometal_smokebox', 'railways:vermilion_copper_wrapped_locometal_smokebox', 'railways:vermilion_iron_wrapped_locometal_smokebox']
    );
    add("moddedulo", "vermilion_locometal_boilers", "group",
        ['railways:vermilion_locometal_boiler', 'railways:vermilion_brass_wrapped_locometal_boiler', 'railways:vermilion_copper_wrapped_locometal_boiler', 'railways:vermilion_iron_wrapped_locometal_boiler']
    );
    add("moddedulo", "granite_locometal_blocks", "group",
        ['railways:granite_riveted_locometal', 'railways:granite_slashed_locometal', 'railways:granite_brass_wrapped_locometal', 'railways:granite_copper_wrapped_locometal', 'railways:granite_iron_wrapped_locometal', 'railways:granite_locometal_vent', 'railways:granite_flat_riveted_locometal', 'railways:granite_flat_slashed_locometal', 'railways:granite_plated_locometal', 'railways:granite_locometal_pillar', 'railways:granite_locometal_smokebox', 'railways:granite_wrapped_locometal_smokebox', 'railways:granite_copper_wrapped_locometal_smokebox', 'railways:granite_iron_wrapped_locometal_smokebox']
    );
    add("moddedulo", "granite_locometal_boilers", "group",
        ['railways:granite_locometal_boiler', 'railways:granite_brass_wrapped_locometal_boiler', 'railways:granite_copper_wrapped_locometal_boiler', 'railways:granite_iron_wrapped_locometal_boiler']
    );
    add("moddedulo", "dripstone_locometal_blocks", "group",
        ['railways:dripstone_riveted_locometal', 'railways:dripstone_slashed_locometal', 'railways:dripstone_brass_wrapped_locometal', 'railways:dripstone_copper_wrapped_locometal', 'railways:dripstone_iron_wrapped_locometal', 'railways:dripstone_locometal_vent', 'railways:dripstone_flat_riveted_locometal', 'railways:dripstone_flat_slashed_locometal', 'railways:dripstone_plated_locometal', 'railways:dripstone_locometal_pillar', 'railways:dripstone_locometal_smokebox', 'railways:dripstone_wrapped_locometal_smokebox', 'railways:dripstone_copper_wrapped_locometal_smokebox', 'railways:dripstone_iron_wrapped_locometal_smokebox']
    );
    add("moddedulo", "dripstone_locometal_boilers", "group",
        ['railways:dripstone_locometal_boiler', 'railways:dripstone_brass_wrapped_locometal_boiler', 'railways:dripstone_copper_wrapped_locometal_boiler', 'railways:dripstone_iron_wrapped_locometal_boiler']
    );
    add("moddedulo", "ochrum_locometal_blocks", "group",
        ['railways:ochrum_riveted_locometal', 'railways:ochrum_slashed_locometal', 'railways:ochrum_brass_wrapped_locometal', 'railways:ochrum_copper_wrapped_locometal', 'railways:ochrum_iron_wrapped_locometal', 'railways:ochrum_locometal_vent', 'railways:ochrum_flat_riveted_locometal', 'railways:ochrum_flat_slashed_locometal', 'railways:ochrum_plated_locometal', 'railways:ochrum_locometal_pillar', 'railways:ochrum_locometal_smokebox', 'railways:ochrum_wrapped_locometal_smokebox', 'railways:ochrum_copper_wrapped_locometal_smokebox', 'railways:ochrum_iron_wrapped_locometal_smokebox']
    );
    add("moddedulo", "ochrum_locometal_boilers", "group",
        ['railways:ochrum_locometal_boiler', 'railways:ochrum_brass_wrapped_locometal_boiler', 'railways:ochrum_copper_wrapped_locometal_boiler', 'railways:ochrum_iron_wrapped_locometal_boiler']
    );
    add("moddedulo", "chartreuse_locometal_blocks", "group",
        ['railways:chartreuse_riveted_locometal', 'railways:chartreuse_slashed_locometal', 'railways:chartreuse_brass_wrapped_locometal', 'railways:chartreuse_copper_wrapped_locometal', 'railways:chartreuse_iron_wrapped_locometal', 'railways:chartreuse_locometal_vent', 'railways:chartreuse_flat_riveted_locometal', 'railways:chartreuse_flat_slashed_locometal', 'railways:chartreuse_plated_locometal', 'railways:chartreuse_locometal_pillar', 'railways:chartreuse_locometal_smokebox', 'railways:chartreuse_wrapped_locometal_smokebox', 'railways:chartreuse_copper_wrapped_locometal_smokebox', 'railways:chartreuse_iron_wrapped_locometal_smokebox']
    );
    add("moddedulo", "chartreuse_locometal_boilers", "group",
        ['railways:chartreuse_locometal_boiler', 'railways:chartreuse_brass_wrapped_locometal_boiler', 'railways:chartreuse_copper_wrapped_locometal_boiler', 'railways:chartreuse_iron_wrapped_locometal_boiler']
    );
    add("moddedulo", "olive_green_locometal_blocks", "group",
        ['railways:olive_green_riveted_locometal', 'railways:olive_green_slashed_locometal', 'railways:olive_green_brass_wrapped_locometal', 'railways:olive_green_copper_wrapped_locometal', 'railways:olive_green_iron_wrapped_locometal', 'railways:olive_green_locometal_vent', 'railways:olive_green_flat_riveted_locometal', 'railways:olive_green_flat_slashed_locometal', 'railways:olive_green_plated_locometal', 'railways:olive_green_locometal_pillar', 'railways:olive_green_locometal_smokebox', 'railways:olive_green_wrapped_locometal_smokebox', 'railways:olive_green_copper_wrapped_locometal_smokebox', 'railways:olive_green_iron_wrapped_locometal_smokebox']
    );
    add("moddedulo", "olive_green_locometal_boilers", "group",
        ['railways:olive_green_locometal_boiler', 'railways:olive_green_brass_wrapped_locometal_boiler', 'railways:olive_green_copper_wrapped_locometal_boiler', 'railways:olive_green_iron_wrapped_locometal_boiler']
    );
    add("moddedulo", "pine_green_locometal_blocks", "group",
        ['railways:pine_green_riveted_locometal', 'railways:pine_green_slashed_locometal', 'railways:pine_green_brass_wrapped_locometal', 'railways:pine_green_copper_wrapped_locometal', 'railways:pine_green_iron_wrapped_locometal', 'railways:pine_green_locometal_vent', 'railways:pine_green_flat_riveted_locometal', 'railways:pine_green_flat_slashed_locometal', 'railways:pine_green_plated_locometal', 'railways:pine_green_locometal_pillar', 'railways:pine_green_locometal_smokebox', 'railways:pine_green_wrapped_locometal_smokebox', 'railways:pine_green_copper_wrapped_locometal_smokebox', 'railways:pine_green_iron_wrapped_locometal_smokebox']
    );
    add("moddedulo", "pine_green_locometal_boilers", "group",
        ['railways:pine_green_locometal_boiler', 'railways:pine_green_brass_wrapped_locometal_boiler', 'railways:pine_green_copper_wrapped_locometal_boiler', 'railways:pine_green_iron_wrapped_locometal_boiler']
    );
    add("moddedulo", "sea_green_locometal_blocks", "group",
        ['railways:sea_green_riveted_locometal', 'railways:sea_green_slashed_locometal', 'railways:sea_green_brass_wrapped_locometal', 'railways:sea_green_copper_wrapped_locometal', 'railways:sea_green_iron_wrapped_locometal', 'railways:sea_green_locometal_vent', 'railways:sea_green_flat_riveted_locometal', 'railways:sea_green_flat_slashed_locometal', 'railways:sea_green_plated_locometal', 'railways:sea_green_locometal_pillar', 'railways:sea_green_locometal_smokebox', 'railways:sea_green_wrapped_locometal_smokebox', 'railways:sea_green_copper_wrapped_locometal_smokebox', 'railways:sea_green_iron_wrapped_locometal_smokebox']
    );
    add("moddedulo", "sea_green_locometal_boilers", "group",
        ['railways:sea_green_locometal_boiler', 'railways:sea_green_brass_wrapped_locometal_boiler', 'railways:sea_green_copper_wrapped_locometal_boiler', 'railways:sea_green_iron_wrapped_locometal_boiler']
    );
    add("moddedulo", "turquoise_locometal_blocks", "group",
        ['railways:turquoise_riveted_locometal', 'railways:turquoise_slashed_locometal', 'railways:turquoise_brass_wrapped_locometal', 'railways:turquoise_copper_wrapped_locometal', 'railways:turquoise_iron_wrapped_locometal', 'railways:turquoise_locometal_vent', 'railways:turquoise_flat_riveted_locometal', 'railways:turquoise_flat_slashed_locometal', 'railways:turquoise_plated_locometal', 'railways:turquoise_locometal_pillar', 'railways:turquoise_locometal_smokebox', 'railways:turquoise_wrapped_locometal_smokebox', 'railways:turquoise_copper_wrapped_locometal_smokebox', 'railways:turquoise_iron_wrapped_locometal_smokebox']
    );
    add("moddedulo", "turquoise_locometal_boilers", "group",
        ['railways:turquoise_locometal_boiler', 'railways:turquoise_brass_wrapped_locometal_boiler', 'railways:turquoise_copper_wrapped_locometal_boiler', 'railways:turquoise_iron_wrapped_locometal_boiler']
    );
    add("moddedulo", "royal_blue_locometal_blocks", "group",
        ['railways:royal_blue_riveted_locometal', 'railways:royal_blue_slashed_locometal', 'railways:royal_blue_brass_wrapped_locometal', 'railways:royal_blue_copper_wrapped_locometal', 'railways:royal_blue_iron_wrapped_locometal', 'railways:royal_blue_locometal_vent', 'railways:royal_blue_flat_riveted_locometal', 'railways:royal_blue_flat_slashed_locometal', 'railways:royal_blue_plated_locometal', 'railways:royal_blue_locometal_pillar', 'railways:royal_blue_locometal_smokebox', 'railways:royal_blue_wrapped_locometal_smokebox', 'railways:royal_blue_copper_wrapped_locometal_smokebox', 'railways:royal_blue_iron_wrapped_locometal_smokebox']
    );
    add("moddedulo", "royal_blue_locometal_boilers", "group",
        ['railways:royal_blue_locometal_boiler', 'railways:royal_blue_brass_wrapped_locometal_boiler', 'railways:royal_blue_copper_wrapped_locometal_boiler', 'railways:royal_blue_iron_wrapped_locometal_boiler']
    );
    add("moddedulo", "diorite_locometal_blocks", "group",
        ['railways:diorite_riveted_locometal', 'railways:diorite_slashed_locometal', 'railways:diorite_brass_wrapped_locometal', 'railways:diorite_copper_wrapped_locometal', 'railways:diorite_iron_wrapped_locometal', 'railways:diorite_locometal_vent', 'railways:diorite_flat_riveted_locometal', 'railways:diorite_flat_slashed_locometal', 'railways:diorite_plated_locometal', 'railways:diorite_locometal_pillar', 'railways:diorite_locometal_smokebox', 'railways:diorite_wrapped_locometal_smokebox', 'railways:diorite_copper_wrapped_locometal_smokebox', 'railways:diorite_iron_wrapped_locometal_smokebox']
    );
    add("moddedulo", "diorite_locometal_boilers", "group",
        ['railways:diorite_locometal_boiler', 'railways:diorite_brass_wrapped_locometal_boiler', 'railways:diorite_copper_wrapped_locometal_boiler', 'railways:diorite_iron_wrapped_locometal_boiler']
    );
    add("moddedulo", "limestone_locometal_blocks", "group",
        ['railways:limestone_riveted_locometal', 'railways:limestone_slashed_locometal', 'railways:limestone_brass_wrapped_locometal', 'railways:limestone_copper_wrapped_locometal', 'railways:limestone_iron_wrapped_locometal', 'railways:limestone_locometal_vent', 'railways:limestone_flat_riveted_locometal', 'railways:limestone_flat_slashed_locometal', 'railways:limestone_plated_locometal', 'railways:limestone_locometal_pillar', 'railways:limestone_locometal_smokebox', 'railways:limestone_wrapped_locometal_smokebox', 'railways:limestone_copper_wrapped_locometal_smokebox', 'railways:limestone_iron_wrapped_locometal_smokebox']
    );
    add("moddedulo", "limestone_locometal_boilers", "group",
        ['railways:limestone_locometal_boiler', 'railways:limestone_brass_wrapped_locometal_boiler', 'railways:limestone_copper_wrapped_locometal_boiler', 'railways:limestone_iron_wrapped_locometal_boiler']
    );
    add("moddedulo", "tuff_locometal_blocks", "group",
        ['railways:tuff_riveted_locometal', 'railways:tuff_slashed_locometal', 'railways:tuff_brass_wrapped_locometal', 'railways:tuff_copper_wrapped_locometal', 'railways:tuff_iron_wrapped_locometal', 'railways:tuff_locometal_vent', 'railways:tuff_flat_riveted_locometal', 'railways:tuff_flat_slashed_locometal', 'railways:tuff_plated_locometal', 'railways:tuff_locometal_pillar', 'railways:tuff_locometal_smokebox', 'railways:tuff_wrapped_locometal_smokebox', 'railways:tuff_copper_wrapped_locometal_smokebox', 'railways:tuff_iron_wrapped_locometal_smokebox']
    );
    add("moddedulo", "tuff_locometal_boilers", "group",
        ['railways:tuff_locometal_boiler', 'railways:tuff_brass_wrapped_locometal_boiler', 'railways:tuff_copper_wrapped_locometal_boiler', 'railways:tuff_iron_wrapped_locometal_boiler']
    );
    add("moddedulo", "scorchia_locometal_blocks", "group",
        ['railways:scorchia_riveted_locometal', 'railways:scorchia_slashed_locometal', 'railways:scorchia_brass_wrapped_locometal', 'railways:scorchia_copper_wrapped_locometal', 'railways:scorchia_iron_wrapped_locometal', 'railways:scorchia_locometal_vent', 'railways:scorchia_flat_riveted_locometal', 'railways:scorchia_flat_slashed_locometal', 'railways:scorchia_plated_locometal', 'railways:scorchia_locometal_pillar', 'railways:scorchia_locometal_smokebox', 'railways:scorchia_wrapped_locometal_smokebox', 'railways:scorchia_copper_wrapped_locometal_smokebox', 'railways:scorchia_iron_wrapped_locometal_smokebox']
    );
    add("moddedulo", "scorchia_locometal_boilers", "group",
        ['railways:scorchia_locometal_boiler', 'railways:scorchia_brass_wrapped_locometal_boiler', 'railways:scorchia_copper_wrapped_locometal_boiler', 'railways:scorchia_iron_wrapped_locometal_boiler']
    );
    add("moddedulo", "hazard_stripes", "group",
        ['railways:yellow_hazard_stripes_diagonal_on_black', 'railways:yellow_hazard_stripes_chevron_on_black', 'railways:yellow_hazard_stripes_diagonal_on_white', 'railways:yellow_hazard_stripes_chevron_on_white', 'railways:chartreuse_hazard_stripes_diagonal_on_black', 'railways:chartreuse_hazard_stripes_chevron_on_black', 'railways:chartreuse_hazard_stripes_diagonal_on_white', 'railways:chartreuse_hazard_stripes_chevron_on_white', 'railways:olive_green_hazard_stripes_diagonal_on_black', 'railways:olive_green_hazard_stripes_chevron_on_black', 'railways:olive_green_hazard_stripes_diagonal_on_white', 'railways:olive_green_hazard_stripes_chevron_on_white',
            'railways:lime_hazard_stripes_diagonal_on_black', 'railways:lime_hazard_stripes_chevron_on_black', 'railways:lime_hazard_stripes_diagonal_on_white', 'railways:lime_hazard_stripes_chevron_on_white', 'railways:green_hazard_stripes_diagonal_on_black', 'railways:green_hazard_stripes_chevron_on_black', 'railways:green_hazard_stripes_diagonal_on_white', 'railways:green_hazard_stripes_chevron_on_white', 'railways:pine_green_hazard_stripes_diagonal_on_black', 'railways:pine_green_hazard_stripes_chevron_on_black', 'railways:pine_green_hazard_stripes_diagonal_on_white', 'railways:pine_green_hazard_stripes_chevron_on_white', 'railways:cyan_hazard_stripes_diagonal_on_black', 'railways:cyan_hazard_stripes_chevron_on_black', 'railways:cyan_hazard_stripes_diagonal_on_white', 'railways:cyan_hazard_stripes_chevron_on_white', 'railways:sea_green_hazard_stripes_diagonal_on_black', 'railways:sea_green_hazard_stripes_chevron_on_black',
            'railways:sea_green_hazard_stripes_diagonal_on_white', 'railways:sea_green_hazard_stripes_chevron_on_white', 'railways:turquoise_hazard_stripes_diagonal_on_black', 'railways:turquoise_hazard_stripes_chevron_on_black', 'railways:turquoise_hazard_stripes_diagonal_on_white', 'railways:turquoise_hazard_stripes_chevron_on_white', 'railways:hazard_stripes_diagonal_on_black', 'railways:hazard_stripes_chevron_on_black', 'railways:hazard_stripes_diagonal_on_white', 'railways:hazard_stripes_chevron_on_white', 'railways:brown_hazard_stripes_diagonal_on_black', 'railways:brown_hazard_stripes_chevron_on_black', 'railways:brown_hazard_stripes_chevron_on_white', 'railways:brown_hazard_stripes_diagonal_on_white', 'railways:maroon_hazard_stripes_diagonal_on_black', 'railways:maroon_hazard_stripes_chevron_on_black', 'railways:maroon_hazard_stripes_diagonal_on_white', 'railways:maroon_hazard_stripes_chevron_on_white', 'railways:red_hazard_stripes_diagonal_on_black', 'railways:red_hazard_stripes_chevron_on_black', 'railways:red_hazard_stripes_diagonal_on_white', 'railways:red_hazard_stripes_chevron_on_white', 'railways:vermilion_hazard_stripes_diagonal_on_black', 'railways:vermilion_hazard_stripes_chevron_on_black', 'railways:vermilion_hazard_stripes_diagonal_on_white', 'railways:vermilion_hazard_stripes_chevron_on_white', 'railways:orange_hazard_stripes_diagonal_on_black', 'railways:orange_hazard_stripes_chevron_on_black', 'railways:orange_hazard_stripes_diagonal_on_white', 'railways:orange_hazard_stripes_chevron_on_white', 'railways:granite_hazard_stripes_diagonal_on_black', 'railways:granite_hazard_stripes_chevron_on_black', 'railways:granite_hazard_stripes_diagonal_on_white', 'railways:granite_hazard_stripes_chevron_on_white', 'railways:dripstone_hazard_stripes_diagonal_on_black', 'railways:dripstone_hazard_stripes_chevron_on_black', 'railways:dripstone_hazard_stripes_diagonal_on_white', 'railways:dripstone_hazard_stripes_chevron_on_white', 'railways:ochrum_hazard_stripes_diagonal_on_black', 'railways:ochrum_hazard_stripes_chevron_on_black', 'railways:ochrum_hazard_stripes_diagonal_on_white', 'railways:ochrum_hazard_stripes_chevron_on_white',
            'railways:light_blue_hazard_stripes_diagonal_on_black', 'railways:light_blue_hazard_stripes_chevron_on_black', 'railways:light_blue_hazard_stripes_diagonal_on_white', 'railways:light_blue_hazard_stripes_chevron_on_white', 'railways:blue_hazard_stripes_diagonal_on_black', 'railways:blue_hazard_stripes_chevron_on_black', 'railways:blue_hazard_stripes_diagonal_on_white', 'railways:blue_hazard_stripes_chevron_on_white', 'railways:royal_blue_hazard_stripes_diagonal_on_black', 'railways:royal_blue_hazard_stripes_chevron_on_black', 'railways:royal_blue_hazard_stripes_diagonal_on_white', 'railways:royal_blue_hazard_stripes_chevron_on_white', 'railways:purple_hazard_stripes_diagonal_on_black', 'railways:purple_hazard_stripes_chevron_on_black', 'railways:purple_hazard_stripes_diagonal_on_white', 'railways:purple_hazard_stripes_chevron_on_white', 'railways:magenta_hazard_stripes_diagonal_on_black', 'railways:magenta_hazard_stripes_chevron_on_black', 'railways:magenta_hazard_stripes_diagonal_on_white', 'railways:magenta_hazard_stripes_chevron_on_white', 'railways:pink_hazard_stripes_diagonal_on_black', 'railways:pink_hazard_stripes_chevron_on_black', 'railways:pink_hazard_stripes_diagonal_on_white', 'railways:pink_hazard_stripes_chevron_on_white', 'railways:white_hazard_stripes_diagonal_on_black', 'railways:white_hazard_stripes_chevron_on_black', 'railways:white_hazard_stripes_diagonal_on_white', 'railways:white_hazard_stripes_chevron_on_white', 'railways:diorite_hazard_stripes_diagonal_on_black', 'railways:diorite_hazard_stripes_chevron_on_black', 'railways:diorite_hazard_stripes_diagonal_on_white', 'railways:diorite_hazard_stripes_chevron_on_white', 'railways:limestone_hazard_stripes_diagonal_on_black', 'railways:limestone_hazard_stripes_chevron_on_black', 'railways:limestone_hazard_stripes_diagonal_on_white', 'railways:limestone_hazard_stripes_chevron_on_white',
            'railways:light_gray_hazard_stripes_diagonal_on_black', 'railways:light_gray_hazard_stripes_chevron_on_black', 'railways:light_gray_hazard_stripes_diagonal_on_white', 'railways:light_gray_hazard_stripes_chevron_on_white', 'railways:tuff_hazard_stripes_diagonal_on_black', 'railways:tuff_hazard_stripes_chevron_on_black', 'railways:tuff_hazard_stripes_diagonal_on_white', 'railways:tuff_hazard_stripes_chevron_on_white', 'railways:gray_hazard_stripes_chevron_on_black', 'railways:gray_hazard_stripes_diagonal_on_black', 'railways:gray_hazard_stripes_diagonal_on_white', 'railways:gray_hazard_stripes_chevron_on_white', 'railways:scorchia_hazard_stripes_diagonal_on_black', 'railways:scorchia_hazard_stripes_chevron_on_black', 'railways:scorchia_hazard_stripes_diagonal_on_white', 'railways:scorchia_hazard_stripes_chevron_on_white', 'railways:black_hazard_stripes_diagonal_on_black', 'railways:black_hazard_stripes_chevron_on_black', 'railways:black_hazard_stripes_diagonal_on_white', 'railways:black_hazard_stripes_chevron_on_white']
    );
    add("moddedulo", "locometal_windows", "group",
        ['railways:round_pane_locometal_window', 'railways:single_pane_locometal_window', 'railways:two_pane_locometal_window', 'railways:four_pane_locometal_window']
    );
    add("moddedulo", "brown_locometal_windows", "group",
        ['railways:brown_round_pane_locometal_window', 'railways:brown_single_pane_locometal_window', 'railways:brown_two_pane_locometal_window', 'railways:brown_four_pane_locometal_window']
    );
    add("moddedulo", "maroon_locometal_windows", "group",
        ['railways:maroon_round_pane_locometal_window', 'railways:maroon_single_pane_locometal_window', 'railways:maroon_two_pane_locometal_window', 'railways:maroon_four_pane_locometal_window']
    );
    add("moddedulo", "red_locometal_windows", "group",
        ['railways:red_round_pane_locometal_window', 'railways:red_single_pane_locometal_window', 'railways:red_two_pane_locometal_window', 'railways:red_four_pane_locometal_window']
    );
    add("moddedulo", "vermilion_locometal_windows", "group",
        ['railways:vermilion_round_pane_locometal_window', 'railways:vermilion_single_pane_locometal_window', 'railways:vermilion_two_pane_locometal_window', 'railways:vermilion_four_pane_locometal_window']
    );
    add("moddedulo", "orange_locometal_windows", "group",
        ['railways:orange_round_pane_locometal_window', 'railways:orange_single_pane_locometal_window', 'railways:orange_two_pane_locometal_window', 'railways:orange_four_pane_locometal_window']
    );
    add("moddedulo", "granite_locometal_windows", "group",
        ['railways:granite_round_pane_locometal_window', 'railways:granite_single_pane_locometal_window', 'railways:granite_two_pane_locometal_window', 'railways:granite_four_pane_locometal_window']
    );
    add("moddedulo", "dripstone_locometal_windows", "group",
        ['railways:dripstone_round_pane_locometal_window', 'railways:dripstone_single_pane_locometal_window', 'railways:dripstone_two_pane_locometal_window', 'railways:dripstone_four_pane_locometal_window']
    );
    add("moddedulo", "yellow_locometal_windows", "group",
        ['railways:yellow_round_pane_locometal_window', 'railways:yellow_single_pane_locometal_window', 'railways:yellow_two_pane_locometal_window', 'railways:yellow_four_pane_locometal_window']
    );
    add("moddedulo", "ochrum_locometal_windows", "group",
        ['railways:ochrum_round_pane_locometal_window', 'railways:ochrum_single_pane_locometal_window', 'railways:ochrum_two_pane_locometal_window', 'railways:ochrum_four_pane_locometal_window']
    );
    add("moddedulo", "chartreuse_locometal_windows", "group",
        ['railways:chartreuse_round_pane_locometal_window', 'railways:chartreuse_single_pane_locometal_window', 'railways:chartreuse_two_pane_locometal_window', 'railways:chartreuse_four_pane_locometal_window']
    );
    add("moddedulo", "olive_green_locometal_windows", "group",
        ['railways:olive_green_round_pane_locometal_window', 'railways:olive_green_single_pane_locometal_window', 'railways:olive_green_two_pane_locometal_window', 'railways:olive_green_four_pane_locometal_window']
    );
    add("moddedulo", "lime_locometal_windows", "group",
        ['railways:lime_round_pane_locometal_window', 'railways:lime_single_pane_locometal_window', 'railways:lime_two_pane_locometal_window', 'railways:lime_four_pane_locometal_window']
    );
    add("moddedulo", "green_locometal_windows", "group",
        ['railways:green_round_pane_locometal_window', 'railways:green_single_pane_locometal_window', 'railways:green_two_pane_locometal_window', 'railways:green_four_pane_locometal_window']
    );
    add("moddedulo", "pine_green_locometal_windows", "group",
        ['railways:pine_green_round_pane_locometal_window', 'railways:pine_green_single_pane_locometal_window', 'railways:pine_green_two_pane_locometal_window', 'railways:pine_green_four_pane_locometal_window']   
    );
    add("moddedulo", "cyan_locometal_windows", "group",
        ['railways:cyan_round_pane_locometal_window', 'railways:cyan_single_pane_locometal_window', 'railways:cyan_two_pane_locometal_window', 'railways:cyan_four_pane_locometal_window']
    );
    add("moddedulo", "sea_green_locometal_windows", "group",
        ['railways:sea_green_round_pane_locometal_window', 'railways:sea_green_single_pane_locometal_window', 'railways:sea_green_two_pane_locometal_window', 'railways:sea_green_four_pane_locometal_window']
    );
    add("moddedulo", "turquoise_locometal_windows", "group",
        ['railways:turquoise_round_pane_locometal_window', 'railways:turquoise_single_pane_locometal_window', 'railways:turquoise_two_pane_locometal_window', 'railways:turquoise_four_pane_locometal_window']
    );
    add("moddedulo", "light_blue_locometal_windows", "group",
        ['railways:light_blue_round_pane_locometal_window', 'railways:light_blue_single_pane_locometal_window', 'railways:light_blue_two_pane_locometal_window', 'railways:light_blue_four_pane_locometal_window']
    );
    add("moddedulo", "blue_locometal_windows", "group",
        ['railways:blue_round_pane_locometal_window', 'railways:blue_single_pane_locometal_window', 'railways:blue_two_pane_locometal_window', 'railways:blue_four_pane_locometal_window']
    );
    add("moddedulo", "royal_blue_locometal_windows", "group",
        ['railways:royal_blue_round_pane_locometal_window', 'railways:royal_blue_single_pane_locometal_window', 'railways:royal_blue_two_pane_locometal_window', 'railways:royal_blue_four_pane_locometal_window']
    );
    add("moddedulo", "purple_locometal_windows", "group",
        ['railways:purple_round_pane_locometal_window', 'railways:purple_single_pane_locometal_window', 'railways:purple_two_pane_locometal_window', 'railways:purple_four_pane_locometal_window']
    );
    add("moddedulo", "magenta_locometal_windows", "group",
        ['railways:magenta_round_pane_locometal_window', 'railways:magenta_single_pane_locometal_window', 'railways:magenta_two_pane_locometal_window', 'railways:magenta_four_pane_locometal_window']
    );
    add("moddedulo", "pink_locometal_windows", "group",
        ['railways:pink_round_pane_locometal_window', 'railways:pink_single_pane_locometal_window', 'railways:pink_two_pane_locometal_window', 'railways:pink_four_pane_locometal_window']
    );
    add("moddedulo", "white_locometal_windows", "group",
        ['railways:white_round_pane_locometal_window', 'railways:white_single_pane_locometal_window', 'railways:white_two_pane_locometal_window', 'railways:white_four_pane_locometal_window']
    );
    add("moddedulo", "diorite_locometal_windows", "group",
        ['railways:diorite_round_pane_locometal_window', 'railways:diorite_single_pane_locometal_window', 'railways:diorite_two_pane_locometal_window', 'railways:diorite_four_pane_locometal_window']
    );
    add("moddedulo", "limestone_locometal_windows", "group",
        ['railways:limestone_round_pane_locometal_window', 'railways:limestone_single_pane_locometal_window', 'railways:limestone_two_pane_locometal_window', 'railways:limestone_four_pane_locometal_window']
    );
    add("moddedulo", "light_gray_locometal_windows", "group",
        ['railways:light_gray_round_pane_locometal_window', 'railways:light_gray_single_pane_locometal_window', 'railways:light_gray_two_pane_locometal_window', 'railways:light_gray_four_pane_locometal_window']
    );
    add("moddedulo", "tuff_locometal_windows", "group",
        ['railways:tuff_round_pane_locometal_window', 'railways:tuff_single_pane_locometal_window', 'railways:tuff_two_pane_locometal_window', 'railways:tuff_four_pane_locometal_window']
    );
    add("moddedulo", "gray_locometal_windows", "group",
        ['railways:gray_round_pane_locometal_window', 'railways:gray_single_pane_locometal_window', 'railways:gray_two_pane_locometal_window', 'railways:gray_four_pane_locometal_window']
    );
    add("moddedulo", "scorchia_locometal_windows", "group",
        ['railways:scorchia_round_pane_locometal_window', 'railways:scorchia_single_pane_locometal_window', 'railways:scorchia_two_pane_locometal_window', 'railways:scorchia_four_pane_locometal_window']
    );
    add("moddedulo", "black_locometal_windows", "group",
        ['railways:black_round_pane_locometal_window', 'railways:black_single_pane_locometal_window', 'railways:black_two_pane_locometal_window', 'railways:black_four_pane_locometal_window']
    );
    add("moddedulo", "filled_paint_pitchers", "group",
        ['railways:sandy_paint_pitcher', 'railways:brown_paint_pitcher', 'railways:maroon_paint_pitcher', 'railways:red_paint_pitcher', 'railways:vermilion_paint_pitcher', 'railways:orange_paint_pitcher', 'railways:granite_paint_pitcher', 'railways:dripstone_paint_pitcher', 'railways:ochrum_paint_pitcher', 'railways:yellow_paint_pitcher', 'railways:chartreuse_paint_pitcher', 'railways:olive_green_paint_pitcher', 'railways:lime_paint_pitcher', 'railways:green_paint_pitcher', 'railways:pine_green_paint_pitcher', 'railways:cyan_paint_pitcher', 'railways:sea_green_paint_pitcher', 'railways:turquoise_paint_pitcher', 'railways:light_blue_paint_pitcher', 'railways:blue_paint_pitcher', 'railways:royal_blue_paint_pitcher', 'railways:purple_paint_pitcher', 'railways:magenta_paint_pitcher', 'railways:pink_paint_pitcher', 'railways:white_paint_pitcher', 'railways:diorite_paint_pitcher', 'railways:limestone_paint_pitcher', 'railways:light_gray_paint_pitcher', 'railways:tuff_paint_pitcher', 'railways:gray_paint_pitcher', 'railways:scorchia_paint_pitcher', 'railways:black_paint_pitcher']
    );
    add("moddedulo", "metal_ladders", "group",
        ['create:copper_ladder', 'create:brass_ladder', 'create:andesite_ladder', 'railways:black_locometal_rung_ladder', 'railways:black_locometal_end_ladder', 'railways:scorchia_locometal_rung_ladder', 'railways:scorchia_locometal_end_ladder', 'railways:gray_locometal_rung_ladder', 'railways:gray_locometal_end_ladder', 'railways:tuff_locometal_rung_ladder', 'railways:tuff_locometal_end_ladder', 'railways:light_gray_locometal_rung_ladder', 'railways:light_gray_locometal_end_ladder', 'railways:limestone_locometal_end_ladder', 'railways:diorite_locometal_rung_ladder', 'railways:diorite_locometal_end_ladder', 'railways:white_locometal_rung_ladder', 'railways:white_locometal_end_ladder', 'railways:pink_locometal_rung_ladder', 'railways:pink_locometal_end_ladder', 'railways:magenta_locometal_rung_ladder', 'railways:magenta_locometal_end_ladder', 'railways:purple_locometal_rung_ladder', 'railways:purple_locometal_end_ladder', 'railways:royal_blue_locometal_rung_ladder', 'railways:royal_blue_locometal_end_ladder', 'railways:blue_locometal_rung_ladder', 'railways:blue_locometal_end_ladder', 'railways:light_blue_locometal_end_ladder', 'railways:turquoise_locometal_rung_ladder', 'railways:turquoise_locometal_end_ladder', 'railways:sea_green_locometal_rung_ladder', 'railways:sea_green_locometal_end_ladder', 'railways:cyan_locometal_rung_ladder', 'railways:light_blue_locometal_rung_ladder', 'railways:limestone_locometal_rung_ladder',
        'railways:cyan_locometal_end_ladder', 'railways:pine_green_locometal_rung_ladder', 'railways:pine_green_locometal_end_ladder', 'railways:green_locometal_rung_ladder', 'railways:green_locometal_end_ladder', 'railways:lime_locometal_rung_ladder', 'railways:lime_locometal_end_ladder', 'railways:olive_green_locometal_rung_ladder', 'railways:olive_green_locometal_end_ladder', 'railways:chartreuse_locometal_rung_ladder', 'railways:chartreuse_locometal_end_ladder', 'railways:yellow_locometal_rung_ladder', 'railways:yellow_locometal_end_ladder', 'railways:ochrum_locometal_rung_ladder', 'railways:ochrum_locometal_end_ladder', 'railways:dripstone_locometal_rung_ladder', 'railways:dripstone_locometal_end_ladder', 'railways:granite_locometal_rung_ladder', 'railways:granite_locometal_end_ladder', 'railways:orange_locometal_rung_ladder', 'railways:orange_locometal_end_ladder', 'railways:vermilion_locometal_rung_ladder', 'railways:vermilion_locometal_end_ladder', 'railways:red_locometal_rung_ladder', 'railways:red_locometal_end_ladder', 'railways:maroon_locometal_rung_ladder', 'railways:maroon_locometal_end_ladder', 'railways:brown_locometal_rung_ladder', 'railways:locometal_rung_ladder', 'railways:locometal_end_ladder', 'createdeco:zinc_ladder', 'createdeco:industrial_iron_ladder', 'createdeco:iron_ladder', 'railways:brown_locometal_end_ladder']  
    );
    add("emixx", "minecarts", "group",
        ['minecraft:minecart', 'minecraft:hopper_minecart', 'minecraft:chest_minecart', 'minecraft:furnace_minecart', 'minecraft:tnt_minecart', 'railways:benchcart', 'railways:jukeboxcart', 'supplementaries:dispenser_minecart']
    );

    add("moddedulo", "music_discs", "tag", 
        "c:music_discs"
    );
    add("moddedulo", "turtles", "tag",
        "computercraft:turtle"
    );
    add("moddedulo", "floppy_disks", "tag",
        "computercraft:disks"
    );
    add("moddedulo", "pocket_computers", "tag",
        "computercraft:pocket_computers"
    );
    add("moddedulo", "tapes", "tag",
        "moddedulo:vhs_tapes"
    );
    add("moddedulo", "tracks", "tag",
        "create:tracks"
    );
    add("moddedulo", "frontlights", "tag",
        'moddedulo:frontlights'
    );
    add("moddedulo", "way_signs", "tag",
        'supplementaries:way_signs'
    );
    add("moddedulo", "candle_holders", "tag",
        'supplementaries:candle_holders'
    );
    add("moddedulo", "trapped_presents", "tag",
        'supplementaries:trapped_presents'
    );
    add("moddedulo", "presents", "tag",
        'supplementaries:presents'
    );
    add("moddedulo", "awnings", "tag",
        'supplementaries:awnings'
    );
    add("moddedulo", "flags", "tag",
        'supplementaries:flags'
    );
    add("moddedulo", "locometal_trapdoors", "tag",
        'railways:palettes/dye_groups/trapdoor'
    );
    add("moddedulo", "encased_shafts", "group",
        ['createcasing:brass_shaft', 'createcasing:copper_shaft', 'createcasing:zinc_shaft', 'createcasing:glass_shaft', 'createcasing:acacia_shaft', 'createcasing:birch_shaft', 'createcasing:bamboo_shaft', 'createcasing:cherry_shaft', 'createcasing:crimson_shaft', 'createcasing:dark_oak_shaft', 'createcasing:oak_shaft', 'createcasing:jungle_shaft', 'createcasing:mangrove_shaft', 'createcasing:warped_shaft', 'createcasing:spruce_shaft']
    );
    add("moddedulo", "copper_shingles", "group",
        ['create:copper_shingles', 'create:exposed_copper_shingles', 'create:weathered_copper_shingles', 'create:oxidized_copper_shingles', 'create:waxed_copper_shingles', 'create:waxed_exposed_copper_shingles', 'create:waxed_weathered_copper_shingles', 'create:waxed_oxidized_copper_shingles']
    );
    add("moddedulo", "copper_tiles", "group",
        ['create:copper_tiles', 'create:exposed_copper_tiles', 'create:weathered_copper_tiles', 'create:oxidized_copper_tiles', 'create:waxed_copper_tiles', 'create:waxed_exposed_copper_tiles', 'create:waxed_weathered_copper_tiles', 'create:waxed_oxidized_copper_tiles']
    );
    add("moddedulo", "copper_floor", "group",
        ['dndecor:copper_floor', 'dndecor:exposed_copper_floor', 'dndecor:weathered_copper_floor', 'dndecor:oxidized_copper_floor', 'dndecor:waxed_copper_floor', 'dndecor:waxed_exposed_copper_floor', 'dndecor:waxed_weathered_copper_floor', 'dndecor:waxed_oxidized_copper_floor']
    );
    add("moddedulo", "copper_grates", "group",
        ['minecraft:copper_grate', 'minecraft:exposed_copper_grate', 'minecraft:weathered_copper_grate', 'minecraft:oxidized_copper_grate', 'minecraft:waxed_copper_grate', 'minecraft:waxed_exposed_copper_grate', 'minecraft:waxed_weathered_copper_grate', 'minecraft:waxed_oxidized_copper_grate']
    );
    add("moddedulo", "chiseled_copper", "group",
        ['minecraft:chiseled_copper', 'minecraft:exposed_chiseled_copper', 'minecraft:weathered_chiseled_copper', 'minecraft:oxidized_chiseled_copper', 'minecraft:waxed_chiseled_copper', 'minecraft:waxed_exposed_chiseled_copper', 'minecraft:waxed_weathered_chiseled_copper', 'minecraft:waxed_oxidized_chiseled_copper']
    );
    add("moddedulo", "copper_bulbs", "group",
        ['minecraft:copper_bulb', 'minecraft:exposed_copper_bulb', 'minecraft:weathered_copper_bulb', 'minecraft:oxidized_copper_bulb', 'minecraft:waxed_copper_bulb', 'minecraft:waxed_exposed_copper_bulb', 'minecraft:waxed_weathered_copper_bulb', 'minecraft:waxed_oxidized_copper_bulb']
    );
    add("moddedulo", "cut_copper", "group",
        ['minecraft:cut_copper', 'minecraft:exposed_cut_copper', 'minecraft:weathered_cut_copper', 'minecraft:oxidized_cut_copper', 'minecraft:waxed_cut_copper', 'minecraft:waxed_exposed_cut_copper', 'minecraft:waxed_weathered_cut_copper', 'minecraft:waxed_oxidized_cut_copper']
    );
    add("minecraft", "copper_blocks", "group",
        ['minecraft:copper_block', 'minecraft:weathered_copper', 'minecraft:waxed_copper_block', 'minecraft:waxed_weathered_copper', 'minecraft:exposed_copper', 'minecraft:oxidized_copper', 'minecraft:waxed_exposed_copper', 'minecraft:waxed_oxidized_copper']
    );
    add("moddedulo", "window_panes", "group",
        ['create:oak_window_pane', 'create:spruce_window_pane', 'create:birch_window_pane', 'create:jungle_window_pane', 'create:acacia_window_pane', 'create:dark_oak_window_pane', 'create:mangrove_window_pane', 'create:crimson_window_pane', 'create:warped_window_pane', 'create:bamboo_window_pane', 'create:ornate_iron_window_pane', 'create:industrial_iron_window_pane', 'create:weathered_iron_window_pane', 'dndecor:ornate_iron_glass_pane', 'createdeco:andesite_window_pane', 'createdeco:iron_window_pane', 'createdeco:industrial_iron_window_pane', 'createdeco:brass_window_pane', 'createframed:copper_window_pane', 'createframed:zinc_window_pane', 'createframed:andesite_alloy_window_pane', 'createframed:rose_quartz_window_pane', 'createframed:brass_window_pane', 'create:cherry_window_pane']
    );
    add("moddedulo", "windows", "group",
        ['createdeco:andesite_window', 'createdeco:iron_window', 'createdeco:industrial_iron_window', 'createdeco:brass_window', 'createframed:copper_window', 'createframed:zinc_window', 'createframed:andesite_alloy_window', 'createframed:rose_quartz_window', 'createframed:brass_window', 'create:oak_window', 'create:spruce_window', 'create:birch_window', 'create:jungle_window', 'create:acacia_window', 'create:dark_oak_window', 'create:mangrove_window', 'create:crimson_window', 'create:warped_window', 'create:cherry_window', 'create:bamboo_window', 'create:ornate_iron_window', 'create:industrial_iron_window', 'create:weathered_iron_window', 'dndecor:ornate_iron_glass']
    );
    add("moddedulo", "glass_panes", "group",
        ['minecraft:glass_pane', 'minecraft:white_stained_glass_pane', 'minecraft:light_gray_stained_glass_pane', 'minecraft:gray_stained_glass_pane', 'minecraft:black_stained_glass_pane', 'minecraft:brown_stained_glass_pane', 'minecraft:red_stained_glass_pane', 'minecraft:orange_stained_glass_pane', 'minecraft:yellow_stained_glass_pane', 'minecraft:lime_stained_glass_pane', 'minecraft:green_stained_glass_pane', 'minecraft:cyan_stained_glass_pane', 'minecraft:light_blue_stained_glass_pane', 'minecraft:blue_stained_glass_pane', 'minecraft:purple_stained_glass_pane', 'minecraft:magenta_stained_glass_pane', 'minecraft:pink_stained_glass_pane', 'createframed:red_stained_tiled_glass_pane', 'createframed:red_stained_framed_glass_pane', 'createframed:horizontal_red_stained_framed_glass_pane', 'createframed:vertical_red_stained_framed_glass_pane', 'createframed:orange_stained_tiled_glass_pane', 'createframed:orange_stained_framed_glass_pane', 'createframed:horizontal_orange_stained_framed_glass_pane', 'createframed:vertical_orange_stained_framed_glass_pane', 'createframed:yellow_stained_tiled_glass_pane', 'createframed:yellow_stained_framed_glass_pane', 'createframed:horizontal_yellow_stained_framed_glass_pane', 'createframed:vertical_yellow_stained_framed_glass_pane', 'createframed:green_stained_tiled_glass_pane', 'createframed:green_stained_framed_glass_pane', 'createframed:horizontal_green_stained_framed_glass_pane', 'createframed:vertical_green_stained_framed_glass_pane', 'createframed:lime_stained_tiled_glass_pane', 'createframed:lime_stained_framed_glass_pane',
        'createframed:horizontal_lime_stained_framed_glass_pane', 'createframed:vertical_lime_stained_framed_glass_pane', 'createframed:blue_stained_tiled_glass_pane', 'createframed:blue_stained_framed_glass_pane', 'createframed:horizontal_blue_stained_framed_glass_pane', 'createframed:vertical_blue_stained_framed_glass_pane', 'createframed:light_blue_stained_tiled_glass_pane', 'createframed:light_blue_stained_framed_glass_pane', 'createframed:horizontal_light_blue_stained_framed_glass_pane', 'createframed:vertical_light_blue_stained_framed_glass_pane', 'createframed:cyan_stained_tiled_glass_pane', 'createframed:cyan_stained_framed_glass_pane', 'createframed:horizontal_cyan_stained_framed_glass_pane', 'createframed:vertical_cyan_stained_framed_glass_pane', 'createframed:purple_stained_tiled_glass_pane', 'createframed:purple_stained_framed_glass_pane', 'createframed:horizontal_purple_stained_framed_glass_pane', 'createframed:vertical_purple_stained_framed_glass_pane', 'createframed:magenta_stained_tiled_glass_pane', 'createframed:magenta_stained_framed_glass_pane', 'createframed:horizontal_magenta_stained_framed_glass_pane', 'createframed:vertical_magenta_stained_framed_glass_pane', 'createframed:pink_stained_tiled_glass_pane', 'createframed:pink_stained_framed_glass_pane', 'createframed:horizontal_pink_stained_framed_glass_pane', 'createframed:vertical_pink_stained_framed_glass_pane', 'createframed:black_stained_tiled_glass_pane', 'createframed:black_stained_framed_glass_pane', 'createframed:horizontal_black_stained_framed_glass_pane', 'createframed:vertical_black_stained_framed_glass_pane', 'createframed:gray_stained_tiled_glass_pane', 'createframed:gray_stained_framed_glass_pane', 'createframed:horizontal_gray_stained_framed_glass_pane', 'createframed:vertical_gray_stained_framed_glass_pane', 'createframed:light_gray_stained_tiled_glass_pane', 'createframed:light_gray_stained_framed_glass_pane',
        'createframed:horizontal_light_gray_stained_framed_glass_pane', 'createframed:vertical_light_gray_stained_framed_glass_pane', 'createframed:white_stained_tiled_glass_pane', 'createframed:white_stained_framed_glass_pane', 'createframed:horizontal_white_stained_framed_glass_pane', 'createframed:vertical_white_stained_framed_glass_pane', 'createframed:brown_stained_tiled_glass_pane', 'createframed:brown_stained_framed_glass_pane', 'createframed:horizontal_brown_stained_framed_glass_pane', 'createframed:vertical_brown_stained_framed_glass_pane', 'createframed:tinted_tiled_glass_pane', 'createframed:tinted_framed_glass_pane', 'createframed:horizontal_tinted_framed_glass_pane', 'createframed:vertical_tinted_framed_glass_pane', 'create:tiled_glass_pane', 'create:framed_glass_pane', 'create:horizontal_framed_glass_pane', 'create:vertical_framed_glass_pane']
    );
    add("moddedulo", "fences", "group",
        ['minecraft:oak_fence', 'minecraft:spruce_fence', 'minecraft:birch_fence', 'minecraft:jungle_fence', 'minecraft:acacia_fence', 'minecraft:dark_oak_fence', 'minecraft:mangrove_fence', 'minecraft:cherry_fence', 'minecraft:pale_oak_fence', 'minecraft:bamboo_fence', 'minecraft:crimson_fence', 'minecraft:warped_fence', 'minecraft:nether_brick_fence']
    );
    add("moddedulo", "mesh_fences", "group",
        ['createdeco:andesite_mesh_fence', 'createdeco:brass_mesh_fence', 'createdeco:iron_mesh_fence', 'createdeco:copper_mesh_fence', 'createdeco:industrial_iron_mesh_fence', 'createdeco:zinc_mesh_fence']
    );
    add("moddedulo", "wooden_cogwheels", "group",
        ['createcasing:acacia_cogwheel', 'createcasing:acacia_large_cogwheel', 'createcasing:birch_cogwheel', 'createcasing:birch_large_cogwheel', 'createcasing:bamboo_cogwheel', 'createcasing:bamboo_large_cogwheel', 'createcasing:cherry_cogwheel', 'createcasing:cherry_large_cogwheel', 'createcasing:crimson_cogwheel', 'createcasing:crimson_large_cogwheel', 'createcasing:dark_oak_cogwheel', 'createcasing:dark_oak_large_cogwheel', 'createcasing:oak_cogwheel', 'createcasing:oak_large_cogwheel', 'createcasing:jungle_cogwheel', 'createcasing:jungle_large_cogwheel', 'createcasing:mangrove_cogwheel', 'createcasing:mangrove_large_cogwheel', 'createcasing:warped_cogwheel', 'createcasing:warped_large_cogwheel']
    );
    add("moddedulo", "vertical_vaults", "tag",
        'create_vibrant_vaults:vertical_vaults'
    );
    add("moddedulo", "dyed_vaults", "tag",
        'create_vibrant_vaults:colored_horizontal_item_vaults'
    );
    add("moddedulo", "dyed_frogports", "tag",
        'create_vibrant_vaults:vibrant_frogports'
    );
    add("moddedulo", "dyed_stock_links", "tag",
        'create_vibrant_vaults:vibrant_stock_links'
    );
    add("moddedulo", "dyed_redstone_requesters", "tag",
        'create_vibrant_vaults:vibrant_redstone_requesters'
    );
    add("moddedulo", "dyed_packagers", "tag",
        'create_vibrant_vaults:vibrant_packagers'
    );
});

