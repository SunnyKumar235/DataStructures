// Reverse String
function reversString(str) {
    if (!str || !(typeof str == "string")) {
        console.log("This is not correct string");
        return;
    }
    if (str.length < 2) {
        console.log(str);
        return
    }

    var revString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        revString += str[i];
    }
    console.log(revString);
}

reversString("Hi my name is Sunny");

// New ES6 arrow method.
const reverseString2 = str => [...str].reverse().join('');
reverseString2();

//End of reverse string.


// Find repeate number from array using hashtable javascript

function findRepateNumber(input) {
    let d = {};
    for (var i = 0; i < input.length; i++) {

        if (d[input[i]]) {
            return input[i];
        } else {
            d[input[i]] = input[i];
        }

        // d[datum.key].push(datum.val);
    }
    return undefined;

}

findRepateNumber([1,2,3,4,,4,5,6]);



