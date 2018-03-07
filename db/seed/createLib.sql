-- 69G, 67E, 68E, 107C
CREATE TABLE if not exist library (
title TEXT,
author TEXT,
dds FLOAT(3),
available BOOLEAN,
FOREIGN KEY (dds) REFERENCES bookCheckout(userid)
)