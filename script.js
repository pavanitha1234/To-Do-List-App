const inputBox = document.getElementById("input_box");//inputBox is the variable and input_box is the name of the id given
const listContainer = document.getElementById("list");

function addTask(){
    if(inputBox.value === ""){ //if inputBox(value in the i/pBox) is empty
        alert("you must add some task!");
    }
    else{
        let li = document.createElement("li");//an element is created
        li.innerHTML = inputBox.value;//the created element li is stored in innerHTML
        listContainer.appendChild(li);//it will be added to the task(list container(list))
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; //span tag stores the cross(x) symbol in inner.html
        li.appendChild(span);
    }
    inputBox.value = "";//after adding the inputBox gets empty
    saveData(); //saves the updated task
}

listContainer.addEventListener("click",function(e){ //when we click what happens is given in this function
    if(e.target.tagName === "LI"){ //when the target element is li.ie, when we click on li, it gets checked 
        e.target.classList.toggle("checked"); // ads checked classname
        saveData();
    }
    else if(e.target.tagName === "SPAN"){ //when we click on the class element span(x), it removes the li
        e.target.parentElement.remove(); // removes(delete) the parent element
        saveData();
    }
},false);
/* here false is useCapture.ie, this function will be triggered after the execution.
if it's true, function will be triggered during the execution*/

function saveData(){ //used save the data
    localStorage.setItem("data", listContainer.innerHTML); //to add data in the browser
}

function displayItems(){
    listContainer.innerHTML = localStorage.getItem("data"); //saved items will be displayed
}
displayItems();

