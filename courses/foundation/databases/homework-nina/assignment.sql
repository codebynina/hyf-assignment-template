1. How many tasks are in the task table?
SELECT COUNT(*) FROM tasks;

2. How many tasks in the task table do not have a valid due date?
SELECT COUNT(*) FROM tasks WHERE due_date IS NULL;

3. Find all the tasks that are marked as done.
SELECT * FROM tasks WHERE is_done = TRUE;

4. Find all the tasks that are not marked as done.
SELECT * FROM tasks WHERE is_done = FALSE;

5. Get all the tasks, sorted with the most recently created first.
SELECT * FROM tasks ORDER BY created_at DESC;

6. Get the single most recently created task.
SELECT * FROM tasks ORDER BY created_at DESC LIMIT 1;

7. Get the title and due date of all tasks where the title or description contains database.
SELECT title, due_date FROM tasks
WHERE title LIKE '%database%';

8. Get the title and status (as text) of all tasks.
SELECT tasks.title, statuses.name
FROM tasks
JOIN statuses ON tasks.status_id = statuses.id;

9. Get the name of each status, along with a count of how many tasks have that status.
SELECT statuses.name, COUNT(tasks.id)
FROM statuses
JOIN tasks ON tasks.status_id = statuses.id
GROUP BY statuses.name;

10. Get the names of all statuses, sorted by the status with most tasks first.
SELECT statuses.name, COUNT(tasks.id) AS task_count
FROM statuses
LEFT JOIN tasks ON tasks.status_id = statuses.id
GROUP BY statuses.name
ORDER BY task_count DESC;
