export default class HolbertonCourse {
  constructor(name, length, students) {
    // verify that the properties input are strings, number and array respectively.
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new Error('Name must be a string');
    }
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new Error('Lenght must be a number');
    }
    if (Array.isArray(students)) {
      this._students = students;
    } else {
      throw new Error('Students must be an array');
    }
  }

  // setting the get and set method for the properties of the class
  get name() {
    return this._name;
  }

  set name(newname) {
    if (typeof newname === 'string') {
      this._name = newname;
    } else {
      throw new Error('Name must be a string');
    }
  }

  get length() {
    return this._lenght;
  }

  set length(newLength) {
    if (typeof newLength === 'number') {
      this._length = newLength;
    } else {
      throw new Error('Lenght must be a number');
    }
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (Array.isArray(newStudents)) {
      this._students = newStudents;
    } else {
      throw new Error('Students must be an array');
    }
  }
}
