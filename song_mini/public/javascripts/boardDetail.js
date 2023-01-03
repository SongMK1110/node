const url = "/board";

const URLSerch = new URLSearchParams(location.search);
const no = URLSerch.get("no");
fetch(`${url}/${no}`)
  .then((res) => res.json())
  .then((res) => {
    title.value = res.title;
    username.value = res.username;
    text.value = res.text;
  });
// customers/숫자(id값)
