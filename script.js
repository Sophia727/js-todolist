let form = document.querySelector('form');
let groceries = [];
let ul = document.querySelector('ul');

if (localStorage.getItem("groceries_list") == null) {
    groceries = [];
} else {
    groceries = JSON.parse(localStorage.getItem('groceries_list'));
}
form.addEventListener('submit', (event)=>{
    event.preventDefault();
    let grocery = document.querySelector('input');
    if(grocery.value !== ""){
        for (let index = 0; index < groceries.length; index++) {

            let li = document.createElement('li');
            li.textContent = grocery.value.trim();

            let span = document.createElement('span');
            span.textContent = groceries[index];
            let button = document.createElement('button');
            button.className = "btn btn-danger";
            button.innerHtml = "<i class= 'bx bxs-trash'></i>";
            button.setAttribute("title", "Remove Item"); 

            li.appendChild(button);
            groceries.push(grocery.value);
            console.log(grocery.value);
            ul.appendChild(li);

            localStorage.setItem('groceries_list', JSON.stringify(groceries));
            grocery.value = "";
        }
        
    }
    button.addEventListener('click' ,(e, position=0)=> {
        e.preventDefault();
        if (confirm("Are you sure you'd like to delete this grocery Item?")) {
            // button.parentElement.remove();
            list.remove();
            // groceries.splice(position, 1);
            // localStorage.setItem('groceries', JSON.stringify(groceries));
        };
    
    })
})




// for (let i = 0; i < groceries.length; i++) {
//     let li = document.createElement('li');
//     let span = document.createElement('span');
//     span.textContent = groceries[i];
//     let button = document.createElement('button');
//     button.innerHTML = "<i class= 'bx bxs-trash'></i>";
//     li.append(span, button);
//     document.querySelector("ul").append(li);
// };



// let form = document.querySelector('form');
// let groceries;
// if(localStorage.getItem("groceries_list") == null){
//     groceries = [];
// } else {
//     groceries = JSON.parse(localStorage.getItem('groceries_list'));
// };

// form.addEventListener('submit', (event) =>{
//     event.preventDefault();
//     // let task = document.querySelector('input');
//     let task = form.elements["task"];
//     console.log(task.value);
//     if (task.value !== "") {
//         let li = document.createElement('li');
//         li.textContent = task.value.trim();
//         document.querySelector('ul').appendChild(li);
//         // localStorage.setItem('grocery item', task.value);
//         groceries.push(task.value); 
//         localStorage.setItem('groceries_list', JSON.stringify(groceries));
//         task.value = "";
//     }

// function createTask(task, position =0){
//     let li = document.createElement('li');  
//     let spanContent = document.createElement('span');
//     spanContent.textContent = task.content;
//     let spanDate = document.createElement('span');
//     spanDate.textContent = task.content;
//     let button = document.createElement('button');
//     button.className = "btn btn-danger";
//     button.innerHTML = "<i class='bx bxs-trash'></i>";
//     button.setAttribute("title", "Remove Item");   

//     button.addEventListener('click', ()=> {
//         if (confirm("Are you sure you'd like to delete this grocery Item?")) {
//             button.parentElement.remove();
//             groceries.splice(position, 1);
//             localStorage.setItem('groceries', JSON.stringify(groceries));
//         }
//     })
// }
//     createTask();   
// });


// for (let i = 0; i < groceries.length; i++) {
//     let li = document.createElement('li');
//     let span = document.createElement('span');
//     span.textContent = groceries[i];
//     let button = document.createElement('button');
//     button.innerHTML = "<i class= 'bx bxs-trash'></i>";
//     li.append(span, button);
//     document.querySelector("ul").append(li);
// };
