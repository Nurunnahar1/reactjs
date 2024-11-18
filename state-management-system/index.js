// const devs = {
//     "name": "Nasrin",
//     "roll": 21
// }
 

// const updateData = {
//     ...devs,
//     "name": "Muskan",
// }

// console.log(updateData);


//meduum stage ===================
const students = {
    "name": "Nasrin",
    "roll": 29,
    "subjects": {
        "bangla": 50,
        "english": 70,
        "science":90
    },
    food:["Rice", "Fish", "Meat"]

}
 

const updateData = {
    ...students,
    subjects: {
        ...students.subjects,
        bangla: 0,
    },

    food:students.food.filter((data)=>data !== "Rice")
};
console.log(updateData);