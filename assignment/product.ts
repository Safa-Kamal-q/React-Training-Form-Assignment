//Task 4
interface Product {
    name: string,
    price: number
}

function totalPrice(products: Product[]): number {
    let totalPrice = 0;

    products.forEach(product => {
        totalPrice += product.price;
    });

    return totalPrice;
}

//Task 5

//I supposed the domain name can be anything and the word after . only be com like: (yahoo.com, gmail.com)
function checkEmailValidation(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/;
    return emailRegex.test(email);
}

//You can find how we run typeScript on readme.md file 
