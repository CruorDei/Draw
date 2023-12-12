import { initColorPicker } from './colorPicker.js';
import { initLineWidth } from './lineWidth.js';
import { initClearButton } from './clearButton.js';

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);


let isDrawing = false;

function startDrawing(e) {
    isDrawing = true;
    draw(e);
}

function draw(e) {
    if (!isDrawing) return;

    context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    context.stroke();
    context.beginPath();
    context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

function stopDrawing() {
    isDrawing = false;
    context.beginPath();
}

initColorPicker(context);
initLineWidth(context);
initClearButton(context);