const chainMaker = {
   el : [],
  getLength() {
    return this.el.length;
  },
  addLink(value) {
   // console.log("!!",value);
    /*if (value === undefined || isNaN(value) ) {
      value = ''*/
    /*else {
      value+='';
    };*/
   // console.log("!",value);
    if (value === null  ) {
      value = "null"};
    this.el.push(value);
    return this
  },
  removeLink(position) {
    
     if (position < 1 || position > this.el.length || typeof position !== 'number') {
      this.el = [];
      throw new Error();

  }
  
   // console.log("-",position);
    this.el.splice(position - 1, 1);
    return this;
  }
  ,
  reverseChain() {
    this.el.reverse();
    return this;
  },
  finishChain() {
    let temp = "";
   
  temp = Array.prototype.join.call(this.el," )~~( ");
  //console.log("+",temp);
    this.el = [];
temp = "( "+temp+" )";
    return temp ;
  }
};

module.exports = chainMaker;
