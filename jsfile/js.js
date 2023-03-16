let dropdownmenu = document.querySelector(".dropdown-menu");
let textArea = document.querySelector(".form-control");
let result = document.getElementById("result");
dropdownmenu.addEventListener(
  "click",
  (element) => {
    if (element.target.classList.contains("encode")) {
      let encode = getEncode(textArea.value);
      result.innerHTML = encode;
    } else if (element.target.classList.contains("decode")) {
      let decode = getDecode(textArea.value);
      result.innerHTML = decode;
    }
  },
  false
);
function getEncode(value) {
  let encode = btoa(value);
  return encode;
}
function getDecode(value) {
  let decode = atob(value);
  return decode;
}
/*
let Chrome = navigator.userAgent.toLowerCase();
if (Chrome.includes("chrome")) {
  console.log("google Chrome");
}
let regex =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(
    navigator.userAgent
  );
if (regex) {
  console.log("Mobile");
} else {
  console.log("Not Mobile");
}
*/
