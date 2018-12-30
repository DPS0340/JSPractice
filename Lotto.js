const getone = (arr, every_number) => {
    arr.push(Math.floor(Math.random() * every_number) + 1);
};
const get = (arr, choice_number, every_number) => {
    for(let i=0; i<choice_number;i++) {
        getone(arr, every_number);
    }
};
const answercheck = (answer, mychoice) => {
    let flag = true;
    for(let i=0; i<answer.length;i++) {
        if(answer[i] != mychoice[i]) flag = false;
    }
    return flag;
};
const auto_roll = (choice_number, every_number) => {
    answer = [];
    mychoice = [];
    get(answer, choice_number, every_number);
    get(mychoice, choice_number, every_number);
    console.log(answer);
    console.log(mychoice);
    return answercheck(answer, mychoice);
};
const manual_roll = (mychoice, choice_number, every_number) => {
    answer = [];
    get(answer, choice_number, every_number);
    console.log(answer);
    console.log(mychoice);
    return answercheck(answer, mychoice);
};
console.log(auto_roll(8, 45));