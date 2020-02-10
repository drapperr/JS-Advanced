function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (strinh <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}
 module.exports=lookupChar;