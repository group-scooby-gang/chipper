UPDATE jobs
SET jobaccepted = true, walkstatus = 'Not Started'
WHERE job_id = $1