import io from "socket.io-client";
// client side socket 
const x = io(); // connects to io server
// const x = io.connect('http://localhost:8080/');

export default x;