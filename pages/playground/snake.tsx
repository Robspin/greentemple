// @ts-nocheck
import Link from "next/link";
import { useEffect } from "react";
import styles from '../../components/playground/snake.module.css'

const Snake = () => {
    useEffect(() => {
        const canvas = document.getElementById('canvas') as HTMLCanvasElement;
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
        const highscore = document.getElementById('highscore')

        const scale = 8
        const rows = canvas.height / scale
        const columns = canvas.width / scale

        let snake
        let fruit

        class Snake {
            constructor() {
                this.x = 1 * scale
                this.y = 1 * scale
                this.xSpeed = scale * 1
                this.ySpeed = 0
                this.total = 0
                this.tail = []

                this.draw = function () {
                    ctx.fillStyle = "#1f2512"
                    for (let i = 0; i < this.tail.length; i++) {
                        ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale)
                    }
                    ctx.fillRect(this.x, this.y, scale, scale)
                }

                this.update = function () {
                    for (let i = 0; i < this.tail.length -1; i++) {
                        this.tail[i] = this.tail[i+1]
                    }
                    this.tail[this.total - 1] = { x: this.x, y: this.y }

                    this.x += this.xSpeed
                    this.y += this.ySpeed
                }

                this.eat = function(fruit) {
                    if (this.y === fruit.y && this.x === fruit.x) {
                        this.total++
                        updateLocalStorage(snake)
                        return true
                    }
                }

                this.reset = function() {
                    this.x = 1 * scale
                    this.y = 1 * scale
                    this.xSpeed = scale * 1
                    this.ySpeed = 0
                    this.total = 0
                    this.tail = []
                }

                this.checkCollision = function() {
                    for (let i = 0; i < this.tail.length; i++) {
                        if (this.y === this.tail[i].y && this.x === this.tail[i].x) { 
                            return true
                        }
                    }
                    if (this.x > canvas.width || this.x < 0 || this.y > canvas.height || this.y < 0) {
                        return true
                    }
                }
            }
        }

        class Fruit {
            constructor() {
                this.x
                this.y

                this.pickLocation = function() {
                    this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale
                    this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale
                }

                this.draw = function () {
                    ctx.fillStyle = "#1f2512"
                    ctx.fillRect(this.x, this.y, scale, scale)
                }
            }
        }

        (function setup () {
            snake = new Snake()
            fruit = new Fruit()

            fruit.pickLocation()

            window.setInterval(() => {
                ctx.clearRect(0, 0, canvas.width, canvas.height)
                snake.update()
                fruit.draw()
                snake.draw()
                ctx.font = "16px Nokia";
                ctx.fillStyle = "1f2512"
                ctx.fillText(`${snake.total}`, canvas.width - 20, 20);

                if (snake.eat(fruit)) fruit.pickLocation()

                if (snake.checkCollision()) {
                    snake.reset()
                    fruit.pickLocation()
                    getFromLocalStorage()
                }
                
            }, 100)
        })()

        const getFromLocalStorage = () => {
            const localHighscore = window.localStorage.getItem('greentemple_snake_highscore')
            if (typeof localHighscore !== null) {
                highscore.innerHTML = localHighscore
            }
        }

        const updateLocalStorage = (snake) => {
            if (snake.total > window.localStorage.getItem('greentemple_snake_highscore')) {
                localStorage.setItem('greentemple_snake_highscore', snake.total)
            }
        }

        getFromLocalStorage()

        window.addEventListener('keydown', e => {
        const direction = e.key.replace('Arrow', '')
        switch (direction) {
            case 'Up':
                snake.xSpeed = 0
                snake.ySpeed = scale * -1
                break
            case 'Down':
                snake.xSpeed = 0
                snake.ySpeed = scale * 1
                break
            case 'Left': 
                snake.xSpeed = scale * -1
                snake.ySpeed = 0
                break
            case 'Right':
                snake.xSpeed = scale * 1
                snake.ySpeed = 0
                break
        }
        })

    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.nokia}>
                <div className={styles.headers}>
                    <Link href="/playground">
                        <a>
                            <h4>← return to GreenTemple</h4>
                        </a>
                    </Link>
                    <p>snake highscore: <span id="highscore"> 0</span></p>
                </div>
                <canvas className={styles.canvas} height="230" width="230" id="canvas" />
            </div>
        </div>
    )
}

export default Snake