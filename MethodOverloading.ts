function returnNumber() {

}
returnNumber.prototype.run = (n: number) => {
    return n;
};
returnNumber.prototype.run = (str: string) => {
    console.log("매개변수가 string입니다..");
};
var rtnnum = new returnNumber();
rtnnum.run(90);
rtnnum.run("abcd");