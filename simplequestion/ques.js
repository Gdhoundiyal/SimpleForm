// let x = 0;
// let y = 10;
//  function logical(){
//     const result = 10-5==7 || 5+1==6;
//    return result
//  }
// console.log(logical());

// let arr = [1,2,4,7,3,450,8];
// let even= 1;
// // console.log(arr.sort(function(a,b){return a-b})) sorting num

// for(let i = 0; i<arr.length; i++){
//   if(arr[i]%2 == 0){
//     console.log(arr[i]+" "+"is even")
//   }else{
//         console.log(arr[i]+" "+"is odd")
//   }
// }

// let name = "girish";
// let revstr = "";

// for(let i = name.length-1; i>=0; i--){
//   revstr += name[i];
// }
// console.log(revstr);

//factorial of n no.

// let num = 5;
// let ans = 1;

// for(i = 1; i <= num; i++){
//   ans = ans * i;
// }
//   console.log(ans);

// fibonacci series

// let n = 10;

// let first = 0;
// let second = 1;
// let third;

// for(let i = 0; i<n; i++){
//   third = first + second;
//     console.log(first);
//   first = second;
//   second = third;
// }

//how to find the prime no.

// let num = 5;
// let isprime = true;

// for(let i = 2; i<= num/2; i++){
//   if(num % i === 0){
//     isprime = false;
//    break;
//   }
// }
// console.log(isprime);

//swaping two elements with each other

// let a = 4;
// let b = 7;

// let c = a;
//   a = b;
//   b = c;
// console.log(a,b)

//check odd and even no.

// let num = 4;
// if(num % 2 == 0){
//   console.log(`${num} is even`)
// }else{
//   console.log(`${num} is odd`)
// };

// console.log(2345%10)
//how to reverse a no.

// let num = 2345;
// let rev = 0;
// let rem = 0;
// while(num>0){
//   rem = num %10;
//   rev = (rev*10)+rem;
//   num = parseInt(num/10);

// }
// console.log(rev)

//how to reserse a string without inbuild methods

// let str = 'Girish';
// let revstr = '';
// for(let i = str.length-1; i>=0;i--){
//   console.log(str[i])
//   revstr += str[i];
// }
// console.log(revstr);

//how to sort an array without inbuild methods

// let array = [32,45,75,11,12];
// let lastvalue;

// for(let i=0; i<array.length;i++){
//   for(let j=i+1; j<array.length;  j++){
//     if(array[i]>array[j]){
//       lastvalue = array[i];
//       array[i] = array[j];
//       array[j] = lastvalue;
//     }
//   }
// }
// let secondLastValue = array[array.length -2];
// console.log(array);
// console.log(secondLastValue);
// console.log(lastvalue)

//with inbuild method
// let sort = array.sort()
// console.log(sort[sort.length -2], sort)

//finding the largest no. in an array

// let num = [2,4,56,63,4,2,64,86,79,74,3,50];
// let largestNum = 0;

// for(let i =0; i<num.length; i++){
//   if(num[i]>largestNum){
//     largestNum =num[i];
//   }
// }

// console.log(largestNum);

let string = "Girish";
let reversestring = "hsiriG";
console.log(string == reversestring);

// for(let i = string.length-1; i>=0;i--){
//   if(string == reversestring){
//     console.log(true)
//   }else{
//     console.log(false)
//   }
// }
// console.log(reversestring);

// let parandrom = 'abccba';
// let isparandrom = ;

// for(let i = 0; i<parandrom.length; i++){
//   if(parandrom[i]=)
// }
