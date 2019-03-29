const router = require("express").Router()

const { getProjects, getProject, addProject } = require("./../../data/util")

router.get("/", (_req, res) => {
  getProjects()
    .catch(err => {
      res.status(500).json(err)
    })
    .then(projects => {
      res.status(200).json(projects)
    })
})

router.get("/:id", (req, res) => {
  const { id } = req.params
  getProject(id)
    .catch(err => {
      res.status(404).json(err)
    })
    .then(([project]) => {
      res.status(200).json(project)
    })
})

router.post("/", (req, res) => {
  const { name, description, notes } = req.body
  ;[name, description, notes].some(f => f == null)
    ? res.status(400).json({
        message: "Please include a name, description, and notes."
      })
    : addProject({ name, description, notes })
        .catch(_err => {
          res.status(500).json({
            message: "Error inserting project."
          })
        })
        .then(([id]) => {
          getProject(id)
            .catch(_err => {
              res.status(500).json({
                message: "Error retrieving inserted project."
              })
            })
            .then(([project]) => {
              res.status(200).json(project)
            })
        })
})

module.exports = router
