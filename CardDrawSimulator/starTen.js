function starTen () {
	var itemArr = ["item4", "item5", "item6", "item7", "item1", "item2", "item3", "item8", "item9", "item10", ];
	var e = document.getElementById("slt_dMethod");
	var elementUp = e.options[e.selectedIndex].value;
	var ssrRecord = document.getElementById('box' + ssrGet);
	
	//Fire Up
	if (elementUp == 1) {
		//Generate cards for item 1~9
		for (var x=0; x<9; x++){
			var rareGate = Math.floor((Math.random() * 100) + 1);
			var upValue = Math.floor ((Math.random() * 10) + 1);
				if (upValue > 3){
					if (rareGate <= 82) {
					cardIMG = pickRAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				 else{
					cardIMG = pickSSRAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
					ssrRecord = document.getElementById('box' + ssrGet);
				}
			} else {
				if (rareGate <= 82) {
					cardIMG = pickRByAttr('fire');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByAttr('fire');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				 else if (rareGate >=98){
					cardIMG = pickSSRByAttr('fire');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
					ssrRecord = document.getElementById('box' + ssrGet);
				}
			}
		}
		
		//Generate card for item 10
		var rareGate = Math.floor((Math.random() * 100) + 1);
		var upValue = Math.floor ((Math.random() * 10) + 1);
		if (upValue > 5){
			
				cardIMG = pickSSRAll();
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
				document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
				ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
				ssrGet++;
				ssrRecord = document.getElementById('box' + ssrGet);
		} else {
				cardIMG = pickSSRByAttr('fire');
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
				document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
				ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
				ssrGet++;
				ssrRecord = document.getElementById('box' + ssrGet);
		}
	} 
	
	//Water Up
	else if (elementUp == 2) {
		//Generate cards for item 1~9
		for (var x=0; x<9; x++){
			var rareGate = Math.floor((Math.random() * 100) + 1);
			var upValue = Math.floor ((Math.random() * 10) + 1);
				if (upValue > 3){
					if (rareGate <= 82) {
					cardIMG = pickRAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				 else{
					cardIMG = pickSSRAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
					ssrRecord = document.getElementById('box' + ssrGet);
				}
			} else {
				if (rareGate <= 82) {
					cardIMG = pickRByAttr('dark');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByAttr('dark');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				 else if (rareGate >=98){
					cardIMG = pickSSRByAttr('dark');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
					ssrRecord = document.getElementById('box' + ssrGet);
				}
			}
		}
		
		//Generate card for item 10
		var rareGate = Math.floor((Math.random() * 100) + 1);
		var upValue = Math.floor ((Math.random() * 10) + 1);
		if (upValue> 5){
				cardIMG = pickSSRAll();
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
				document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
				ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
				ssrGet++;
				ssrRecord = document.getElementById('box' + ssrGet);
		} else {
				cardIMG = pickSSRByAttr('dark');
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
				document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
				ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
				ssrGet++;
				ssrRecord = document.getElementById('box' + ssrGet);
		}
	} 
	
	//Earth Up
	else if (elementUp == 3) {
		//Generate cards for item 1~9
		for (var x=0; x<9; x++){
			var rareGate = Math.floor((Math.random() * 100) + 1);
			var upValue = Math.floor ((Math.random() * 10) + 1);
				if (upValue > 3){
					if (rareGate <= 82) {
					cardIMG = pickRAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				 else{
					cardIMG = pickSSRAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
					ssrRecord = document.getElementById('box' + ssrGet);
				}
			} else {
				if (rareGate <= 82) {
					cardIMG = pickRByAttr('earth');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByAttr('earth');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				 else if (rareGate >=98){
					cardIMG = pickSSRByAttr('earth');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
					ssrRecord = document.getElementById('box' + ssrGet);
				}
			}
		}
		
		//Generate card for item 10
		var rareGate = Math.floor((Math.random() * 100) + 1);
		var upValue = Math.floor ((Math.random() * 10) + 1);
		if (upValue > 5){
				cardIMG = pickSSRAll();
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
				document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
				ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
				ssrGet++;
				ssrRecord = document.getElementById('box' + ssrGet);
		} else {
				cardIMG = pickSSRByAttr('earth');
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
				document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
				ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
				ssrGet++;
				ssrRecord = document.getElementById('box' + ssrGet);
		}
	} 
	
	//Wind Up
	else if (elementUp == 4) {
		//Generate cards for item 1~9
		for (var x=0; x<9; x++){
			var rareGate = Math.floor((Math.random() * 100) + 1);
			var upValue = Math.floor ((Math.random() * 10) + 1);
				if (upValue > 3){
					if (rareGate <= 82) {
					cardIMG = pickRAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				 else{
					cardIMG = pickSSRAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
					ssrRecord = document.getElementById('box' + ssrGet);
				}
			} else {
				if (rareGate <= 82) {
					cardIMG = pickRByAttr('wind');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByAttr('wind');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				 else if (rareGate >=98){
					cardIMG = pickSSRByAttr('wind');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
					ssrRecord = document.getElementById('box' + ssrGet);
				}
			}
		}
		
		//Generate card for item 10
		var rareGate = Math.floor((Math.random() * 100) + 1);
		var upValue = Math.floor ((Math.random() * 10) + 1);
		if (upValue> 5){
				cardIMG = pickSSRAll();
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
				document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
				ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
				ssrGet++;
				ssrRecord = document.getElementById('box' + ssrGet);
		} else {
				cardIMG = pickSSRByAttr('wind');
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
				document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
				ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
				ssrGet++;
				ssrRecord = document.getElementById('box' + ssrGet);
		}
	} 
	
	//Light Up
	else if (elementUp == 5) {
		//Generate cards for item 1~9
		for (var x=0; x<9; x++){
			var rareGate = Math.floor((Math.random() * 100) + 1);
			var upValue = Math.floor ((Math.random() * 10) + 1);
				if (upValue > 4){
					if (rareGate <= 82) {
					cardIMG = pickRAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				 else{
					cardIMG = pickSSRAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
					ssrRecord = document.getElementById('box' + ssrGet);
				}
			} else {
				if (rareGate <= 82) {
					cardIMG = pickRByAttr('light');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByAttr('light');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				 else if (rareGate >=98){
					cardIMG = pickSSRByAttr('light');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
					ssrRecord = document.getElementById('box' + ssrGet);
				}
			}
		}
		
		//Generate card for item 10
		var rareGate = Math.floor((Math.random() * 100) + 1);
		var upValue = Math.floor ((Math.random() * 10) + 1);
		if (upValue > 5){
				cardIMG = pickSSRAll();
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
				document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
				ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
				ssrGet++;
				ssrRecord = document.getElementById('box' + ssrGet);
		} else {
				cardIMG = pickSSRByAttr('light');
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
				document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
				ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
				ssrGet++;
				ssrRecord = document.getElementById('box' + ssrGet);
		}
	} 
	
	//Dark Up
	else if (elementUp == 6) {
		//Generate cards for item 1~9
		for (var x=0; x<9; x++){
			var rareGate = Math.floor((Math.random() * 100) + 1);
			var upValue = Math.floor ((Math.random() * 10) + 1);
				if (upValue > 4){
					if (rareGate <= 82) {
					cardIMG = pickRAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				 else{
					cardIMG = pickSSRAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
					ssrRecord = document.getElementById('box' + ssrGet);
				}
			} else {
				if (rareGate <= 82) {
					cardIMG = pickRByAttr('dark');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByAttr('light');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				 else if (rareGate >=98){
					cardIMG = pickSSRByAttr('dark');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
					ssrRecord = document.getElementById('box' + ssrGet);
				}
			}
		}
		
		//Generate card for item 10
		var rareGate = Math.floor((Math.random() * 100) + 1);
		var upValue = Math.floor ((Math.random() * 10) + 1);
		if (upValue > 5){
				cardIMG = pickSSRAll();
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
				document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
				ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
				ssrGet++;
				ssrRecord = document.getElementById('box' + ssrGet);
		} else {
				cardIMG = pickSSRByAttr('dark');
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
				document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
				ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
				ssrGet++;
				ssrRecord = document.getElementById('box' + ssrGet);
		}
	} 
	
	//6% & Charaters Up
	else if (elementUp == 7) {
		//Generate cards for item 1~9
		for (var x=0; x<9; x++){
			var rareGate = Math.floor((Math.random() * 100) + 1);
			var upValue = Math.floor ((Math.random() * 10) + 1);
				if (upValue > 4){
					if (rareGate <= 79) {
					cardIMG = pickRAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} else if (rareGate >=80 && rareGate <=94){
					cardIMG = pickSRAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				 else{
					cardIMG = pickSSRlimitedAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
					ssrRecord = document.getElementById('box' + ssrGet);
				}
			} else {
				if (rareGate <= 79) {
					cardIMG = pickRAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} else if (rareGate >=80 && rareGate <=94){
					cardIMG = pickSRAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				 else if (rareGate >=95){
					cardIMG = pickSSRlimitedByAttr('release');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
					ssrRecord = document.getElementById('box' + ssrGet);
				}
			}
		}
		
		//Generate card for item 10
		var rareGate = Math.floor((Math.random() * 100) + 1);
		var upValue = Math.floor ((Math.random() * 10) + 1);
		if (upValue > 4){
				cardIMG = pickSSRlimitedAll();
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
				document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
				ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
				ssrGet++;
				ssrRecord = document.getElementById('box' + ssrGet);
		} else {
				cardIMG = pickSSRlimitedByAttr('release');
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
				document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
				ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
				ssrGet++;
				ssrRecord = document.getElementById('box' + ssrGet);
		}
	} 
	
	
	//6% & New Year Up
	else if (elementUp == 8) {
		//Generate cards for item 1~9
		for (var x=0; x<9; x++){
			var rareGate = Math.floor((Math.random() * 100) + 1);
			var upValue = Math.floor ((Math.random() * 10) + 1);
				if (upValue > 4){
					if (rareGate <= 79) {
					cardIMG = pickRAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} else if (rareGate >=80 && rareGate <=94){
					cardIMG = pickSRAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				 else{
					cardIMG = pickSSRlimitedNYAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
					ssrRecord = document.getElementById('box' + ssrGet);
				}
			} else {
				if (rareGate <= 79) {
					cardIMG = pickRAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} else if (rareGate >=80 && rareGate <=94){
					cardIMG = pickSRAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				 else if (rareGate >=95){
					cardIMG = pickSSRlimitedNYByAttr('release');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
					ssrRecord = document.getElementById('box' + ssrGet);
				}
			}
		}
		
		//Generate card for item 10
		var rareGate = Math.floor((Math.random() * 100) + 1);
		var upValue = Math.floor ((Math.random() * 10) + 1);
		if (upValue > 4){
				cardIMG = pickSSRlimitedNYAll();
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
				document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
				ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
				ssrGet++;
				ssrRecord = document.getElementById('box' + ssrGet);
		} else {
				cardIMG = pickSSRlimitedNYByAttr('release');
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
				document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
				ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
				ssrGet++;
				ssrRecord = document.getElementById('box' + ssrGet);
		}
	} 
	
	//New Characters Up
	else if (elementUp == 9) {
		//Generate cards for item 1~9
		for (var x=0; x<9; x++){
			var rareGate = Math.floor((Math.random() * 100) + 1);
			var upValue = Math.floor ((Math.random() * 20) + 1);
				if (upValue > 4){
					if (rareGate <= 82) {
						if (upValue > 1){
							cardIMG = pickRAll();
							var image = document.getElementById(itemArr[x]);
							image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
							document.rNum.Display.value = eval(rNum.Display.value) + 1;
							if (cardIMG[4] != ""){
								image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
								document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
							}
						}
						else {
							var image = document.getElementById(itemArr[x]);
							document.rNum.Display.value = eval(rNum.Display.value) + 1;
							image.innerHTML = '<img src="R/b8.jpg"/><img class="overlayImage2" src="characters/R/f11.png"/>';
							document.getElementById("Rfire11").innerHTML = '<img src="characters/R/f11.jpg"/>';
						}
				} else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				 else{
					cardIMG = pickSSRAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
					ssrRecord = document.getElementById('box' + ssrGet);
				}
			} else {
				if (rareGate <= 82) {
					if (upValue > 1){
							cardIMG = pickRAll();
							var image = document.getElementById(itemArr[x]);
							image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
							document.rNum.Display.value = eval(rNum.Display.value) + 1;
							if (cardIMG[4] != ""){
								image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
								document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
							}
						}
						else {
							var image = document.getElementById(itemArr[x]);
							document.rNum.Display.value = eval(rNum.Display.value) + 1;
							image.innerHTML = '<img src="R/b8.jpg"/><img class="overlayImage2" src="characters/R/f11.png"/>';
							document.getElementById("Rfire11").innerHTML = '<img src="characters/R/f11.jpg"/>';
						}
				} else if (rareGate >=83 && rareGate <=97){
					var image = document.getElementById(itemArr[x]);
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					image.innerHTML = '<img src="SR/b8.jpg"/><img class="overlayImage2" src="characters/SR/f10.png"/>';
					document.getElementById("SRfire10").innerHTML = '<img src="characters/SR/f10.jpg"/>';
				}
				 else if (rareGate >=98){
					var image = document.getElementById(itemArr[x]);
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					image.innerHTML = '<img src="SSR/b7.jpg"/><img class="overlayImage2" src="characters/SSR/f9.png"/>';
					document.getElementById("SSRfire9").innerHTML = '<img src="characters/SSR/f9.jpg"/>';
					ssrGet++;
					ssrRecord.innerHTML = '<img src="SSR/b7.jpg"/>';
					ssrRecord = document.getElementById('box' + ssrGet);
				}
			}
		}
		
		//Generate card for item 10
		var upValue = Math.floor ((Math.random() * 20) + 1);
		if (upValue > 4){
			cardIMG = pickSSRAll();
			var image = document.getElementById(itemArr[x]);
			image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
			document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
			if (cardIMG[4] != ""){
				image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
				document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
			}
			ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
			ssrGet++;
			ssrRecord = document.getElementById('box' + ssrGet);
		} else {
			var image = document.getElementById(itemArr[x]);
			document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
			image.innerHTML = '<img src="SSR/b7.jpg"/><img class="overlayImage2" src="characters/SSR/f9.png"/>';
			document.getElementById("SSRfire9").innerHTML = '<img src="characters/SSR/f9.jpg"/>';
			ssrRecord.innerHTML = '<img src="SSR/b7.jpg"/>';
			ssrGet++;
			ssrRecord = document.getElementById('box' + ssrGet);
		}
	} 
	
	document.cash.Display.value = eval(cash.Display.value) +3000;
	document.rNum.Display2.value = eval(rNum.Display.value) / (eval(rNum.Display.value) + eval(srNum.Display.value) + eval(ssrNum.Display.value)) * 100;
	document.srNum.Display2.value = eval(srNum.Display.value) / (eval(rNum.Display.value) + eval(srNum.Display.value) + eval(ssrNum.Display.value)) * 100;
	document.ssrNum.Display2.value = eval(ssrNum.Display.value) / (eval(rNum.Display.value) + eval(srNum.Display.value) + eval(ssrNum.Display.value)) * 100;
	
	
	
	if (ssrGet == 100) {
		ssrGet = 1;
	}
}

