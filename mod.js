module.exports = {
	
	check: function(file,input){
		if(input == ".php"){
			return file+"php";
		}else{
			return file+"nothing";
		}
	}
};