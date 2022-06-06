class Sprite{
    constructor({position, playerImage}) {
        this.position = position
        this.playerImage = playerImage
    }

    draw() {
        ctx.drawImage( this.playerImage,
            //découpage du personnage
            0, //découpe x
            0, //découpe y
            canvas.width / 4, 
            canvas.height / 2 + playerImage.height,
            //position actuelle du personnage
            this.position.x,
            this.position.y,
            playerImage.width * 7,
            playerImage.height * 8,
            )
    }
}

class spritePnj{
    constructor({position, playerPnj}) {
        this.position = position
        this.playerPnj = playerPnj
    }

    draw() {
        ctx.drawImage( this.playerPnj,
            //découpage du personnage
            0, //découpe x
            0, //découpe y
            canvas.width / 4, 
            canvas.height / 2 + playerPnj.height,
            //position actuelle du personnage
            this.position.x,
            this.position.y,
            playerPnj.width * 6,
            playerPnj.height * 8,
            )
    }
}

class SpriteBackground{
    constructor({position, image}) {
        this.position = position
        this.image = image
    }

    draw() {
        ctx.drawImage( this.image,
            0,
            0,
            )
    }
}

class Boundary {
    static width = 16
    static height = 16
    constructor({position}) {
        this.position = position
        this.width = 16
        this.height = 16
    }

    draw() {
        ctx.fillStyle = 'rgba(255, 0, 0, 0.0'
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}
