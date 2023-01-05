const url = "/board";
insert();
//글 작성
function insert() {
  addbtn.addEventListener("click", function () {
    let data = {
      title: title.value,
      text: text.value,
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
        alert("작성 완료");
        location.href = "/board.html";
      });
  });
}
