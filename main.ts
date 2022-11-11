input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        basic.showIcon(IconNames.Duck)
        basic.showLeds(`
            . . . . .
            . # # . .
            # # # . .
            . # # # #
            . # # # .
            `)
        basic.showIcon(IconNames.Duck)
        basic.showLeds(`
            . . . . .
            . # # . .
            # # # . .
            . # # # #
            . # # # .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        # . . . #
        # . # . #
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        # . . . #
        # . # . #
        # . . . #
        `)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . # . #
        # . . . #
        . # . . #
        `)
    basic.showLeds(`
        # . . . #
        # . # . #
        # . . . #
        . # . . #
        . . # . #
        `)
    basic.showLeds(`
        # . # . #
        # . . . #
        . # . . #
        . . # . #
        . . . # #
        `)
    basic.showLeds(`
        # . . . #
        . # . . #
        . . # . #
        . . . # #
        . . . . #
        `)
    basic.showLeds(`
        . # . . #
        . . # . #
        . . . # #
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . # . #
        . . . # #
        . . . . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . # #
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
