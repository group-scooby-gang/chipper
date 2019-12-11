SELECT * FROM jobs
WHERE walker_id = $1
ORDER BY year ASC, month ASC, date ASC, time ASC