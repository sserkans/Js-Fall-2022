/**
Question-1:
    Create a function to return the account object in given accountData-array and given account-id
​
    example-1:
        accountData = [
            {
                name: "Saving Account - 1",
                id: 9876
            },
            {
                name: "Saving Account - 2",
                id: 8765
            },
            {
                name: "Saving Account - 3",
                id: 7654
            },
            {
                name: "Saving Account - 4",
                id: 6543
            },
            {
                name: "Saving Account - 5",
                id: 5432
            }
        ]
        accountId = 8765
​
​
        If input is accountData and accountId, return:
            {
                name: "Saving Account - 2",
                id: 8765
            }
​
    example-2:
        accountData = [
            {
                name: "Saving Account - 1",
                id: 9876
            },
            {
                name: "Saving Account - 2",
                id: 8765
            },
            {
                name: "Saving Account - 3",
                id: 7654
            },
            {
                name: "Saving Account - 4",
                id: 6543
            },
            {
                name: "Saving Account - 5",
                id: 5432
            }
        ]
        accountId = 1234
​
​
        If input is accountData and accountId, return:
            {}
*/
accountData = [
    {
        name: "Saving Account - 1",
        id: 9876
    },
    {
        name: "Saving Account - 2",
        id: 8765
    },
    {
        name: "Saving Account - 3",
        id: 7654
    },
    {
        name: "Saving Account - 4",
        id: 6543
    },
    {
        name: "Saving Account - 5",
        id: 5432
    }
]
accountId = 9999;

function accountDetails (object,number){
    for (let i=0 ; i < object.length; i++)
        if (object[i].id === number){
            return object[i];
        }
        return {}
    }
console.log(accountDetails(accountData, accountId));

/*Question-2:
    Create a function to return the string(s) which contain 'A' (ignoring cases) from a given string array.
        example:
            input -> [hello, laugh, live, peaceful, hopeful]
            ans -> laugh, peaceful
​
            input -> [hello, laugh, live, king, queen]
            ans -> laugh
​
            input -> [live, king, queen]
            ans -> 
*/

let input = [ 'live', 'hopeful']

const wordsWithA = function (givenArr) {
    let aWords = [];
    for (word of givenArr) {
        if (word.toUpperCase().includes('A')) {
            aWords.push(word)
        }
    }
    return aWords;
}
console.log(wordsWithA(input));


/**
Question-3:
    Note: Palindrome is when String is same when written backwards.
    eg: level <-> level
    eg: eye <-> eye
​
    Create a function to find if given string is palindrome (ignore cases).
*/

    let input2 = 'LevvEl';
    function palindrome (string){
       let  stringIgnoreCases = string.toUpperCase();
        for (let i = 0 ; i < stringIgnoreCases.length/2 ; i++){
           if (stringIgnoreCases[i] !== stringIgnoreCases[stringIgnoreCases.length-1-i]) {
            return `${string} is not a palindrome`;
           } else 
            return `${string} is palindrome`
        }
    }
    console.log(palindrome(input2))