// Variables del juego
let mario;
let ground;
let obstacles = [];
let gameSpeed = 5;

// Variables para el control del salto
const JUMP_FORCE = -15;
const GRAVITY = 0.8;
const GROUND_HEIGHT = 100;

class Mario {
    constructor() {
        this.width = 50;
        this.height = 50;
        this.x = 100;
        this.y = height - GROUND_HEIGHT - this.height;
        this.velocity = 0;
        this.isJumping = false;
    }

    jump(blowStrength) {
        if (!this.isJumping) {
            this.velocity = JUMP_FORCE * (blowStrength / 100);
            this.isJumping = true;
        }
    }

    update() {
        // Aplicar gravedad
        this.velocity += GRAVITY;
        this.y += this.velocity;

        // Verificar colisión con el suelo
        if (this.y > height - GROUND_HEIGHT - this.height) {
            this.y = height - GROUND_HEIGHT - this.height;
            this.velocity = 0;
            this.isJumping = false;
        }
    }

    draw() {
        // Dibujar a Mario (versión simple para el MVP)
        fill(255, 0, 0); // Color rojo para el overol
        rect(this.x, this.y, this.width, this.height);
        
        // Cara simple
        fill(255, 218, 185); // Color piel
        rect(this.x + 10, this.y + 5, 30, 25);
        
        // Gorra
        fill(255, 0, 0);
        rect(this.x + 5, this.y + 5, 40, 10);
    }
}

// Configuración inicial
function setup() {
    const canvas = createCanvas(800, 600);
    canvas.parent('game-container');
    mario = new Mario();
}

// Dibujar el juego
function draw() {
    background('#87CEEB'); // Cielo azul

    // Dibujar el suelo
    fill(139, 69, 19); // Marrón
    rect(0, height - GROUND_HEIGHT, width, GROUND_HEIGHT);

    // Actualizar y dibujar a Mario
    mario.update();
    mario.draw();

    // Simular la recepción de datos del sensor (esto se reemplazará con los datos reales)
    // Por ahora usaremos el valor del slider de sensibilidad
    let sensitivity = document.getElementById('sensitivity').value;
    document.getElementById('blow-strength').textContent = sensitivity;
}

// Función para procesar los datos del sensor (se llamará cuando lleguen datos reales)
function processSensorData(data) {
    let sensitivity = document.getElementById('sensitivity').value;
    let threshold = map(sensitivity, 0, 100, 0, 1000);
    
    if (data > threshold) {
        mario.jump(map(data, threshold, 1000, 0, 100));
    }
}

// Para pruebas: usar la barra espaciadora para simular el soplido
function keyPressed() {
    if (keyCode === 32) { // Barra espaciadora
        let sensitivity = document.getElementById('sensitivity').value;
        processSensorData(threshold + 100); // Simular un soplido fuerte
    }
}
