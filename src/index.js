// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var count;
    var exchange = {};
    var denom = [50, 25, 10, 5, 1];
    var name = ["H", "Q", "D", "N", "P"];

    var error = {
        error: "You are rich, my friend! We don't have so much coins for exchange"
    };
    var noMoney = {};

    if (currency > 10000) return (error);
    if (currency <= 0) return (noMoney);

    for (var i = 0; i < 5; i++) {
        if (currency >= denom[i]) { 
            count = 0;
            while ((count * denom[i]) <= (currency - denom[i])) count++;
            currency -= count * denom[i];
            exchange[name[i]] = count;
        }
    }
    
    return exchange;
}

