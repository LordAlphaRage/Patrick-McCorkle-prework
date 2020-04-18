const studentList = ['Patrick', 'Alex', 'Mike'];

for (let i = 0; i < 3; i++){
const student = prompt('Enter a name, please.');
studentList.push(student);

}

for (let i=0; i < studentList.length; i++){
const student = studentList[i];
console.log(student);
alert(student);

}