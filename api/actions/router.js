const router = require("express").Router()

const {
  getActions,
  getAction,
  addAction,
  getProject
} = require("./../../data/util")

router.get("/", (_req, res) => {
  getActions()
    .catch(err => {
      res.status(500).json(err)
    })
    .then(actions => {
      res.status(200).json(actions)
    })
})

router.get("/:id", (req, res) => {
  const { id } = req.params
  getAction(id)
    .catch(err => {
      res.status(404).json(err)
    })
    .then(([action]) => {
      res.status(200).json(action)
    })
})

router.post("/", (req, res) => {
  const { name, description, notes, project_id } = req.body
  ;[name, description, notes, project_id].some(f => f == null)
    ? res.status(400).json({
        message: "Please include a name, description, notes, and a project_id."
      })
    : getProject(id)
        .catch(_err => {
          res.status(404).json({
            message: "No project matching that project_id."
          })
        })
        .then(_ => {
          addAction({ name, description, notes, project_id })
            .catch(_err => {
              res.status(500).json({
                message: "Error inserting action."
              })
            })
            .then(([id]) => {
              getAction(id)
                .catch(_err => {
                  res.status(500).json({
                    message: "Error retrieving inserted action."
                  })
                })
                .then(([action]) => {
                  res.status(200).json(action)
                })
            })
        })
})

module.exports = router
