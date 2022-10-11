//some method

// let marks = [8,5,7,9,10,3];

// let lessThanFive = false;

// for (let i = 0; i < marks.length; i++) {
//     if (marks[i] < 4) {
//         lessThanFive = true;
//         break;
//     }
// }

// console.log(lessThanFive);



// forEach method

// const arr = [1,2,3,4,5];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.forEach(e=>console.log(e));



//Reverse method

// const arr2 = [1,2,3,4,5];

// for (let i = arr2.length; i >= 0; i--) {
//     console.log(arr2[i]);
// }



// include method

// let arr1=[1,2,3,4,5];
//   function getIndex(arr, valuetosearch) {
//     for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === valuetosearch) return true;
//     }
//     return false;
//     }
// console.log(getIndex(arr1,1))


// filter metod

// class MyCollection {
//     constructor() {
//         this.elements = arguments;
//     }

//     filterC = function (callback) {
//         let result = [];
//         for (let i = 0; i < this.elements.length; i++) {
//             if (callback(this.elements[i])) {
//                 result.push(this.elements[i])
//             }
//         }
//         return result;
//     }
// }


// let myCollection = new MyCollection(1, 2, 3, 4, 5, 6, true, "mamed");

// let res = myCollection.filterC(x => {
//     return x > 3;
// });


// console.log(res)


Array.prototype.customMap = function (cb) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        result.push(cb(this[i], i, this));
    }
    return result;
}

const mappedNumbers = [1, 2, 3,4,5].customMap((num) => num + 2);


Array.prototype.customReduce = function (cb) {
    let acc = 0;
    for (let index = 0; index < this.length; index++) {
        cb(acc = acc + this[index])
    }
    return acc;
}