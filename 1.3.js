const _array = [4,[[5],[6,[7],8],9,10]];

const newArr = []

/* 
check the array and if type of array is number then add it to new array
and if type is array then called function again to check the array
*/ 
function check(array) {
    array.forEach(arr => {
        if (typeof arr === Array) {
            check(arr);
        }
        else{
            newArr.push(arr);
        }
    })
}

check(_array);