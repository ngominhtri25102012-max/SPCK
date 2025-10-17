const register = (event) => {
  event.preventDefault();

  const name = document.querySelector("#signup-name").value.trim();

  const email = document.querySelector("#signup-email").value.trim();

  const password = document.querySelector("#signup-password").value.trim();

  const confirmPassword = document
    .querySelector("#confirm-password")
    .value.trim();

  //regular expression
  let lowerCaseLetter = /[a-z]/g;
  let upperCaseLetter = /[A-Z]/g;
  let number = /[0-9]/g;

  // validate
  if (!email || !password || !confirmPassword || !name) {
    alert("Vui lòng nhập đầy đủ thông tin");
    return;
  }

  if (password !== confirmPassword) {
    alert("Mật khẩu không khớp");
    return;
  }

  if (name.length < 8) {
    alert("tên phải có 8 kí tự trở lên");
    return;
  }

  if (password.length < 8) {
    alert("mật khẩu phải có 8 kí tự trở lên");
    return;
  }

  if (!password.match(lowerCaseLetter)) {
    alert("mật khẩu phải có ít nhất 1 kí tự thường");
    return;
  }

  if (!password.match(upperCaseLetter)) {
    alert("mật khẩu phải có ít nhất 1 kí tự in hoa");
    return;
  }

    if (!password.match(number)) {
    alert("mật khẩu phải có ít nhất 1 kí số");
    return;
  }

  let user = {
    email: email,
    name: name,
    password: password
  }

  let users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : {};

  if (users[email]){
    alert("Tài khoản đã tồn tại !!!")
  }else{
    users[email] = user;
    localStorage.setItem("users", JSON.stringify(users));
    alert("Đăng kí thành công");
    window.location.href = 'dangnhap.html'
  }

};

document.querySelector("#signup-form").addEventListener("submit", register);