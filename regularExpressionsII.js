function regexVar(str) {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
    let re = new RegExp('^(Mr|Mrs|Ms|Dr|Er)(\\.)([a-zA-Z])+$');
    
    /*
     * Do not remove the return statement
     */
    console.log(re.test(str))
    return re;
}

regexVar('Mrs.Y') // true
regexVar('Mr.Bolovo') // true
regexVar('Dr#Denis') // false