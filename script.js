const input_box = document.getElementById("input-box");
const list_container = document.getElementById("list-container");

function AddTask() {
  if (input_box.value === "") {
    alert("Please enter a task!");
  } else {
    var li = document.createElement("li");
    li.innerHTML = input_box.value;

    list_container.appendChild(li);
    let del = document.createElement("span");
    del.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                        <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path>
                    </svg>
                `;
    li.appendChild(del);
  }
  input_box.value = "";
  SaveData();
}

// list_container.addEventListener("click", function (event) {
//   console.log("Clicked element:", event.target);
//   if (
//     event.target.tagName === "SPAN" ||
//     event.target.tagName === "SVG" ||
//     event.target.tagName === "PATH"
//   ) {
//     event.target.parentElement.remove();
//     //event.target.closest("li").remove();
//   }
// });

list_container.addEventListener("click", function (event) {
  // console.log("Clicked element:", event.target);
  // Toggle "checked" state when the task text is clicked
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
    SaveData();
  }
  // Check if the clicked element is the span or its children (svg/path)
  if (event.target.closest("span")) {
    SaveData();
    const li = event.target.closest("li");
    if (li) {
      SaveData();
      li.remove();
    }
    //   else {
    //     console.error("Could not find the parent <li> element.");
    //   }
  }
});

function SaveData() {
  localStorage.setItem("data", list_container.innerHTML);
}
function showList() {
  list_container.innerHTML = localStorage.getItem("data");
}
showList();
