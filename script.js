const container = document.querySelector(".container");

// Parameters
let gridSize = 16; // Default number of rows/columns (change this to adjust grid size)

// Create and append grid items
function createGrid(size) {
    container.innerHTML = ''; // Clear existing grid

    // Set flex-basis and height to adjust the size of each grid cell
    const cellSize = `calc(100% / ${size})`;

    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        div.style.flexBasis = cellSize;
        div.style.height = cellSize;
        container.appendChild(div);
    }
    let hoverItems = document.querySelectorAll(".container div");

hoverItems.forEach(div => {
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "blue"; // Change background color on hover
    });

  
});
}

// Initial grid creation
createGrid(gridSize);
const reset = document.querySelector("#reset")

reset.addEventListener('click', ()=>{
    gridSize = prompt("enter new grid size please");
    createGrid(gridSize)
})

// Example: To change the grid size dynamically, update gridSize and recreate the grid



