let propBar = 'bar1';
let b2 = 'bar2';

class Class1 {
    set [propBar](val) {
        this.value = value;
    }
}

let class2 = new Class1();
console.log(class2.value);

class2.bar1 = b2;
console.log(class2.value);