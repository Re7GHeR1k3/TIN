const API_ENDPOINT = "http://szuflandia.pjwstk.edu.pl/~ppisarski/zad8/dane.php";
let recentNews = [];
let currentNewsIndex = 0;
const previousPrices = {};

async function getData() {
    try {
        const response = await fetch(API_ENDPOINT);
        const result = await response.json();
        renderStocks(result.stock);
        addNews(result.news);
    } catch (error) {
        console.error("Błąd podczas pobierania danych:", error);
    }
}

function renderStocks(stocks) {
    const tableBody = document.querySelector("#stocks-body");
    tableBody.innerHTML = "";

    Object.entries(stocks).forEach(([stockName, stockValue]) => {
        const value = parseFloat(stockValue);
        const oldValue = previousPrices[stockName];
        let cssClass = "price-same";
        let symbol = "→";

        if (oldValue !== undefined) {
            if (value > oldValue) {
                cssClass = "price-up";
                symbol = "↑";
            } else if (value < oldValue) {
                cssClass = "price-down";
                symbol = "↓";
            }
        }

        previousPrices[stockName] = value;

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${stockName}</td>
            <td>${value}</td>
            <td class="${cssClass}">${symbol}</td>
        `;
        tableBody.appendChild(row);
    });
}

function addNews(newsItem) {
    if (!recentNews.includes(newsItem)) {
        recentNews.unshift(newsItem);
        if (recentNews.length > 3) recentNews.pop();
    }
}

function rotateNews() {
    const rotator = document.querySelector("#news-rotator");
    if (recentNews.length === 0) return;

    rotator.classList.replace("news-slide-in", "news-slide-out");

    setTimeout(() => {
        rotator.innerText = recentNews[currentNewsIndex];
        rotator.classList.replace("news-slide-out", "news-slide-in");
        currentNewsIndex = (currentNewsIndex + 1) % recentNews.length;
    }, 300);
}

getData();
setInterval(getData, 5000);
setInterval(rotateNews, 4000);
