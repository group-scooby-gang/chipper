SELECT u.*, w.experience
FROM users u
INNER JOIN walkers AS w on u.user_id = w.user_id
WHERE username = $1