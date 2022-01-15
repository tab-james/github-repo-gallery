//select the div class overview where your profile info wil appear
const overview = document.querySelector(".overview"); 
const userName = "tab-james";

//fetch API JSON data
const fetchProfileInfo = async function () {
  const userInfo = await fetch(`https://api.github.com/users/${userName}`); 
  const data = await userInfo.json(); 
  displayUserInfo(data); 
}; 

//call the display function and view project
fetchProfileInfo(); 

//fetch and display user info
const displayUserInfo = function (data) {
  const newDiv = document.createElement("div"); 
  newDiv.classList.add("user-info"); 
  newDiv.innerHTML = `
  <figure>
    <img alt ="user avatar" src=${data.avatar_url} />
  </figure>
  <div>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Bio:</strong> ${data.bio}</p>
    <p><strong>Location:</strong> ${data.location}</p>
    <p><strong>Number of public repos:</strong> ${data.public_repos}</p>
  </div>
  `; 
  overview.append(newDiv); 
}; 
