SELECT u.firstname, u.lastname, u.user_id, u.profileimg, u.city, u.state, w.user_id, w.experience, w._15minprice, w._30minprice, w._45minprice, w._60minprice
FROM users u
INNER JOIN walkers AS w
ON w.user_id = u.user_id
WHERE state = $1 OR city = $2