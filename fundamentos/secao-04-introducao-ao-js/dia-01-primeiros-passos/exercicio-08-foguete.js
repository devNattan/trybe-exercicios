const a = 15;
const b = 24;
const c = 36;

if (a || b || c %2 === 0) {
    console.log('true')
} else {
    console.log('false')
}

if (a || b || c %2 != 0) {
    console.log('true')
} else {
    console.log('false')
}