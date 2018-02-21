class SmartCalculator {
  constructor(initialValue) {
    this.expression = "" + initialValue;
    this.result = 0;
  }

  copy(smartObj, numObj){ //copy all methods from SmartCalculator to Number object
      numObj.expression = smartObj.expression;
      numObj.copy = smartObj.copy;
      numObj.add = smartObj.add;      
      numObj.subtract = smartObj.subtract;
      numObj.multiply = smartObj.multiply;
      numObj.devide = smartObj.devide;
      numObj.pow = smartObj.pow;
  }
   add(number) {
      this.expression += "+" + number;
      
      this.result = eval(this.expression);

      var numObj = new Number(this.result); 
      var smartObj = new SmartCalculator(this.expression);   
      this.copy(smartObj, numObj);  
      
      return numObj;    
  }
  
  subtract(number) {
      this.expression += "-" + number;

      this.result = eval(this.expression);

      var numObj = new Number(this.result); 
      var smartObj = new SmartCalculator(this.expression);
      this.copy(smartObj, numObj);       
      
      return numObj; 
  }

  multiply(number) {
    this.expression += "*" + number;

      this.result = eval(this.expression);

      var numObj = new Number(this.result); 
      var smartObj = new SmartCalculator(this.expression);
      this.copy(smartObj, numObj);      
      
      return numObj;       
  }

  devide(number) {
    this.expression += "/" + number;

      this.result = eval(this.expression);

      var numObj = new Number(this.result); 
      var smartObj = new SmartCalculator(this.expression);
      this.copy(smartObj, numObj);      
      
      return numObj; 
  }

  pow(exponent) {
      var numbers = this.expression.match(/\d+/g);    //get all number form the expression
      var previousNumber = numbers[numbers.length - 1];   //get last number
      this.expression = this.expression.slice(0, this.expression.length - previousNumber.length);
    
      previousNumber = Math.pow(+previousNumber, exponent);

      this.expression += previousNumber;
    
      this.result = eval(this.expression);

      var numObj = new Number(this.result); 
      var smartObj = new SmartCalculator(this.expression);
      this.copy(smartObj, numObj);    
      
      return numObj; 
  }   
}

module.exports = SmartCalculator;

