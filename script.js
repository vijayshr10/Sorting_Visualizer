let arr = []
generateArrEl(75);
function reload() {
    let val = document.getElementById("size").value;
    document.getElementById("size").value = "";
    val = parseInt(val);
    if (!isNaN(val) && val < 160 && val > 5) {
        console.log(val)
        generateArrEl(Math.floor(val));
    } else generateArrEl(75)

}
function generateArrEl(arrSize) {
    arr = [];
    for (let i = 0; i < arrSize; i++) {
        arr.push(Math.floor(Math.random() * 1000));
        generateHtml();
    }
}
async function innerBblSort() {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            //Value comparison using ascending order
            if (arr[j + 1] < arr[j]) {
                //Swapping
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
            }
        }
        await sleep();
    }
}
function generateHtml() {
    let p = "";
    arr.map(val => p += `<div class="bar" id="bar-${val}}" style="height:${val / 2}px;"></div>`)
    document.getElementById("canvas").innerHTML = p;

}
//sleep
function sleep() {
    generateHtml();
    return new Promise(resolve => setTimeout(resolve, 0.5));
}
//selection sort

async function selectionSort() {
    for (let i = 0; i < arr.length; i++) {
        let pos = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[pos] > arr[j]) {
                //[arr[i],arr[j]]= [arr[j],arr[i]];
                pos = j;
            }

        }
        await sleep();
        [arr[pos], arr[i]] = [arr[i], arr[pos]];
    }
}
async function insertionSort() {
    for (let i = 1; i < arr.length; i++) {
        let item = arr[i];
        j = i - 1;
        while (j >= 0 && item <= arr[j]) {
            arr[j + 1] = arr[j];
            j--;

        }
        await sleep();
        arr[j + 1] = item;
    }
}
//mergesort
async function merge(arr, l, m, r) {
    var n1 = m - l + 1;
    var n2 = r - m;

    // Create temp arrays
    var L = new Array(n1);
    var R = new Array(n2);

    // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (var j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];

    // Merge the temp arrays back into arr[l..r]

    // Initial index of first subarray
    var i = 0;

    // Initial index of second subarray
    var j = 0;

    // Initial index of merged subarray
    var k = l;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
        await sleep();
    }
    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
        await sleep();
    }

    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
        await sleep();
    }
}

// l is for left index and r is
// right index of the sub-array
// of arr to be sorted
async function mergeSortC() {
    await mergeSort(arr, 0, arr.length - 1);
}
async function mergeSort(arr, l, r) {
    if (l >= r) {
        return;
    }
    var m = l + parseInt((r - l) / 2);
    await mergeSort(arr, l, m);
    await sleep();
    await mergeSort(arr, m + 1, r);
    await sleep();
    await merge(arr, l, m, r);
}




