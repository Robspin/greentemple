import Link from "next/link";
import { useEffect } from "react";

const Matrix = () => {
    useEffect(() => {
        const canvas = document.getElementById('matrix') as HTMLCanvasElement;
        const context = canvas.getContext('2d') as CanvasRenderingContext2D;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン'
        const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers = '0123456789'

        const alphabet = katakana + latin + numbers;

        const fontSize = 16;
        let columns  = canvas.width/fontSize

        let rainDrops: any = [];

        for (let x = 0; x < columns; x++) {
            rainDrops[x] = 1;
        }

        let iteration = 0

        const draw = () => {
            context.fillStyle = `rgba(0, 0, 0, 0.05)`;
            context.fillRect(0, 0, canvas.width, canvas.height)

            context.fillStyle = '#0F0';
            context.font = fontSize + 'px monospace';

            for (let i = 0; i < rainDrops.length; i++) {
                    const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
                    context.fillText(text, i * fontSize, rainDrops[i] * fontSize);
                if(iteration < 150) {
                    if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                        rainDrops[i] = 0;
                    }
                } else if (i % 2 === 0) {
                    if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                        rainDrops[i] = 0;
                    }
                }
                rainDrops[i]++;
            }
            iteration++;
        };

        window.onresize = () => {
            canvas.width = innerWidth
            canvas.height = innerHeight;
        }

        setTimeout(() => {
            setInterval(() => {
                context.fillStyle = `rgba(0, 0, 0, 1)`;
                context.fillText("████████████████", canvas.width - 100, canvas.height - 30);
                context.fillStyle = 'rgba(255,255,255, 1)';
                context.font = 22 + 'px monospace';
                context.textAlign = "center";
                context.fillText("GREENTEMPLE", canvas.width - 100, canvas.height - 30);
            }, 50)
        }, 5000)
        

        setInterval(draw, 30);
    }, [])

    return (
        <Link href="/playground">
            <canvas id="matrix" height="100vh" width="100vw" />
        </Link>
    )
}

export default Matrix