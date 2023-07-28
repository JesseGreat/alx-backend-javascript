// Exporting a default class, which means it can be imported using any name when imported in another file.

export default class {
  // Constructor that accepts two parameters 'code' and 'name' and initializes the class properties.
  constructor(code, name) {
    this._code = code; // Private property '_code' to store the currency code.
    this._name = name; // Private property '_name' to store the currency name.
  }

  get code() {
    return this._code; // Getter method for 'code' property, allowing read access to '_code'.
  }

  set code(newCode) {
    this._code = newCode; // Setter method for 'code' property, allowing write access to '_code'.
  }

  get name() {
    return this._name; // Getter method for 'name' property, allowing read access to '_name'.
  }

  set name(newName) {
    this._name = newName; // Setter method for 'name' property, allowing write access to '_name'.
  }

  displayFullCurrency() {
    // Method to display the full currency, including the name and code, as a formatted string.
    return `${this._name} (${this._code})`;
  }
}
