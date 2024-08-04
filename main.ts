#!/bin/usr/env Node

class person {
    name: String;
    age: number;
    constructor (name, age) {
        this.name = name, this.age = age;
    }
    getName(){
        return this.name;
    }
}
class student extends person {
    id;
    courses;
    constructor (name, age, id){
        super(name, age);
        this.id = id;
        this.courses= []
};

registerForCourse(course){
    this.courses.push(course);
}
}
class instructor extends person{
    salary;
    courses;
    constructor(name, age, salary){super(name, age);{
        this.salary = salary;
        this.courses = []
    }}
    assignCourse(course){
        this.courses.push(course)
    }
};
class course {
    name;
    id;
    student;
    instructor;
    constructor (id, name){
this.id = id;
this.name = name;
this.student = []
    }
addStudents(student){
    this.student.push(student)
};
setInstructor(instructor,course){
this.instructor = instructor;
instructor.assignCourse(course)
}
};
class department {
    name;
    courses;
    constructor(name){
        this.name = name;
        this.courses=[]
    }
    addCourse(course){
        this.courses.push(course);
    }
}
const student1 = new student('Zayyan', 20, 12345);
const student2 = new student('Zainab', 21, 12346);
const instructor1 = new instructor('Sahar', 30, 40000);
const instructor2 = new instructor('Saeed', 35, 45000);
const course1 = new course(1, 'Introduction to Computer Science');
const course2 = new course(2, 'Advanced Programming');
const department1 = new department('Computer Science');
department1.addCourse(course1);
department1.addCourse(course2);
student1.registerForCourse(course1);
student2.registerForCourse(course1);
course1.addStudents(student1);
course1.addStudents(student2);
course1.setInstructor(instructor1, course1);
console.log(student1.getName()); // Output: Alice
console.log(student1.courses); // Output: [Course]
console.log(instructor1.courses[0].name); // Output: [Course]
console.log(department1.courses); // Output: [Course, Course]









