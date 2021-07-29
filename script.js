const input = document.getElementById("input");
input.addEventListener("keypress", onKeyPress);

function onKeyPress(e) {

  if (e.key === '+'|| e.keyCode === 13) {
    e.preventDefault()
    const value = e.target.value;
    const list = document.getElementById("list");

    const li = document.createElement("li");
    const text = document.createTextNode(value);
  
    li.appendChild(text);
    list.appendChild(li);

    document.getElementById("input").value = '';
    li.addEventListener ("click", onClick);
  }

  function onClick(e) {
    e.target.remove()
  }
}
