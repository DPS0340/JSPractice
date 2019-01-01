function Dice(k) {
    this.k = k;
    console.log(`${k}면체 주사위`);
}
Dice.prototype.roll = (n) => {
    let results = [];
    let sum = 0;
    for(let i=0;i<n;i++) {
        let result = Math.floor(Math.random() * this.k) + 1;
        results.push(result);
        sum += result;
    }
    console.log(results);
    return sum;
};

dice = new Dice(20);
console.log(dice.roll(5));