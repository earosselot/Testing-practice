function capitalize(string) {
    if (string.length > 1) {
        return string[0].toUpperCase() + string.substring(1).toLowerCase();
    } else if (string.length === 1) {
        return string[0].toUpperCase();
    } else {
        return '';
    }
}

module.exports = capitalize;
