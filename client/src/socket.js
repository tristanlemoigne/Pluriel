import io from "socket.io-client"
const port = process.env.PORT || 5000

var env = process.env.NODE_ENV
console.log("port", port, process, env)

// DEV
const ip = "192.168.1.16"
export default io("http://" + ip + ":5000/")

// PROD
// const ip = "pluriel.herokuapp.com"
// export default io("https://" + ip)
