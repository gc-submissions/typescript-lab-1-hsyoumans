
export interface Mountain {
    name: string;
    height: number;
}

let mountains: Mountain[] = [
    {name: "Kilimanjaro", height: 19341},
    {name: "Everest", height: 29029},
    {name: "Denali", height: 20310}
];

export function findNameOfTallestMountain (mountains: Mountain[]) {
    let value:string = "No mountains found"
    if (mountains === undefined || mountains.length == 0) {
        return value;
    }
    else{
        let tallest = mountains.reduce((a, b) => a.height > b.height ? a : b);
        return tallest.name;
    }
    
}

let tallestMnt: string = findNameOfTallestMountain(mountains);
console.log(tallestMnt);

