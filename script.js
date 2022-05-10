let values = [];

let i = 0;
let w = 10;

function setup() {
    createCanvas(1080, 600);
    values = new Array(floor(width/w));
    for (let i = 0; i < values.length; i++) {
        values[i] = random(height);
    }
    frameRate(5);
    quickSort(values, 0, values.length - 1);
}

function draw() {
    background(51);
    
    for (let i = 0; i < values.length; i++) {
        stroke(0);
        fill(255);
        rect(i*w, height - values[i], w, values[i]);
        Sleep(500);
    }
}

function quickSort(arr, start, end) {
    if ( start >= end){
        return;
    }

    var index = partition(arr, start, end);
    quickSort(arr, start, index - 1);
    quickSort(arr, index + 1, end);

}

function partition(arr, start, end){
    let pivotIndex = start;
    let pivotValue = arr[end];
    for(let i = start; i < end; i++){
        if ( arr[i] < pivotValue){
            swap(arr, i, pivotIndex);
            pivotIndex++;
        }
    }

    swap(arr, pivotIndex, end);
    return pivotIndex;
}

function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
