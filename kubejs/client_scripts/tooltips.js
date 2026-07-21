ItemEvents.modifyTooltips(e => {
    // Connected Textures
    e.modify('#moddedulo:connected_textures', {shift:false}, t => { 
        t.insert(1, Text.join([Text.gray('Connected Texture').italic()]))
    })
    e.modify('#moddedulo:connected_textures', {shift:true}, t => { 
        t.insert(1, Text.join([Text.gray('Connected Texture').italic()]))
    })

    // Removed Item Warning
    e.modify('#moddedulo:removed', {shift:false}, t => { 
        t.insert(1, [
        Text.join([Text.red('Removed Item!').bold()]),
        Text.join([Text.red('Please tell me if you can see this')])
        ])
    })

    e.modify('kubejs:complex_door', {shift:false}, t => { 
        t.insert(1, [
        Text.join([Text.white('Please place on an Unbreakable Andesite!')]),
        Text.join([Text.gray('Teleports players to the Complex. Stores data so that players enter and leave at the same door.')]),
        ''
        ])
    })
    e.modify('kubejs:unbreakable_andesite', {shift:false}, t => { 
        t.insert(1, [
        Text.join([Text.white('Please only use for placing Complex Doors on top!')]),
        ''
        ])
    })
})

// Create Style Tooltips
// e is the event.
// x is the oridinary color.
// h is the highlight color.
// t is text. 
// In .color method of a Component you can specify any arbitrary color

ItemEvents.modifyTooltips(e => {
    const x = 0xc7954b
    const h = 0xeeda78

    e.modify('#moddedulo:boilers', {shift:false}, t => { 
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('#moddedulo:boilers', {shift:true}, t => {
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.gray('When R-Clicked with Wrench')]),
        Text.join([Text.of(' Increases').color(h), Text.of(' the size of the boiler.').color(x)]),
        Text.join([Text.gray('When Sneak R-Clicked with Wrench')]),
        Text.join([Text.of(' Decreases').color(h), Text.of(' the size of the boiler.').color(x)])
        ])
    })

    e.modify('dndecor:text_plate', {shift:false}, t => { 
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('dndecor:text_plate', {shift:true}, t => {
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.of('Functions like ').color(x), Text.of('Nixie Tubes').color(h), Text.of('.').color(x)])
        ])
    })

    e.modify('#moddedulo:frontlights', {shift:true}, t => {
        t.insert(12, [
        Text.join([Text.gray('When placed while sneaking')]),
        Text.join([Text.of(' Places a smaller variant').color(x)])
        ])
    })

    e.modify('#moddedulo:catwalks', {shift:false}, t => { 
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('#moddedulo:catwalks', {shift:true}, t => {
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.gray('When R-Clicked with Wrench')]),
        Text.join([Text.of(' Cycles the ').color(x), Text.of('height').color(h), Text.of(' of the catwalk.').color(x)])
        ])
    })

    e.modify('#moddedulo:statues', {shift:false}, t => {
        t.removeLine(1)
        t.removeLine(1)
        t.removeLine(1)
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('#moddedulo:statues', {shift:true}, t => {
        t.removeLine(1)
        t.removeLine(1)
        t.removeLine(1)
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.gray('When Sneak R-Clicked with an Empty Hand')]),
        Text.join([Text.of(' Opens a ').color(x), Text.of('Configuration Menu').color(h), Text.of('.').color(x)])
        ])
    })

    // Advanced Peripherals re-writes

    e.modify('advancedperipherals:environment_detector', {shift:false}, t => {
        t.removeLine(1)
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('advancedperipherals:environment_detector', {shift:true}, t => {
        t.removeLine(1)
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.of('A Peripheral that provides information from the ').color(x), Text.of('Environment').color(h), Text.of(', such as: ').color(x), Text.of('Time').color(h), Text.of(', ').color(x), Text.of('Biome').color(h), Text.of(', or ').color(x), Text.of('Light Level').color(h), Text.of('.').color(x)])
        ])
    })
    e.modify('advancedperipherals:chat_box', {shift:false}, t => {
        t.removeLine(1)
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('advancedperipherals:chat_box', {shift:true}, t => {
        t.removeLine(1)
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.of('A Peripheral that interacts with the ').color(x), Text.of('In-Game Chat').color(h), Text.of('. Can ').color(x), Text.of('Read').color(h), Text.of(' and ').color(x), Text.of('Write').color(h), Text.of(' messages.').color(x)])
        ])
    })
    e.modify('advancedperipherals:player_detector', {shift:false}, t => {
        t.removeLine(1)
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('advancedperipherals:player_detector', {shift:true}, t => {
        t.removeLine(1)
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.of('A Peripheral that provides information about ').color(x), Text.of('Players').color(h), Text.of('.').color(x)])
        ])
    })
    e.modify('advancedperipherals:block_reader', {shift:false}, t => {
        t.removeLine(1)
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('advancedperipherals:block_reader', {shift:true}, t => {
        t.removeLine(1)
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.of('A Peripheral that provides information about any ').color(x), Text.of('Blocks').color(h), Text.of(' or ').color(x), Text.of('Tile Entities').color(h), Text.of(' in front of it.').color(x)])
        ])
    })
    e.modify('advancedperipherals:nbt_storage', {shift:false}, t => {
        t.removeLine(1)
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('advancedperipherals:nbt_storage', {shift:true}, t => {
        t.removeLine(1)
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.of('A Peripheral that allows ').color(x), Text.of('Reading').color(h), Text.of(' and ').color(x), Text.of('Writing').color(h), Text.of(' of ').color(x), Text.of('NBT Data').color(h), Text.of('.').color(x)])
        ])
    })

    // Vista

    e.modify('vista:cassette', {shift:false}, t => {
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('vista:cassette', {shift:true}, t => {
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.of('Insert into a ').color(x), Text.of('Television').color(h), Text.of(' to play a ').color(x), Text.of('Unique GIF').color(h), Text.of('.').color(x)]),
        Text.join([Text.of('Drops when a ').color(x), Text.of('Creeper').color(h), Text.of(' is killed by a ').color(x), Text.of('Pillager').color(h), Text.of('.').color(x)])
        ])
    })
    e.modify('vista:television', {shift:false}, t => {
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('vista:television', {shift:true}, t => {
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.of('Plays ').color(x), Text.of('VHS Tapes').color(h), Text.of(' when powered by redstone.').color(x)]),
        '',
        Text.join([Text.gray('When Sneak R-Clicked with an Empty Hand')]),
        Text.join([Text.of(' Pauses ').color(h), Text.of('the current video').color(x)])
        ])
    })
    e.modify('vista:wave_gate', {shift:false}, t => {
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('vista:wave_gate', {shift:true}, t => {
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.of('Downloads a ').color(x), Text.of('Video').color(h), Text.of(' from a ').color(x), Text.of('URL').color(h), Text.of(' to be written to a ').color(x), Text.of('Hollow VHS Tape').color(h)])
        ])
    })
    e.modify('vista:viewfinder', {shift:false}, t => {
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('vista:viewfinder', {shift:true}, t => {
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.of('Can be interacted with to see a particular ').color(x), Text.of('View').color(h), Text.of('.').color(x)]),
        '',
        Text.join([Text.gray('When R-Clicked with a Stained Glass Pane')]),
        Text.join([Text.of(' Applies a ').color(x), Text.of('Tint').color(h)]),
        Text.join([Text.gray('When powered by Redstone')]),
        Text.join([Text.of(' Remotely adjusts the ').color(x), Text.of('Zoom').color(h)])
        ])
    })
    e.modify('vista:hollow_cassette', {shift:false}, t => {
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('vista:hollow_cassette', {shift:true}, t => {
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.of('Can play video from ').color(x), Text.of('Viewfinders').color(h), Text.of(' or ').color(x), Text.of('Wave Gates').color(h), Text.of(' on a ').color(x), Text.of('Television').color(h), Text.of('.').color(x)])
        ])
    })

    // Simulated Gauges

    e.modify('simulated_gauges:altitude_gauge', {shift:false}, t => {
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('simulated_gauges:altitude_gauge', {shift:true}, t => {
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.of('Can read the ').color(x), Text.of('Height').color(h), Text.of(' or ').color(x), Text.of('Air Pressure').color(h), Text.of(' at its position.').color(x)])
        ])
    })
    e.modify('simulated_gauges:velocity_gauge', {shift:false}, t => {
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('simulated_gauges:velocity_gauge', {shift:true}, t => {
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.of('Can read its ').color(x), Text.of('Velocity').color(h), Text.of(', separated into ').color(x), Text.of('X, Y, and Z').color(h), Text.of(' axes.').color(x)])
        ])
    })
    e.modify('simulated_gauges:gimbal_gauge', {shift:false}, t => {
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('simulated_gauges:gimbal_gauge', {shift:true}, t => {
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.of('Can read its ').color(x), Text.of('Orientation').color(h), Text.of(', separated into ').color(x), Text.of('X, Y, and Z').color(h), Text.of(' axes.').color(x)])
        ])
    })

    // Analog Audio

    e.modify('analogaudio:cassette_deck', {shift:false}, t => {
        t.removeLine(2)
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('analogaudio:cassette_deck', {shift:true}, t => {
        t.removeLine(2)
        t.removeLine(2)
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.of('Used to ').color(x), Text.of('Write').color(h), Text.of(' and ').color(x), Text.of('Erase Cassette Tapes').color(h), Text.of('.').color(x)])
        ])
    })
    e.modify('analogaudio:cassette_bag', {shift:false}, t => {
        t.removeLine(3)
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('analogaudio:cassette_bag', {shift:true}, t => {
        t.removeLine(3)
        t.removeLine(3)
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.of('A bag that can store multiple ').color(x), Text.of('Cassette Tapes').color(h), Text.of('.').color(x)])
        ])
    })
    e.modify('analogaudio:cassette_tape', {shift:false}, t => {
        t.removeLine(2)
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('analogaudio:cassette_tape', {shift:true}, t => {
        t.removeLine(2)
        t.removeLine(2)
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.of('Stores ').color(x), Text.of('Audio').color(h), Text.of(' that can be played by a ').color(x), Text.of('Radio').color(h), Text.of('.').color(x)])
        ])
    })
    e.modify('analogaudio:walkie_talkie', {shift:false}, t => {
        t.removeLine(3)
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('analogaudio:walkie_talkie', {shift:true}, t => {
        t.removeLine(3)
        t.removeLine(3)
        t.removeLine(3)
        t.removeLine(3)
        t.removeLine(3)
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.of('Transmits ').color(x), Text.of('Voice Input').color(h), Text.of(' to other devices on the same ').color(x), Text.of('Frequency').color(h), Text.of('.').color(x)]),
        '',
        Text.join([Text.gray('When R-Click is Held')]),
        Text.join([Text.of(' Opens a menu to change ').color(x), Text.of('Frequency').color(h)])
        ])
    })
    e.modify('analogaudio:speaker', {shift:false}, t => {
        t.removeLine(3)
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('analogaudio:speaker', {shift:true}, t => {
        t.removeLine(3)
        t.removeLine(3)
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.of('Broadcasts ').color(x), Text.of('Audio').color(h), Text.of(' from ').color(x), Text.of('Walkie Talkies').color(h), Text.of('.').color(x)]),
        ''
        ])
    })
    e.modify('analogaudio:radio', {shift:false}, t => {
        t.removeLine(3)
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('analogaudio:radio', {shift:true}, t => {
        t.removeLine(3)
        t.removeLine(3)
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.of('Plays ').color(x), Text.of('Music').color(h), Text.of(' from ').color(x), Text.of('Cassette Tapes').color(h), Text.of('.').color(x)]),
        ''
        ])
    })

    // CC:Tweaked

    e.modify('computercraft:disk_drive', {shift:false}, t => {
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('computercraft:disk_drive', {shift:true}, t => {
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.of('A Peripheral that allows you to ').color(x), Text.of('Read and Write').color(h), Text.of(' to ').color(x), Text.of('Floppy Disks').color(h), Text.of(' and other mountable media.').color(x)])
        ])
    })
    e.modify('computercraft:wireless_modem_normal', {shift:false}, t => {
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('computercraft:wireless_modem_normal', {shift:true}, t => {
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.of('A Peripheral that allows you to send ').color(x), Text.of('Messages').color(h), Text.of(' between ').color(x), Text.of('Computers').color(h), Text.of(' over long distances.').color(x)]),
        Text.join([Text.of('Has a ').color(x), Text.of('Limited Range').color(h), Text.of(' that scales from ').color(x), Text.of('64 Blocks').color(h), Text.of(' to ').color(x), Text.of('384 Blocks').color(h), Text.of(' at World Height.').color(x)])
        ])
    })
    e.modify('computercraft:wireless_modem_advanced', {shift:false}, t => {
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('computercraft:wireless_modem_advanced', {shift:true}, t => {
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.of('A Peripheral that allows you to send ').color(x), Text.of('Messages').color(h), Text.of(' between ').color(x), Text.of('Computers').color(h), Text.of(' over long distances.').color(x)]),
        Text.join([Text.of('Has ').color(x), Text.of('Unlimited Range').color(h), Text.of(' and can send messages across ').color(x), Text.of('Dimensions').color(h), Text.of('.').color(x)])
        ])
    })
    e.modify('#computercraft:wired_modem', {shift:false}, t => {
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('#computercraft:wired_modem', {shift:true}, t => {
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.of('A Peripheral that allows you to send ').color(x), Text.of('Messages').color(h), Text.of(' between ').color(x), Text.of('Computers').color(h), Text.of(' over long distances.').color(x)]),
        Text.join([Text.of('Sends messages only to other ').color(x), Text.of('Wired Modems').color(h), Text.of(' connected to the same ').color(x), Text.of('Network').color(h), Text.of('.').color(x)])
        ])
    })
    e.modify('computercraft:cable', {shift:false}, t => {
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('computercraft:cable', {shift:true}, t => {
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.of('Connects ').color(x), Text.of('Wired Modems').color(h), Text.of(' and other ').color(x), Text.of('Peripherals').color(h), Text.of(' to the same network.').color(x)])
        ])
    })
    e.modify('computercraft:monitor_normal', {shift:false}, t => {
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('computercraft:monitor_normal', {shift:true}, t => {
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.of('A Peripheral that displays ').color(x), Text.of('Information').color(h), Text.of('. Can be ').color(x), Text.of('Read and Interacted').color(h), Text.of(' with in-world.').color(x)])
        ])
    })
    e.modify('computercraft:monitor_advanced', {shift:false}, t => {
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('computercraft:monitor_advanced', {shift:true}, t => {
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.of('A Peripheral that displays ').color(x), Text.of('Information').color(h), Text.of('. Can be ').color(x), Text.of('Read and Interacted').color(h), Text.of(' with in-world. The advanced variant adds support for a ').color(x), Text.of('colored display and mouse input').color(h), Text.of('.').color(x)])
        ])
    })
    e.modify('computercraft:printer', {shift:false}, t => {
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('computercraft:printer', {shift:true}, t => {
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.of('A Peripheral that allows printing ').color(x), Text.of('Text').color(h), Text.of(' onto ').color(x), Text.of('Pages').color(h), Text.of('. These pages can be crafted together into ').color(x), Text.of('Printed Pages or Books').color(h), Text.of('.').color(x)])
        ])
    })
    e.modify('computercraft:redstone_relay', {shift:false}, t => {
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('computercraft:redstone_relay', {shift:true}, t => {
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.of('A Peripheral that allows ').color(x), Text.of('Reading and Outputting Redstone Signals').color(h), Text.of('. This can be used with ').color(x), Text.of('Wired Modems').color(h), Text.of(' to interact with ').color(x), Text.of('multiple Redstone Signals').color(h), Text.of(' from the same computer.').color(x)])
        ])
    })
    e.modify('computercraft:speaker', {shift:false}, t => {
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('computercraft:speaker', {shift:true}, t => {
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.of('A Peripheral that allows the computer to play ').color(x), Text.of('Notes and other Sounds').color(h), Text.of('.').color(x)])
        ])
    })
    e.modify('computercraft:computer_normal', {shift:false}, t => {
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('computercraft:computer_normal', {shift:true}, t => {
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.of('A Computer that can be controlled using the ').color(x), Text.of('Lua Programming Language').color(h), Text.of('.').color(x)])
        ])
    })
    e.modify('computercraft:computer_advanced', {shift:false}, t => {
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('computercraft:computer_advanced', {shift:true}, t => {
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.of('A Computer that can be controlled using the ').color(x), Text.of('Lua Programming Language').color(h), Text.of('. The advanced variant adds support for a ').color(x), Text.of('colored display and mouse input').color(h), Text.of('.').color(x)])
        ])
    })
    e.modify('computercraft:turtle_normal', {shift:false}, t => {
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('computercraft:turtle_normal', {shift:true}, t => {
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.of('A ').color(x), Text.of('Mobile').color(h), Text.of(' Computer. Can interact with ').color(x), Text.of('Blocks, Mobs,').color(h), Text.of(' or ').color(x), Text.of('whatever else you program.').color(h)])
        ])
    })
    e.modify('computercraft:turtle_advanced', {shift:false}, t => {
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('computercraft:turtle_advanced', {shift:true}, t => {
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.of('A ').color(x), Text.of('Mobile').color(h), Text.of(' Computer. Can interact with ').color(x), Text.of('Blocks, Mobs,').color(h), Text.of(' or ').color(x), Text.of('whatever else you program').color(h), Text.of('. The advanced variant adds support for a ').color(x), Text.of('colored display and mouse input').color(h), Text.of('.').color(x)])
        ])
    })
    e.modify('computercraft:pocket_computer_normal', {shift:false}, t => {
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('computercraft:pocket_computer_normal', {shift:true}, t => {
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.of('A Computer that can be carried in your ').color(x), Text.of('Inventory').color(h), Text.of('.').color(x)])
        ])
    })
    e.modify('computercraft:pocket_computer_advanced', {shift:false}, t => {
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('computercraft:pocket_computer_advanced', {shift:true}, t => {
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.of('A Computer that can be carried in your ').color(x), Text.of('Inventory').color(h), Text.of('. The advanced variant adds support for a ').color(x), Text.of('colored display and mouse input').color(h), Text.of('.').color(x)])
        ])
    })
    

    /* Railways */
    e.modify('railways:paint_brush', {shift:false}, t => {
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('railways:paint_brush', {shift:true}, t => {
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.of('Use while holding a ').color(x), Text.of('Paint Pitcher').color(h), Text.of(' in your offhand to paint ').color(x), Text.of('Locometal Blocks').color(h), Text.of('.').color(x)])
        ])
    })
    e.modify('#railways:filled_paint_pitchers', {shift:false}, t => {
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('#railways:filled_paint_pitchers', {shift:true}, t => {
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.of('Use with a ').color(x), Text.of('Paint Brush').color(h), Text.of(' or a ').color(x), Text.of('Potato Cannon').color(h), Text.of(' to paint ').color(x), Text.of('Locometal Blocks').color(h), Text.of('.').color(x)])
        ])
    })

    // Supplementaries

    e.modify('supplementaries:enderman_head', {shift:false}, t => {
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('supplementaries:enderman_head', {shift:true}, t => {
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.of('Emits a ').color(x), Text.of('Redstone Signal').color(h), Text.of(' when ').color(x), Text.of('Stared at').color(h), Text.of('.').color(x)]),
        Text.join([Text.of('The ').color(x), Text.of('Signal Strength').color(h), Text.of(' increases depending on how long the head is ').color(x), Text.of('Stared at').color(h), Text.of('.').color(x)])
        ])
    })
    e.modify('supplementaries:redstone_illuminator', {shift:false}, t => {
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('supplementaries:redstone_illuminator', {shift:true}, t => {
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.of('Gives off a ').color(x), Text.of('Light Output').color(h), Text.of(' that is ').color(x), Text.of('Inversely Proportional').color(h), Text.of(' to its current redstone power.').color(x)]),
        ])
    })
    e.modify('supplementaries:flute', {shift:false}, t => {
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('supplementaries:flute', {shift:true}, t => {
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.of('Can be played to ').color(x), Text.of('Summon').color(h), Text.of(' a ').color(x), Text.of('Pet or Horse').color(h), Text.of('.').color(x)]),
        '',
        Text.join([Text.gray('When R-Clicked on a Pet')]),
        Text.join([Text.of(' Binds to the pet, allowing it to be summoned.').color(x)])
        ])
    })
    e.modify('supplementaries:antique_ink', {shift:false}, t => {
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('supplementaries:antique_ink', {shift:true}, t => {
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.of('Can be used on ').color(x), Text.of('Signs, Maps, Books, and Globes').color(h), Text.of(' to create ').color(x), Text.of('Antique Variants').color(h), Text.of('.').color(x)])
        ])
    })

    // MC Paint

    e.modify('#c:eggs', {shift:false}, t => { 
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('#c:eggs', {shift:true}, t => {
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.of('Throw at a ').color(x), Text.of('Painting').color(h), Text.of(' to start your own ').color(x), Text.of('Custom Painting').color(h), Text.of('.').color(x)])
        ])
    })
    e.modify('minecraft:shears', {shift:false}, t => {
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('minecraft:shears', {shift:true}, t => {
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.gray('When R-Clicked on a Custom Painting')]),
        Text.join([Text.of(' Removes the painting ').color(x), Text.of('Background').color(h)])
        ])
    })
    e.modify('minecraft:white_wool', {shift:false}, t => {
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('minecraft:white_wool', {shift:true}, t => {
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.gray('When R-Clicked on a Custom Painting')]),
        Text.join([Text.of(' Sets painting background to the default ').color(x), Text.of('Canvas').color(h)])
        ])
    })
    e.modify('minecraft:deepslate', {shift:false}, t => {
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('minecraft:deepslate', {shift:true}, t => {
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.gray('When R-Clicked on a Custom Painting')]),
        Text.join([Text.of(' Sets painting background to a ').color(x), Text.of('Blackboard').color(h)])
        ])
    })
    e.modify('minecraft:tinted_glass', {shift:false}, t => {
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('minecraft:tinted_glass', {shift:true}, t => {
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.gray('When R-Clicked on a Custom Painting')]),
        Text.join([Text.of(' Toggles the ').color(x), Text.of('Axis Shading').color(h), Text.of(' on the ink of the painting').color(x)])
        ])
    })
    e.modify('minecraft:observer', {shift:false}, t => {
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('minecraft:observer', {shift:true}, t => {
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.gray('When R-Clicked on a Custom Painting')]),
        Text.join([Text.of(' Sets painting background to a ').color(x), Text.of('Computer Screen').color(h)])
        ])
    })
    e.modify('minecraft:name_tag', {shift:false}, t => {
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('minecraft:name_tag', {shift:true}, t => {
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.gray('When R-Clicked on a Custom Painting')]),
        Text.join([Text.of(' Makes the painting display its ').color(x), Text.of('Name and Author').color(h), Text.of(' when right-clicked with an empty hand').color(x)])
        ])
    })
    e.modify('minecraft:writable_book', {shift:false}, t => {
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('minecraft:writable_book', {shift:true}, t => {
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.gray('When R-Clicked on a Custom Painting')]),
        Text.join([Text.of(' Makes the painting display the ').color(x), Text.of('Text in the First Page of the Book').color(h), Text.of(' when right-clicked with an empty hand').color(x)]),
        Text.join([Text.gray('When R-Clicked on a Paint Bucket')]),
        Text.join([Text.of(' Changes the paint colour to a ').color(x), Text.of('Hex Code').color(h), Text.of(' that is written in the book').color(x)])
        ])
    })
    e.modify('minecraft:glow_ink_sac', {shift:false}, t => {
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('minecraft:glow_ink_sac', {shift:true}, t => {
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.gray('When R-Clicked on a Custom Painting')]),
        Text.join([Text.of(' Renders the ink of the painting with the ').color(x), Text.of('Glowing Effect').color(h)])
        ])
    })
    e.modify('minecraft:ink_sac', {shift:false}, t => {
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('minecraft:ink_sac', {shift:true}, t => {
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.gray('When R-Clicked on a Custom Painting')]),
        Text.join([Text.of(' Removes the ').color(x), Text.of('Glowing Effect').color(h)])
        ])
    })
    e.modify('minecraft:tripwire_hook', {shift:false}, t => {
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('minecraft:tripwire_hook', {shift:true}, t => {
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.gray('When R-Clicked on a Custom Painting')]),
        Text.join([Text.of(' Toggles the ').color(x), Text.of('Locked State').color(h)])
        ])
    })
    e.modify('minecraft:ender_eye', {shift:false}, t => {
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('minecraft:ender_eye', {shift:true}, t => {
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.gray('When R-Clicked on a Custom Painting')]),
        Text.join([Text.of(' Changes the ').color(x), Text.of('Billboard Mode').color(h), Text.of(', which makes the painting always ').color(x), Text.of(' Rotate against the Player\'s Rotation').color(h)])
        ])
    })
    e.modify('minecraft:paper', {shift:false}, t => {
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('minecraft:paper', {shift:true}, t => {
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.gray('When R-Clicked on a Custom Painting while Sneaking')]),
        Text.join([Text.of(' Copies all the painting\'s ').color(x), Text.of('Settings').color(h)]),
        Text.join([Text.gray('When R-Clicked on a Custom Painting')]),
        Text.join([Text.of(' Pastes the copied ').color(x), Text.of('Settings').color(h)])
        ])
    })
    e.modify('minecraft:ice', {shift:false}, t => {
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('minecraft:ice', {shift:true}, t => {
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.gray('When R-Clicked on a Custom Painting')]),
        Text.join([Text.of(' Increases the ').color(x), Text.of('Transparency').color(h), Text.of(' of the painting ink').color(x)]),
        Text.join([Text.gray('When R-Clicked on a Custom Painting while Sneaking')]),
        Text.join([Text.of(' Decreases the ').color(x), Text.of('Transparency').color(h), Text.of(' of the painting ink').color(x)]),
        ])
    })
    e.modify('minecraft:compass', {shift:false}, t => {
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('minecraft:compass', {shift:true}, t => {
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.gray('When R-Clicked on a Custom Painting')]),
        Text.join([Text.of(' Rotates').color(h), Text.of(' the painting by 22.5 degrees').color(x)]),
        Text.join([Text.gray('When R-Clicked on a Custom Painting while Sneaking')]),
        Text.join([Text.of(' Rotates').color(h), Text.of(' in the opposite direction').color(x)])
        ])
    })
    e.modify('minecraft:spyglass', {shift:false}, t => {
        t.insert(1, Text.join([Text.darkGray('Hold ['), Text.gray('Shift'), Text.darkGray('] for Summary')]))
    })
    e.modify('minecraft:spyglass', {shift:true}, t => {
        t.insert(1, [
        Text.join([Text.darkGray('Hold ['), Text.white('Shift'), Text.darkGray('] for Summary')]),
        '',
        Text.join([Text.gray('When R-Clicked on a Custom Painting')]),
        Text.join([Text.of(' Changes the ').color(x), Text.of('View Range').color(h), Text.of(' of the painting').color(x)])
        ])
    })
})