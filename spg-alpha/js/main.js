function main() {
  this.spgId = 'spg-field-main';
  this.olId = 'ol-main';
  this.c = null;
  this.isonsm = false;
  this.init = function(c) {
    DM.dm.spg.push(DM.genSpgJson());
    MAIN.render(c);
  }
  this.render = function(c) {
    if (c) {
      MAIN.c = c;
    }
    var html = '<div style="margin-left:30px;margin-right:30px;"><div class="page-header"><table><tr><td style="vertical-align: text-top;">' + MAIN.renderIcon() + '</td><td><h2 class="heading"> Scheme password generator</h2></td></tr></table></div><div id="' + MAIN.olId + '"></div><div style="margin: 15px;"><table><tr><td style="vertical-align: text-top;"><div><button class="button_a" onclick="MAIN.openEnteredSceme()" type="button">Show Entered Sceme</button><button class="button_a" onclick="MAIN.openGenExpl()" type="button">What is this about</button></div><div style="vertical-align: text-top;" id="' + MAIN.spgId + '"></div></td><td>' + SPG.renderExplPanel() + '</td></tr></table></div></div>';
    
    if(MAIN.isonsm) {
      html = '<div style="margin-left:30px;margin-right:30px;"><div class="page-header"><table><tr><td style="vertical-align: text-top;">' + MAIN.renderIcon() + '</td><td><h2 class="heading"> Scheme password generator</h2></td></tr></table></div><div id="' + MAIN.olId + '"></div><div style="margin: 15px;"><div><button class="button_a" onclick="MAIN.openEnteredSceme()" type="button">Show Entered Sceme</button><button class="button_a" onclick="MAIN.openGenExpl()" type="button">What is this about</button></div><div style="vertical-align: text-top;" id="' + MAIN.spgId + '"></div>' + SPG.renderExplPanel() + '</div></div>';
    }
    c.innerHTML = html;
    SPG.render(0, document.getElementById(MAIN.spgId));
    OL.render(0,document.getElementById(MAIN.olId));
  }
  this.openGenExpl = function() {
    OL.open = true;
    OL.render(0,document.getElementById(MAIN.olId));
  }
  this.openEnteredSceme = function() {
    OL.open = true;
    OL.render(1,document.getElementById(MAIN.olId));
  }
  this.renderIcon = function() {
    var html = '<table>';
    html += '<tr>';
    html += '<td>';
    html += '<div class="spg_icon_field" style="width:20px;height:20px;background-color:' + SPG.colors[0] + ';"></div>';
    html += '</td>';
    html += '<td>';
    html += '<div class="spg_icon_field" style="width:20px;height:20px;background-color:' + SPG.colors[1] + ';"></div>';
    html += '</td>';
    html += '</tr>';
    html += '<tr>';
    html += '<td>';
    html += '<div class="spg_icon_field" style="width:20px;height:20px;background-color:' + SPG.colors[2] + ';"></div>';
    html += '</td>';
    html += '<td>';
    html += '<div class="spg_icon_field" style="width:20px;height:20px;background-color:' + SPG.colors[3] + ';"></div>';
    html += '</td>';
    html += '</tr>';
    return html + '</table>';

  }
}

var MAIN = new main();
