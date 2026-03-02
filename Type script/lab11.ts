// lab 11 task 3
// interface StudentList{
//     name:String;
//     marks:number;
// }
// const students:StudentList[]=[
//     {name:"Mahi", marks:99},
//     {name:"Ammu", marks:88},
//     {name:"Manasa",marks:80},
// ];
// console.log(students[0],students[1],students[2])

// lab 11 task 4
type PointType = {
  x: number;
  y: number;
};
interface PointInterface {
  x: number;
  y: number;
}
function printPoint(point: PointType | PointInterface): void {
  console.log("x:", point.x);
  console.log("y:", point.y);
}
const point1: PointType = { x: 10, y: 20 };
const point2: PointInterface = { x: 30, y: 40 };
printPoint(point1);
printPoint(point2);