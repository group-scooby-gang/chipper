SELECT u.firstname, u.lastname, u.user_id, u.city, u.state, w.user_id
FROM users u
INNER JOIN walkers AS w
ON w.user_id = u.user_id
WHERE state = $1 OR city = $2