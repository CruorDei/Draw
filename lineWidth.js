export function initLineWidth(context) {
    const lineWidthContainer = document.getElementById('lineWidthContainer');
    const lineWidthInput = document.createElement('input');

    // configuration
    lineWidthInput.type = 'range';
    lineWidthInput.id = 'lineWidth';
    lineWidthInput.min = '1';
    lineWidthInput.max = '10';
    lineWidthInput.value = '1';

    lineWidthContainer.appendChild(document.createTextNode('Épaisseur du trait: '));
    lineWidthContainer.appendChild(lineWidthInput);

    lineWidthInput.addEventListener('input', () => setLineWidth(lineWidthInput.value));

    function setLineWidth(width) {
        context.lineWidth = width;
        context.lineCap = 'round';
    }
}