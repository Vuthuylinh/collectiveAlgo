/*
Blackjack highest -BACH

Have the function BlackjackHighest(strArr)
take input: strArr - array of numbers and letters representing blackjack cards.
Numbers in the array will be written out. For example strArr=["two","three","ace","king"]. The Full list of possibilities for a strArr is ["two", "three","four","five","six","seven","eight","nine","ten","jack","queen","king","ace"].
Your program out put : below, above, or blackjack signifying if you have blackjack (numbers add up to 21) or not and the highest card in your hand in relation to whether or not you have blackjack. If the array contains an ace but your hand will go above 21, you must consider ace as a 1. You must alway try and stay below the 21 mark. So using the array mentioned above, the output should be "below king". The ace is counted as 1 in this case because if it wasn't, you would be above the 21 mark.

example:
 input ["four","ace","ten"]
 output: below ten

 input ["ace","queen"]
 output "blackjack ace"

*/

/*
Input:
       array
            string - contain numbers in text
output:
      string
            below +highest card
            blackjack +highest card
            above +highest card
Note:
    ace = 1 if sum of the rest >10
    ace =11 if sum of the rest <= 10
    value: ten =jack =queen =king =10
 position:  ten <jack <queen < king

Approach:
 - a set to holds card in text - number value
 - iterate input array to check the input has "ace" or not?
   hasAce ==false
        sumAll >21 => above +highest
        sumAll =21 => blackjack +highest
        sumAll<21  => below + highest
   hasAce ==true
        sum = sum all element except ace
        sum<10 => ace =11 => sumAll <21 => below ace
        sum =10 => ace =11 => sumAll=21 => bblackjack ace
        sum =20 => ace = 1 => sumAll=21 => bblackjack + highest
        sum >10 && sum <20 => ace=1 => sumAll <21 => below +highest
        sum > 20 => sumAll >21 => above + higest
*/

const ACE ="ace"
const ABOVE ="above "
const BELOW ="below "
const BLACKJACK ="blackjack "

const cardToNum ={
  "two"  :2,
  "three":3,
  "four" :4,
  "five" :5,
  "six"  :6,
  "seven":7,
  "eight":8,
  "nine" :9,
  "ten"  :10,
  "jack" :10,
  "queen":10,
  "king" :10
}
let cardPosition ={
  "two"  :2,
  "three":3,
  "four" :4,
  "five" :5,
  "six"  :6,
  "seven":7,
  "eight":8,
  "nine" :9,
  "ten"  :10,
  "jack" :11,
  "queen":12,
  "king" :13
};

let numToString={
 2: "two"  ,
 3: "three",
 4: "four" ,
 5: "five",
 6: "six" ,
 7: "seven",
 8: "eight",
 9: "nine",
 10: "ten",
 11: "jack",
 12: "queen",
 13: "king"
}

let arrayCardsWithOutAce=[]

function blackjackHighest(strArr){
  let hasAce = false
  let sum =0

  for(let i=0; i<strArr.length; i++){
    let num=strArr[i]
    if(num===ACE){
      hasAce=true
    }else{
      arrayCardsWithOutAce.push(num)
      sum+=cardToNum[num]
    }
  }

  let positionArr=[]
  for(let j=0; j<arrayCardsWithOutAce.length; j++){
    let num= arrayCardsWithOutAce[j]
   let position = cardPosition[num]
   positionArr.push(position)
  }
 positionArr.sort((a,b)=> b-a)
 let highestPosition = positionArr[0]
 let higestCardName = numToString[highestPosition]


  if(!hasAce){
      if(sum>21){
        return ABOVE + higestCardName
      }else if(sum===21){
        return BLACKJACK + higestCardName
      }else{
        return BELOW + higestCardName
      }
  }else{
     if(sum<10){
       return BELOW+ACE
     }else if(sum===10){
       return BLACKJACK+ACE
     }else if(sum===20){
       return BLACKJACK+ higestCardName
     }else if(sum>10 && sum <20){
       return BELOW + higestCardName
     }else{
       return ABOVE + higestCardName
     }
  }
}


let arr=["queen","ten","two"]

let result = blackjackHighest(arr)
console.log(result)
