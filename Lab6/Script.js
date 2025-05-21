// Zadanie 1
const trojkat = (a, h) => (a * h) / 2;
const prostokat = (a, b) => a * b;
const trapez = (a, b, h) => ((a + b) * h) / 2;
const rownoleglobok = (a, h) => a * h;
const pole = (callback, ...args) => callback(...args);

const zad1 = [
    pole(trojkat, 5, 6),
    pole(prostokat, 4, 7),
    pole(trapez, 3, 5, 4),
    pole(rownoleglobok, 6, 5)
];

console.log("Zadanie 1:", zad1.join(", "));


// Zadanie 2
function cenzura(zdanie, slowo) {
    const regex = new RegExp(slowo, "gi");
    return zdanie.replace(regex, match => "*".repeat(match.length));
}

const wynik2 = cenzura("Ala ma kota i psa", "kot");
console.log("Zadanie 2:", wynik2);


// Zadanie 3
function cenzuraSlowa(slowo, niedozwolone) {
    const regex = new RegExp(niedozwolone, "gi");
    return slowo.replace(regex, match => "*".repeat(match.length));
}

let tablica = ['kotlet', 'kotka', 'koty', 'pies'];
let wynik3 = tablica.map(s => cenzuraSlowa(s, "kot"));
console.log("Zadanie 3:", wynik3.join(", "));


// Zadanie 4
function mojasort(a, b) {
    return (a % 3) - (b % 3);
}
let arr = [10, 11, 13, 12, 14, 15, 16, 17, 18, 19 ,20 ,21];
let sorted = arr.sort(mojasort);
console.log("Zadanie 4:", sorted.join(", "));


// Zadanie 5
let osoby = [
    ['Jan', 'Kowalski', 21],
    ['Anna', 'Nowak', 19],
    ['Jan', 'Trzeci', 27]
];
let starsi = osoby.filter(osoba => osoba[2] > 20);
let wynik5 = starsi.map(osoba => `${osoba[0]} ${osoba[1]} ${osoba[2]}`);
console.log("Zadanie 5:", wynik5.join(", "));


// Zadanie 6
let wynikMapowania = osoby.map(
    osoba => `${osoba[0]} | ${osoba[1]} | ${osoba[2]}`
);
console.log("Zadanie 6:", wynikMapowania.join(", "));
