SELECT J.job_id, J.pet_id, J.price, J.jobaccepted, J.notes, J.month, J.date, J.year, J.time, J.walker_id, J.owner_id, P.name, P.breed, P.age, P.img, J.walkstatus
FROM jobs J 
INNER JOIN pets AS P ON P.pet_id = J.pet_id 
WHERE J.walker_id = $1
ORDER BY J.year ASC, J.month ASC, J.date ASC, J.time ASC