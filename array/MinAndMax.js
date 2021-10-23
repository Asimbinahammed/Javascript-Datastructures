let maxcount=10;
let count=0;
let number=[];

while(count<maxcount){
    number[count] = Math.floor ( Math.random() * 900) + 100;
    count++;
}

console.log(number);

let max = secondMax = number[1];
let min = secondMin = number[1];

for( i=0;i<number.length;i++){
    if ( number[i] > max ) {
        secondMax = max;
        max = number[i];
    }
    else if ( number[i] > secondMax && number[i] != max ) {
        secondMax = number[i];
    }
    if ( number[i] < min ) {
        secondMin = min;
        min = number[i];
    }
    else if ( number[i] < secondMin && number[i] != min ) {
        secondMin = number[i];
    }
}



console.log(secondMin);
console.log(secondMax);