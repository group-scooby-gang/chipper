SELECT * FROM jobs
WHERE walker_id = $1 AND jobaccepted = false;