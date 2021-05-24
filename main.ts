namespace SpriteKind {
    export const Deadtree = SpriteKind.create()
    export const Leftovers = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    Level_1()
    mySprite.setPosition(145, 220)
})
function Level2 () {
    if (Tree != 5) {
        mySprite6 = sprites.create(img`
            .....79....797....97..7.....77..
            ..9.99999.977779..799.7..7797...
            ..93377.969747.766777766779e777.
            ...1379.73377317677636776763377.
            99.797.73176777777731767c77137..
            7e9494777733769967776766677677.7
            ..73397773777966667676966777677.
            .9.3197977779917777667677766766.
            .7777674376767377676677673776767
            ..733.77777977777713973313767c67
            ..379799777799777737973777731777
            799997799.7967777777677777996.66
            .997777ee7633367767767767667677.
            .931377777731767767e67776767....
            .9337377.779777776776776676777.6
            9..777777.77777773776367767766..
            9.997...77737777316731767667.66.
            ..999.7737.77.796367cc667631676.
            ...7...71377.777676697317773776.
            .....77....7.9977e7669.7...666..
            .....97....7799666767..7.6......
            .....7..........4eeee.6.........
            ................46ee6...........
            ................4eeec...........
            ................4eeec...........
            ...............e4eece...........
            ...............eeeece...........
            ..............44eeecce..........
            ............444eeeeccc..........
            .........eee44ee.ececccec.......
            .......eeee.4ee..ece.cccec......
            ....eee....e......e...eee.ccee..
            `, SpriteKind.Food)
        mySprite6.setPosition(220, 25)
    }
    if (tiny_flower != 5) {
        mySprite7 = sprites.create(img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . b b d d b b . 
            b 1 1 3 3 1 1 b 
            b 1 3 5 5 3 1 b 
            b d 3 5 5 3 d b 
            c 1 1 d d 1 1 c 
            c d 1 d d 1 d c 
            . c c 7 6 c c . 
            . . 6 7 6 . . . 
            . . 6 6 8 8 8 6 
            . . 6 8 7 7 7 6 
            . . 8 7 7 7 6 . 
            . . 8 8 8 6 . . 
            `, SpriteKind.Food)
    }
    if (double_flower != 5) {
        mySprite8 = sprites.create(img`
            ....................
            ....................
            ....................
            ....................
            ....................
            ...........444......
            ..........4eee4.....
            ..........44444.....
            ...........444......
            .....444....7.......
            ....4eee4...7.......
            ....44444..77.7.....
            .....444...7766.....
            ......7....766......
            .......7...76.......
            .....7777..7........
            ......6667.6........
            .........666........
            ....................
            ....................
            `, SpriteKind.Food)
    }
    mySprite9 = sprites.create(img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . . . . b c . . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 5 d f . . 
        . . . . b 5 5 1 f f 5 d 4 c . . 
        . . . . b 5 5 d f b d d 4 4 . . 
        b d d d b b d 5 5 5 4 4 4 4 4 b 
        b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
        b d c 5 5 5 5 d 5 5 5 5 5 b . . 
        c d d c d 5 5 b 5 5 5 5 5 5 b . 
        c b d d c c b 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `, SpriteKind.Enemy)
    tiles.setTilemap(tilemap`level3`)
    mySprite2.destroy()
    mySprite3.destroy()
    mySprite4.destroy()
    mySprite5.destroy()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.overlapsWith(mySprite2)) {
        mySprite2.destroy()
        bush = 5
    } else if (mySprite.overlapsWith(mySprite3)) {
        mySprite3.destroy()
        flowers = 5
    } else if (mySprite.overlapsWith(mySprite4)) {
        mySprite4.destroy()
        bigFlowers = 5
    } else if (mySprite.overlapsWith(mySprite5)) {
        mySprite5.destroy()
        mushrooms = 5
    } else if (mySprite.overlapsWith(mySprite6)) {
        mySprite6.destroy()
        Tree = 5
    } else if (mySprite.overlapsWith(mySprite7)) {
        mySprite7.destroy()
        tiny_flower = 5
    } else if (mySprite.overlapsWith(mySprite8)) {
        mySprite8.destroy()
        double_flower = 5
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    Level2()
    mySprite.setPosition(175, 35)
})
function Level_1 () {
    if (bush != 5) {
        mySprite2 = sprites.create(img`
            ....................
            ....................
            .........1..........
            ......661d1.........
            .....177717766......
            ....1d177777677.....
            ..6.717777c77177....
            ...7c77767771d17....
            ...77677766771777...
            ..1777766677777767..
            .1d1776717676777c7..
            .7177661d176777777..
            .77767771777777176..
            .677c77777c7671d17..
            .77777777777767176..
            .667776776777777767.
            ...76776766676766...
            ....................
            ....................
            ....................
            `, SpriteKind.Food)
        mySprite2.setPosition(140, 55)
    }
    if (flowers != 5) {
        mySprite3 = sprites.create(img`
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            .......2............
            ......222...2.......
            ......252..252..2...
            ...2...2...222.222..
            ..252..6....2..252..
            ..222..66...6...2...
            ...2..66....6...66..
            ...6...6.6.666..6...
            .6...6.........6..6.
            ....................
            `, SpriteKind.Food)
        mySprite3.setPosition(30, 230)
    }
    if (bigFlowers != 5) {
        mySprite4 = sprites.create(img`
            ....................
            ....................
            ....................
            ....................
            ....................
            .....bb...b..77b....
            ....bbbb7bbb7.bbb...
            ...bbbbb.bbbb.bbbb..
            ...bbcc7bbbbc7bbbb..
            ...bbb.7bbbb7.cbbb..
            ..bbbc..bbbb7..cbb..
            ...bc...7bcc.7..cb..
            ..bc...7.bb7.7..bb..
            ......77.bc...7.cbb.
            ......7..c7...7.....
            ......7...7....7....
            .....7....7.....7...
            ....77....7.....7...
            ....................
            ....................
            `, SpriteKind.Food)
        mySprite4.setPosition(115, 80)
    }
    if (mushrooms != 5) {
        mySprite5 = sprites.create(img`
            ........................
            .....bbbbb..............
            ....b33333bb............
            ...b33331113b...........
            ...b333311113b..........
            ..b1133331113bc.........
            .b11133333333bbb........
            bb1133113333bbbc.bbbb...
            cbb3311113bbddbcb3311b..
            cbbbbddddbbdddcbb33113c.
            .cbbbbddbbbddbbddb3333bc
            ..ccbbbbbbbbccbddbbbddbc
            ....cccccccb.ccbbbbbddbc
            ......b1ddb....ccbbbbbc.
            .....b11ddb.....bccccc..
            .....b1ddbb.....bddb....
            `, SpriteKind.Food)
        mySprite5.setPosition(207, 230)
    }
    tiles.setTilemap(tilemap`level2`)
    mySprite6.destroy()
    mySprite7.destroy()
    mySprite8.destroy()
    mySprite9.destroy()
    mySprite10.destroy()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
})
let mushrooms = 0
let bigFlowers = 0
let flowers = 0
let bush = 0
let mySprite5: Sprite = null
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let double_flower = 0
let tiny_flower = 0
let Tree = 0
let mySprite6: Sprite = null
let mySprite7: Sprite = null
let mySprite8: Sprite = null
let mySprite9: Sprite = null
let mySprite10: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . 1 1 1 . . . . . . 
    . . . . . . 1 1 a 1 . . . . . . 
    . . . . . 1 1 a a 1 1 . . . . . 
    . . . 1 1 1 a a a a 1 1 1 . . . 
    . . 1 1 a b a a a a b a 1 1 . . 
    . 1 1 a a b b a a b b a a 1 . . 
    . 1 e a a a b b b b a a a 1 1 . 
    . 1 e e a a a a a a a a e e 1 . 
    . 1 e e e d f d d f d e e e 1 . 
    . 1 e e e d f d d f d e e e 1 . 
    . 1 1 e e d d d d d d e e 1 1 . 
    . 1 1 d d f d d d d f d d 1 1 . 
    . 1 d b c b a b b a b f b d 1 . 
    . 1 d d f a a a a a a f d d 1 . 
    . 1 1 1 c b a a a a b c 1 1 1 . 
    . . . 1 1 f f f f f f 1 1 . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(225, 45)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 100)
mySprite10 = sprites.create(img`
    . . . . . . . 1 1 1 . . . . . . 
    . . . . . . 1 1 a 1 . . . . . . 
    . . . . . 1 1 a a 1 1 . . . . . 
    . . . 1 1 1 a a a a 1 1 1 . . . 
    . . 1 1 a b a a a a b a 1 1 . . 
    . 1 1 a a b b a a b b a a 1 . . 
    . 1 e a a a b b b b a a a 1 1 . 
    . 1 e e a a a a a a a a e e 1 . 
    . 1 e e e d f d d f d e e e 1 . 
    . 1 e e e d f d d f d e e e 1 . 
    . 1 1 e e d d d d d d e e 1 1 . 
    . 1 1 d d f d d d d f d d 1 1 . 
    . 1 d b c b a b b a b f b d 1 . 
    . 1 d d f a a a a a a f d d 1 . 
    . 1 1 1 c b a a a a b c 1 1 1 . 
    . . . 1 1 f f f f f f 1 1 . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    `, SpriteKind.Player)
mySprite9 = sprites.create(img`
    . . . . . . . 1 1 1 . . . . . . 
    . . . . . . 1 1 a 1 . . . . . . 
    . . . . . 1 1 a a 1 1 . . . . . 
    . . . 1 1 1 a a a a 1 1 1 . . . 
    . . 1 1 a b a a a a b a 1 1 . . 
    . 1 1 a a b b a a b b a a 1 . . 
    . 1 e a a a b b b b a a a 1 1 . 
    . 1 e e a a a a a a a a e e 1 . 
    . 1 e e e d f d d f d e e e 1 . 
    . 1 e e e d f d d f d e e e 1 . 
    . 1 1 e e d d d d d d e e 1 1 . 
    . 1 1 d d f d d d d f d d 1 1 . 
    . 1 d b c b a b b a b f b d 1 . 
    . 1 d d f a a a a a a f d d 1 . 
    . 1 1 1 c b a a a a b c 1 1 1 . 
    . . . 1 1 f f f f f f 1 1 . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    `, SpriteKind.Player)
mySprite8 = sprites.create(img`
    . . . . . . . 1 1 1 . . . . . . 
    . . . . . . 1 1 a 1 . . . . . . 
    . . . . . 1 1 a a 1 1 . . . . . 
    . . . 1 1 1 a a a a 1 1 1 . . . 
    . . 1 1 a b a a a a b a 1 1 . . 
    . 1 1 a a b b a a b b a a 1 . . 
    . 1 e a a a b b b b a a a 1 1 . 
    . 1 e e a a a a a a a a e e 1 . 
    . 1 e e e d f d d f d e e e 1 . 
    . 1 e e e d f d d f d e e e 1 . 
    . 1 1 e e d d d d d d e e 1 1 . 
    . 1 1 d d f d d d d f d d 1 1 . 
    . 1 d b c b a b b a b f b d 1 . 
    . 1 d d f a a a a a a f d d 1 . 
    . 1 1 1 c b a a a a b c 1 1 1 . 
    . . . 1 1 f f f f f f 1 1 . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    `, SpriteKind.Player)
mySprite7 = sprites.create(img`
    . . . . . . . 1 1 1 . . . . . . 
    . . . . . . 1 1 a 1 . . . . . . 
    . . . . . 1 1 a a 1 1 . . . . . 
    . . . 1 1 1 a a a a 1 1 1 . . . 
    . . 1 1 a b a a a a b a 1 1 . . 
    . 1 1 a a b b a a b b a a 1 . . 
    . 1 e a a a b b b b a a a 1 1 . 
    . 1 e e a a a a a a a a e e 1 . 
    . 1 e e e d f d d f d e e e 1 . 
    . 1 e e e d f d d f d e e e 1 . 
    . 1 1 e e d d d d d d e e 1 1 . 
    . 1 1 d d f d d d d f d d 1 1 . 
    . 1 d b c b a b b a b f b d 1 . 
    . 1 d d f a a a a a a f d d 1 . 
    . 1 1 1 c b a a a a b c 1 1 1 . 
    . . . 1 1 f f f f f f 1 1 . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    `, SpriteKind.Player)
mySprite6 = sprites.create(img`
    . . . . . . . 1 1 1 . . . . . . 
    . . . . . . 1 1 a 1 . . . . . . 
    . . . . . 1 1 a a 1 1 . . . . . 
    . . . 1 1 1 a a a a 1 1 1 . . . 
    . . 1 1 a b a a a a b a 1 1 . . 
    . 1 1 a a b b a a b b a a 1 . . 
    . 1 e a a a b b b b a a a 1 1 . 
    . 1 e e a a a a a a a a e e 1 . 
    . 1 e e e d f d d f d e e e 1 . 
    . 1 e e e d f d d f d e e e 1 . 
    . 1 1 e e d d d d d d e e 1 1 . 
    . 1 1 d d f d d d d f d d 1 1 . 
    . 1 d b c b a b b a b f b d 1 . 
    . 1 d d f a a a a a a f d d 1 . 
    . 1 1 1 c b a a a a b c 1 1 1 . 
    . . . 1 1 f f f f f f 1 1 . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    `, SpriteKind.Player)
info.setLife(3)
Level_1()
