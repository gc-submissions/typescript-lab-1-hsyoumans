import {Product} from "./products";

export interface InventoryItem {
    product:Product;
    quantity:number;
}

let inventory:InventoryItem[] = [
    {product:{name:"motor", price:10.00}, quantity: 10},
    {product:{name: "sensor", price: 12.50}, quantity: 4},
    {product:{name: "LED", price: 1.00}, quantity: 10}
];

export function calcInventoryValue(inventory:InventoryItem[]) {
    let value: number = 0;
    if (inventory === undefined || inventory.length == 0) {
        return value;
    }
    else {
        let invenTotal: number = inventory.reduce((a, b) => a + b.product.price * b.quantity, 0);
        return invenTotal;
    }
}

let totalInventory: number = calcInventoryValue(inventory);
console.log(totalInventory);