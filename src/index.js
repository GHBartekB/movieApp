console.log('test');
const firstText = 'firstText';
const secondText = 'secondText';
const someData = (firstText, secondText) => {

    console.log(firstText);
    console.log(secondText);
}

class Test {
 
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    showData() {
        console.log(this.name, this.age);
    }


}

const TestClass = new Test ('Janek', '20');

console.log(TestClass.showData());


