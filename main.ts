input.onButtonPressed(Button.A, function () {
    Start = 1
})
input.onButtonPressed(Button.B, function () {
    Start = 0
})
let Start = 0
Start = 0
basic.forever(function () {
    if (Start == 1) {
        basic.pause(500)
        cuteBot.moveTime(cuteBot.Direction.forward, 50, 4)
        cuteBot.motors(50, 25)
        basic.pause(105)
    }
})
