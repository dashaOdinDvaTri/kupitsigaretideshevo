// JavaScript Document

$(document).ready(function() {
// Форма обратной связи................................./

var regVr22 = "<div><img style='margin-bottom:-4px;' src='form/load.gif' alt='Отправка...' width='16' height='16'><span style='font: 11px Verdana; color:#333; margin-left:6px;'>Сообщение обрабатывается...</span></div><br />";

$("#send").click(function(){
	
	var id = Math.floor(Math.random()*10000);
    var captSRC = "form/captcha.php?id="+id;
	
		$("#loadBar").html(regVr22).show();
		var posName = $("#posName").val();
		var posTel = $("#posTel").val();
		var posEmail = $("#posEmail").val();
		var posText = $("#posText").val();
		var captcha = $("#captcha").val();
		$.ajax({
			type: "POST",
			url: "/send.php",
			data: {"posName": posName, "posTel": posTel, "posEmail": posEmail, "posText": posText, "captcha": captcha},
			cache: false,
			success: function(response){
		var messageResp = "<p style='font-family:Verdana; font-size:11px; color:green; border:1px solid #00CC00; padding:10px; margin:20px; border-radius:5px; -moz-border-radius:5px; -webkit-border-radius:5px; background-color:#fff;'>Спасибо, <strong>";
		var resultStat = "!</strong> Ваше сообщение отправлено!</p>";
		var oll = (messageResp + posName + resultStat);
				if(response == 1){
				$("#loadBar").html(oll).fadeIn(3000);
				$("#posName").val("");
				$("#posTel").val("");
				$("#posEmail").val("");
				$("#posText").val("");
				$("#captcha").val("");
				$("#capT").attr('src',captSRC);
				} 
		else {
		$("#loadBar").html(response).fadeIn(3000);
		$("#capT").attr('src',captSRC); }
										}
		});
		return false;
});


});