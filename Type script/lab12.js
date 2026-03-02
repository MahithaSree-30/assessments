var Direction;
(function (Direction) {
    Direction[Direction["NORTH"] = 0] = "NORTH";
    Direction[Direction["SOUTH"] = 1] = "SOUTH";
    Direction[Direction["EAST"] = 2] = "EAST";
    Direction[Direction["WEST"] = 3] = "WEST";
})(Direction || (Direction = {}));
var Status;
(function (Status) {
    Status["PENDING"] = "PENDING";
    Status["SUCCESS"] = "SUCCESS";
    Status["FAILED"] = "FAILED";
})(Status || (Status = {}));
function printStatusOrDirection(value) {
    console.log("Value:", value);
}
var d = Direction.EAST;
var s = Status.SUCCESS;
console.log("Direction variable =", d);
console.log("Status variable =", s);
printStatusOrDirection(d);
printStatusOrDirection(s);
