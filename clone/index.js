//https://medium.com/better-programming/3-ways-to-clone-objects-in-javascript-f752d148054d

Array.prototype.clone = function() {
	return this.slice(0);
}
var initArr = ['Adriano']
var arr = initArr
arr[0] = 'Adriano Rodrigues'
console.log(initArr[0])
arr = initArr.clone()
arr[0] = 'Adriano'
console.log(initArr[0])
