/**
 * 
 */
var indirizzoPETPASS = "http://192.168.1.85:8080/PETPASS/public/"

	
function showMessage(testo){
	
	alert(testo);
	
}
	
function ctrlCF(par){
	//alert(par.value.length);
	if(par!=null && par.value.length>=15)
		$('#buttonConfirm').prop("disabled",false);
	else
	 $('#buttonConfirm').prop("disabled",true);
}

function callAccettazione(){
	input = $('#input').val();
	$.ajax({
        url: indirizzoPETPASS+"AppAutoaccettazioneJSON?input="+input,
        type:"GET",
        success: function(data) {
        	if(data=="OK"){
        		window.location.href='accettazioneResult';
            }else{
             	alert(data);
            }
        }
    });
}

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}	


function callAutoAccettazionePage(){
        		window.location.href='index.html';
}

function ctrlSessioParam(){
	$.ajax({
        url: "ctrlAccettazione",
        type:"GET",
        success: function(data) {
        	console.log("RispostaSessione:"+data);
        	if(data=="true"){
        		window.location.href='accettazioneResult';
            }
        }
    });	
	setTimeout('ctrlSessioParam()',3000);
}