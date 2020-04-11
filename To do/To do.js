
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  
  if (inputValue === '') {
    alert("Write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
    var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  var edit = document.createElement("SPAN");
  var editTxt = document.createTextNode("edit");
  edit.className = "editBtn";
  edit.appendChild(editTxt);
  li.appendChild(edit);


  var close = document.getElementsByClassName("close");
    var i;
  for (i = 0; i < close.length; i++) {
    //   console.log(close.length)
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  var edit = document.getElementsByClassName('editBtn')
  var i;
  for (i=0; i < editBtn.length; i++){
    editBtn[i]
    editBtn.addEventListener('click', editBtnClicked)
  }

}
function editBtnClicked(event) {
  document.getElementsByTagName('li').contentEditable
}