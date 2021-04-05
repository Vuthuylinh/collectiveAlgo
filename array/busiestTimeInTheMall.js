/*








Input: data [
  [time, visitors, exist(0)/enter(1)]

i=0        [1487799425, 14, 1],
i=1        [1487799425, 4,  0],
2          [1487799425, 2,  0],
3          [1487800378, 10, 1],
4          [1487801478, 18, 0],
           [1487801478, 18, 1],
           [1487901013, 1,  0],
           [1487901211, 7,  1],
           [1487901211, 7,  0]

]

- initialize maxCount (maxVisitors)

- find number of visitors at the mall at the same timeStamp
if enter is true => + visitor  (enter)
if enter is false => - visitors (exist)
sumAtMoment = enter -exist

- compare maxCount with sumAtMoment
if maxCount  < sumAtMoment => maxCount =sumAtMoment
if maxCount === sumAtMoment => check timestamp
                      if(maxCount-TimeStamp > sumAtMoment-timeStamp)
                       => return sumAt-timeStam
                        else return maxCount-timeStamp



*/

function findBusiestPeriod(data) {
let count = 0
let maxCount =0
let maxTimeStamp =0

for(let i=0; i< data.length; i++){
//let timeStamp = data[i][0]
//let visitors = data[i][1]
let isEnter = data[i][2] === 1 ? true : false
if (isEnter) {
count += data[i][1]
}
else {
count -= data[i][1]
}


if(data[i][0] === data[i+1][0]){
if(isEnter){
visitors += data[i+1][1]
}else{
visitors -=data[i+1][1]
}
}

if(maxCount<visitors){
maxCount =visitors
}


}

if(maxCount === visitors){

}



}
