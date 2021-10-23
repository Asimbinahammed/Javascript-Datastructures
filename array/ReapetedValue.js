let i = 1;
 let j = 0;
 const number = [];
 
 while ( i <= 100 ) {
     if ( i % 11 == 0) {
         while ( j < i ) {
             number[j] = i;
             j++;
             break;
         }
     }
     i++;
 }
 console.log('Repeating numbers are: ' +number);