"use strict"

const arrLength = 200; // 2GB(200 * 10MB)
const subArrLength = 10000000; // 10MB
const MB = 1000000;
const progressInterval = 10000000;
const arr = [...Array(arrLength)].map(x => []);
var counter = 0;
var totalAllocatedMem = 0;

function allocate(mem, counter) {
   let subArr =  mem[counter] = Array(subArrLength).fill(0);
    for(let i = 1; i <= subArrLength; i++) {
        subArr[i-1] = (i-1);
        totalAllocatedMem++;
        if (i%progressInterval === 0) {
            document.getElementById("allocatedMem").value = (totalAllocatedMem)/MB;;
            document.getElementById("myProgress").value = (totalAllocatedMem/(arrLength*subArrLength))*100;
        }
    }
    if (++counter === arrLength) {
        console.log("Completed!!!");
        return;
    }
    setTimeout(()=>{
        allocate(arr, counter);  
    }, 100);
}

window.onload = function () {
    setTimeout(()=>{
        allocate(arr, counter);
    }, 100);
}

window.onerror = function () {
    console.log("window onerror, totalAllocatedMem:", totalAllocatedMem);
}
