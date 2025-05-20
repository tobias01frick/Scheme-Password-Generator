function spg() {
  this.charVec = ["|","9","a","b","c","#","6","d","q","w","e","*","5","r","t","z","u","i","!","4","o","p","s","f","g","%","8","h","j","k","l","y","x","$","7","v","n","m","Q","W","E","R","ß","0","T","Z","U","I","O","P","A","S","_","1","2","3","D","F","G","H","J","K","L","Y"];
  this.colors = ['#FF7777','#77FF77','#7777FF','#BBBB77'];
  this.c = null;
  this.render = function(spg, c) {
    if(c) {
      SPG.c = c;
    }
    var html = '';
    html += '<div><div>';
    html += SPG.renderSceme(spg);
    html += '</div> <button class="button_a" onclick="SPG.reset(' + spg + ')" type="button">Reset</button> </div>';
    SPG.c.innerHTML = html;
  }
  this.renderSceme = function(spg) {
    console.log(spg);
	console.log(DM.dm);
    var json = SPG.getSpgJson(spg);
    var html = '<div><table><tr><td><table class="spg_sceme">';
    if(MAIN.isonsm) {
      html = '<div><div><table class="spg_sceme">';
    }
    for (var i = 0; i < 4; i++) {
      html += '<tr>';
      for (var j = 0; j < 4; j++) {
        html += '<td>';
        var chosen = false;
        var c = 0;
        for(var k = 0; k < json.state.length; k++) {
          var item = json.state[k];
	//console.log(item);
  
	//console.log('i: ' + i + ' j: ' + j)
          if (item.x == i && item.y == j) {
		//console.log('chosen');
            chosen = true;
            c = item.c;
          }
        }
	console.log(chosen);
        if(chosen) {
          html += SPG.renderScemeFieldChosen(spg,i,j,c);
        } else {
          html += SPG.renderScemeField(spg,i,j);
        }
        html += '</td>';
      }
      html += '</tr>';
    }
    if(MAIN.isonsm) {
      return html +'</table></div><div><div class="heading" style="width:250px">Password: <div style="margin:4px; padding: 4px; border: solid;">' + json.pw + '</div></div></div></div>';
    }
    return html +'</table></td><td style="vertical-align: text-top;"><div class="heading" style="width:250px">Password: <div style="margin:4px; padding: 4px; border: solid;">' + json.pw + '</div></td></tr></table></div></div>';
  }
  this.renderScemeField = function(spg,i,j) {
    var html = '<div class="spg_sceme_field"><table>';
    html += '<tr>';
    html += '<td>';
    html += '<div class="spg_color_field" onclick="SPG.onFieldChosen(' + spg + ',' + i + ',' + j + ',0)" style="width:30px;height:30px;background-color:' + SPG.colors[0] + ';"></div>';
    html += '</td>';
    html += '<td>';
    html += '<div class="spg_color_field" onclick="SPG.onFieldChosen(' + spg + ',' + i + ',' + j + ',1)" style="width:30px;height:30px;background-color:' + SPG.colors[1] + ';"></div>';
    html += '</td>';
    html += '</tr>';
    html += '<tr>';
    html += '<td>';
    html += '<div class="spg_color_field" onclick="SPG.onFieldChosen(' + spg + ',' + i + ',' + j + ',2)" style="width:30px;height:30px;background-color:' + SPG.colors[2] + ';"></div>';
    html += '</td>';
    html += '<td>';
    html += '<div class="spg_color_field" onclick="SPG.onFieldChosen(' + spg + ',' + i + ',' + j + ',3)" style="width:30px;height:30px;background-color:' + SPG.colors[3] + ';"></div>';
    html += '</td>';
    html += '</tr>';
    return html + '</table></div>';
  }
  this.renderScemeFieldChosen = function(spg,i,j,c) {
    var html = '<div class="spg_sceme_field" style="width:72px;height:72px;background-color:' + SPG.colors[c] + ';"></div>';
    return html;
  }
  this.renderEnteredSceme = function(spg) {
    var json = SPG.getSpgJson(spg);
    var html = '<div><table class="spg_sceme">';
    for (var i = 0; i < 4; i++) {
      html += '<tr>';
      for (var j = 0; j < 4; j++) {
        html += '<td>';
        var chosen = false;
        var c = 0;
	var count = -1;
        for(var k = 0; k < json.state.length; k++) {
          var item = json.state[k];
	  if (item.x == i && item.y == j) {
            chosen = true;
            c = item.c;
	    count = k;
          }
        }
	if(chosen) {
          html += '<div class="spg_sceme_field" style="width:60px;height:60px;background-color:' + SPG.colors[c] + ';color: black;">' + count + '</div>';
        } else {
          html += '<div class="spg_sceme_field" style="width:60px;height:60px;background-color: gray;"></div>';
        }
        html += '</td>';
      }
      html += '</tr>';
    }
    return html +'</table></div>';
  }
  this.renderExplPanel = function() {
    var html = '<div style="width: 350px;">';
    html += '<h4 class="heading">Step 1</h4>';
    html += '<p class="text">' + TEXT.step1 + '</p>';

    html += '<h4 class="heading">Step 2</h4>';
    html += '<p class="text">' + TEXT.step2 + '</p>';

    html += '<h4 class="heading">Step 3</h4>';
    html += '<p class="text">' + TEXT.step3 + '</p>';

    html += '<h4 class="heading">Step 4</h4>';
    html += '<p class="text">' + TEXT.step4 + '</p>';

    html += '<h4 class="heading">Step 5</h4>';
    html += '<p class="text">' + TEXT.step5 + '</p>';

    return html + '</div>';
  }
  this.onFieldChosen = function(spg,i,j,c) {
    var json = SPG.getSpgJson(spg);
    json.state.push(DM.genSpgChosenJson(i,j,c));
    if(json.state.length == 16) {
      SPG.createPwFromScemeState(spg);
    }
    SPG.render(spg);
  }
  this.createPwFromScemeState = function(spg) {
    var json = SPG.getSpgJson(spg);
    var pw = '';
    var valvec = [];
    for(var i = 0; i < json.state.length; i++) {
      valvec.push(SPG.getValueFromChosenJson(json.state[i]));
    }
    console.log('generatePw');
    for(var i = 0; i < 16; i++) {
      valvec = SPG.hashValueVec(valvec,i);
console.log(valvec);
    }
    for(var i = 0; i < valvec.length; i++) {
      pw += SPG.charVec[valvec[i]];
    }
    json.pw = pw;
  }
  this.getValueFromChosenJson = function(json) {
    return json.c * 16 + json.x * 4 + json.y;
  }
  this.getSpgJson = function(index) {
    return json = DM.dm.spg[index];
  }
  this.reset = function(spg) {
    var json = SPG.getSpgJson(spg);
    json.state = [];
    json.pw = '';
    SPG.render(spg);
  }
  this.hashValueVec = function(vec,index) {
    console.log('hashing');
    var newvec = [];
    for(var i = 0; i < vec.length; i++) {
      var i0 = i - index;
      if(i0 < 0) {i0 = i0 + 16;}
      var i2 = (i + index)%16;
      if(i2 > 15) {i2 = 0;}
      newvec.push((parseInt('' + vec[i0] + vec[i] + vec[i2]))%64);
    }
    return newvec;
  }
}

var SPG = new spg();
//nm$%8stz*K3Tvqa|
//nm$%8stz*K3Tvqa|
//opiERQ7redLYHj4|

//IhdSAQGUZ%miucDT
//IhdSAQGUZ%miucDT
//zhdSAQGUZ%miucDT
//yHfSßtAsm9kFOoDj
//YHfSßtAsm9kFOoDj
//k*Yvsa6GR3khLEG7
//YR*W2t2cH0v*G!ul
//YR*W2t2cH0v*G!ul
//k*Yvsa6GR3khLEG7

/*
document.cookie = "username=John Doe";
let x = document.cookie;

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let username = getCookie("username");
  if (username != "") {
   alert("Welcome again " + username);
  } else {
    username = prompt("Please enter your name:", "");
    if (username != "" && username != null) {
      setCookie("username", username, 365);
    }
  }
}
*/
