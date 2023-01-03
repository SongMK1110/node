const url = "/board";
insert();
//등록
function insert() {
  addbtn.addEventListener("click", function () {
    let data = {
      title: title.value,
      username: username.value,
      text: text.value,
    };
    fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
  });
}
