// Excercise 1: Tính tổng 1 + 2 + ... + n
let n1 = Number(prompt("Nhập số n để tính tổng 1+2+...+n:"));
if (Number.isInteger(n1) && n1 > 0) {
  let sum = 0;
  for (let i = 1; i <= n1; i++) {
    sum += i;
  }
  console.log("Tổng:", sum);
} else {
  console.log("Vui lòng nhập số nguyên dương!");
}