input.onButtonPressed(Button.A, function () {
    basic.showNumber(משתנה1)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(משתנה2)
    basic.pause(1000)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    משתנה1 = משתנה1 + משתנה2
    משתנה2 = משתנה1 - משתנה2
    משתנה1 = משתנה1 - משתנה2
})
let משתנה2 = 0
let משתנה1 = 0
משתנה1 = randint(0, 9)
משתנה2 = randint(0, 9)
basic.forever(function () {
	
})
