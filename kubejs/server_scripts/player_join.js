PlayerEvents.loggedIn(event => {
	const { player } = event
	const pData = event.player.persistentData
	if (!pData.getBoolean('firstJoin')) {
		pData.putBoolean('firstJoin', true)
		player.tell(Text.of("Welcome to Modulo Create!\n").bold().gold())
		player.tell(Text.of("Try /modulo for mod or server help!").yellow())
		
		// Set default pData for dimension switch
		for(let i = 0; i <= 3; i++) {
			pData.putString(`creativeCos${i}`, "1 minecraft:air")
			pData.putString(`adventureCos${i}`, "1 minecraft:air")
		}
		pData.putString("creativeDim", "moddedulo:creative")
        pData.putDouble("creativeX", 0)
        pData.putDouble("creativeY", -59)
        pData.putDouble("creativeZ", 0)
		pData.putInt("creativeXp", 0)
    	pData.putInt("creativeFood", 20)
   		pData.putInt("creativeHealth", 20)
		pData.putString("adventureDim", "moddedulo:complex")
		pData.putDouble("adventureX", 73.5)
        pData.putDouble("adventureY", 29)
        pData.putDouble("adventureZ", 151.5)
		pData.putInt("adventureXp", 0)
    	pData.putInt("adventureFood", 20)
   		pData.putInt("adventureHealth", 20)
   		pData.putInt("adventureYaw", 90)
	}
})