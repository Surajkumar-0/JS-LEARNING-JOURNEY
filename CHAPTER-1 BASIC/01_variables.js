const accountId = 144553
let accountEmail = "suraj.sun@gamil.com"
var accountpassword = "12345"
accountCity = "chapra"
let accountState;

// accountId = 2 not allowed

/*
not use to var because of issue in block scope functional scope
*/

accountEmail = "sun@gamil.com"
accountpassword = "54345"
accountCity = "saran"

console.log(accountId);
console.table([accountId,accountEmail,accountpassword,accountCity,accountState])
