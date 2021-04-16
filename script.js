jQuery(document).ready(function($){

var spinArray = ['animation900','animation1080','animation1260','animation1440','animation1620','animation1800','animation1980','animation2160'];
var spinResultArray = [1,0,1,0,1,0,1,0];

function getSpin() {
var spin = spinArray[Math.floor(Math.random()*spinArray.length)];
return spin;
}

function getSpin2() {
var spin2 = spinArray[Math.floor(Math.random()*spinArray.length)];
return spin2;
}


$('#play').on('click', function(){

d = new Date();
$('#myimg').attr('src', 'circuit2.gif?'+d.getTime());

$('#coin').removeClass();
$('#coin2').removeClass();


var spin1 = getSpin();
var spin2 = getSpin2();

var index_spin1 = spinArray.indexOf(spin1);
var index_spin2 = spinArray.indexOf(spin2);

var final_state = [spinResultArray[index_spin1], spinResultArray[index_spin2]].join('');


setTimeout(function(){
$('#coin').addClass(spin1);
}, 10);

setTimeout(function(){
$('#coin2').addClass(spin2);
}, 10);

setTimeout(function(){
$('[name="line1"]').text("|00⟩  ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮  100% ");
$('[name="line2"]').text("|01⟩  ▯▯▯▯▯▯▯▯▯▯▯▯▯▯▯▯▯▯▯▯  0% ");
$('[name="line3"]').text("|10⟩  ▯▯▯▯▯▯▯▯▯▯▯▯▯▯▯▯▯▯▯▯  0% ");
$('[name="line4"]').text("|11⟩  ▯▯▯▯▯▯▯▯▯▯▯▯▯▯▯▯▯▯▯▯  0% ");
$('[name="code3"]').removeClass();
$('[name="code1"]').addClass('highlight_text');
$('[name="char1"]').addClass('highlight_char');
}, 10);

setTimeout(function(){
$('[name="char1"]').removeClass();
$('[name="char2"]').addClass('highlight_char');
}, 1000);

setTimeout(function(){
$('[name="line1"]').text("|00⟩  ▮▮▮▮▮▮▮▮▮▮▯▯▯▯▯▯▯▯▯▯  25% ");
$('[name="line2"]').text("|01⟩  ▮▮▮▮▮▮▮▮▮▮▯▯▯▯▯▯▯▯▯▯  25% ");
$('[name="line3"]').text("|10⟩  ▮▮▮▮▮▮▮▮▮▮▯▯▯▯▯▯▯▯▯▯  25% ");
$('[name="line4"]').text("|11⟩  ▮▮▮▮▮▮▮▮▮▮▯▯▯▯▯▯▯▯▯▯  25% ");
$('[name="code1"]').removeClass();
$('[name="char2"]').removeClass();
$('[name="code2"]').addClass('highlight_text');
}, 3000);

setTimeout(function(){
const states = ['00','01','10','11'];
var lines = ['','','',''];

for (i = 0; i < 4; i++) {
	if (states[i]==final_state) {
	  // block of code to be executed if the condition is true
	  lines[i]=['|', states[i],'⟩  ','▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮  ','100% '].join('');
	  
	} else {
	  // block of code to be executed if the condition is false
	  lines[i]=['|', states[i],'⟩  ','▯▯▯▯▯▯▯▯▯▯▯▯▯▯▯▯▯▯▯▯  ','0% '].join('');
	}
}

$('[name="line1"]').text(lines[0]);
$('[name="line2"]').text(lines[1]);
$('[name="line3"]').text(lines[2]);
$('[name="line4"]').text(lines[3]);
$('[name="code2"]').removeClass();
$('[name="code3"]').addClass('highlight_text');
}, 4000);

});

});