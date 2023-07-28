// The Currency class represents a currency with a code and a name.
export default class Currency {
    // The constructor initializes a new Currency instance with the given code and name.
    constructor(code, name) {
      this._code = code; // Private field to store the currency code.
      this._name = name; // Private field to store the currency name.
    }
  
    // Setter for the currency code. It updates the private _code field if the input is a string.
    set code(newCode) {
      if (typeof newCode === 'string') {
        this._code = newCode;
      } else {
        throw new Error('Code must be a string');
      }
    }
  
    // Getter for the currency code. It returns the private _code field.
    get code() {
      return this._code;
    }
  
    // Setter for the currency name. It updates the private _name field if the input is a string.
    set name(newName) {
      if (typeof newName === 'string') {
        this._name = newName;
      } else {
        throw new Error('Name must be a string');
      }
    }
  
    // Getter for the currency name. It returns the private _name field.
    get name() {
      return this._name;
    }
  
    // Method to display the full currency information as a string (name and code).
    displayFullCurrency() {
      return `${this._name} (${this._code})`;
    }
  }  