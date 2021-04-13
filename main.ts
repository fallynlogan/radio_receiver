radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    basic.pause(500)
    basic.clearScreen()
})
radio.setGroup(1)
