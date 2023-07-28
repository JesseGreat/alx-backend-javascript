// Define the HolbertonCourse class and export it as the default export
export default class HolbertonCourse {
  // Constructor to initialize the attributes of the class
  constructor(name, length, students) {
    // Check if 'name' is a string, then assign it to the '_name' attribute
    if (typeof name === 'string') {
      this._name = name;
    } else {
      // If 'name' is not a string, throw an error with a descriptive message
      throw new Error('Name must be a string');
    }

    // Check if 'length' is a number, then assign it to the '_length' attribute
    if (typeof length === 'number') {
      this._length = length;
    } else {
      // If 'length' is not a number, throw an error with a descriptive message
      throw new Error('Length must be a number');
    }

    // Check if 'students' is an array, then assign it to the '_students' attribute
    if (Array.isArray(students)) {
      this._students = students;
    } else {
      // If 'students' is not an array, throw an error with a descriptive message
      throw new Error('Students must be an array');
    }
  }

  // Getter method for 'name' attribute
  get name() {
    return this._name;
  }

  // Setter method for 'name' attribute
  set name(newName) {
    // Check if the provided 'newName' is a string, then update the '_name' attribute
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      // If 'newName' is not a string, throw an error with a descriptive message
      throw new Error('Name must be a string');
    }
  }

  // Getter method for 'length' attribute
  get length() {
    return this._length;
  }

  // Setter method for 'length' attribute
  set length(newLength) {
    // Check if the provided 'newLength' is a number, then update the '_length' attribute
    if (typeof newLength === 'number') {
      this._length = newLength;
    } else {
      // If 'newLength' is not a number, throw an error with a descriptive message
      throw new Error('Length must be a number');
    }
  }

  // Getter method for 'students' attribute
  get students() {
    return this._students;
  }

  // Setter method for 'students' attribute
  set students(newStudents) {
    // Check if the provided 'newStudents' is an array, then update the '_students' attribute
    if (Array.isArray(newStudents)) {
      this._students = newStudents;
    } else {
      // If 'newStudents' is not an array, throw an error with a descriptive message
      throw new Error('Students must be an array');
    }
  }
}
