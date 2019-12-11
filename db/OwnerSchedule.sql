SELECT J.year, J.month, J.date, J.time, J.walker_id, U.firstname, U.lastname, J.pet_id
FROM jobs J 
INNER JOIN users AS U ON J.walker_id = U.user_id
WHERE J.owner_id = $1
ORDER BY year ASC, month ASC, date ASC, time ASC