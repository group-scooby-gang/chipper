SELECT w.*, u.firstname, u.lastname, u.profileimg
FROM walkers w
INNER JOIN users AS u
ON w.user_id = u.user_id
WHERE w.appstatus = true