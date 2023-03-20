# Fetching data from an API:

### Retrieving user data with a GET request:

URL: https://reqres.in/api/users/1

Method: GET

```javascript
// Make a GET request to retrieve user data from the API
fetch('https://reqres.in/api/users/1', { method: 'GET' })
  .then((data) => {
    // Check if the response is ok
    if (data.ok) {
      // Parse the response data as JSON and return it
      return data.json()
    } else {
      // Throw an error if the response is not ok
      throw new Error('Something Went wrong!')
    }
  })
  // Log the user data to the console
  .then((data) => {
    console.log(data.data)
  })
  // Log any errors to the console
  .catch((err) => {
    console.log(err.message)
  })
```

This code uses `fetch()` to make a GET request to retrieve user data from the API. It checks if the response is ok, and if so, it parses the response data as JSON and logs it to the console. If the response is not ok, it throws an error and logs it to the console.

### Creating user data with a POST request:

URL: https://reqres.in/api/users

Method: POST

```javascript
// Make a POST request to create new user data on the API
fetch('https://reqres.in/api/users', {
  method: 'POST',
  body: JSON.stringify({ first_name: 'Narendra' }),
  headers: {
    'Content-Type': 'application/json',
  },
})
  // Parse the response data as JSON and log it to the console
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    console.log(data)
  })
```
This code uses fetch() to make a POST request to create new user data on the API. It sends a JSON payload containing the user's first name, and sets the Content-Type header to application/json. After making the request, it parses the response data as JSON and logs it to the console.

### Deleting user data with a DELETE request:

URL: https://reqres.in/api/users/1

Method: DELETE

Code:
```javascript
// Make a DELETE request to delete user data from the API
fetch('https://reqres.in/api/users/1', {
  method: 'DELETE',
})
  // Log the response status to the console
  .then((res) => {
    console.log(res.status)
  })
```
This code uses fetch() to make a DELETE request to delete user data from the API. After making the request, it logs the response status to the console.

### Retrieving user data asynchronously:
URL: https://reqres.in/api/users/100

Method: GET

Define an asynchronous function to retrieve user data from the API
```javascript
async function customfetch() {
  // Use try-catch to catch any errors that occur during the fetch request
  const res = await fetch('https://reqres.in/api/users/100').catch(() => {
    throw new Error('Network Error')
  })
  // If the response is ok, parse the response data as JSON and return it
  if (res.ok) {
    const data = await res.json()
    return data
  } else {
    // If the response is not ok, throw an error
    throw new Error('Some error ')
  }
}

// Call the customfetch function and log the user data to the console
customfetch()
  .then((data) => {
    console.log(data.data)
  })
  // Log any errors to the console
  .catch((err) => {
    console.log(err.message)
  })
```
This code defines an asynchronous function called customfetch() that retrieves user data from the API. It uses await to wait for the fetch request to complete, and catches any errors that occur during the request. If the response is ok, it parses the response data as JSON and returns it. If the response is not ok, it throws an error.

The code then calls the customfetch() function and logs the user data to the console if the request is successful. If an error occurs, it logs the error message to the console.
   
