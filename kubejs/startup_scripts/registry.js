const $DoorBlock = Java.loadClass('net.minecraft.world.level.block.DoorBlock')
const $Blocks = Java.loadClass('net.minecraft.world.level.block.Blocks')
const $BlockBehaviour$Properties = Java.loadClass('net.minecraft.world.level.block.state.BlockBehaviour$Properties');
const $BlockItem = Java.loadClass('net.minecraft.world.item.BlockItem')
const $IProperties = Java.loadClass('net.minecraft.world.item.Item$Properties')
const $BlockSetType = Java.loadClass("net.minecraft.world.level.block.state.properties.BlockSetType")

/* COMPLEX ADDITIONS */
let door
StartupEvents.registry('block', event => {
  door = event.createCustom('complex_door', () => new $DoorBlock($BlockSetType.IRON, $BlockBehaviour$Properties.ofFullCopy($Blocks.BEDROCK)))
  event.create('unbreakable_andesite')
    .soundType('heavy_core') // Set a material (affects the sounds and some properties)
    .hardness(-1) // Set hardness (affects mining time)
    .resistance(3600000) // Set resistance (to explosions, etc)
    .tagBlock('simulated:non_moveable')
    .texture("minecraft:block/polished_andesite")
})
StartupEvents.registry('item', event => {
  event.createCustom('complex_door', () => new $BlockItem(door.get(), new $IProperties()))
})

StartupEvents.registry('sound_event', event => {
   event.create("kubejs:block.complex_door.close")
})

/* MC PAINT FAKES */
StartupEvents.registry('block', event => {
  event.create('studio')
  event.create('blue_studio')
  event.create('pink_studio')
})

StartupEvents.registry('item', event => {
  event.create('custom_painting').texture('mcpaint:item/custom_painting')
  event.create('brush').texture('mcpaint:item/brush')
  event.create('studio_item').texture('mcpaint:item/studio')
  event.create('paint_bucket')
  event.create('pink_paint_bucket')
  event.create('green_paint_bucket')
})