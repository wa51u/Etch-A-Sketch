let color = ""
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
    etchASketch("stop")
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
 //new function whith remove option
 function etchASketch(color = "black"){
   
    console.log(`color ${color}`)
    divs = document.querySelectorAll(".grid-item")
    divs.forEach(div => {
        if (color === "stop"){
            div.style.backgroundColor = "";
            div.style.className = "";
        
        }

        function mouseOverDivs(){
            if (color === "randColor"){
            // div.addEventListener("mouseover", () => {
                div.style.backgroundColor = randColor();
                console.log('rand'+color)
            }  else if (color === "black"){
                div.style.backgroundColor = "black";
            } else if (color === "gray"){
                gray(div) 
            }
        }    

        div.addEventListener('mouseover', mouseOverDivs)

        //removing  old addEvent after pressing another button
        randomColor.addEventListener("click", () => {
            div.removeEventListener('mouseover', mouseOverDivs)
        });
    
        blackColor.addEventListener("click", () => {
            div.removeEventListener('mouseover', mouseOverDivs)
        });

        grayScale.addEventListener("click", () => {
            div.removeEventListener('mouseover', mouseOverDivs)
        });
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

    console.log("first console.log" +div.style.backgroundColor)
    if (div.style.backgroundColor == "rgba(0, 0, 0, 0.9)"){
    return 0
    }

    if (div.style.backgroundColor.substr(0,13) != "rgba(0, 0, 0,"){
        div.style.backgroundColor = `rgba(0,0,0,0.1)`;
    } else {
        let alfaStr = div.style.backgroundColor.substr(14, 3)
        let alfaNr = Number(alfaStr)
        alfaNr = alfaNr + 0.1
        div.style.backgroundColor = `rgba(0,0,0,${alfaNr})`;
    }
}



makeRows();
etchASketch()