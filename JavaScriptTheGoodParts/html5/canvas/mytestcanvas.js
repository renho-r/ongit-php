(function() {
	var convasObj = document.createElement("canvas");
	var ctx = convasObj.getContext("2d");
	convasObj.width = 512;
	convasObj.height = 480;
	document.body.appendChild(convasObj);

	var bgReady = false;
	var bgImage = new Image();
	bgImage.onload = function () {
		bgReady = true;
	};
	bgImage.src = "background.png";
	if (bgReady) {
		// ctx.drawImage(bgImage, 0, 0);
	}

	addEventListener("keydown", function (e) {
		console.info(e);
		console.info(e.ctrlKey);
	}, false);
	addEventListener("keyup", function (e) {
		console.info(e);
	}, false);
	window.onclick = function(e) {
		alert("window click");
	}
	var btnObj = document.getElementById("btn");
	btnObj.onclick = function(e) {
		e.stopPropagation();//停止冒泡
		e.preventDefault();//阻止默认
		alert("btn click");
	};

	var divObj = document.getElementById("divId");
	divObj.onclick = function(e) {
		e.stopPropagation();
		e.preventDefault();
		alert("div click");
	};
})();