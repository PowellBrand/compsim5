insert into authz
(authid)
values
($1)
returning *;