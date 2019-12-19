UPDATE walkers
SET appStatus = true, walkstatus = 'Not Started'
WHERE application_id = $1