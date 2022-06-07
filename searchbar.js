function filterFunction() {
    var input,
        filter,
        ul,
        a,
        i;
    input = document.getElementById("searchbar-input");
    filter = input.value.toUpperCase();
    ul = document.getElementById("searchbar-results");
    a = ul.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}
