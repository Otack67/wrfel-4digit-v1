radio.onReceivedNumber(function (receivedNumber) {
    Bet = receivedNumber
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (Mode == 0) {
        music.play(music.createSoundExpression(WaveShape.Square, 1600, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        Dice = randint(1, 6)
        radio.sendNumber(Dice)
        basic.showNumber(Dice)
        Mode = 1
        basic.setLedColor(0xffff00)
    }
})
function Reset () {
    basic.setLedColor(0xff0000)
    basic.pause(2000)
    Mode = 0
    basic.setLedColor(0x00ff00)
    Bet = 0
    Dice = 0
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    music.playMelody("C D E F G E G - ", 500)
}
let Dice = 0
let Mode = 0
let Bet = 0
radio.setGroup(39)
Reset()
basic.forever(function () {
    while (Dice == 0) {
        basic.pause(randint(25, 50))
    }
    while (Bet == 0) {
        basic.pause(randint(25, 50))
    }
    if (Dice == Bet) {
        basic.showIcon(IconNames.No)
        Reset()
    } else {
        if (Dice > Bet) {
            basic.showIcon(IconNames.Happy)
            Reset()
        } else {
            basic.showIcon(IconNames.Sad)
            Reset()
        }
    }
})
