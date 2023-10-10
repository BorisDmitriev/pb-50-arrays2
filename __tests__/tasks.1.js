const rewire = require("rewire");

beforeAll(() => (consoleSpy = jest.spyOn(console, "log")));

describe("1. The Greater Number", () => {
    it("`findGreatest` function exists", () => {
        const solution = rewire("../solution");
        const findGreatest = solution.__get__("findGreatest");
        expect(findGreatest).toBeDefined();
    });
    it("Takes 2 Arguments, 'Array', 'Number' and returns elements in the Array that are greater than second argument", () => {
        const solution = rewire("../solution");
        const findGreatest = solution.__get__("findGreatest");
        const arr = [3, 4, 5, 10, 20];
        const num = 4;
        expect(findGreatest(arr, num)).toBe("5, 10, 20");
    });
});

describe("2. Longest Word", () => {
    it("`getLongestWord` function exists", () => {
        const solution = rewire("../solution");
        const getLongestWord = solution.__get__("getLongestWord");
        expect(getLongestWord).toBeDefined();
    });
    it("Returns the longest word in a String", () => {
        const solution = rewire("../solution");
        const getLongestWord = solution.__get__("getLongestWord");
        const str = "this is one of my strings";
        expect(getLongestWord(str)).toBe("strings");
    });
});
describe("3. Reverse", () => {
    it("`reverseNum` function exists", () => {
        const solution = rewire("../solution");
        const reverseNum = solution.__get__("reverseNum");
        expect(reverseNum).toBeDefined();
    });
    it("Returns reversed number", () => {
        const solution = rewire("../solution");
        const reverseNum = solution.__get__("reverseNum");
        const numToReverse = -123;
        expect(reverseNum(numToReverse)).toBe(-321);
    });
});
describe("4. Vowels", () => {
    it("`vowelCounter` function exists", () => {
        const solution = rewire("../solution");
        const vowelCounter = solution.__get__("vowelCounter");
        expect(vowelCounter).toBeDefined();
    });
    it("Should return the number of vowels in the passed string", () => {
        const solution = rewire("../solution");
        const getVowels = solution.__get__("vowelCounter");
        const strToCheck = "this is a string";
        expect(getVowels(strToCheck)).toBe(4);
    });
});
describe("5. Missing Number", () => {
    it("`findMissingNum` function exists", () => {
        const solution = rewire("../solution");
        const findMissingNum = solution.__get__("findMissingNum");
        expect(findMissingNum).toBeDefined();
    });
    it("Takes an Array of integers and returns the missing integer", () => {
        const solution = rewire("../solution");
        const findMissingNumber = solution.__get__("findMissingNum");
        const arr = [2, 1, 3, 4, 6, 7, 8];
        expect(findMissingNumber(arr)).toBe(5);
    });
});

describe("6. Cubed", () => {
    it("`sumOfCubes` function exists", () => {
        const solution = rewire("../solution");
        const sumOfCubes = solution.__get__("sumOfCubes");
        expect(sumOfCubes).toBeDefined();
    });
    it("Expects an Array of nums and returns sum of its cubes", () => {
        const solution = rewire("../solution");
        const sumOfCubes = solution.__get__("sumOfCubes");
        const arr = [1, 5, 9];
        expect(sumOfCubes(arr)).toBe(855);
    });
});

describe("7. Dictionary", () => {
    it("`dictionary` function exists", () => {
        const solution = rewire("../solution");
        const dictionary = solution.__get__("dictionary");
        expect(dictionary).toBeDefined();
    });
    it("Takes an initial string and an Array of words, Returns words with the same letters as the initial string", () => {
        const solution = rewire("../solution");
        const dictionary = solution.__get__("dictionary");
        const initialString = "cat";
        const words = ["bat", "tab", "cat"];
        expect(dictionary(initialString, words)).toEqual(["cat"]);
        expect(dictionary("beau", ["pastry", "delicious", "name", "boring"])).toEqual([]);
    });
});

describe("8. Even Number Generator", () => {
    it("`getEvenNums` function exists", () => {
        const solution = rewire("../solution");
        const getEvenNums = solution.__get__("getEvenNums");
        expect(getEvenNums).toBeDefined();
    });
    it("Returns all the Even Numbers", () => {
        const solution = rewire("../solution");
        const evenNumbers = solution.__get__("getEvenNums");
        expect(evenNumbers(8)).toEqual([2, 4, 6, 8]);
    });
});

describe("9. Alphabetical Order", () => {
    it("`alphabetise` function exists", () => {
        const solution = rewire("../solution");
        const alphabetise = solution.__get__("alphabetise");
        expect(alphabetise).toBeDefined();
    });
    it("Should return the string with characters in an Alphabetical Order", () => {
        const solution = rewire("../solution");
        const alphabeticalOrder = solution.__get__("alphabetise");
        const str = "hello";
        expect(alphabeticalOrder(str)).toBe("ehllo");
    });
});