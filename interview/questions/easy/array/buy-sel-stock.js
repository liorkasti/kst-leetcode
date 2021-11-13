// const prices = [5, 3, 6, 8, 23, 8, 214, 2];
const prices = [7, 1, 5, 3, 6, 4]

const maxProfit = (prices) => {
    if (prices === null || prices.length === 0) return 0;
    if (prices.length == 1) return prices[0];
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) profit += prices[i] - prices[i - 1];
    }
    return profit;
}

console.log(`maxProfit`, maxProfit(prices));