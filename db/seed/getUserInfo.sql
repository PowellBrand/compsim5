-- 107D
select * from userInfo
full outer join bookCheckout
on userInfo.userid = bookCheckout.userid