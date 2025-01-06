input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    basic.showArrow(ArrowNames.West)
    basic.pause(100)
    basic.showNumber(ID)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
    basic.showArrow(ArrowNames.North)
    basic.pause(100)
    basic.showNumber(ID)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
    basic.showArrow(ArrowNames.East)
    basic.pause(100)
    basic.showNumber(ID)
})
let ID = 0
ID = 1
radio.setGroup(ID)
basic.showNumber(ID)
