const express = require("express")
const helmet = require("helmet")

const actionsRouter = require("./actions/router.js")
const projectsRouter = require("./projects/router.js")

const server = express()

server.use(helmet())
server.use(express.json())

server.use("/api/actions", actionsRouter)
server.use("/api/projects", projectsRouter)

module.exports = server
