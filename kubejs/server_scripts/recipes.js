ServerEvents.recipes(event => {
    // Remove
    event.remove({ output: '#moddedulo:removed' })


    event.remove({ output: /createdeco:.*(window)$/})
    event.remove({ not: {type: 'minecraft:stonecutting'}, output: /createdeco:.*_catwalk_stairs/})
    event.remove({ type: 'minecraft:stonecutting', output: ['dndecor:industrial_catwalk', 'dndecor:large_industrial_chain', 'dndecor:industrial_cross_bolt', 'dndecor:industrial_dash_bolt', 'dndecor:industrial_dot_bolt', 'dndecor:industrial_flat_bolt']})
    event.remove({ id: 'analogaudio:cassette_tape'})
    event.remove({ id: 'analogaudio:radio'})

    // PATCHES - these may be fixed by their respective mods in future updates
    event.remove({ id: 'createdeco:placard' })
    event.shapeless('create:placard', ['#createdeco:placards', 'minecraft:white_dye'])
    
    event.remove({ output: 'minecraft:lead'})
    event.shaped(
        Item.of('minecraft:lead', 2),
        [
        ' SS',
        ' SS',
        'S  '
        ],
        {
        S: 'minecraft:string'
        }
    )

    event.remove({ id: 'minecraft:pale_oak_shelf'})
    event.shaped(
        Item.of('minecraft:pale_oak_shelf', 6),
        [
        'LLL',
        '   ',
        'LLL'
        ],
        {
        L: 'minecraft:stripped_pale_oak_log'
        }
    )

	Color.DYE.forEach(color => {
        event.remove({ id: `supplementaries:candle_holders/candle_holder_${color}_dye`})
        event.shapeless(`supplementaries:candle_holder_${color}`, ['#supplementaries:candle_holders', `minecraft:${color}_dye`])
	    event.shapeless(`supplementaries:trapped_present_${color}`, ['#supplementaries:trapped_presents', `minecraft:${color}_dye`])
	    event.shapeless(`supplementaries:awning_${color}`, ['#supplementaries:awnings', `minecraft:${color}_dye`])
	    event.shapeless(`supplementaries:flag_${color}`, ['#supplementaries:flags', `minecraft:${color}_dye`])
        // Results in duplicates in EMI, but recipes are hard-coded and cannot be hidden
        event.shapeless(`supplementaries:trapped_present_${color}`, [`supplementaries:present_${color}`, 'minecraft:tripwire_hook'])
    })
    event.shapeless('supplementaries:trapped_present', ['supplementaries:present', 'minecraft:tripwire_hook'])

    // Add

    event.smelting('analogaudio:cassette_tape', '#c:music_discs')
    event.shaped(
        Item.of('analogaudio:radio', 1),
        [
        ' C ',
        'CJC',
        ' C '
        ],
        {
        C: 'minecraft:copper_ingot',
        J: 'minecraft:jukebox'
        }
    )

    // Industrial Plating
    event.remove({ id: 'dndecor:beam_from_industrial_iron_block_stonecutting'})
    event.remove({ id: /dndecor:crafting.(|large_)industrial_cogwheel$/})
    event.stonecutting('dndecor:beam', 'create:industrial_iron_block')
    event.shapeless(Item.of('dndecor:industrial_cogwheel', 1), ['create:shaft', 'create:industrial_iron_block'])
    event.shapeless(Item.of('dndecor:large_industrial_cogwheel', 1), ['create:shaft', '2x create:industrial_iron_block'])

    // Metal Bars Parity
    event.stonecutting('4x minecraft:copper_bars', 'minecraft:copper_ingot')
    event.stonecutting('4x minecraft:iron_bars', 'minecraft:iron_ingot')
    event.stonecutting('4x supplementaries:gold_bars', 'minecraft:gold_ingot')

    // Copper Aging
    event.recipes.create.filling('minecraft:exposed_copper_bars', [Fluid.of('minecraft:water'), 'minecraft:copper_bars'])
    event.recipes.create.filling('minecraft:weathered_copper_bars', [Fluid.of('minecraft:water'), 'minecraft:exposed_copper_bars'])
    event.recipes.create.filling('minecraft:oxidized_copper_bars', [Fluid.of('minecraft:water'), 'minecraft:weathered_copper_bars'])

    event.recipes.create.filling('minecraft:exposed_copper_chain', [Fluid.of('minecraft:water'), 'minecraft:copper_chain'])
    event.recipes.create.filling('minecraft:weathered_copper_chain', [Fluid.of('minecraft:water'), 'minecraft:exposed_copper_chain'])
    event.recipes.create.filling('minecraft:oxidized_copper_chain', [Fluid.of('minecraft:water'), 'minecraft:weathered_copper_chain'])

    event.recipes.create.filling('minecraft:exposed_copper_lantern', [Fluid.of('minecraft:water'), 'minecraft:copper_lantern'])
    event.recipes.create.filling('minecraft:weathered_copper_lantern', [Fluid.of('minecraft:water'), 'minecraft:exposed_copper_lantern'])
    event.recipes.create.filling('minecraft:oxidized_copper_lantern', [Fluid.of('minecraft:water'), 'minecraft:weathered_copper_lantern'])

    event.recipes.create.filling('minecraft:exposed_copper_chest', [Fluid.of('minecraft:water'), 'minecraft:copper_chest'])
    event.recipes.create.filling('minecraft:weathered_copper_chest', [Fluid.of('minecraft:water'), 'minecraft:exposed_copper_chest'])
    event.recipes.create.filling('minecraft:oxidized_copper_chest', [Fluid.of('minecraft:water'), 'minecraft:weathered_copper_chest'])

    event.recipes.create.filling('minecraft:exposed_copper_golem_statue', [Fluid.of('minecraft:water'), 'minecraft:copper_golem_statue'])
    event.recipes.create.filling('minecraft:weathered_copper_golem_statue', [Fluid.of('minecraft:water'), 'minecraft:exposed_copper_golem_statue'])
    event.recipes.create.filling('minecraft:oxidized_copper_golem_statue', [Fluid.of('minecraft:water'), 'minecraft:weathered_copper_golem_statue'])

    event.recipes.create.filling('copperagebackport:exposed_copper_button', [Fluid.of('minecraft:water'), 'copperagebackport:copper_button'])
    event.recipes.create.filling('copperagebackport:weathered_copper_button', [Fluid.of('minecraft:water'), 'copperagebackport:exposed_copper_button'])
    event.recipes.create.filling('copperagebackport:oxidized_copper_button', [Fluid.of('minecraft:water'), 'copperagebackport:weathered_copper_button'])

    event.recipes.create.filling('dndecor:exposed_copper_floor', [Fluid.of('minecraft:water'), 'dndecor:copper_floor'])
    event.recipes.create.filling('dndecor:weathered_copper_floor', [Fluid.of('minecraft:water'), 'dndecor:exposed_copper_floor'])
    event.recipes.create.filling('dndecor:oxidized_copper_floor', [Fluid.of('minecraft:water'), 'dndecor:weathered_copper_floor'])

    // De-Aging

    event.recipes.create.deploying('minecraft:copper_bars', ['minecraft:exposed_copper_bars', Ingredient.of('#minecraft:axes')]).keepHeldItem()
    event.recipes.create.deploying('minecraft:exposed_copper_bars', ['minecraft:weathered_copper_bars', Ingredient.of('#minecraft:axes')]).keepHeldItem()
    event.recipes.create.deploying('minecraft:weathered_copper_bars', ['minecraft:oxidized_copper_bars', Ingredient.of('#minecraft:axes')]).keepHeldItem()

    event.recipes.create.deploying('minecraft:copper_chain', ['minecraft:exposed_copper_chain', Ingredient.of('#minecraft:axes')]).keepHeldItem()
    event.recipes.create.deploying('minecraft:exposed_copper_chain', ['minecraft:weathered_copper_chain', Ingredient.of('#minecraft:axes')]).keepHeldItem()
    event.recipes.create.deploying('minecraft:weathered_copper_chain', ['minecraft:oxidized_copper_chain', Ingredient.of('#minecraft:axes')]).keepHeldItem()

    event.recipes.create.deploying('minecraft:copper_lantern', ['minecraft:exposed_copper_lantern', Ingredient.of('#minecraft:axes')]).keepHeldItem()
    event.recipes.create.deploying('minecraft:exposed_copper_lantern', ['minecraft:weathered_copper_lantern', Ingredient.of('#minecraft:axes')]).keepHeldItem()
    event.recipes.create.deploying('minecraft:weathered_copper_lantern', ['minecraft:oxidized_copper_lantern', Ingredient.of('#minecraft:axes')]).keepHeldItem()

    event.recipes.create.deploying('minecraft:copper_chest', ['minecraft:exposed_copper_chest', Ingredient.of('#minecraft:axes')]).keepHeldItem()
    event.recipes.create.deploying('minecraft:exposed_copper_chest', ['minecraft:weathered_copper_chest', Ingredient.of('#minecraft:axes')]).keepHeldItem()
    event.recipes.create.deploying('minecraft:weathered_copper_chest', ['minecraft:oxidized_copper_chest', Ingredient.of('#minecraft:axes')]).keepHeldItem()

    event.recipes.create.deploying('minecraft:copper_golem_statue', ['minecraft:exposed_copper_golem_statue', Ingredient.of('#minecraft:axes')]).keepHeldItem()
    event.recipes.create.deploying('minecraft:exposed_copper_golem_statue', ['minecraft:weathered_copper_golem_statue', Ingredient.of('#minecraft:axes')]).keepHeldItem()
    event.recipes.create.deploying('minecraft:weathered_copper_golem_statue', ['minecraft:oxidized_copper_golem_statue', Ingredient.of('#minecraft:axes')]).keepHeldItem()

    event.recipes.create.deploying('copperagebackport:copper_button', ['copperagebackport:exposed_copper_button', Ingredient.of('#minecraft:axes')]).keepHeldItem()
    event.recipes.create.deploying('copperagebackport:exposed_copper_button', ['copperagebackport:weathered_copper_button', Ingredient.of('#minecraft:axes')]).keepHeldItem()
    event.recipes.create.deploying('copperagebackport:weathered_copper_button', ['copperagebackport:oxidized_copper_button', Ingredient.of('#minecraft:axes')]).keepHeldItem()

    // Removing Wax

    event.recipes.create.deploying('minecraft:copper_bars', ['minecraft:waxed_copper_bars', Ingredient.of('#minecraft:axes')]).keepHeldItem()
    event.recipes.create.deploying('minecraft:exposed_copper_bars', ['minecraft:waxed_exposed_copper_bars', Ingredient.of('#minecraft:axes')]).keepHeldItem()
    event.recipes.create.deploying('minecraft:weathered_copper_bars', ['minecraft:waxed_weathered_copper_bars', Ingredient.of('#minecraft:axes')]).keepHeldItem()
    event.recipes.create.deploying('minecraft:oxidized_copper_bars', ['minecraft:waxed_oxidized_copper_bars', Ingredient.of('#minecraft:axes')]).keepHeldItem()

    event.recipes.create.deploying('minecraft:copper_chain', ['minecraft:waxed_copper_chain', Ingredient.of('#minecraft:axes')]).keepHeldItem()
    event.recipes.create.deploying('minecraft:exposed_copper_chain', ['minecraft:waxed_exposed_copper_chain', Ingredient.of('#minecraft:axes')]).keepHeldItem()
    event.recipes.create.deploying('minecraft:weathered_copper_chain', ['minecraft:waxed_weathered_copper_chain', Ingredient.of('#minecraft:axes')]).keepHeldItem()
    event.recipes.create.deploying('minecraft:oxidized_copper_chain', ['minecraft:waxed_oxidized_copper_chain', Ingredient.of('#minecraft:axes')]).keepHeldItem()

    event.recipes.create.deploying('minecraft:copper_lantern', ['minecraft:waxed_copper_lantern', Ingredient.of('#minecraft:axes')]).keepHeldItem()
    event.recipes.create.deploying('minecraft:exposed_copper_lantern', ['minecraft:waxed_exposed_copper_lantern', Ingredient.of('#minecraft:axes')]).keepHeldItem()
    event.recipes.create.deploying('minecraft:weathered_copper_lantern', ['minecraft:waxed_weathered_copper_lantern', Ingredient.of('#minecraft:axes')]).keepHeldItem()
    event.recipes.create.deploying('minecraft:oxidized_copper_lantern', ['minecraft:waxed_oxidized_copper_lantern', Ingredient.of('#minecraft:axes')]).keepHeldItem()

    event.recipes.create.deploying('minecraft:copper_chest', ['minecraft:waxed_copper_chest', Ingredient.of('#minecraft:axes')]).keepHeldItem()
    event.recipes.create.deploying('minecraft:exposed_copper_chest', ['minecraft:waxed_exposed_copper_chest', Ingredient.of('#minecraft:axes')]).keepHeldItem()
    event.recipes.create.deploying('minecraft:weathered_copper_chest', ['minecraft:waxed_weathered_copper_chest', Ingredient.of('#minecraft:axes')]).keepHeldItem()
    event.recipes.create.deploying('minecraft:oxidized_copper_chest', ['minecraft:waxed_oxidized_copper_chest', Ingredient.of('#minecraft:axes')]).keepHeldItem()

    event.recipes.create.deploying('minecraft:copper_golem_statue', ['minecraft:waxed_copper_golem_statue', Ingredient.of('#minecraft:axes')]).keepHeldItem()
    event.recipes.create.deploying('minecraft:exposed_copper_golem_statue', ['minecraft:waxed_exposed_copper_golem_statue', Ingredient.of('#minecraft:axes')]).keepHeldItem()
    event.recipes.create.deploying('minecraft:weathered_copper_golem_statue', ['minecraft:waxed_weathered_copper_golem_statue', Ingredient.of('#minecraft:axes')]).keepHeldItem()
    event.recipes.create.deploying('minecraft:oxidized_copper_golem_statue', ['minecraft:waxed_oxidized_copper_golem_statue', Ingredient.of('#minecraft:axes')]).keepHeldItem()

    event.recipes.create.deploying('copperagebackport:copper_button', ['copperagebackport:waxed_copper_button', Ingredient.of('#minecraft:axes')]).keepHeldItem()
    event.recipes.create.deploying('copperagebackport:exposed_copper_button', ['copperagebackport:waxed_exposed_copper_button', Ingredient.of('#minecraft:axes')]).keepHeldItem()
    event.recipes.create.deploying('copperagebackport:weathered_copper_button', ['copperagebackport:waxed_weathered_copper_button', Ingredient.of('#minecraft:axes')]).keepHeldItem()
    event.recipes.create.deploying('copperagebackport:oxidized_copper_button', ['copperagebackport:waxed_oxidized_copper_button', Ingredient.of('#minecraft:axes')]).keepHeldItem()

    // Honeycomb Block Waxing

    event.recipes.create.deploying('minecraft:waxed_copper_bars', ['minecraft:copper_bars', Ingredient.of('minecraft:honeycomb_block')]).keepHeldItem()
    event.recipes.create.deploying('minecraft:waxed_exposed_copper_bars', ['minecraft:exposed_copper_bars', Ingredient.of('minecraft:honeycomb_block')]).keepHeldItem()
    event.recipes.create.deploying('minecraft:waxed_weathered_copper_bars', ['minecraft:weathered_copper_bars', Ingredient.of('minecraft:honeycomb_block')]).keepHeldItem()
    event.recipes.create.deploying('minecraft:waxed_oxidized_copper_bars', ['minecraft:oxidized_copper_bars', Ingredient.of('minecraft:honeycomb_block')]).keepHeldItem()

    event.recipes.create.deploying('minecraft:waxed_copper_chain', ['minecraft:copper_chain', Ingredient.of('minecraft:honeycomb_block')]).keepHeldItem()
    event.recipes.create.deploying('minecraft:waxed_exposed_copper_chain', ['minecraft:exposed_copper_chain', Ingredient.of('minecraft:honeycomb_block')]).keepHeldItem()
    event.recipes.create.deploying('minecraft:waxed_weathered_copper_chain', ['minecraft:weathered_copper_chain', Ingredient.of('minecraft:honeycomb_block')]).keepHeldItem()
    event.recipes.create.deploying('minecraft:waxed_oxidized_copper_chain', ['minecraft:oxidized_copper_chain', Ingredient.of('minecraft:honeycomb_block')]).keepHeldItem()

    event.recipes.create.deploying('minecraft:waxed_copper_lantern', ['minecraft:copper_lantern', Ingredient.of('minecraft:honeycomb_block')]).keepHeldItem()
    event.recipes.create.deploying('minecraft:waxed_exposed_copper_lantern', ['minecraft:exposed_copper_lantern', Ingredient.of('minecraft:honeycomb_block')]).keepHeldItem()
    event.recipes.create.deploying('minecraft:waxed_weathered_copper_lantern', ['minecraft:weathered_copper_lantern', Ingredient.of('minecraft:honeycomb_block')]).keepHeldItem()
    event.recipes.create.deploying('minecraft:waxed_oxidized_copper_lantern', ['minecraft:oxidized_copper_lantern', Ingredient.of('minecraft:honeycomb_block')]).keepHeldItem()

    event.recipes.create.deploying('minecraft:waxed_copper_chest', ['minecraft:copper_chest', Ingredient.of('minecraft:honeycomb_block')]).keepHeldItem()
    event.recipes.create.deploying('minecraft:waxed_exposed_copper_chest', ['minecraft:exposed_copper_chest', Ingredient.of('minecraft:honeycomb_block')]).keepHeldItem()
    event.recipes.create.deploying('minecraft:waxed_weathered_copper_chest', ['minecraft:weathered_copper_chest', Ingredient.of('minecraft:honeycomb_block')]).keepHeldItem()
    event.recipes.create.deploying('minecraft:waxed_oxidized_copper_chest', ['minecraft:oxidized_copper_chest', Ingredient.of('minecraft:honeycomb_block')]).keepHeldItem()

    event.recipes.create.deploying('minecraft:waxed_copper_golem_statue', ['minecraft:copper_golem_statue', Ingredient.of('minecraft:honeycomb_block')]).keepHeldItem()
    event.recipes.create.deploying('minecraft:waxed_exposed_copper_golem_statue', ['minecraft:exposed_copper_golem_statue', Ingredient.of('minecraft:honeycomb_block')]).keepHeldItem()
    event.recipes.create.deploying('minecraft:waxed_weathered_copper_golem_statue', ['minecraft:weathered_copper_golem_statue', Ingredient.of('minecraft:honeycomb_block')]).keepHeldItem()
    event.recipes.create.deploying('minecraft:waxed_oxidized_copper_golem_statue', ['minecraft:oxidized_copper_golem_statue', Ingredient.of('minecraft:honeycomb_block')]).keepHeldItem()

    event.recipes.create.deploying('copperagebackport:waxed_copper_button', ['copperagebackport:copper_button', Ingredient.of('minecraft:honeycomb_block')]).keepHeldItem()
    event.recipes.create.deploying('copperagebackport:waxed_exposed_copper_button', ['copperagebackport:exposed_copper_button', Ingredient.of('minecraft:honeycomb_block')]).keepHeldItem()
    event.recipes.create.deploying('copperagebackport:waxed_weathered_copper_button', ['copperagebackport:weathered_copper_button', Ingredient.of('minecraft:honeycomb_block')]).keepHeldItem()
    event.recipes.create.deploying('copperagebackport:waxed_oxidized_copper_button', ['copperagebackport:oxidized_copper_button', Ingredient.of('minecraft:honeycomb_block')]).keepHeldItem()

    // Deco
    event.stonecutting('createdeco:andesite_window', 'createframed:andesite_alloy_window')
    event.stonecutting('createdeco:brass_window', 'createframed:brass_window')
    event.stonecutting('createdeco:iron_window', ['create:ornate_iron_window', 'dndecor:ornate_iron_glass'])
    event.stonecutting('createdeco:industrial_iron_window', 'create:industrial_iron_window')

    event.stonecutting('createframed:andesite_alloy_window', 'createdeco:andesite_window')
    event.stonecutting('createframed:brass_window', 'createdeco:brass_window')
    event.stonecutting('create:ornate_iron_window', 'createdeco:iron_window')
    event.stonecutting('dndecor:ornate_iron_glass', 'createdeco:iron_window')
    event.stonecutting('create:industrial_iron_window', 'createdeco:industrial_iron_window')

    event.stonecutting('4x dndecor:industrial_catwalk', 'createdeco:industrial_iron_ingot')
    event.stonecutting('4x dndecor:large_industrial_chain', 'createdeco:industrial_iron_ingot')
    event.stonecutting('4x dndecor:industrial_cross_bolt', 'createdeco:industrial_iron_ingot')
    event.stonecutting('4x dndecor:industrial_dash_bolt', 'createdeco:industrial_iron_ingot')
    event.stonecutting('4x dndecor:industrial_dot_bolt', 'createdeco:industrial_iron_ingot')
    event.stonecutting('4x dndecor:industrial_flat_bolt', 'createdeco:industrial_iron_ingot')

    // CC:Tweaked & Advanced Peripherals
    event.remove({ id: 'computercraft:computer_normal' })
    event.shaped(
        Item.of('computercraft:computer_normal', 1),
        [
        'AAA',
        'AGA',
        'AEA'
        ],
        {
        A: 'create:andesite_alloy',
        E: 'create:electron_tube',
        G: '#c:glass_panes'
        }
    )
    event.remove({ output: 'computercraft:computer_advanced'})
    event.shaped(
        Item.of('computercraft:computer_advanced', 1),
        [
        'BBB',
        'BCB',
        'BPB'
        ],
        {
        B: 'create:brass_sheet',
        C: 'computercraft:computer_normal',
        P: 'create:precision_mechanism'
        }
    )
    event.remove({ id: 'computercraft:monitor_normal'})
    event.shaped(
        Item.of('computercraft:monitor_normal', 1),
        [
        'AAA',
        'AGA',
        'AAA'
        ],
        {
        A: 'create:andesite_alloy',
        G: '#c:glass_panes'
        }
    )
    event.remove({ id: 'computercraft:monitor_advanced'})
    event.shaped(
        Item.of('computercraft:monitor_advanced', 2),
        [
        'BBB',
        'BMB',
        'BBB'
        ],
        {
        B: 'create:brass_sheet',
        M: 'computercraft:monitor_normal'
        }
    )
    event.remove({ id: 'computercraft:speaker'})
    event.shaped(
        Item.of('computercraft:speaker', 1),
        [
        'AAA',
        'ANA',
        'AEA'
        ],
        {
        A: 'create:andesite_alloy',
        N: 'minecraft:note_block',
        E: 'create:electron_tube'
        }
    )
    event.remove({ id: 'computercraft:printer'})
    event.shaped(
        Item.of('computercraft:printer', 1),
        [
        'AAA',
        'ADA',
        'AEA'
        ],
        {
        A: 'create:andesite_alloy',
        D: '#c:dyes',
        E: 'create:electron_tube'
        }
    )
    event.remove({ id: 'computercraft:disk_drive'})
    event.shaped(
        Item.of('computercraft:disk_drive', 1),
        [
        'AAA',
        'AHA',
        'AEA'
        ],
        {
        A: 'create:andesite_alloy',
        H: 'minecraft:hopper',
        E: 'create:electron_tube'
        }
    )
    event.remove({ id: 'computercraft:redstone_relay'})
    event.shaped(
        Item.of('computercraft:redstone_relay', 1),
        [
        'ARA',
        'RMR',
        'AEA'
        ],
        {
        A: 'create:andesite_alloy',
        M: '#computercraft:wired_modem',
        E: 'create:electron_tube',
        R: 'minecraft:redstone'
        }
    )
    event.remove({ id: 'computercraft:turtle_normal'})
    event.shaped(
        Item.of('computercraft:turtle_normal', 1),
        [
        'III',
        'ICI',
        'IPI'
        ],
        {
        I: 'create:iron_sheet',
        C: 'computercraft:computer_normal',
        P: 'create:precision_mechanism'
        }
    )
    event.remove({ id: 'computercraft:turtle_advanced'})
    event.remove({ id: 'computercraft:turtle_advanced_upgrade'})
    event.shaped(
        Item.of('computercraft:turtle_advanced', 1),
        [
        'BBB',
        'BTB',
        'BSB'
        ],
        {
        B: 'create:brass_sheet',
        T: 'computercraft:turtle_normal',
        S: 'create:sturdy_sheet'
        }
    )
    event.remove({ id: 'computercraft:wireless_modem_normal'})
    event.shaped(
        Item.of('computercraft:wireless_modem_normal', 1),
        [
        'AAA',
        'ATA',
        'AEA'
        ],
        {
        A: 'create:andesite_alloy',
        T: 'create:transmitter',
        E: 'minecraft:ender_pearl'
        }
    )
    event.remove({ id: 'computercraft:wireless_modem_advanced'})
    event.shaped(
        Item.of('computercraft:wireless_modem_advanced', 1),
        [
        'BBB',
        'BMB',
        'BEB'
        ],
        {
        B: 'create:brass_sheet',
        M: 'computercraft:wireless_modem_normal',
        E: 'minecraft:ender_eye'
        }
    )
    event.remove({ id: 'computercraft:cable'})
    event.shaped(
        Item.of('computercraft:cable', 6),
        [
        ' C ',
        'ARA',
        ' C '
        ],
        {
        A: 'create:andesite_alloy',
        C: 'create:copper_sheet',
        R: 'minecraft:redstone'
        }
    )
    event.remove({ id: 'computercraft:wired_modem'})
    event.shaped(
        Item.of('computercraft:wired_modem', 1),
        [
        ' A ',
        'AEA',
        ' A '
        ],
        {
        A: 'create:andesite_alloy',
        E: 'create:electron_tube'
        }
    )
    event.remove({ id: 'computercraft:pocket_computer_normal'})
    event.shaped(
        Item.of('computercraft:pocket_computer_normal', 1),
        [
        'AAA',
        'ACA',
        'APA'
        ],
        {
        A: 'create:andesite_alloy',
        P: 'create:precision_mechanism',
        C: 'computercraft:computer_normal'
        }
    )
    event.remove({ output: 'computercraft:pocket_computer_advanced'})
    event.shaped(
        Item.of('computercraft:pocket_computer_advanced', 1),
        [
        'BBB',
        'BCB',
        'BSB'
        ],
        {
        B: 'create:brass_sheet',
        C: 'computercraft:pocket_computer_normal',
        S: 'create:sturdy_sheet'
        }
    )
    event.remove({ output: 'advancedperipherals:environment_detector'})
    event.shaped(
        Item.of('advancedperipherals:environment_detector', 1),
        [
        'III',
        'ICI',
        'ISI'
        ],
        {
        I: 'create:industrial_iron_block',
        C: '#c:crops',
        S: 'create:sturdy_sheet'
        }
    )
    event.remove({ output: 'advancedperipherals:chat_box'})
    event.shaped(
        Item.of('advancedperipherals:chat_box', 1),
        [
        'III',
        'IMI',
        'ISI'
        ],
        {
        I: 'create:industrial_iron_block',
        M: 'computercraft:wireless_modem_advanced',
        S: 'create:sturdy_sheet'
        }
    )
    event.remove({ output: 'advancedperipherals:player_detector'})
    event.shaped(
        Item.of('advancedperipherals:player_detector', 1),
        [
        'III',
        'IHI',
        'ISI'
        ],
        {
        I: 'create:industrial_iron_block',
        H: 'minecraft:player_head',
        S: 'create:sturdy_sheet'
        }
    )
    event.remove({ output: 'advancedperipherals:block_reader'})
    event.shaped(
        Item.of('advancedperipherals:block_reader', 1),
        [
        'III',
        'IOI',
        'ISI'
        ],
        {
        I: 'create:industrial_iron_block',
        O: 'minecraft:observer',
        S: 'create:sturdy_sheet'
        }
    )
    event.remove({ output: 'advancedperipherals:nbt_storage'})
    event.shaped(
        Item.of('advancedperipherals:nbt_storage', 1),
        [
        'III',
        'IEI',
        'ISI'
        ],
        {
        I: 'create:industrial_iron_block',
        E: 'minecraft:ender_chest',
        S: 'create:sturdy_sheet'
        }
    )

    // Supplementaries

    event.remove({ id: 'supplementaries:present' })
    event.remove({ id: 'supplementaries:trapped_present_2' })

    //event.shaped(
    //    Item.of('supplementaries:awning', 1),
    //    [
    //    'TTT',
    //    'S S',
    //    '   '
    //    ],
    //    {
    //    T: 'minecraft:string',
    //    S: 'minecraft:stick'
    //    }
    //)
    event.shaped(
        Item.of('supplementaries:doormat', 1),
        [
        '   ',
        'TTT',
        '   '
        ],
        {
        T: 'minecraft:string'
        }
    )
    event.recipes.create.filling('supplementaries:antique_ink', [Fluid.ingredientOf('create:potion', {
        'create:potion_fluid_bottle_type': 'regular',
        'minecraft:potion_contents': {
            potion: 'minecraft:slowness'
        },
    }).withAmount(250), 'minecraft:ink_sac'])
    
    // Ice remove dye
    event.shapeless(`supplementaries:trapped_present`, ['#supplementaries:presents', 'minecraft:ice'])
    event.shapeless(`supplementaries:awning`, ['#supplementaries:awnings', 'minecraft:ice'])
    event.shapeless(`supplementaries:candle_holder`, ['#supplementaries:candle_holders', 'minecraft:ice'])

})