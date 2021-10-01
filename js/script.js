let boxes = document.getElementsByClassName("child");

for (let i = 0; i < boxes.length; i++) {

    boxes[i].addEventListener("click", function () {

        let clickedbox = document.querySelector(".row_expand");

        if (clickedbox) {
            clickedbox.classList.remove("row_expand");
            clickedbox.parentNode.classList.remove("column_expand");
        }

        boxes[i].classList.add("row_expand");
        boxes[i].parentNode.classList.add("column_expand");
    });
}