let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

// Them moi cong viec
function createJob() {
  // lay gia tri tu o input
  let inputValue = $("#inputValue").value;
  console.log(inputValue);
}

// lang nghe su kien submit
$("#form").addEventListenerI("submit", (e) =>
  // ngan chan su kien load lai trang cua form
  e.preventDefault()
);
// hien thi danh sach cong viec
// xoa cong viec
// cap nhat
