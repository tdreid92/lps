class Cat {
  constructor() {
    this.name = null;
    this.age = null;
  }

  initModel(data) {
    this.name = data.name;
    this.age = data.age;
  }

  getAge() {
    return this.age;
  }

  setAge(age) {
    this.age = age;
  }

  getName() {
    this.name;
  }

  setName(name) {
    this.name = name;
  }

  equals(otherCat) {
    return (
      otherCat.getName() == this.getName() && otherCat.getAge() == this.getAge()
    );
  }

  fill(newFields) {
    for (let field in newFields) {
      if (this.hasOwnProperty(field) && newFields.hasOwnProperty(field)) {
        if (this[field] !== "undefined") {
          this[field] = newFields[field];
        }
      }
    }
  }
}

let cat1 = new Cat();
cat1.initModel({ age: 12, name: "Tom" });
cat1.setAge(100);
console.log(cat1.getAge()); // 100

let cat2 = new Cat();
cat2.initModel({ age: 100, name: "Jerry" });
console.log(cat1.equals(cat2)); // false

let sameAsCat1 = new Cat({ age: 100, name: "Tom" });
sameAsCat1.initModel({ age: 100, name: "Tom" });
console.log(cat1.equals(sameAsCat1)); // true

let sameAsCat2 = new Cat();
console.log(cat2.equals(sameAsCat2)); // false

sameAsCat2.fill({ name: "Jerry", age: 100 });
console.log(cat2.equals(sameAsCat2));
