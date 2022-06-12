// Write your solution in this file!
let employee = {
    'name': 'Aku',
    'streetAddress': '5 Nii Amui'
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    return {...employee,
    [key]: value
    };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    const clonEmployee = {...employee};
    delete clonEmployee[key];
    return clonEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}