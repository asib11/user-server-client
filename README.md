1. create a post API on the server-side
2. client-side send data via post
3. set fetch method inside the fetch options (second peremeter)
4. options will have three thing
 1. method
 2. headers : 'content-type': 'application/json'
 3. dont forget to send data by JSON.stringify in the body
5. on the server-side dont forget to use express.json() middleware
