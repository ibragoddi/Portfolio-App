function fillForm(id){
    const row = document.getElementById(id);
    const modal = document.getElementById('modalForm');
    modal.contactId.value = id;
    for (var j = 0, col; col = row.cells[j]; j++) {
        switch (j){
            case 1:
                modal.forename.value = col.innerText;
                break;
            case 2:
                modal.surname.value = col.innerText;
                break;
            case 3:
                modal.phoneNumber.value = col.innerText;
                break;
            case 4:
                modal.email.value = col.innerText;
                break;
            default:
        }
    }
}

async function edit(){
    const modal = document.getElementById('modalForm');
    const data = new URLSearchParams();
    data.append('forename', modal.forename.value);
    data.append('surname', modal.surname.value);
    data.append('phoneNumber', modal.phoneNumber.value);
    data.append('email', modal.email.value);
    let response = await fetch('/my-contacts/' + modal.contactId.value + window.location.search , {
        method : 'PATCH',
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers : {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body : data
    });
    return response;
}

function doEdit(){

    edit().then((response) => {
        alert("Update Successful! Please close the modal box and refresh the page.");
    });
    return false;
}

async function remove(id){
    let response = await fetch('/my-contacts/' + id + window.location.search , {
        method : 'DELETE',
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers : {
            "Content-Type": "application/x-www-form-urlencoded"
        },
    });
    return response;
}

function doDelete(){
    const modal = document.getElementById('modalForm');
    remove(modal.contactId.value).then((response) => {
        alert("Delete Successful! Please close the modal box and refresh the page.");
    });
    return false;
}

function directDelete(id){
    remove(id).then((response) => {
        alert("Delete Successful! Please close the modal box and refresh the page.");
    });
    return false;
}
