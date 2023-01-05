const url = "/board";
selectAll(); //전체조회
selectDetail();
loginUser();

//전체조회
function selectAll() {
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      list.innerHTML = "";
      for (let i = 0; i < res.length; i++) {
        const tr = `<tr data-id="${res[i].no}">
        <td>${parseInt([i]) + 1}</td>
        <td>${res[i].title}</td>
        <td>${res[i].username}</td>
        <td>${res[i].wday}</td>
      </tr>`;
        list.innerHTML += tr;
      }
    });
}

function selectDetail() {
  list.addEventListener("click", function (ev) {
    let no = ev.target.closest("tr").getAttribute("data-id");
    location.href = "/boardDetail.html?no=" + no;
  });
}

function loginUser() {
  fetch(`${url}/user`)
    .then((res) => res.json())
    .then((res) => {
      user.innerHTML = `<span style='font-size:20px'><strong>${res}</strong>님 환영합니다.</span>`;
    });
}
