
const cars = [
    { rok: 2010, przebieg: 120000, cena_wyjsciowa: 20000, cena_koncowa: 15000 },
    { rok: 2015, przebieg: 80000, cena_wyjsciowa: 30000, cena_koncowa: 25000 }
];
const carsContainer = document.getElementById('cars-container');
const table = document.createElement('table');
const headers = ['Rok', 'Przebieg', 'Cena Wyjściowa', 'Cena Końcowa'];
const headerRow = table.insertRow();
headers.forEach(text => {
    const th = document.createElement('th');
    th.textContent = text;
    headerRow.appendChild(th);
});
cars.forEach(car => {
    const row = table.insertRow();
    Object.values(car).forEach(value => {
        const cell = row.insertCell();
        cell.textContent = value;
    });
});
carsContainer.appendChild(table);


const students = [
    {
        imie: "Jan",
        nazwisko: "Kowalski",
        oceny: [
            { przedmiot: "WPR", wartosc: 5 },
            { przedmiot: "TIN", wartosc: 3 },
            { przedmiot: "POJ", wartosc: 4 }
        ]
    },
    {
        imie: "Anna",
        nazwisko: "Nowak",
        oceny: [
            { przedmiot: "WPR", wartosc: 3 },
            { przedmiot: "TIN", wartosc: 5 },
            { przedmiot: "POJ", wartosc: 4 }
        ]
    },
    {
        imie: "Jan",
        nazwisko: "Trzeci",
        oceny: [
            { przedmiot: "WPR", wartosc: 5 },
            { przedmiot: "TIN", wartosc: 5 },
            { przedmiot: "POJ", wartosc: 2 }
        ]
    }
];


const studentsContainer = document.getElementById('students-container');
students.forEach(student => {
    const header = document.createElement('div');
    header.className = 'student-header';
    header.textContent = `${student.imie} ${student.nazwisko}`;

    const details = document.createElement('div');
    details.className = 'student-details';

    const ul = document.createElement('ul');
    let suma = 0;
    student.oceny.forEach(ocena => {
        const li = document.createElement('li');
        li.textContent = `${ocena.przedmiot}: ${ocena.wartosc}`;
        suma += ocena.wartosc;
        ul.appendChild(li);
    });

    const srednia = suma / student.oceny.length;
    const avgPara = document.createElement('p');
    avgPara.textContent = `Średnia: ${Math.round(srednia)}`;

    details.appendChild(ul);
    details.appendChild(avgPara);

    header.addEventListener('click', () => {
        details.classList.toggle('expanded');
    });

    studentsContainer.appendChild(header);
    studentsContainer.appendChild(details);
});
