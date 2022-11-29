var myString = "Hello String"
const Constant = "Hello Constant"

export function printVariable() {

    console.log(myString);
    console.log(Constant);

    for (let i = 0; i < 10; i++) {
        console.log(i)
    }

    // console.log(i) .. error

    for (var j = 0; j < 10; j++) {
        console.log(j)
    }

    console.log(j)

}