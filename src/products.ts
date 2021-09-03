
export interface Product {
    name: string;
    price: number;
}

let products: Product[] = [
    {name: "saddle", price: 2500},
    {name: "irons", price: 200},
    {name: "jodphurs", price: 150}
];

export function calcAverageProductPrice(products:Product[]) {
    let value: number = 0;
    if (products === undefined || products.length == 0) {
        return value;
    }
    else{
        let prodAvg: number = products.reduce((a, b) => a + b.price, 0)/products.length;
        return prodAvg;
    }
}

let productAvg: number = calcAverageProductPrice(products);
console.log(productAvg);

