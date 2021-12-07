let arr = []

function generateNum() {
    
    let num = Math.floor(Math.random() * 100);
        if (arr.indexOf(num) === -1) {
           arr.push(num) 
           console.log(arr)
        }
}

generateNum()
generateNum()
generateNum()
generateNum()
generateNum()
generateNum()
generateNum()
generateNum()
generateNum()
