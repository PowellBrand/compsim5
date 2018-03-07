INSERT INTO userInfo
(userid)
VALUES
($1)
RETURNING *;