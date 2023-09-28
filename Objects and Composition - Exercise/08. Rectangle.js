// Write a function that creates and returns a rectangle object. The rectangle needs to have a width (Number), height (Number), and color (String) 
// properties, which are set via arguments during creation, and a calcArea() method, that calculates and returns the rectangle’s area.
// Input
// The function will receive three valid parameters – width (Number), height (Number), and color (String).
// Output
// Your function must return an object with all properties and methods as described. The calcArea() method of the object should return a number. The first letter in the color must be upperCase().


function rectangle(width, height, color) {

    let firstLetter = color.substring(0, 1)
    let newFirstLetter = firstLetter.toUpperCase()
    let replacedColor = color.replace(firstLetter, newFirstLetter)
    color = replacedColor

    let rect = {
        width: Number(width),
        height: Number(height),
        color: color,
        calcArea: function () {
            return this.width * this.height
        }
    }
    return rect

}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
