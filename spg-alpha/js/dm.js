function dm() {
  this.dm = {spg: []}
  this.genSpgJson = function() {
    return {state: [], pw: ''};
  }
  this.genSpgChosenJson = function(x,y,c) {
    return {x: x, y: y, c: c}
  }
}

var DM = new dm();
