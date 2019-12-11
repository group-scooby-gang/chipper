SELECT J.job_id, J.pet_id, J.price, J.jobaccepted, J.notes, J.month, J.date, J.year, J.time, J.walker_id, J.owner_id, P.name, P.breed, P.age, P.img
FROM jobs J 
INNER JOIN pets AS P ON P.pet_id = J.pet_id 
WHERE J.walker_id = $1