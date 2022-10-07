let humitat = 0
let proporcio = 0
basic.forever(function () {
    humitat = Environment.ReadWaterLevel(AnalogPin.P1)
    proporcio = pins.map(
    humitat,
    0,
    1023,
    0,
    100
    )
    basic.showNumber(proporcio)
    if (proporcio > 5) {
        music.playMelody("- G A G F F G A ", 120)
    } else {
        music.playMelody("C C C C C C C C ", 120)
    }
})
