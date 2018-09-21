class Sorter {
  constructor() {
    this.arr = [];
    this.comparator = (a, b) => {return a - b};
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    let sorted = [];
    let indx;
    // creates a new array and pushes all elements that should be sorted
    for (let i = 0; i < indices.length; i++){
      indx = indices[i];
      sorted.push(this.arr[indx]);
    }
    // sorts new array
    sorted.sort(this.comparator);
    // replaces sorted values in original array at corresponding indices
    for (let i = 0; i < this.arr.length; i++){
      if (indices.includes(i)){
        this.arr[i] = sorted.shift();
      }
    }
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;