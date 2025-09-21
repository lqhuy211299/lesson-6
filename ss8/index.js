// Câu 1: In ra tên của người ở vị trí đầu tiên và vị trí cuối cùng trong mảng.
const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
const firstName = names[0];
const lastName = names[names.length - 1];
console.log("Người đầu tiên:", firstName);
console.log("Người cuối cùng:", lastName);
 

// Câu 2: Thay đổi tên của người ở vị trí thứ 2 thành “Mary” và in ra mảng sau khi thay đổi.
const names = ["John", "Jane", "Jim", "Jake"];
names[1] = "Mary";
console.log(names);


// Câu 3: Sử dụng vòng lặp for để in từng phần tử trong mảng.
const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}


// Câu 4: Thêm “MindX” vào cuối mảng và in ra mảng sau khi thêm.
const names = ["Alice", "Bob", "Charlie", "David"];
names.push("MindX");
console.log(names);


// Câu 5: Lọc ra các số lẻ trong mảng số.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log(oddNumbers);


// Câu 6: Tìm kiếm tên "David" trong mảng và in ra kết quả tìm kiếm.
const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
if (names.includes("David")) {
  console.log("Tìm thấy David!");
} else {
  console.log("Không tìm thấy David!");
}


// Câu 7: Đếm Số Lần Xuất Hiện của một số trong Mảng:
const numbers = [1, 2, 3, 4, 2, 1, 3, 2, 4, 2];
const targetCounting = 2;
const count = numbers.filter(num => num === targetCounting).length;
console.log(count);


// Câu 8: Tìm Số Lớn Nhất Trong Mảng:
const numbers = [5, 2, 9, 3, 7, 11, 8];
const max = Math.max(...numbers);
console.log(max);


// Câu 9: Đảo Ngược Mảng:
const array = [1, 2, 3, 4, 5];
const reversed = array.reverse();
console.log(reversed);


// Câu 10: Tính tổng các phần tử trong mảng số
const duplicatesArray = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = [...new Set(duplicatesArray)];
console.log(uniqueArray);


// Câu 11: Tính tổng các phần tử trong mảng số
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum);