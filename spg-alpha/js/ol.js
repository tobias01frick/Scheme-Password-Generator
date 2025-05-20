function overlay() {
  this.open = false;
  this.c = null;
  this.render = function(index, c) {
    if(c) {
      OL.c = c;
    }
    var html = '';
    if (!OL.open) {
	OL.c.innerHTML = html;
      return;
    }
    if(MAIN.isonsm) {
      html += '<div class="olmain text" style="position:absolute; left: 30px; top: 30px; width: 280px; height: 200px;overflow: scroll;"><div>';
    } else {
      html += '<div class="olmain text" style="position:absolute; left: 200px; top: 100px; width: 600px; height: 400px;"><div>';
    }
    if(index == 0) {
      html += '<div style="margin: 12px;">' + TEXT.genEpl + '</div>';
    }
    if (index == 1) {
      html += SPG.renderEnteredSceme(0);
    }
    html += '</div> <button  class="button_a" onclick="OL.close()" type="button">Close</button> </div>';
    OL.c.innerHTML = html;
  }
  this.close = function() {
	console.log('close');
    OL.open = false;
    OL.render(0);
  }
}

var OL = new overlay();
