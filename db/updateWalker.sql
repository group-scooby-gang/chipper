UPDATE users
SET username = $2, firstname = $3, lastname = $4, email = $5, profileimg = $6, phone = $7, address = $8, city = $9, state = $10, zip = $11
WHERE user_id = $1;

UPDATE walkers
SET experience = $12, _15minprice = $13, _30minprice = $14, _45minprice = $15, _60minprice = $16
WHERE user_id = $1