const url = "/board";
selectAll(); //전체조회

//전체조회
function selectAll() {
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      list.innerHTML = "";
      for (let i = 0; i < res.length; i++) {
        const tr = `<tr>
      <td>${res[i].no}</td>
      <td>${res[i].title}</td>
      <td>${res[i].username}</td>
      <td>${res[i].wday}</td>
    </tr>`;
        list.innerHTML += tr;
      }
    });
}

//등록
function insert() {
  addbtn.addEventListener("click", function () {
    let data = {
      name: username.value,
      email: email.value,
      phone: phone.value,
      address: address.value,
    };
    fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        selectAll();
      });
  });
}
