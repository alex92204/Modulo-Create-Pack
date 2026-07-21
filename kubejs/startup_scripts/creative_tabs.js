// Remove Items
// add more tabs manually
const creativeTabs = ['minecraft:building_blocks', 'minecraft:colored_blocks', 'minecraft:natural_blocks', 'minecraft:functional_blocks', 'minecraft:redstone_blocks', 'minecraft:hotbar', 'minecraft:search', 'minecraft:tools_and_utilities', 'minecraft:combat', 'minecraft:food_and_drinks', 'minecraft:ingredients', 'minecraft:spawn_eggs', 'minecraft:op_blocks', 'minecraft:inventory', 'advancedperipherals:advancedperipherals', 'createdeco:props_tab', 'createdeco:bricks_tab', 'cccbridge:cccbridge_group', 'sophisticatedcore:main', 'sophisticatedbackpacks:main', 'simulated:main_tab', 'exposure:exposure', 'supplementaries:supplementaries', 'createframed:create_framed', 'vanillabackport:vanilla_backport', 'createrailwaysnavigator:createrailwaysnavigator', 'computercraft:tab', 'copycats:main', 'copycats:functional', 'simulated_gauges:tab', 'kubejs:tab', 'railways:main', 'railways:tracks', 'railways:palettes', 'create_power_loader:main', 'create:base', 'create:palettes', 'createcasing:tab', 'dndecor:base', 'extra_gauges:main_tab', 'analogaudio:analog_audio_tab', 'pipeorgans:pipe_organs', 'create_vibrant_vaults:base']

creativeTabs.forEach(tabId => {
	StartupEvents.modifyCreativeTab(tabId, event => {
		event.remove('#moddedulo:removed')
    })
})
	