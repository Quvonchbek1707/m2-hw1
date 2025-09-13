class CaesarCipher {
    // here we are creating a constructor to get our key for shifting
    constructor(shift) {
        this.shift = shift;
    }

    // encoding part involves shifting characters to right
    encode(str) {
        return str.split("").map(ch => {
            let code = ch.charCodeAt(0);  // ascii is for letter recognision
            if (code >= 65 && code <= 90) {
                return String.fromCharCode(((code - 65 + this.shift) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                return String.fromCharCode(((code - 97 + this.shift) % 26) + 97);
            } else {
                return ch;
            }
        }).join("");
    }

    decode(str) {
        // basically same as encode, but this time we do the opposite direction
        return str.split("").map(ch => {
            let code = ch.charCodeAt(0);
            if (code >= 65 && code <= 90) { // A-Z
                return String.fromCharCode(((code - 65 - this.shift + 26) % 26) + 65);
            } else if (code >= 97 && code <= 122) { // a-z
                return String.fromCharCode(((code - 97 - this.shift + 26) % 26) + 97);
            } else {
                return ch;
            }
        }).join("");
    }
}

// Test
var c = new CaesarCipher(5);
console.log(c.encode('Codewars')); // "HTIJBFWX"
console.log(c.decode('BFKKQJX'));  // "WAFFLES"
