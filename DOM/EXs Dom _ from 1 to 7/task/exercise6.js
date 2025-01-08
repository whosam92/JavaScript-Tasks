function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("songTextInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("playlist").appendChild(li);
    }
    document.getElementById("songTextInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    var close = document.getElementsByClassName("close");
    for (var i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('addButton').addEventListener('click', newElement);
});