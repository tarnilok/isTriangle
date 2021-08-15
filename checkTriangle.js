
const side1 = document.getElementById("input1");
const side2 = document.getElementById("input2");
const side3 = document.getElementById("input3");
const output = document.getElementById("result");
const output2 = document.getElementById("result2");
const clicked = document.getElementById("button");

class triangleChecker {
    constructor (side1,side2,side3) {
        this.side1 = side1,
        this.side2 = side2,
        this.side3 = side3 
        output.style.display = ""
        output2.style.display = ""
    }
    generalConditions () {
        if(this.side1 == "" || this.side2 == "" || this.side3 == "")  {
            alert("don't forget to fill all boxes")
        } 
        else if (isNaN(this.side1, this.side2, this.side3)) {
            alert("the lengths of the sides must be integer")
        }
        else if (this.side1 <= 0 || this.side2 <= 0 || this.side3 <= 0) {
            alert("all sides have to be of length > 0")
        }
    }

    typeConditions = () => {
        if (this.side1 !== this.side2 & this.side1 !== this.side3 & this.side2 !== this.side3) { output.innerHTML = "scalene triangle"}

        else if (this.side1 === this.side2 || this.side1 === this.side3 || this.side2 === this.side3 ) {
            output.innerHTML = "at least isosceles triangle" 
            if (this.side1 === this.side2 & this.side1 === this.side3) {output.innerHTML = "equilateral triangle"} 
        }
        output.style.color = "blue"
    }

    lengthControll = () => {
        if (this.side1 + this.side2 === this.side3 || this.side1 + this.side3 === this.side2 || this.side3 + this.side2 === this.side1) { 
            if (this.side1 == 0 & this.side1 == 0 & this.side1 == 0) {
                output.style.display = "none"
                output2.style.display = "none"
            }
            output.innerHTML = "degenerate triangle"
            output2.innerHTML = "It has zero area and looks like a single line !";
            output2.style.color = "purple";
        }
        else if (this.side1 + this.side2 > this.side3 & Math.abs(this.side1 - this.side2) < this.side3) {
            output2.innerHTML = "You can draw a triangle with these lengths";
            output2.style.color = "green";  
        }
        else { 
            // output.style.visibility = "hidden";
            output.style.display = "none" ;
            output2.innerHTML = "The length requirement not met. You can't draw a triangle with these lengths !";
            output2.style.color = "red";
        }
    } 
}
clicked.addEventListener("click", () => {
    const isTriangle = new triangleChecker(Number(side1.value.trim()), Number(side2.value.trim()), Number(side3.value.trim()));
    isTriangle.generalConditions();
    isTriangle.typeConditions();
    isTriangle.lengthControll();

    side1.value = "", side2.value = "", side3.value = "";
})

