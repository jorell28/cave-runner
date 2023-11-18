let score = 0
info.setLife(5)
info.highScore()
namespace SpriteKind {
    export const Gold = SpriteKind.create()
    export const Coal = SpriteKind.create()
    export const Iron = SpriteKind.create()
    export const Diamond = SpriteKind.create()
}
let bob: Sprite = null
let bobb: Sprite = null
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . f f e e e e f f . . . . . 
    . . f e e e f f e e e f . . . . 
    . . f f f f 2 2 f f f f . . . . 
    . f f e 2 e 2 2 e 2 e f f . . . 
    . f e 2 f 2 f f f 2 f e f . . . 
    . f f f 2 f e e 2 2 f f f . . . 
    . f e 2 f f e e 2 f e e f . . . 
    f f e f f e e e f e e e f f . . 
    f f e e e e e e e e e e f d f . 
    . . f e e e e e e e e f f b f . 
    . . e f f f f f f f f 4 f b f . 
    . . 4 f 2 2 2 2 2 e d d f c f . 
    . . e f f f f f f e e 4 f f . . 
    . . . f f f . . f f f . . . . . 
    `, SpriteKind.Player)
animation.runImageAnimation(
mySprite,
[img`
    . . . . . . f f f f . . . . . . 
    . . . . f f e e e e f f . . . . 
    . . . f e e e f f e e e f . . . 
    . . f f f f f 2 2 f f f f f . . 
    . . f f e 2 e 2 2 e 2 e f f . . 
    . . f e 2 f 2 f f 2 f 2 e f . . 
    . . f f f 2 2 e e 2 2 f f f . . 
    . f f e f 2 f e e f 2 f e f f . 
    . f e e f f e e e e f e e e f . 
    . . f e e e e e e e e e e f . . 
    . . . f e e e e e e e e f . . . 
    . . e 4 f f f f f f f f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f e e e e f f . . . . 
    . . . f e e e f f e e e f . . . 
    . . . f f f f 2 2 f f f f . . . 
    . . f f e 2 e 2 2 e 2 e f f . . 
    . . f e 2 f 2 f f f 2 f e f . . 
    . . f f f 2 f e e 2 2 f f f . . 
    . . f e 2 f f e e 2 f e e f . . 
    . f f e f f e e e f e e e f f . 
    . f f e e e e e e e e e e f f . 
    . . . f e e e e e e e e f . . . 
    . . . e f f f f f f f f 4 e . . 
    . . . 4 f 2 2 2 2 2 e d d 4 . . 
    . . . e f f f f f f e e 4 . . . 
    . . . . f f f . . . . . . . . . 
    `,img`
    . . . . . . f f f f . . . . . . 
    . . . . f f e e e e f f . . . . 
    . . . f e e e f f e e e f . . . 
    . . f f f f f 2 2 f f f f f . . 
    . . f f e 2 e 2 2 e 2 e f f . . 
    . . f e 2 f 2 f f 2 f 2 e f . . 
    . . f f f 2 2 e e 2 2 f f f . . 
    . f f e f 2 f e e f 2 f e f f . 
    . f e e f f e e e e f e e e f . 
    . . f e e e e e e e e e e f . . 
    . . . f e e e e e e e e f . . . 
    . . e 4 f f f f f f f f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f e e e e f f . . . . 
    . . . f e e e f f e e e f . . . 
    . . . f f f f 2 2 f f f f . . . 
    . . f f e 2 e 2 2 e 2 e f f . . 
    . . f e f 2 f f f 2 f 2 e f . . 
    . . f f f 2 2 e e f 2 f f f . . 
    . . f e e f 2 e e f f 2 e f . . 
    . f f e e e f e e e f f e f f . 
    . f f e e e e e e e e e e f f . 
    . . . f e e e e e e e e f . . . 
    . . e 4 f f f f f f f f e . . . 
    . . 4 d d e 2 2 2 2 2 f 4 . . . 
    . . . 4 e e f f f f f f e . . . 
    . . . . . . . . . f f f . . . . 
    `],
100,
true
)
music.setVolume(60)
controller.moveSprite(mySprite, 100, 0)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
scene.setBackgroundColor(4)
game.onUpdateInterval(2000, function () {
    bobb = sprites.createProjectileFromSide(img`
        9 9 e 9 e e e 
        e 9 e e e 9 9 
        e e e e 9 e e 
        9 9 e e e e 9 
        e e e 9 e e e 
        e 9 e e e 9 e 
        e 9 e e 9 9 e 
        `, 0, 70)
    bobb.setPosition(Math.randomRange(0, 160), 0)
    bobb.setKind(SpriteKind.Diamond)
})
game.onUpdateInterval(700, function () {
    bob = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . d . . . . . .
        . . . . . . . . d d . . . . . .
        . . . . . . . . d . . . . . . .
        . . . . . . f f e e e . . . . .
        . . . . . . f f e e e . . . . .
        . . . . . . f f e e e . . . . .
        . . . . . . f f f f f . . . . .
        . . . . . . f f f f f . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, 0, 70)
    bob.setPosition(Math.randomRange(0, 160), 0)
    bob.setKind(SpriteKind.Enemy)
})
game.onUpdateInterval(800, function () {
    bobb = sprites.createProjectileFromSide(img`
        5 5 e 5 e e e 
        e 5 e e e 5 5 
        e e e e 5 e e 
        5 5 e e e e 5 
        e e e 5 e e e 
        e 5 e e e 5 e 
        e 5 e e 5 5 e 
        `, 0, 70)
    bobb.setPosition(Math.randomRange(0, 160), 0)
    bobb.setKind(SpriteKind.Gold)
})
game.onUpdateInterval(400, function () {
    bobb = sprites.createProjectileFromSide(img`
        f f e f e e e 
        e f e e e f f 
        e e e e f e e 
        f f e e e e f 
        e e e f e e e 
        e f e e e f e 
        e f e e f f e 
        `, 0, 70)
    bobb.setPosition(Math.randomRange(0, 160), 0)
    bobb.setKind(SpriteKind.Coal)
})
game.onUpdateInterval(500, function () {
    bobb = sprites.createProjectileFromSide(img`
        1 1 e 1 e e e
        e 1 e e e 1 1
        e e e e 1 e e
        1 1 e e e e 1
        e e e 1 e e e
        e 1 e e e 1 e
        e 1 e e 1 1 e
    `, 0, 70)
    bobb.setPosition(Math.randomRange(0, 160), 0)
    bobb.setKind(SpriteKind.Iron)
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Coal, function(sprite: Sprite, otherSprite: Sprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Iron, function (sprite: Sprite, otherSprite: Sprite) {
    info.changeScoreBy(3)
    otherSprite.destroy()
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Gold, function (sprite: Sprite, otherSprite: Sprite) {
    info.changeScoreBy(5)
    otherSprite.destroy()
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Diamond, function (sprite: Sprite, otherSprite: Sprite) {
    info.changeScoreBy(10)
    otherSprite.destroy()
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite: Sprite, otherSprite: Sprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.disintegrate)
    music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.UntilDone)
})
info.onLifeZero(() => {
    game.setGameOverMessage(false, `${info.highScore() < info.score() ? 'New Highscore: ' + info.score() : "Highscore: " + info.highScore()}`)
    info.saveAllScores();
    info.saveHighScore();
    game.gameOver(false);
})
game.showLongText("Use arrow keys and collect the ores while avoiding bombs!", DialogLayout.Bottom)