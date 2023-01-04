const url = "/board";

boardUpdate();
boardDelete();

// 글 상세
const URLSerch = new URLSearchParams(location.search);
const no = URLSerch.get("no");
fetch(`${url}/${no}`)
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    if (res.test == res.username) {
      updbtn.style.display = "";
      delbtn.style.display = "";
    }
    title.value = res.title;
    // username.value = res.username;
    writer.innerHTML = res.username;
    text.value = res.text;
  });

// 수정
function boardUpdate() {
  updbtn.addEventListener("click", function () {
    let no = URLSerch.get("no");
    let data = {
      title: title.value,
      // username: username.value,
      text: text.value,
    };

    fetch(`${url}/${no}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.result == true) {
          alert("수정완료");
          location.href = document.referrer;
        } else {
          alert("수정실패");
        }
      })
      .catch(() => {
        alert("수정실패");
      });
  });
}

// 삭제
function boardDelete() {
  delbtn.addEventListener("click", function () {
    let no = URLSerch.get("no");

    fetch(`${url}/${no}`, { method: "delete" }).then(() => {
      alert("삭제 완료");
      window.location = document.referrer;
    });
  });
}
