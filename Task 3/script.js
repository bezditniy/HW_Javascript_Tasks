function count() {
	let i = 1;
    return () => ("Количество вызовов функции: " + (i++));
}

let show = count();

console.log(show());
console.log(show());
console.log(show());
