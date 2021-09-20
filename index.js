const server = require("./server");
const port = process.env.PORT || 5002;

server.listen(port, () => console.log(`Running server on port:${port}`));
