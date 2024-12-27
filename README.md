# Unhandled Database Query Error in Express.js

This repository demonstrates a common error in Express.js applications: improper error handling during database queries.

The `bug.js` file shows an example of an Express.js application that makes a database query.  If the query fails, it throws the error directly, which is not suitable for production environments. This can lead to server crashes and reveal sensitive error information to the client.

The `bugSolution.js` file provides a corrected version with improved error handling that sends a proper error response to the client instead of crashing the server.  It also includes more robust logging for debugging purposes.

## How to Reproduce

1. Clone this repository.
2. Make sure you have Node.js and npm installed.
3. Install the necessary dependencies: `npm install`
4. Run the application with `node bug.js` and observe that if database connection fails, it throws an error.
5. Now run the solution with `node bugSolution.js` and see the improved error handling.

## Lessons Learned

Always handle errors gracefully in your Express.js applications.  Never directly throw errors to the client; instead, provide informative error messages with appropriate HTTP status codes.