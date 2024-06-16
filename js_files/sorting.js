//swap function for all algos
function swap(el1, el2) {
    console.log('In swap');
    
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
    
}

//wait delay function for sorting algos
function waitfor(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}
//array size
let arraySize = document.querySelector('#arr_sz');

// Event listener to update the bars 
arraySize.addEventListener('input', function(){
    console.log(arraySize.value, typeof(arraySize.value));
    createNewArray(parseInt(arraySize.value));
});

// Default delay
let delay = 260;

// Selecting speed slider from DOM
let delayElement = document.querySelector('#speed_input');

// Event listener to update delay time 
delayElement.addEventListener('input', function(){
    console.log(delayElement.value, typeof(delayElement.value));
    delay = 320 - parseInt(delayElement.value);
});

//create and push an array
let array = [];
//default call at the beginning
createNewArray();

function createNewArray(noOfBars = 60) {
    deleteChild();
    //creating an array
    array = [];
    for (let i = 0; i < noOfBars; i++) {
        array.push(Math.floor(Math.random() * 250) + 1);
    }
    console.log(array);

    const bars = document.querySelector("#bars");
    for (let i = 0; i < noOfBars; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }

}

//delete function
function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

//selection newArray
const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function(){
    createNewArray();
});


function disableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = true;
    document.querySelector(".insertionSort").disabled = true;
    document.querySelector(".mergeSort").disabled = true;
    document.querySelector(".quickSort").disabled = true;
    document.querySelector(".selectionSort").disabled = true;
}

// Enables sorting buttons 
function enableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector(".insertionSort").disabled = false;
    document.querySelector(".mergeSort").disabled = false;
    document.querySelector(".quickSort").disabled = false;
    document.querySelector(".selectionSort").disabled = false;
}

// Disables size slider 
function disableSizeSlider(){
    document.querySelector("#arr_sz").disabled = true;
}

// Enables size slider 
function enableSizeSlider(){
    document.querySelector("#arr_sz").disabled = false;
}

// Disables newArray buttons 
function disableNewArrayBtn(){
    document.querySelector(".newArray").disabled = true;
}

// Enables newArray button
function enableNewArrayBtn(){
    document.querySelector(".newArray").disabled = false;
}