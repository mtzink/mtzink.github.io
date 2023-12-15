const canvas = document.getElementById('drawSpace');
const tool = document.getElementById('tools');
const ctx = canvas.getContext('2d');

const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

canvas.width = window.innerWidth - canvasOffsetX;
canvas.height = window.innerHeight - canvasOffsetY;

let isPainting = false;
let lineWidth = 6;
let startX;
let startY;

tool.addEventListener('click', listener => {
    if (listener.target.id === 'clear') {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
});

tool.addEventListener('change', listener => {
    if(listener.target.id === 'penColor') {
        ctx.strokeStyle = listener.target.value;
    }

    if(listener.target.id === 'penSize') {
        lineWidth = listener.target.value;
    }
    
});

const draw = (listener) => {
    if(!isPainting) {
        return;
    }

    ctx.lineWidth = lineWidth;
    ctx.lineCap = "round";

    ctx.lineTo(listener.clientX - (canvasOffsetX*.5) + 5, listener.clientY-canvasOffsetY + 80);
    ctx.stroke();
}

canvas.addEventListener('mousedown', (listener) => {
    isPainting = true;
    startX = listener.off;
    startY = listener.clientY;
});

canvas.addEventListener('mouseup', listener => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
});

canvas.addEventListener('mousemove', draw);
