// import axios from 'axios';

function getRepos(username){
   fetch(`https://api.github.com/users/${username}/repos`)
   .then(function(response) {
    console.log("what is response username", response);
    return response.json();
  })
  // .then(res => res.json())

  .then(result => {
    console.log("hellper repo", result);
    return result;
  })
};

function getUserInfo(username){
  fetch(`https://api.github.com/users/${username}`)
  .then(function(response) {
    console.log("what is response info", response);
    return response.json();
  })
  // .then(res => res.json())

  .then(result => {
    console.log("hellper info", result);
    return result;
  })
}




var helpers = {
  
  getGithubInfo(username){
    return Promise.all([getRepos(username), getUserInfo(username)])
      .then((arr) => {
        return {
          repos: arr[0].data,
          bio: arr[1].data
        }
      })
      .catch(err => console.log(err));
  }
};

export default helpers;