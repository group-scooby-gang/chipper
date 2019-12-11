SELECT * FROM jobs
WHERE user_id = $1 AND jobaccepted = true;