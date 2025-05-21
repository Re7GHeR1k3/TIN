class Auto {
    constructor(rok, przebieg, cena_wyjsciowa) {
        this.rok = rok;
        this.przebieg = przebieg;
        this.cena_wyjsciowa = cena_wyjsciowa;
        this.cena_koncowa = cena_wyjsciowa;
    }

    podniesCene() {
        this.cena_wyjsciowa += 1000;
    }

    obnizZaWiek() {
        const obecnyRok = new Date().getFullYear();
        const lata = obecnyRok - this.rok;
        this.cena_koncowa -= lata * 1000;
    }

    obnizZaPrzebieg() {
        const ileSetek = Math.floor(this.przebieg / 100000);
        this.cena_koncowa -= ileSetek * 10000;
    }

    dodajPrzebiegIRok(przebieg, rok) {
        this.przebieg += przebieg;
        this.rok = rok;
        this.obnizZaWiek();
        this.obnizZaPrzebieg();
    }
}


let tablica = [];

function dopiszDoTablicy(auto) {
    if (auto.cena_wyjsciowa > 10000) {
        tablica.push(auto);
    }
}

function zwiekszRok() {
    tablica.forEach(auto => auto.rok += 1);
}


let a1 = new Auto(2010, 100000, 12000);
let a2 = new Auto(2016, 80000, 11000);

dopiszDoTablicy(a1);
dopiszDoTablicy(a2);
zwiekszRok();

console.log(tablica);
