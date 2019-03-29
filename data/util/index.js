const knex = require("knex")
const db = require("../dbConfig")

const getProjects = () => db("projects")
const addProject = project => db("projects").insert(project)
const getProject = id =>
  db("projects")
    .leftJoin("actions", "projects.id", "actions.project_id")
    .select(
      "projects.id",
      "projects.name as project",
      knex.raw("group_concat(actions.name, '%%') as actions")
    )
    .where({ "projects.id": id })
    .map(obj => Object.assign(obj, { actions: obj.actions.split("%%") }))
const getActions = () => db("actions")
const getAction = id => db("actions").where({ id })
const addAction = action => db("actions").insert(action)

module.exports = {
  getProjects,
  addProject,
  getProject,
  getActions,
  getAction,
  addAction
}
