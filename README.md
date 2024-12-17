# API Reference

For all CRUD (Creating, Reading, Updating, and Deleting) operations.
| Use Case | API route | Expected Fields | Optional Fields |
| -------- | --------- | --------------- | --------------- |
| create user | /c/user | username, email, password | None |
| create project | /c/<user_ID>/p | name, ID | None |
| create to-do | /c/<user_ID>/<project_ID>/t | ID | title, description, etc |
| update project | /u/<project_ID>/name | new_name | None |
