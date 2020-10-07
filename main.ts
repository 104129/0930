input.onGesture(Gesture.LogoUp, function () {
    radio.sendString("B")
    basic.showArrow(ArrowNames.South)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("L")
    basic.showArrow(ArrowNames.West)
})
function 左轉燈 () {
    bitbot.ledClear()
    數字 = 0
    for (let index = 0; index <= 5; index++) {
        bitbot.setPixelColor(數字 + index, 0x80FF80)
    }
}
input.onButtonPressed(Button.A, function () {
    basic.showNumber(3)
    radio.sendString("number")
})
function 前進 () {
    while (bitbot.sonar(BBPingUnit.Centimeters) > 2) {
        bitbot.go(BBDirection.Forward, 100)
        if (bitbot.sonar(BBPingUnit.Centimeters) >= 10) {
            bitbot.stop(BBStopMode.Brake)
            break;
        }
    }
}
input.onGesture(Gesture.LogoDown, function () {
    radio.sendString("F")
    basic.showArrow(ArrowNames.North)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("D")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "F") {
        前進()
        bitbot.ledClear()
        bitbot.setLedColor(0xFF8080)
    } else if (receivedString == "B") {
        bitbot.go(BBDirection.Reverse, 100)
        bitbot.ledClear()
        bitbot.setLedColor(0x80FF80)
    } else if (receivedString == "L") {
        左轉燈()
        bitbot.rotatems(BBRobotDirection.Left, 60, 300)
    } else if (receivedString == "R") {
        bitbot.rotatems(BBRobotDirection.Right, 60, 300)
        右轉燈()
    } else if (receivedString == "number") {
    	
    } else if (receivedString == "S") {
        bitbot.stop(BBStopMode.Brake)
        bitbot.ledClear()
    } else if (receivedString == "D") {
        for (let index = 0; index < 1000000000; index++) {
            bitbot.buzz(true)
            basic.pause(50)
            bitbot.buzz(false)
            basic.pause(1000)
        }
    } else {
        bitbot.stop(BBStopMode.Brake)
        bitbot.ledClear()
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("S")
    radio.sendString("numbdr")
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("R")
    basic.showArrow(ArrowNames.East)
})
function 右轉燈 () {
    bitbot.ledClear()
    數字 = 6
    for (let index = 0; index <= 5; index++) {
        bitbot.setPixelColor(數字 + index, 0xFF8080)
    }
}
let 數字 = 0
basic.showNumber(3)
radio.setGroup(3)
basic.forever(function () {
	
})
