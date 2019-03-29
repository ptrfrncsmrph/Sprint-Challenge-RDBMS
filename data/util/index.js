const knex = require("knex")
const db = require("../dbConfig")

const getProjects = () => db("projects")
const addProject = project => db("projects").insert(project)
const getActions = () => db("actions")
const getAction = id => db("actions").where({ id })
const addAction = action => db("actions").insert(action)

const getProject = id =>
  db("actions")
    .join("projects", "projects.id", "actions.project_id")
    .where({ "projects.id": id })
    .select(
      "projects.*",
      "actions.id as a_id",
      "actions.name as a_name",
      "actions.description as a_description",
      "actions.notes as a_notes",
      "actions.completed as a_completed"
    )
    .reduce(
      (
        acc,
        {
          a_id: id,
          a_name: name,
          a_description: description,
          a_notes: notes,
          a_completed: completed,
          ...rest
        }
      ) => ({
        ...rest,
        actions: [
          ...(acc.actions || []),
          {
            id,
            name,
            description,
            notes,
            completed
          }
        ]
      }),
      {}
    )

module.exports = {
  getProjects,
  addProject,
  getProject,
  getActions,
  getAction,
  addAction
}
