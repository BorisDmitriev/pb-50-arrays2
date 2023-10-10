const findGreatest = (arr, num) => {
    return arr.filter(el => el > num).join(", ");
}

console.log(findGreatest([3, 4, 5], 4)); //➞ 5
console.log(findGreatest([10, 20, 30], 12));// ➞ 20, 30
console.log(findGreatest([0, 10, 3], 4));// ➞ 10

//2
const getLongestWord = (str) => {
    return str.split(" ").reduce((word, nextword) => word.length > nextword.length ? word : nextword);
}

console.log(getLongestWord("this is a web development course"))


//3
const reverseNum = nums => {
    return Math.sign(nums) * Number(("" + Math.abs(nums)).split("").reverse().join(""));
}

console.log(reverseNum(-34532));

//4
const vowelCounter = str => {
    let vowels = 'aeiou';
    return str.toLowerCase().split('')
        .reduce((acc, cur) => {
            if( vowels.includes(cur) ){
                acc.push(cur);
            }
            return acc;
    }, []).length;
}    
console.log(vowelCounter("this is a string"));  //4


//5
const findMissingNum = arr => {
    const numbers = "1 2 3 4 5 6 7 8 9 10".split(' ').map(Number); // Array of type Number
    let missingNum = numbers.find(num => !arr.includes(num));
    return missingNum;
}

console.log(findMissingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]));//➞ 5
console.log(findMissingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]));//➞ 10
console.log(findMissingNum([2, 1, 3, 4, 6, 7, 8]));//➞ 5


//6
const sumOfCubes = arr => {
    if( arr.length===1){
        return Math.pow(arr[0],3);
    }else if (arr.length > 1) {
        return arr.map(num => Math.pow(num, 3)).reduce((a, b) => a + b);
    }else {
        return 0;
    }
}

console.log( sumOfCubes([1, 5, 9]) ); //➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
console.log( sumOfCubes([2]) );      //➞ 8
console.log( sumOfCubes([]) );      //➞ 0


//7
const dictionary = (str,arr) => {
    return arr.filter( word => word.startsWith(str) );
}

console.log( dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) ); // ["triplet", "tries", trip"]


//8
const getEvenNums = num => {
    const allNums = [];
    for (let i = 1; i <= num; i++) {
        allNums.push(i);
    }
    const evenNums = allNums.filter( num => num%2 === 0 );
    return evenNums.length === 0? [] : evenNums;
}

console.log( getEvenNums(8) ); // ➞ [2, 4, 6, 8]
console.log( getEvenNums(4) );// ➞ [2, 4]
console.log( getEvenNums(2) );// ➞ [2]
console.log( getEvenNums(1) ); // []

//9 
const alphabetise = str =>{
    return str.split("").sort().join("");
}

console.log( alphabetise("webdev") );//➞ "bdeevw"