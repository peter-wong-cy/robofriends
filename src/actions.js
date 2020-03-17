import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
 } from './constants.js';

export const setSearchField = (text) => ({
    type: 'CHANGE_SEARCH_FIELD',
    payload: text
})

// Get the robot list thru API, instead of using robot list file.
export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    // The window.fetch() API allows you to make network requests similar to XMLHttpRequest (XHR). 
    // The main difference is that the Fetch API uses Promises, which enables a simpler and cleaner API, 
    // avoiding callback hell and having to remember the complex API of XMLHttpRequest.
    // It provides a generic definition of Request and Respone objects.
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
}