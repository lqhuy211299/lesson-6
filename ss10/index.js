// Câu 1: Viết một hàm tính giá trị của phương trình bậc nhất f(x) = Ax + B Với A, B cho trước : A = 3, B = 4, x = 5

// khai báo hàm
// function c1(x) {
//     const A = 3;
//     const B = 4;
//     const KetQua = A * x + B;
//     return KetQua;
// }

// Thực thi hàm: định nghĩa nội dung của hàm
// const KetQuaPT = c1(5);
// console.log("Ket Qua", KetQuaPT)


// Câu 2: Tính chu vi hình chữ nhật bằng hàm, truyền vào 2 tham số width và length. width = 10, length = 15

// function ChuVi(width, length) {
//     const KetQua = (width + length) * 2;
//     return KetQua;
// }

// const KetQua = ChuVi(10, 15);
// console.log("Kết Quả =", KetQua);

// cách 2: sử dụng arrow function
// const tinhChuVi2 = (width, length) => {
//     return (width + length) * 2;
// }
// console.log(tinhChuVi2(15, 10));



// Câu 3: Viết hàm tính diện tích hình tròn với bán kính r, làm tròn kết quả tới 2 chữ số thập phân. r = 5

// function dienTichHinhTron(r) {
//     const KetQua = Math.pow(r,2) * Math.PI;
//     return KetQua.toFixed(2);  // làm tròn đến chữ số thập phân thứ 2
// }
// const dtHinhTron = dienTichHinhTron(5);
// console.log("Kết Quả =", dtHinhTron);

// Cách 2:
// const dienTichHinhTron1 = (r) => {
//     return (Math.pow(r,2) * Math.PI).toFixed(2);
// }
// console.log(dienTichHinhTron1(5))

// Cách 3:
// const anonymusDTHinhTron = ((r) => (Math.pow(r,2) * Math.PI).toFixed(2));
// console.log("Kết quả =", anonymusDTHinhTron(5))



// Câu 4: Viết hàm kiểm tra số n có phải là số nguyên tố hay không. n = 17

// function isNumber(n) {
//     if (n <= 1) return false
// }



// Câu 5: Viết hàm nhận vô số tham số và trả về tổng của các số đó. sum(1, 2, 3, 4, 5)

// function sum(...numbers) {
//   let total = 0
// 	for (let i = 0; i < numbers.length; i++) {
// 		total += numbers[i]
//   }
//   return total;
// }
// console.log("sum =", sum(1, 2, 3, 4, 5))

// Cách 2:
// const sum = (...numbers) => {
//   return numbers.reduce((total, num) => total + num, 0);
// }
// console.log(sum(1, 2, 3, 4, 5))



// Câu 6: Viết một hàm tính tổng của một dãy số từ start đến end, nhận vào 2 tham số start và end

// function sumRange(start, end) {
//   let total = 0;
//   for (let i = start; i <= end; i++) {
//     total += i;
//   }
//   return total;
// }
// console.log(sumRange(5, 10));

// Cách 2:
// function sumRange(start, end) {
//   return (start + end) * (end - start + 1) / 2;
// }
// console.log(sumRange(5, 10));



// Câu 7: Viết hàm kiểm tra một chuỗi str có đối xứng hay không (Palindrome), hàm nhận vào một chuỗi str

// function isPalindrome(str) {
//   let reversed = str.split("").reverse().join("");
//   return str === reversed;
// }

// console.log(isPalindrome("madam"));
// console.log(isPalindrome("hello"));



// Câu 8: Viết một hàm kiểm tra tất cả các số trong một mảng có phải là số chẵn hay không

// function allEven(arr) {
//   return arr.every(num => num % 2 === 0);
// }
// console.log(allEven([2, 4, 6, 8, 10]));
// console.log(allEven([2, 3, 4]));



// Câu 9: Viết hàm tính tổng của một mảng số, nhưng bỏ qua tất cả số âm

// function sumPositive(arr) {
//   return arr.filter(num => num >= 0).reduce((total, num) => total + num, 0);
// }
// console.log(sumPositive([3, -1, 4, -2, 5]));