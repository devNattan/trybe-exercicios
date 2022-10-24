let nota = -5;

if (nota >= 90) {
    console.log('Grade A')
} else if (nota >= 80) {
    console.log('Grade B')
} else if (nota >= 70) {
    console.log('Grade C')
} else if(nota >= 60) {
    console.log('Grade D')
} else if (nota >= 50) {
    console.log('Grade E')
} else if (nota < 50 && nota > 0) {
    console.log('Grade F')
} else if (nota < 0 || nota > 100) {
    console.log('ERROR!!!')
} else {
    console.log('ERROR!!!')
}