const url = "/sign";
insert();
signCheck();
//회원가입
function insert() {
  sign.addEventListener("click", function () {
    let data = {
      username: username.value,
      password: password.value,
      tel: tel.value,
      email: email.value,
    };
    if (password.value != repassword.value) {
      alert("비밀번호가 다릅니다");
      return;
    } else {
      fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then(() => {
          alert("회원가입 완료");
          location.href = "/login.html";
        });
    }
  });
}

//회원가입 중복 검사
function signCheck() {
  fetch(`${url}/Check`)
    .then((res) => res.json())
    .then((res) => {
      for (let i = 0; i < res.length; i++) {
        if (username.value == res[i].username) {
          usernameCheck.style = "display : ''";
          usernameCheck.value = "중복된 유저가 있습니다.";
          usernameCheck.style = "color: red";
          sign.style = "display : none";
          break;
        } else {
          usernameCheck.style = "display : none";
          sign.style = "display : ''";
        }
      }
    });
}
