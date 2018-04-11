// import axios from 'axios';

function getRepos(username){
   return fetch(`https://api.github.com/users/${username}/repos`)
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
  return fetch(`https://api.github.com/users/${username}`)
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
        console.log("what is array", arr[1].data);
        return {
          repos: arr[0].data,
          bio: arr[1].data
        }
      })
      .catch(err => console.log(err));
  }
};

export default helpers;