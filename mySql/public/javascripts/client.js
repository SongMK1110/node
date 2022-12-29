const url = "/customers";
selectAll(); //전체조회
insert(); //등록버튼에 이벤트 지정
customerDelete();
customerUpdate();
//전체조회
function selectAll() {
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      // list 클리어
      list.innerHTML = "";
      for (let i = 0; i < res.length; i++) {
        const tr = `<tr data-id="${res[i].id}">
      <td><input type="checkbox" /></td>
      <td>${res[i].id}</td>
      <td>${res[i].name}</td>
      <td>${res[i].email}</td>
      <td>${res[i].phone}</td>
      <td>${res[i].address}</td>
      <td><button id="delbtn">삭제</button>
          <button id="btnsel">조회</button></td>
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
//수정
function customerUpdate() {
  updbtn.addEventListener("click", function () {
    let data = {
      name: username.value,
      email: email.value,
      phone: phone.value,
      address: address.value,
    };
    fetch(`${url}/${id}`, {
      method: "put",
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
//삭제
function customerDelete() {
  // 삭제버튼 이벤트
  list.addEventListener("click", function (ev) {
    if (ev.target.id == "btnsel") {
      //단건조회
      let id = ev.target.closest("tr").getAttribute("data-id");
      fetch(`${url}/${id}`)
        .then((res) => res.json())
        .then((res) => {
          userid.value = res.id;
          username.value = res.name;
          email.value = res.email;
          phone.value = res.phone;
          address.value = res.address;
        });
      // customers/숫자(id값)
    } else if (ev.target.id == "delbtn") {
      //삭제
      let id = ev.target.closest("tr").getAttribute("data-id");
      fetch(`${url}/${id}`, { method: "delete" })
        // .then((res) => res.json())
        .then(() => {
          selectAll();
        });
    }
  });
}
