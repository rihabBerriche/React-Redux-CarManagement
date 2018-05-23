/**
 * Created by rbe on 11/05/2018.
 */

/* eslint-disable no-undef */
function search(query, cb) {
    return fetch(`localhost:3001/api/food?q=${query}`, {
        accept: 'application/json',
    }).then(checkStatus)
        .then(parseJSON)
        .then(cb);
}

function get(sucess) {
    return fetch ('http://localhost:4545/Shop/',
        {        accept: 'application/json',


        }).then(checkStatus)
        .then(parseJSON)
        .then(sucess);

}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        const error = new Error(`HTTP Error ${response.statusText}`);
        error.status = response.statusText;
        error.response = response;
        console.log(error); // eslint-disable-line no-console
        throw error;
    }
}

function parseJSON(response) {
    return response.json();
}

const Client = { search };
export default Client;