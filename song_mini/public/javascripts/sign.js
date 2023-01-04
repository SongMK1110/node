const url = "/sign";
insert();
//회원가입
function insert() {
  sign.addEventListener("click", function () {
    let data = {
      username: username.value,
      password: password.value,
      tel: tel.value,
      email: email.value,
    };
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
        location.href = "http://localhost:3000/login.html";
      });
  });
}
