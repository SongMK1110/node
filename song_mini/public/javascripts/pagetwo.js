const url = "/board";
selectpagetwo();

function selectpagetwo() {
  fetch(`${url}/pagetwo`)
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
