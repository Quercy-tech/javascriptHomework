// Bob asked for your help to list to the console the following:
//
//     a. List new computers
// b. Is *every* computer from the list used?
//     c. How many computers from listed were released on 2023rd year?
//     d. Is there any computer with ram 64?
//     e. Give array index of the computer which was released on 2000 (there is only one)
// f. List ram of the computers and at the end of each ram, put the "GB" text
// g. List computers with graphic card "5070" and ram above 8
//


const computers = [
    { graphicCard: "5070", ram: 16, releaseYear: 2023, condition: "new" },
    { graphicCard: "3060", ram: 8, releaseYear: 2022, condition: "used" },
    { graphicCard: "5070", ram: 32, releaseYear: 2021, condition: "new" },
    { graphicCard: "2080", ram: 64, releaseYear: 2020, condition: "used" },
    { graphicCard: "1050", ram: 4, releaseYear: 2023, condition: "used" },
    { graphicCard: "5070", ram: 10, releaseYear: 2024, condition: "new" },
    { graphicCard: "6600", ram: 6, releaseYear: 2000, condition: "used" },
    { graphicCard: "5070", ram: 8, releaseYear: 2024, condition: "new" },
];

task1 = computers.filter(e => e.condition === "new")
console.log(task1)

task2 = computers.every(e => e.condition === "used")
console.log(task2)

task3 = computers.filter(e => e.releaseYear === 2023).length
console.log(task3)

task4 = computers.some(e => e.ram === 64)
console.log(task4)

task5 = computers.findIndex(e => e.releaseYear === 2000)
console.log(task5)

task6 = computers.map(e => e.ram + "GB")
console.log(task6)

task7 = computers.filter(e => e.graphicCard === "5070" && e.ram > 8)
console.log(task7)