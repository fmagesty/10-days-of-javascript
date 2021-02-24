

function getMaxLessThanK(n, k) {
    let s = [];
    for (let num = 1; num < n + 1; num++) {
        s.push(num);
    }
    let a;
    let b;
    let total = 0;
    for (let b = n; b > 0; b--) {
        for (let a = b-1; a > 0; a--) {
            console.log(a + ' ' + b);
            if ((a & b) < k && (a & b) > total) {
                total = (a & b);
            }
        }
    }
    console.log('total = ' + total);
    return total;
}


getMaxLessThanK(5, 2);

