change = () => {

  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.getElementById('box').style.backgroundColor = "#" + randomColor;
  document.getElementById('ccode').innerHTML="#"+randomColor;
}