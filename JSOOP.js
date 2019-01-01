function Dice(k) {
    this.k = k;
    console.log(`${k}면체 주사위`);
}
Dice.prototype.roll = function (n) {
    let results = [];
    for(let i=0;i<n;i++) {
        let result = Math.floor(Math.random() * this.k) + 1;
        results.push(result);
    }
    return results;
};
Dice.prototype.get = function () {
    return this.k;
};

function play(bet, k, n) {
    let dice = new Dice(k);
    let result = dice.roll(n);
    if (result > k * n / 2) {
        return bet * 2;
    } else if (result < k * n / 2) {
        return 0;
    } else {
        return bet;
    }
}