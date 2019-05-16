const initArr = [{0: {v: 'teste'}, 1: {v: 'teste'}},{0: {v: 'teste3'}, 1: {v: 'teste3'}},{0: {v: 'teste2'}, 1: {v: 'teste2'}}]
var arr = initArr.slice(0)
console.log(initArr)

arr.sort((a,b) => {
    if (a[0].v > b[0].v) {
        return 1;
      }
      if (a[0].v < b[0].v) {
        return -1;
      }
      // a must be equal to b
      return 0;
})

console.log(arr)