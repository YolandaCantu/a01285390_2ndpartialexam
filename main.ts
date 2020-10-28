let sum_years = 0
let year_birth = 0
let millenials = 0
let baby_boomers = 0
let average_year = 0
let dice_number = 0
let y = 0
input.onButtonPressed(Button.A, function () {
    sum_years = 0
    for (let index = 0; index < 20; index++) {
        year_birth = randint(1949, 2010)
        millenials = 0
        baby_boomers = 0
        basic.showNumber(year_birth)
        sum_years += year_birth
        if (year_birth >= 1949 && year_birth <= 1968) {
            basic.showString("Baby Boom")
            baby_boomers += 1
        } else if (year_birth >= 1969 && year_birth <= 1980) {
            basic.showString("X Generation")
        } else if (year_birth >= 1981 && year_birth <= 1993) {
            basic.showString("Millenial")
            millenials += 1
        } else if (year_birth >= 1994 && year_birth <= 2010) {
            basic.showString("Z Generation")
        }
    }
    average_year = sum_years + 20
    basic.showString("Average:")
    basic.showNumber(average_year)
    basic.showString("Millenials:")
    basic.showNumber(millenials)
    basic.showString("Baby boomers:")
    basic.showNumber(baby_boomers)
})
input.onPinPressed(TouchPin.P1, function () {
    for (let index = 0; index <= 5; index++) {
        basic.showNumber(index)
    }
    basic.clearScreen()
    basic.pause(200)
    dice_number = randint(0, 6)
    basic.showNumber(dice_number)
    basic.clearScreen()
    if (dice_number == 3 || dice_number == 6) {
        basic.showString("Win")
        music.playMelody("B A G A G F A C5 ", 120)
    } else {
        basic.showString("Lose")
        music.playTone(131, music.beat(BeatFraction.Whole))
    }
    basic.clearScreen()
})
basic.forever(function () {
    while (input.buttonIsPressed(Button.B)) {
        y = 4
        for (let x = 0; x <= 4; x++) {
            led.plot(x, y)
            basic.pause(200)
            led.unplot(x, y)
            basic.pause(200)
        }
    }
})
