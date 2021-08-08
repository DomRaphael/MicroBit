let Exploded = 0

let LedtoPlotx = -1
let LedtoPloty = 0

let HasTime = 1

input.onButtonPressed(Button.A, function () {
})

basic.forever(function () {
    TimeAnim()
})


function TimeAnim() {
    music.setVolume(250)
    while (HasTime) {
        if (LedtoPloty == 5) {
            HasTime = 0
            Explode()
        } else {
            if (LedtoPlotx == 4) {
                LedtoPlotx = -1
                LedtoPloty += 1
            }
            LedtoPlotx += 1
            led.plot(LedtoPlotx, LedtoPloty)
            music.playTone(988, music.beat(BeatFraction.Whole))
            basic.pause(100)
        }
    }
}

function Explode() {
    music.playTone(255, music.beat(BeatFraction.Whole))
}