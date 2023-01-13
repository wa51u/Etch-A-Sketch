
const container = document.getElementById("container");

function makeRows(rows = 16, cols = 16) {
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
    etchASketch("clear")
});

let randomColor = document.getElementById("randomColor")
randomColor.addEventListener("click", () => {
     etchASketch("randColor")
});
let blackColor = document.getElementById("blackColor")
blackColor.addEventListener("click", () => {
     etchASketch("black")
});

let grayScale = document.getElementById("grayScale")
grayScale.addEventListener("click", () => {
     etchASketch("gray")
});


 
  
function etchASketch(color = "black"){
    divs = document.querySelectorAll(".grid-item")
    divs.forEach(div => {
        if (color == "clear"){
            div.style.backgroundColor = "";
        } else if (color == "randColor"){
            div.addEventListener("mouseover", () => {
            div.style.backgroundColor = randColor();
            });
        }  else if (color == "black"){
            div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "black";

            
            });
        } else if (color == "gray"){
            div.addEventListener("mouseover", () => {
            gray(div)
            
            });
        }
    });
};

function remove(){
    divs = document.querySelectorAll('.grid-item')
    divs.forEach(div => {
        div.remove()
    });
};

function randColor(){
    let tempArr = [] 
    for (i=0; i<3; i++){
        let random =  Math.floor(Math.random() * 255)
        tempArr.push(random)
    }
    return (`rgb(${tempArr.toString()})`)
}

function gray(div){
    //console.log(div.style.cssText)
    let alfaStr = div.style.backgroundColor.substr(14, 3)
    let alfaNr = parseInt(alfaStr)
    alfaNr = alfaNr + 0.1
    div.style.backgroundColor = `rgba(0,0,0,${alfaNr})`;
    console.log(alfaNr)

}



makeRows();
etchASketch()