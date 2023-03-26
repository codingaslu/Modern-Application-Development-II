## Token-based authentication

In token-based authentication, the server creates and sends a token to the client after successful authentication. The token is then sent back to the server with each subsequent request, and the server uses the token to authenticate and authorize the client for each request. The token is usually a unique and random string that is difficult to guess, and it is typically encoded or encrypted to prevent tampering. This approach is different from traditional session-based authentication, where the server stores session data on the server-side and sends the session ID to the client as a cookie.