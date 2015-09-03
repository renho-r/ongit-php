$(function() {
	//阻止浏览器默认行。 
	$(document).on({
		dragleave : function(e) { //拖离 
			e.preventDefault();
		},
		drop : function(e) { //拖后放 
			e.preventDefault();
		},
		dragenter : function(e) { //拖进 
			e.preventDefault();
		},
		dragover : function(e) { //拖来拖去 
			e.preventDefault();
		}
	});
	//处理
	var box = document.getElementById('drop_area'); //拖拽区域 
	box.addEventListener("drop", function(e) {
		e.preventDefault(); //取消默认浏览器拖拽效果 
		var fileList = e.dataTransfer.files; //获取文件对象 
		//检测是否是拖拽文件到页面的操作 
		if (fileList.length == 0) {
			return false;
		}
		//检测文件是不是图片 
		if (fileList[0].type.indexOf('image') === -1) {
			alert("您拖的不是图片！");
			return false;
		}

		//拖拉图片到浏览器，可以实现预览功能 
		var img = (window.URL||window.webkitURL).createObjectURL(fileList[0]);
		var filename = fileList[0].name; //图片名称 
		var filesize = Math.floor((fileList[0].size) / 1024);
		if (filesize > 500) {
			alert("上传大小不能超过500K.");
			return false;
		}
		var str = "<img src='" + img + "'><p>图片名称：" + filename + "</p><p>大小："
				+ filesize + "KB</p>";
		$("#preview").html(str);

		//上传 
		xhr = new XMLHttpRequest();
		xhr.open("post", "../php/upload.php", true);
		xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

		var fd = new FormData();
		fd.append('mypic', fileList[0]);

		xhr.send(fd);
	}, false);
})