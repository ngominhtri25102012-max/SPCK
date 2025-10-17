const login = (event) => {
    event.preventDefault();

    let email = document.querySelector("#login-email").value.trim()
    
    let password = document.querySelector("#login-password").value.trim()


  let users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : {};
  let storeUser = users[email];
  console.log(storeUser)

  if(storeUser && storeUser.password === password) {
    alert("đăng nhập thành công ")
    window.location.href = "index.html";
  }else{
    alert("đăng nhập thất bại")
  }
};

document.getElementById("login-form").addEventListener('submit', login);