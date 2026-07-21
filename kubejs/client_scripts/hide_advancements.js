const $ChatReceived = Java.loadClass("net.neoforged.neoforge.client.event.ClientChatReceivedEvent")

NativeEvents.onEvent($ChatReceived, event => {
    if (event.getMessage().toString().includes("chat.type.advancement")) {
        event.setCanceled(true)
    }
})