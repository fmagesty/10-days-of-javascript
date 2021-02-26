var btn = document.getElementById('btn');

btn.onclick = function() {
    btn.innerHTML = parseInt(btn.innerHTML, 0) + 1;
}