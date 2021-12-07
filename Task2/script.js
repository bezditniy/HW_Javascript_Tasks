let arr = new Array (12, 43, 28, 54, 87, 16);

Array.prototype.sumArr = function(num) {
    let res = this.map(item => item * num)
    console.log(res)
}

arr.sumArr(2);

let arr2 = [2, 4, 5, 6]

arr2.sumArr(3);