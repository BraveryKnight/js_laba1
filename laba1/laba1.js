"use strict";

function findMinMax(arr)
{
    let min = arr[0],max = arr[0];
    arr.forEach((item) =>
    {
        if (item<min)
            min = item;
        if (item>max)
            max = item;
    });
    return min+max;
}

function arrSum(arr)
{
    let reducer = (item, value) => item + value;
    return arr.reduce(reducer);
}

function countMark(arr)
{
    let count = [0,0,0,0,0,0,0];
    arr.forEach((item,index) => {count[parseInt(index/5)]+=Number(item)});
    console.log(count);
    return arrSum(count) - findMinMax(count);
}

document.addEventListener('DOMContentLoaded', function () {
    let mark = -6;
    let name = "";
    do{
        let [tmpName,...arr] = prompt("Введите нового участника").split(',');
        let item = countMark(arr);
        if (mark < item)
        {
            name = tmpName;
            mark = item;
        }
    } while(confirm("Продолжить"));
    alert(name);
});