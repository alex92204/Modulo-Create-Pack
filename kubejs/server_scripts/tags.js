// Item Tags
//const paintBucket = Item.of('minecraft:lingering_potion', {'custom_data': {'eroxified2': {'item': {'throwable': {'detect': 1, 'run_command': "function mcpaint:item/paint_bucket/api/used", 'stopsound': 1}}}, 'mcpaint': {'paint_bucket': 1}}, 'custom_model_data': 36000, 'hide_additional_tooltip':{}, 'item_name': '{"translate":"item.mcpaint.paint_bucket"}', 'potion_contents': {'custom_color': 14770761}, 'max_stack_size': 16, 'attribute_modifiers': {'modifiers': [{'amount': -100.0, 'id': "mcpaint:prevent_entity_interaction/mainhand", 'operation': "add_value", 'slot': "mainhand", 'type': "minecraft:player.entity_interaction_range"}, {'amount': -100.0, 'id': "mcpaint:prevent_entity_interaction/offhand", 'type': "minecraft:player.entity_interaction_range"}], 'show_in_tooltip': 0}})

ServerEvents.tags('item', event => {
    event.add('c:music_discs', 'minecraft:music_disc_bounce')
    event.add('c:buckets', ['minecraft:sulfur_cube_bucket', 'aeronautics:levitite_blend_bucket'])
    event.add('moddedulo:vhs_tapes', "vista:cassette")
    event.add('minecraft:slabs', /create(|deco):.*_slab$/)
    event.add('minecraft:stairs', /create:.*_stairs$/)
    event.add('c:ingots', 'createcasing:chorium_ingot')
    event.add('minecraft:rails', 'create:controller_rail')
    event.add('moddedulo:boilers', /dndecor:.*_boiler$/)
    event.add('moddedulo:catwalks', [/dndecor:.*_catwalk/])
    event.add('moddedulo:statues', ['minecraft:armor_stand', 'strawstatues:straw_statue'])
    event.add('moddedulo:frontlights', /dndecor:.*_frontlight/)
    event.add('dndecor:industrial_cogwheels', 'dndecor:industrial_cogwheel')

    event.add('moddedulo:wooden_cogwheels', ['create:cogwheel', /createcasing:(acacia|birch|bamboo|cherry|crimson|warped|dark_oak|oak|jungle|mangrove)_cogwheel/])
    event.add('moddedulo:large_wooden_cogwheels', ['create:large_cogwheel', /createcasing:(acacia|birch|bamboo|cherry|crimson|warped|dark_oak|oak|jungle|mangrove)_large_cogwheel/])

    event.add('railways:internal/glass/colorless', '#c:glass_blocks/colorless')
    
    // Connected Textures
    const connectedLocometals = Ingredient.of(/.*locometal($|.pillar|.vent|.smokebox|.boiler)/).except(/(.*flat.*|.*plated.*)/).itemIds
    const connectedStoneBlocks = Ingredient.of(/(create|dndecor):.*(pillar|layered).*/).itemIds
    const connectedGlass = Ingredient.of(/create.*:.*framed_glass(_pane|_trapdoor|$)/).itemIds
    event.add('moddedulo:connected_textures', [connectedLocometals, connectedStoneBlocks, connectedGlass, /.*window.*/, '#create:casing', '#aeronautics:levitite', /dndecor:\w*sheet_metal$/, 'dndecor:industrial_plating_block', 'dndecor:ornate_grate', 'dndecor:zinc_checker_tiles', '#dndecor:dark_metal_plating_decor', '#dndecor:large_metal_girder_decor', '#dndecor:deepslate_tiles_decor', '#dndecor:stone_metal_decor', 'dndecor:ornate_iron_glass_pane', 'dndecor:ornate_iron_glass'])
    
    // Remove
    event.remove('minecraft:piglin_loved', /computercraft:.*_advanced/)
    event.remove('c:glass_blocks', ['createframed:copper_window', 'createframed:zinc_window', 'createframed:andesite_alloy_window', 'createframed:rose_quartz_window', 'createframed:brass_window'])

    // Removal List
    const removedDeco = [/createdeco:.*(catwalk|hull|shipping_container|bars_overlay|sheet_metal|copper_bars|copper_window.*|zinc_window.*)$/]
    const removedAdvancedperipherals = [/advancedperipherals:.*(_automata_core|memory_card|computer_tool|peripheral_casing|geo_scanner|me_bridge|rs_bridge|energy_detector|inventory_manager|colony_integrator|chunk_controller)$/]
    const removedSophisticated = Ingredient.of(/sophisticated.*/).except(/sophisticatedbackpacks:(.*backpack|.*pickup.*|.*filter.*|.*refill.*|.*starter.*|.*tier_.|.*tool_swapper.*|upgrade_base)$/).itemIds
    const removedSupplementaries = [/supplementaries:.*(crank|cog.*|relayer|speaker.*|bellows|spring.*|turn.*|pulley.*|fodder|.*rope|cage|sack|bamboo_spikes|urn|soap|cannon.*|flax|lumisene.*|.*lamp|.*tile.|.*bunting|feather.*|flint.*|spider_head|barnacles|item_shelf|sugar_cube|planter|ash.*|.*daub.*|hat_stand|altimeter|quiver|slice_map|bubble_blower|wrench|.*bomb|slingshot)$/]
    const removedEncased = [/createcasing:(.*sheet|refined_radiance|shadow_steel).*/]
    event.add('moddedulo:removed', [removedDeco, removedAdvancedperipherals, removedSophisticated, removedSupplementaries, removedEncased, /create_vibrant_vaults:.*shipping_container$/, '@kubejs', 'minecraft:copper_nugget', 'horseman:copper_horn'])
})

// Block Tags
ServerEvents.tags('block', event => {
    event.add('simulated:non_movable', ['minecraft:obsidian', 'minecraft:bedrock', 'minecraft:spawner', 'minecraft:trial_spawner', 'minecraft:vault', 'minecraft:reinforced_deepslate', 'minecraft:end_portal_frame', 'kubejs:complex_door'])
    event.add('moddedulo:copper_bulbs', /minecraft:.*copper_bulb/)
    event.add('moddedulo:copper_golems', /minecraft:.*copper_golem_statue/)
    event.add('minecraft:buttons', /copperagebackport:.*copper_button/)

    event.add('create:chest_mounted_storage', '#minecraft:copper_chests')

    // Sable tags
    event.add('sable:light',
      "#supplementaries:presents",
      "#supplementaries:trapped_presents",
      "supplementaries:gold_bars",
      "supplementaries:globe",
      "supplementaries:blackboard",
      "supplementaries:crystal_display",
      "supplementaries:globe_sepia",
      "supplementaries:fine_wood",
      "vista:viewfinder")
    event.add('sable:quarter_volume',
      "#supplementaries:posts",
      "#supplementaries:candle_holders",
      "#supplementaries:flags",
      "#supplementaries:buntings",
      "#supplementaries:awnings",
      "supplementaries:goblet",
      "supplementaries:jar",
      "supplementaries:iron_gate",
      "supplementaries:hourglass",
      "supplementaries:flower_box",
      "supplementaries:wicker_fence",
      "supplementaries:wind_vane",
      "supplementaries:book_pile",
      "supplementaries:stick",
      "supplementaries:blaze_rod")
    event.add('sable:half_volume',
      "supplementaries:fine_wood_stairs",
      "supplementaries:fine_wood_slab",
      "supplementaries:statue",
      "supplementaries:blackboard",
      "supplementaries:crystal_display")

    // Expanded Wrenchery
  event.add('create:wrench_pickup', [
    /.*chain$/,
    "#moddedulo:copper_bulbs",
    "#moddedulo:copper_golems",
    "#create:seats",
    "#minecraft:buttons",
    "#minecraft:pressure_plates",
    "#minecraft:rails",
    "#minecraft:shulker_boxes",
    "#minecraft:lightning_rods",
    "@computercraft",
    "@cccbridge",
    "@advancedperipherals",
    "@vista",
    "@analogaudio",
    "supplementaries:clock_block",
    "supplementaries:blackboard",
    "supplementaries:redstone_illuminator",
    "supplementaries:safe",
    "supplementaries:sconce_lever",
    "supplementaries:hourglass",
    "supplementaries:faucet",
    "dndecor:text_plate",
    "create:industrial_iron_block",
    "create:weathered_iron_block",
    "minecraft:comparator",
    "minecraft:crafter",
    "minecraft:daylight_detector",
    "minecraft:dispenser",
    "minecraft:dropper",
    "minecraft:honey_block",
    "minecraft:hopper",
    "minecraft:jukebox",
    "minecraft:ladder",
    "minecraft:lever",
    "minecraft:note_block",
    "minecraft:observer",
    "minecraft:piston",
    "minecraft:redstone_block",
    "minecraft:redstone_lamp",
    "minecraft:redstone_wire",
    "minecraft:repeater",
    "minecraft:slime_block",
    "minecraft:sticky_piston",
    "minecraft:target",
    "minecraft:tripwire",
    "minecraft:tripwire_hook"
  ])
})
