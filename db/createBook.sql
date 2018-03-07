insert into library (title, author, dds, available)
values ($1, $2, $3, $4)
returning *;