let ps = [0];

let Exploded = 0

let LedtoPlotx = -1
let LedtoPloty = 0

let HasTime = 1

GenPasword()

basic.forever(function () {

})

function GenPasword() {
    for (let i = 0; i < 4; i++) {
        ps[i] = randint(0, 1)
    }
    DisPlayPassword()
}

function DisPlayPassword() {
    for (let i = 0; i < 4; i++) {
        basic.showNumber(ps[i])
        basic.clearScreen()
        basic.pause(100)
    }
    TimeAnim()
}

function TimeAnim() {
    music.setVolume(5)
    while (HasTime) {
        if (LedtoPloty == 5 && LedtoPlotx == 3) {
            led.plot(4,4)
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
            basic.pause(400)
        }
    }
}

function Explode() {
    music.playTone(255, music.beat(BeatFraction.Whole))
}