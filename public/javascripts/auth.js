/*
File name: auth.js
Student’s Name: Ibrahim Goddi
StudentID: 301122092
Date: Oct 24, 2020
Assignment 2
*/

// ici "data" est un objet JSON
async function login(url =""){
    var form = new FormData(document.getElementById('login-form'));
    const data = new URLSearchParams();
    for (const pair of form) {
        data.append(pair[0], pair[1]);
    }
    let response = await fetch(url , {
        method : 'POST',
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers : {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body : data
    });
    return response.json();
}

function doLogin(event){
    event.preventDefault();
    login(document.getElementById("login-form").action)
        .then((response) => {
            if (response.token !== undefined) {
                window.sessionStorage.accessToken = response.token;
                const queryString = window.location.search;
                const urlParams = new URLSearchParams(queryString);
                if(urlParams.get('redirectUrl') !== null ){
                    var baseUrl = window.location.origin;
                    window.location = baseUrl + urlParams.get('redirectUrl') + '?secret_token=' + response.token;
                }
            } else {
                alert("Authentication failed!");
            }
        }).catch((error)=>{
            alert("Authentication failed!");
    });
    return false;
    //       (lamda expression parameters) => {
    //       lamda expression body ;
    //       }
}
