// cach luu du lieu len local

// kieu du lieu Json la gi? ung dung cua no
// 1. chuyen doi kiue du lieu JS sang kieu JSON
let user = {
  id: 1,
  name: "Nguyen Van A",
  age: 21,
};

let users = [
  {
    id: 1,
    name: "Nguyen Van A",
    age: 21,
  },
  {
    id: 2,
    name: "A Van Nguyen",
    age: 22,
  },
];

let userJson = JSON.stringify(user);
console.log("du lieu sau khi chuyen doi la", userJson);

// 2. chuyen doi tu kieu JSON sang JS
let userJS = JSON.parse(userJson);
console.log("du lieu sau khi chuyen sang JS: ", userJS);

// luu tru du lieu len local
localStorage.setItem("user", userJson);
localStorage.setItem("users", JSON.stringify(users));

// lay du lieu tu localStorage
let listUser = localStorage.getItem("users");
// let listUserParser = JSON.parse(listUser);
let listUserParser = JSON.parse(localStorage.getItem("users"));
console.log(listUserParser);

// xoa du lieu khoi localStorage theo key
// localStorage.removeItem("users");
localStorage.clear();

// xay dung ung dung todolist
// 1.them moi cong viec len local va hien thi danh sach ra ngoai giao dien
// 2. khi click vao nut xoa thi hien thi model xac nhan xoa. Neu cancel thi ko xoa, neu ok thi xoa
// 3. khi click vao nut sua thi hien thi ten cong viec len o input va tien hanh sua
