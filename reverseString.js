function reverseString(string) {
    let reversed = '';
    let arrayString = string.split('');
    for (let i = arrayString.length - 1; i >= 0; i--) {
        reversed += arrayString[i];
    }
    return reversed;
}

module.exports = reverseString;
