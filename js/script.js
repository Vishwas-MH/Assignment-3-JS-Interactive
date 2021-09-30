let element = document.getElementsByClassName("child");

for (let i = 0; i < element.length; i++) {

    element[i].addEventListener("click", function () {

        let activeOne = document.querySelector(".row_expand");

        if (activeOne) {
            activeOne.classList.remove("row_expand");
            activeOne.parentNode.classList.remove("column_expand");
        }

        element[i].classList.add("row_expand");
        element[i].parentNode.classList.add("column_expand");
    });
}