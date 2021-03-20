/*
Array of Array products:
Given an array of integers (arr), you are asked to calculate for each index i, the product of all integers except the integer at that index (arr[i]). Implement a function arrayOfArrayProducts that takes an array of integers and return an array of the products.
Solve without using divison and analyze your solution tim and space complexities.

I: input: arr
            integers
                calculate elements value
O: array
        products
C:  except current element in current index
    no divison
E: arr.length = 0 || 1

*/
//Solution 1:

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
