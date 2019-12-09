SELECT W.experience, W.category, W.streetadd, W.city, W.state, W.zip, W.apt, W._15minPrice, W._30minPrice, W._45minPrice, W._60minPrice, U.firstname, U.lastname, U.email, U.profileimg, U.phone, U.address
FROM walkers W
INNER JOIN users AS U ON U.user_id = W.user_id
WHERE application_id = $1