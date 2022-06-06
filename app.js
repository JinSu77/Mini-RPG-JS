const canvas = document.querySelector('#container');
const ctx = canvas.getContext('2d')

//----------------- MAP 1 TEST ---------------------------

const map2 = 
    [1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
    ]

    const map = 
    [1,1,1,1,1,2,2,1,1,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,0,2,2,0,0,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,
    1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,
    1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,
    1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,
    1,1,1,1,0,0,0,3,3,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,
    1,1,1,1,0,0,0,3,3,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,
    1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,
    1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,
    1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,
    1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,
    1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,
    1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,
    1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,
    1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,
    1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,
    1,1,1,1,0,0,0,0,0,0,0,0,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
    ]


//-------------------------- Partie Collision -------------------------------
  
const collisionMap = []
for (let i = 0; i < map.length; i+= 32) {
    collisionMap.push(map.slice(i, 32 + i))
}

const tpZoneMap = []
for (let i = 0; i < map.length; i+= 32) {
    tpZoneMap.push(map.slice(i, 32 + i))
}

const carteDialogue = []
for (let i = 0; i < map.length; i+= 32) {
    carteDialogue.push(map.slice(i, 32 + i))
}


const boundaries = []

collisionMap.forEach((row, i)=> {
    row.forEach((symbol, j) => {
        if (symbol === 1)
            boundaries.push(
                new Boundary({
                    position: {
                        x: j * Boundary.width,
                        y: i * Boundary.height
                    }
                })
            )
        })
})

const dialogueMap = []

carteDialogue.forEach((row, i)=> {
    row.forEach((symbol, j) => {
        if (symbol === 3)
            dialogueMap.push(
                new Boundary({
                    position: {
                        x: j * Boundary.width,
                        y: i * Boundary.height
                    }
                })
            )
        })
})

const tpMap = []

tpZoneMap.forEach((row, i)=> {
    row.forEach((symbol, j) => {
        if (symbol === 2)
            tpMap.push(
                new Boundary({
                    position: {
                        x: j * Boundary.width,
                        y: i * Boundary.height
                    }
                })
            )
        })
})
function dialogueP() {
    let x = document.getElementById('dialogue');
    let position = carteDialogue;

    if (position === 3 && x.style.display === 'none') {
    } else {
      x.style.display = 'block';
      window.setTimeout("timerDiv();", 2000);
    }
  }

  function dialogueDetection() {
    for (let i = 0; i < dialogueMap.length; i++) {
        const carteDialogue = dialogueMap[i]
        if (
            rectangularCollision({
                rectangle1: playerMove,
                rectangle3: playerImage,
                rectangle2: carteDialogue
            })
        ) {
            break
        }
    }
  }

  function timerDiv(){
    document.getElementById("dialogue").style.display=" none";
    }

//____________________________________________________________________________________________________________________________________________

canvas.width = 510
canvas.height = 320



const image = new Image()
image.src = './img/map_main.png'

const playerImage = new Image()
playerImage.src = './img/mainDownSolo.png'

const playerPnj = new Image()
playerPnj.src = './img/mainRightSolo.png'


const playerMove = new Sprite({
    position:{
        x: 350,
        y: 130
    },
    playerImage: playerImage
})

const Pnj = new spritePnj({
    position:{
        x: 110,
        y: 100
    },
    playerPnj: playerPnj
})

//----------------- Boolean pour les touches claviers ---------------------------
const keys = {
    z: {
        pressed: false
    },
    q: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    }
}

//----------------- Détection des collisions ---------------------------
function rectangularCollision({rectangle1, rectangle2, rectangle3}) {
    return (
        rectangle1.position.x + rectangle3.width >= rectangle2.position.x && 
        rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
        rectangle1.position.y + rectangle3.height >= rectangle2.position.y
    )
}
const tp = {
    initiated: false 
}
//----------------- Refresh des images pour re-imprimer le draw de chaque image ---------------------------
function animate(){
    const animationId = window.requestAnimationFrame(animate)
        ctx.drawImage(image, 0, 0)
        Pnj.draw()
        boundaries.forEach(Boundary => {
            Boundary.draw()
        })
        tpMap.forEach(tpZoneMap => {
            tpZoneMap.draw() 
        })
        dialogueMap.forEach(carteDialogue => {
            carteDialogue.draw() 
        })
        playerMove.draw()


    if(tp.initiated) return
    //----------------- Mouvements du joueur et intégration des collisions sur la direction du joueur --------------------------- 
    if (keys.z.pressed || keys.q.pressed || keys.s.pressed || keys.d.pressed) {
        for (let i = 0; i < dialogueMap.length; i++) {
            const carteDialogue = dialogueMap[i]
            if (
                rectangularCollision({
                    rectangle1: playerMove,
                    rectangle3: playerImage,
                    rectangle2: carteDialogue
                })
            ) {
                console.log('dialogue detection')
                dialogueP()
                
                break
            }
        }
        for (let i = 0; i < tpMap.length; i++) {
            const tpZoneMap = tpMap[i]
            //--------------Détéction de la zone----------------
            const overlappingArea =
                (Math.min(
                    playerMove.position.x + playerImage.width, 
                    tpZoneMap.position.x + tpZoneMap.width) - 
                    Math.max(playerMove.position.x, tpZoneMap.position.x)) *
                (Math.min(
                    playerMove.position.y + playerImage.height, 
                    tpZoneMap.position.y + tpZoneMap.height) - 
                Math.max(playerMove.position.y, tpZoneMap.position.y))
            if (
                rectangularCollision({
                    rectangle1: playerMove,
                    rectangle3: playerImage,
                    rectangle2: tpZoneMap
                }) &&
                overlappingArea > (playerImage.width * playerImage.height) / 2
            ) {
                tp.initiated = true

                //desactivate current animation loop
                window.cancelAnimationFrame(animationId)

                // activation new animation loop
                animateChangeMap()
                break
            }
        }
    }
    keyMove()
}
animate()
const changeBackgroundImage = new Image()
changeBackgroundImage.src = '/img/map_2.png'
const changeBackground = new SpriteBackground({
    position: {
        x: 0,
        y: 0
    },
    image: changeBackgroundImage
})
function animateChangeMap() {
    window.requestAnimationFrame(animateChangeMap)
    changeBackground.draw()
    playerMove.draw()
    keyMove()
    console.log('animateChangeMap')
}

//----------------- Actions du clavier ---------------------------

function keyMove() {
    let moving = true
    if (keys.z.pressed) {
        for (let i = 0; i < boundaries.length; i++) {
            const Boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: playerMove,
                    rectangle3: playerImage,
                    rectangle2: {...Boundary, 
                        position: {
                        x: Boundary.position.x,
                        y: Boundary.position.y + 1
                    }}
                })
            ) {
                moving = false
                break
            }
        }
        if(moving)
        playerMove.position.y = playerMove.position.y - 1

    }

    else if (keys.q.pressed) {
        for (let i = 0; i < boundaries.length; i++) {
            const Boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: playerMove,
                    rectangle3: playerImage,
                    rectangle2: {...Boundary, 
                        position: {
                        x: Boundary.position.x + 1,
                        y: Boundary.position.y
                    }}
                })
            ) {
                moving = false
                break
            }
        }
        if(moving)
        playerMove.position.x = playerMove.position.x - 1
    }
    else if (keys.s.pressed) {
        for (let i = 0; i < boundaries.length; i++) {
            const Boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: playerMove,
                    rectangle3: playerImage,
                    rectangle2: {...Boundary, 
                        position: {
                        x: Boundary.position.x,
                        y: Boundary.position.y - 1
                    }}
                })
            ) {
                moving = false
                break
            }
        }
        if(moving)
        playerMove.position.y = playerMove.position.y + 1
    }
    else if (keys.d.pressed) {
        for (let i = 0; i < boundaries.length; i++) {
            const Boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: playerMove,
                    rectangle3: playerImage,
                    rectangle2: {...Boundary, 
                        position: {
                        x: Boundary.position.x - 1,
                        y: Boundary.position.y
                    }}
                })
            ) {
                moving = false
                break
            }
        }
        if(moving)
        playerMove.position.x = playerMove.position.x + 1
    }
}

window.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'z':
        keys.z.pressed = true
            break

        case 'q':
        keys.q.pressed = true
            break

        case 's':
        keys.s.pressed = true
            break

        case 'd':
        keys.d.pressed = true
            break
    }
})

window.addEventListener('keyup', (e) => {
    switch(e.key) {
        case 'z':
        keys.z.pressed = false
            break

        case 'q':
        keys.q.pressed = false
            break

        case 's':
        keys.s.pressed = false
            break

        case 'd':
        keys.d.pressed = false
            break
    }
})







