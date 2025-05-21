class Ocena {
    constructor(przedmiot, wartosc) {
        this.przedmiot = przedmiot;
        this.wartosc = wartosc;
    }
}

class Student {
    constructor(imie, nazwisko) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this._oceny = [];
        this.srednia = 0;
    }

    hello() {
        return `Witaj ${this.imie} ${this.nazwisko}, Twoja średnia ocen to: ${this.srednia}.`;
    }

    set oceny(x) {
        if (x instanceof Ocena) {
            this._oceny.push(x);
            const suma = this._oceny.reduce((acc, o) => acc + o.wartosc, 0);
            this.srednia = suma / this._oceny.length;
        }
    }

    get oceny() {
        return this._oceny.map(o => `Przedmiot: ${o.przedmiot} - ocena ${o.wartosc}`).join('. ') + '.';
    }
}

let s = new Student('Jan', 'Kowalski');

s.oceny = new Ocena("WPR", 4);
s.oceny = new Ocena("TIN", 3);
s.oceny = new Ocena("POJ", 5);

console.log(s.hello());
console.log(s.oceny);
