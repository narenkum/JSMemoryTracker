"use strict"

var urlParams = new URLSearchParams(window.location.search);

var slowAllocation = false;

if (urlParams.has("slow")) {
    slowAllocation = true;
}

var arrLength = 200; // 2GB(200 * 10MB)
var subArrLength = 10000000; // 10MB
var progressInterval = 10000000;
var MB = 1000000;

if (slowAllocation) {
    arrLength = 1000; // 1GB (1000 * 1MB)
    subArrLength = 1000000; // 1MB
    progressInterval = 1000000;
}

var arr = [...Array(arrLength)].map(x => []);
var counter = 0;
var totalAllocatedMem = 0;

function allocate(mem, counter) {
   let subArr =  mem[counter] = Array(subArrLength).fill(0);
    for(let i = 1; i <= subArrLength; i++) {
        subArr[i-1] = (i-1);
        totalAllocatedMem++;
        if (i%progressInterval === 0) {
            document.getElementById("allocatedMem").value = (totalAllocatedMem)/MB;
            document.getElementById("myProgress").value = (totalAllocatedMem/(arrLength*subArrLength))*100;
        }
    }
    if (++counter === arrLength) {
        setTimeout(()=>{
            window.alert("Allocation of " + document.getElementById("allocatedMem").value + "MB complete!");
        }, 100);
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
    window.alert("Allocation failed, allocated " + document.getElementById("allocatedMem").value + "MB.");
}
