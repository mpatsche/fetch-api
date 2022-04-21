/**
 * Reference: 
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises#catching_errors
 * 
 * The script below should output 'baked beans' in the console
 */

const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
    })
    .then(json => {
        console.log(json[0].name); // this should output 'baked beans' in the console
    })
    .catch(error => {
        console.error(`Could not get products: ${error}`);
    });