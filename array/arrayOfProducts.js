function arrayOfArrayProducts(arr) {
  // your code goes here
  let arrLength = arr.length
  if(arrLength===0 || arrLength ===1){
    return []
  }
  let productArr =[]
  for(let i=0; i<arrLength; i++){
    let currentProduct =1
    for(let j=0; j<arrLength; j++){
      if(i!==j){
        currentProduct*=arr[j]
      }
    }
    productArr.push(currentProduct)
  }

  return productArr
}
