//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    const gridItems = document.querySelectorAll('.grid-item');
    const changeButton = document.getElementById('change_button');
    const resetButton = document.getElementById('reset_button');
    const blockIdInput = document.getElementById('block_id');
    const colorInput = document.getElementById('colour_id');

    function resetGrid() {
        gridItems.forEach(item => {
            item.style.backgroundColor = 'transparent';
        });
    }

    function changeColor() {
        const blockId = parseInt(blockIdInput.value);
        const color = colorInput.value;
        if (blockId >= 1 && blockId <= 9) {
            resetGrid();
            const selectedItem = document.getElementById(blockId);
            if (selectedItem) {
                selectedItem.style.backgroundColor = color;
            }
        } else {
            alert('Invalid Block ID. Please enter a number between 1 and 9.');
        }
    }

    changeButton.addEventListener('click', changeColor);

    resetButton.addEventListener('click', resetGrid);
});
