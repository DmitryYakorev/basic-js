const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  el:[],
  getLength() {
    return this.el.length;
  },
  addLink( value ) {
    if (value === null) value = "null";
    this.el.push(value);
    return this
  },
  removeLink( position ) {
    if (position < 1 || position > this.el.length || typeof position !== 'number') {
      this.el = [];
      throw new Error("You can't remove incorrect link!");

  }
  
   
    this.el.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.el.reverse();
    return this;
  },
  finishChain() {
    let temp = Array.prototype.join.call(this.el,' )~~( ');
    this.el = [];
    temp = '( ' + temp + ' )';
    return temp ;
  }
};

module.exports = {
  chainMaker
};
