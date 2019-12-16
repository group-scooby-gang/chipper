SELECT J.month, J.date, J.year, P.name, P.breed
FROM jobs J 
INNER JOIN pets AS P ON J.pet_id = P.pet_id 
WHERE J.walker_id = $1 AND J.walkstatus = 'Complete'