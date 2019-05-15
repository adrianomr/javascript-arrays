
var arr = [1,2,3,4,5,6,7,8,9]
console.log(arr)

const pagination = (arr, page, size) => {
	const end = (page * size)
	const start = end - size
	return arr.slice(start,end)
}

const page1 = pagination(arr, 1, 5)
console.log(page1)

const page2 = pagination(arr, 2, 5)
console.log(page2)

