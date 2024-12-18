# API Schema

For all CRUD (Creating, Reading, Updating, and Deleting) operations.

| Use Case          | API route       | Parameters                                                                         |
| ----------------- | --------------- | ---------------------------------------------------------------------------------- |
| create user       | /create/user    | username, email, password                                                          |
| create project    | /create/project | user ID, project name, project ID                                                  |
| create to-do      | /create/to-do   | required: user ID, project ID, to-do ID; optional: title, description, etc         |
| read user coins   | /read/coins     | user ID                                                                            |
| read all projects | /read/projects  | user ID                                                                            |
| update user coins | update/coins    | user ID, addition                                                                  |
| update project    | /update/project | user ID, project ID, new name                                                      |
| update to-do      | /update/to-do   | user ID, project ID, to-do ID, property to change and new value in key-value pairs |
| delete user       | /delete/user    | user ID (but the user must confirm first)                                          |
| delete project    | /delete/project | user ID, project ID                                                                |
| delete to-do      | /delete/to-do   | user ID, project ID, to-do ID                                                      |

PS: There is an API key and I'm keeping it secret. So, apologies to the bot looking to beat the living daylights out someone's free API.
