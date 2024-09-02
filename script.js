document.getElementById("change_button").addEventListener("click", function() {
    let blockId = document.getElementById("block_id").value;
    let color = document.getElementById("colour_id").value;

    // Reset all grid items to transparent
    let gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach(item => {
        item.style.backgroundColor = "transparent";
    });

    // Change color of selected block if valid
    let selectedBlock = document.getElementById(blockId);
    if (selectedBlock) {
        selectedBlock.style.backgroundColor = color;
    } else {
        alert("Invalid Block ID. Please enter a number between 1 and 9.");
    }
});

document.getElementById("reset").addEventListener("click", function() {
    // Reset all grid items to transparent
    let gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach(item => {
        item.style.backgroundColor = "transparent";
    });
    // Clear input fields
    document.getElementById("block_id").value = '';
    document.getElementById("colour_id").value = '';
});
