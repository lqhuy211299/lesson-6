// Câu 1: Thêm thuộc tính mới vào đối tượng

// let student = { name: "John", age: 20 }
// student.major = "Computer Science"
// console.log(student);



// Câu 2: Xóa thuộc tính trong đối tượng

// let person = { name: "Alice", age: 25, job: "Designer" }
// // console.log(person.job);
// delete person.job;
// console.log(person);



// Câu 3: Đếm số lượng thuộc tính trong đối tượng (chưa làm được)

// let car = { brand: "Toyota", model: "Camry", year: 2020 }
// let count = 0;
// for (let key in car) {
//   if (car.hasOwnProperty(key)) {
//     count++;
//   }
// }
// console.log(count);



// Câu 4: Chuyển đổi đối tượng thành mảng các cặp key-value

// let product = { name: "Laptop", price: 1000 }
// for (const key in product) {
//     console.log("Key:", key);
//     console.log("Value:", product[key]);
// }



// Câu 5: Tìm kiếm đối tượng có name là "Camera" trong mảng sản phẩm

// let  products = [ { name: "Phone", price: 500 }, { name: "Camera", price: 300 }, { name: "Tablet", price: 700 } ]
// let camera = products.find(item => item.name === "Camera");
// console.log(camera);



// Câu 6: Lọc ra các sản phẩm có giá lớn hơn 100

// let products = [
//   { name: "Phone", price: 50 },
//   { name: "Camera", price: 300 },
//   { name: "Tablet", price: 700 }
// ];
// let result = products.filter(item => item.price > 100);
// console.log(result);



// Câu 7: Cập nhật giá trị thuộc tính trong đối tượng

// let person = { name: "Bob", age: 25, job: "Developer" };
// person.age = 30;
// console.log(person);



// Câu 8: Gộp hai đối tượng lại với nhau

// let obj1 = { a: 1, b: 2 };
// let obj2 = { c: 3, d: 4 };
// let merged = { ...obj1, ...obj2 };
// console.log(merged);



// Câu 9: Duyệt qua đối tượng và in ra key-value

// let animal = { type: "Dog", name: "Buddy", age: 3 };
// for (let key in animal) {
//   console.log(key + ": " + animal[key]);
// }



// Câu 10: Kiểm tra đối tượng có chứa thuộc tính color không

// let car = { brand: "BMW", model: "X5" };
// console.log(car.hasOwnProperty("color"));