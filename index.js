// const username=document.getElementById("username")
// const button=document.getElementById("button")

window.addEventListener('DOMContentLoaded', () => {
    // Retrieve all items from localStorage and display them
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const item = localStorage.getItem(key);
        const obj = JSON.parse(item);
        showuseronscreen(obj);
    }
});
// we can write this as well @@@@@from line 14 to 27 @@@@@//
// window.addEventListener('DOMContentLoaded', () => {
//     // Retrieve all keys from localStorage
//     const localStorageKeys = Object.keys(localStorage);

//     // Iterate through each key
//     for (let i = 0; i < localStorageKeys.length; i++) {
//         const key = localStorageKeys[i];  // Get the key at index i
//         const userDetailsString = localStorage.getItem(key);  // Retrieve the item as a string
//         const userDetailsObj = JSON.parse(userDetailsString);  // Parse the string back into an object

//         // Optionally, use showuseronscreen or any other function to display the object
//         showuseronscreen(userDetailsObj);
//     }
// });

function saveToLocalstorage(event){
    event.preventDefault()
    const name=event.target.username.value
    const email=event.target.emailid.value
    const phonenumber=event.target.phonenumber.value

    //this line can store in one line
    const obj={
        name:name,
        email:email,
        phone:phonenumber
    }
    //this line means it can store as a string by json.stringify method 
    localStorage.setItem(obj.email,JSON.stringify(obj))
    showuseronscreen(obj)
}

function showuseronscreen(obj){
    const li=document.getElementById("listofitem")
    
    const newli=document.createElement("li")
    newli.textContent=obj.name +'--'+ obj.email+ '--'+ obj.phone
    li.appendChild(newli)

    const delbtn=document.createElement("button")
    const delbtntextnode=document.createTextNode("delete")
    delbtn.appendChild(delbtntextnode)
    delbtn.onclick=()=>{
        localStorage.removeItem(obj.email)
        li.removeChild(newli)
    }

    const editbtn=document.createElement("button")
    const editbtntextnode=document.createTextNode("Edit")
    editbtn.appendChild(editbtntextnode)
    editbtn.onclick=()=>{
        localStorage.removeItem(obj.email)
        li.removeChild(newli)
        document.getElementById("username").value=obj.name
       document.getElementById("email").value=obj.email
       document.getElementById("phone").value=obj.phone
    }
    newli.appendChild(editbtn)
    newli.appendChild(delbtn);
}

