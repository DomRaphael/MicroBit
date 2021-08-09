let ps = [0];
let plotx = [0];

let Exploded = 0

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


input.onButtonPressed(Button.A, function() {
    basic.clearScreen()
    basic.showNumber(0)
    basic.pause(100)
    basic.clearScreen()
})

function TimeAnim() {
    music.setVolume(5)
    while (HasTime) {
        if (led.point(3, 4)) {
            led.plot(4,4)
            HasTime = 0
            Explode()
        } else {
            for (let i = 0; i < 4; i++) {
                ps[i] = 1
                led.plot(i,4)
                basic.pause(1000)
            }
        }
    }
}

function Explode() {
    music.playTone(255, music.beat(BeatFraction.Whole))
    basic.clearScreen()
    basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
}
