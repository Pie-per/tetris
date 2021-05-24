// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`0f000f00010101010101010101010101010101010101010101010101010101010101010101010101010101010301010101010101010101010101010101010101010101010101030101010101010102010101010101010101010101010103010103010101010101010101010101030303030303030303030303030303010103010101010101010101010101010101010301010101010101010101010101010101010101010101010101010101010101010103010101030101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . 2 . . . . 
. . . . . . . . 2 . . . 2 . . 
. . . . . . 2 . . . . . . . . 
. . . . 2 . . . . . . . . . 2 
. . 2 . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . 2 . . . . . . . . . . . . 
. . . . 2 . . . . . . . . . 2 
. . . . . . 2 . . . . . . . . 
. . . . . . . . 2 . . . 2 . . 
. . . . . . . . . . 2 . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile3,myTiles.tile5], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100002010101010101010101040202010102020101010101010101010203020101030401010202040203010101010101010402010103030202020101010101010102020101020101010102020204030101030301010301010101020302030201010302010102010102040101010101010102020101020101030201010101010101020301010401010203010102030204030302010102010102030101010101010202020101030101030201010101010102030401010201010203010102020101020302010101010102020101020301010402030101010101040301010202010102020301010203020202010103030101020302020403020302020505020204020202`, img`
2 . . . . . . . . . 2 2 2 . . 2 
2 . . . . . . . . . 2 2 2 . . 2 
2 . . 2 2 2 2 2 . . . . . . . 2 
2 . . 2 2 2 2 2 . . . . . . . 2 
2 . . 2 . . . . 2 2 2 2 2 . . 2 
2 . . 2 . . . . 2 2 2 2 2 . . 2 
2 . . 2 . . 2 2 . . . . . . . 2 
2 . . 2 . . 2 2 . . . . . . . 2 
2 . . 2 . . 2 2 . . 2 2 2 2 2 2 
2 . . 2 . . 2 2 . . . . . . 2 2 
2 . . 2 . . 2 2 . . . . . . 2 2 
2 . . 2 . . 2 2 . . 2 2 . . 2 2 
2 . . . . . 2 2 . . 2 2 . . 2 2 
2 . . . . . 2 2 . . 2 2 . . 2 2 
2 . . 2 2 2 2 2 . . 2 2 . . 2 2 
2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tileDarkGrass1,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass2,myTiles.tile6], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`1000100006010101010101010101050501020101010303030303030303060303010303010103030303030303030203030103030601030302020601030301030301030301010303030303010303010303010303040103030303030103030203030103030401010601030302030301030301030302010303030303020303010303020303020203030303030203030103030203030601030301030301030301030302030302010303010303020303020303020303020103030103030203030303030603030201030302030306030303030302030302060303010303010102020303030303010103030203030303030203030303030101060101030303030301010601010101`, img`
2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 
2 . . . . . . . . 2 . . 2 . . 2 
2 . . . . . . . . 2 . . 2 . . 2 
2 . . 2 2 2 2 . . 2 . . 2 . . 2 
2 . . . . . 2 . . 2 . . 2 . . . 
2 . . . . . 2 . . 2 . . 2 . . . 
2 2 2 2 . . 2 . . 2 . . 2 . . 2 
2 . . . . . 2 . . 2 . . 2 . . 2 
2 . . . . . 2 . . 2 . . 2 . . 2 
2 . . 2 . . 2 . . 2 . . 2 . . 2 
2 . . 2 . . 2 . . 2 . . 2 . . 2 
2 . . 2 . . 2 . . . . . 2 . . 2 
2 . . 2 . . 2 . . . . . 2 . . 2 
2 . . 2 . . 2 2 2 2 . . . . . 2 
2 . . 2 . . . . . 2 . . . . . 2 
2 2 2 2 . . . . . 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tileDarkGrass1,sprites.castle.tileDarkGrass3,sprites.castle.tilePath5,myTiles.tile7,myTiles.tile8,sprites.castle.tileDarkGrass2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile6":
            case "tile8":return tile8;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
