//select the div class overview where your profile info wil appear
const overview = document.querySelector(".overview"); 
const userName = "tab-james";
const repoList = document.querySelector(".repo-list"); 

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
  getRepos(); 
}; 

//fetch your repos
const getRepos = async function () {
  const userRepos = await fetch(`https://api.github.com/users/${userName}/repos?sort=updated&per_page=100`);
  const repoData = await userRepos.json(); 
  displayRepoData(repoData);
}; 

//display info about your repos
const displayRepoData = function (repos) {
  for (const repo of repos) {
    const repoItem = document.createElement("li");
    repoItem.classList.add("repo");
    repoItem.innerHTML = `<h3>${repo.name}</h3>`;
    repoList.append(repoItem);
  }
};