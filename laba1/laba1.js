"use strict";

function find_minmax(arr)
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

function arr_sum(arr)
{
    let sum = 0;
    arr.forEach((item) => {sum+=item;});
    return sum;
}

function count_mark(arr)
{
    let count = [0,0,0,0,0,0,0];
    let new_arr = arr.slice(1,arr.length + 1);
    new_arr.forEach((item,index) => {count[index%7]+=Number(item)});
    count.forEach((item,index,array) => {array[index]/=5});
    return (arr_sum(count) - find_minmax(count))/5;
}

document.addEventListener('DOMContentLoaded', function () {
    let mark = -6;
    let name = "";
    do{
        let arr = prompt("Введите нового участника").split(',');
        if (mark < count_mark(arr))
        {
            name = arr[0];
            mark = count_mark(arr);
        }
    } while(confirm("Продолжить"));
    alert(name);
});