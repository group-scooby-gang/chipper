SELECT W.experience, W.category, W._15minPrice, W._30minPrice, W._45minPrice, W._60minPrice, W.phone, W.email, U.firstname, U.lastname, U.address, U.city, U.zip, U.profileimg
FROM walkers W 
INNER JOIN users AS U ON U.user_id = W.user_id
WHERE W.user_id = $1