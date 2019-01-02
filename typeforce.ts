let sum = (arr: Array<number>) :number => {
    let result = 0;
    for (let index in arr) {
        typeforce(arr[index], "number");
        result += arr[index];
    }
    return result;
};
function typeforce(arg, type: string) :void {
    if (typeof arg === type) {
    } else {
        throw `${arg} is Not a ${type}, it's ${typeof arg}`;
    }
}
console.log(sum([1, 2, 3, 4, 5]));