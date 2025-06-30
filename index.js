const employee={
    name: "What Even",
    streetAddress:"99 Kamakal"
}
function updateEmployeeWithKeyAndValue(employee,key,value){
    return {...employee,[key]: value}
};
console.log(updateEmployeeWithKeyAndValue(employee,"name","lyrikal"));
console.log(employee);


function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key]=value
    return employee
}
console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee,"name","lyrikal"));
console.log(employee);


function deleteFromEmployeeByKey(employee,key){
    const newEmployee={...employee}
    delete newEmployee[key]
    return newEmployee
}
console.log(deleteFromEmployeeByKey(employee,"streetAddress"));
console.log(employee);

function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key]
    return employee
}
console.log(destructivelyDeleteFromEmployeeByKey(employee,"streetAddress"));
console.log(employee);