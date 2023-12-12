export function initClearButton(context) {
    const clearButton = document.getElementById('clearButton');
    clearButton.addEventListener('click', clearCanvas);

    function clearCanvas() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }
}