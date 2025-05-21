function pitagoras(a, b, c) {
    let arr = [a, b, c].sort((x, y) => x - y);
    console.log(arr[0]**2 + arr[1]**2 === arr[2]**2);
}

pitagoras(3, 4, 4);


function wypiszPodzielne(a, b, c) {
    for (let i = a; i <= b; i++) {
        if (i % c === 0) {
            console.log(i);
        }
    }
}

wypiszPodzielne(1, 20, 4);

function tabliczka(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= n; j++) {
            row += (i * j) + ' ';
        }
        console.log(row.trim());
    }
}


tabliczka(4);

function fibonacci(n) {
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        console.log(a);
        [a, b] = [b, a + b];
    }
}


fibonacci(10);

function choinka(h) {
    for (let i = 1; i <= h; i++) {
        console.log('*'.repeat(i));
    }
}

choinka(4);

function choinkaNoca(h) {
    for (let i = h; i > 0; i--) {
        let stars = '*'.repeat(i);
        let spaces = ' '.repeat((h - i) * 2);
        console.log(stars + spaces + stars);
    }
}

choinkaNoca(16);

function poleFigury(typ, ...args) {
    switch (typ) {
        case 'prostokat':
            return args[0] * args[1];
        case 'trapez':
            return (args[0] + args[1]) * args[2] / 2;
        case 'rownoleglobok':
            return args[0] * args[1];
        case 'trojkat':
            return args[0] * args[1] / 2;
        default:
            return 'Nieznany typ figury';
    }
}

console.log(poleFigury('trojkat', 6, 5, 4));


function pascal(h) {
    let triangle = [];
    for (let i = 0; i < h; i++) {
        triangle[i] = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                triangle[i][j] = 1;
            } else {
                triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
            }
        }
        console.log(triangle[i].join(' '));
    }
}


pascal(5);
