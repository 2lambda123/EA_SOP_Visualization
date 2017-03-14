var exampleInput  = ''+
'1;ime1;["param1","param2","param3"];1;problem1;3;["param1","param2"];'+
'{1;1;[-1,-1];00000;1;5;[3,3,3]}'+
'{2;1;[-1,-1];00000;1;3;[2,4,1]}'+
'{3;1;[-1,-1];00000;1;4;[6,2,5]}'+
'{4;1;[-1,-1];00000;1;2;[5,3,0]}'+
'{5;1;[-1,-1];00000;1;5;[1,4,3]}'+
'{6;1;[-1,-1];00000;1;3;[6,2,1]}'+
'{7;1;[-1,-1];00000;1;4;[5,2,3]}'+
'{8;1;[-1,-1];00000;1;2;[5,4,0]}'+


'{9;2;[1,3];00001;1;5;[2,3,4]}'+
'{10;2;[2,4];00001;1;3;[5,2.5,5]}'+
'{11;2;[5,7];00001;1;5;[4,3,4.6]}'+
'{12;2;[8,6];00001;1;3;[1,5.5,3]}'+

'{13;3;[9,11];00002;1;7;[1,3,2]}' +
'{14;3;[12,10];00002;1;7;[7,4,8]}'+
'{15;3;[10,11];00002;1;7;[1,5,6]}'+
'{16;3;[11,12];00002;1;7;[8,6,8]}'+

'{17;4;[16,14];00003;1;7;[2,5,3]}'+
'{18;4;[13,15];00003;1;7;[3,6,4]}'+

'{19;5;[17,18];00004;1;7;[5,8,1]}';


$(document).ready(function(){
	$('#main').evoAnimate({
		playOnLoad: false,
		source: exampleInput,
		sourceType: 'STRING',
		display: [[1,2],[2,3]],
		canvasSize: [[200,200],[200,200]]
	});
});
