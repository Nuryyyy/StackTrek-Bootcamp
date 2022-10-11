  // Circle.js
  const Area = require('./Area'); // import a method called Area() that takes in one parameter radius which returns the area of a circle with the said radius
  const Circumference = require('./Circumference'); // import a method called Circumference() that takes in one parameter radius which returns the circumference of a circle with the said radius
  
  let Circle = {
      radius: 5.0,
      circumference: 0.0,
      area: 0.0
  };
  
  Circle.circumference = Circumference(Circle.radius);
  Circle.area = Area(Circle.radius);
  
  module.exports = Circle;