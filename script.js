
const container = document.getElementById("container");

function makeRows(rows, cols) {
    if (rows > 100){
        alert("maximum value is 100")
        rows = 100
        cols = 100
    }
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 1; i <= (rows * cols); i++) {
        let cell = document.createElement("div");
        //cell.innerText = (i);
        container.appendChild(cell).className = "grid-item";
    };
};

let gridSize = document.getElementById("gridSize");
let gridSizeApply = document.getElementById("gridSizeApply")


gridSizeApply.addEventListener("click", () => {
    remove()
    makeRows(gridSize.value, gridSize.value);
    etchASketch()
});

let gridColorClear = document.getElementById("gridColorClear")
gridColorClear.addEventListener("click", () => {
    etchASketch('clear')
});


  makeRows(16, 16);
  etchASketch()

function etchASketch(colour){
    divs = document.querySelectorAll('.grid-item')
    divs.forEach(div => {
        if (colour == "clear"){
            div.style.backgroundColor = "";
        } else {}
        div.addEventListener("mouseover", () => {
           
                div.style.backgroundColor = "black";
            
        });
    }); 
};
function remove(){
    divs = document.querySelectorAll('.grid-item')
    divs.forEach(div => {
        div.remove()
    });
};