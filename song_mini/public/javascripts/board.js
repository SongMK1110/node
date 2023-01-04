const url = "/board";
selectAll(); //전체조회
selectDetail();

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
    location.href = "http://localhost:3000/boardDetail.html?no=" + no;
  });
}
