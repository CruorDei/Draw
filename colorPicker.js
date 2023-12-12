export function initColorPicker(context) {
    const colorPickerContainer = document.getElementById('colorPickerContainer');

    // ajouter element pour avoir plus de couleurs
    const colors = ['#000000', '#ff0000', '#00ff00', '#0000ff', '#ffff00'];
    colors.forEach(color => {
        const colorSelector = document.createElement('div');
        colorSelector.className = 'color-selector';
        colorSelector.style.backgroundColor = color;
        colorSelector.addEventListener('click', () => setColor(color));
        colorPickerContainer.appendChild(colorSelector);
    });

    function setColor(color) {
        context.strokeStyle = color;
    }
}
