function totalPrice(products) {
    var totalPrice = 0;
    products.forEach(function (product) {
        totalPrice += product.price;
    });
    return totalPrice;
}
//Task 5
//I supposed the domain name can be anything and the word after . only be com like: (yahoo.com, gmail.com)
function checkEmailValidation(email) {
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/;
    return emailRegex.test(email);
}
console.log(checkEmailValidation("test@example.com")); // true
console.log(checkEmailValidation("test@example.org")); // false
console.log(checkEmailValidation("invalid-email")); // false
//You can find how we run typeScript on readme.md file 
