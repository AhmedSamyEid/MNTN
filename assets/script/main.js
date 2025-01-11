document.getElementById("moon").onclick = () => {
  if (document.body.classList.contains("moon")) {
    document.body.classList.remove("moon");
  } else {
    document.body.classList.add("moon");
  }
};
