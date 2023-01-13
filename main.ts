input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showIcon(IconNames.Happy)
    music.playMelody("C D E G - - - - ", 120)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . # # # #
        . . # # #
        . . . # #
        . . # # #
        . # # # #
        `)
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showIcon(IconNames.Heart)
    music.ringTone(988)
})
input.onGesture(Gesture.ScreenDown, function () {
    music.ringTone(131)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Angry)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Confused)
    music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        # # # # .
        # # . . .
        # . . . .
        # # . . .
        # # # # .
        `)
})
input.onGesture(Gesture.LogoDown, function () {
    music.playMelody("C5 G D C - - - - ", 120)
})
basic.showIcon(IconNames.Asleep)
