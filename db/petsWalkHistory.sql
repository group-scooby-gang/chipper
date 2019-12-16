SELECT J.month, J.date, J.year, U.firstname, U.lastname 
FROM jobs J 
INNER JOIN users AS U on J.walker_id = U.user_id
WHERE pet_id = $1 AND J.walkstatus = 'Complete'