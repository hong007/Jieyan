/*
	 * 作者：sokie
	 *   qq：2048226123
	 * 描述：第一次上传资源，有点粗糙，以后有时间会优化的
	 *
	 */
	window.addEventListener('load',function(){
		var initX;
		var moveX;
		var X = 0;
		var objX = 0;
		window.addEventListener('touchstart',function(event){
			// event.preventDefault();阻止默认事件会导致a便签点击无效
			var obj = event.target.parentNode;
			if(obj.className == "item"){
				initX = event.targetTouches[0].pageX;
				objX =(obj.style.WebkitTransform.replace(/translateX\(/g,"").replace(/px\)/g,""))*1;
			}
			if( objX == 0){
				window.addEventListener('touchmove',function(event) {
					// event.preventDefault();
					var obj = event.target.parentNode;
					if (obj.className == "item") {
						moveX = event.targetTouches[0].pageX;
						X = moveX - initX;
						if (X > 0) {
							obj.style.WebkitTransform = "translateX(" + 0 + "px)";
						}
						else if (X < 0) {
							var l = Math.abs(X);
							obj.style.WebkitTransform = "translateX(" + -l + "px)";
							if(l>80){
								l=80;
								obj.style.WebkitTransform = "translateX(" + -l + "px)";
							}
						}
					}
				});
			}
			else if(objX<0){
				window.addEventListener('touchmove',function(event) {
					// event.preventDefault();
					var obj = event.target.parentNode;
					if (obj.className == "item") {
						moveX = event.targetTouches[0].pageX;
						X = moveX - initX;
						if (X > 0) {
							var r = -80 + Math.abs(X);
							obj.style.WebkitTransform = "translateX(" + r + "px)";
							if(r>0){
								r=0;
								obj.style.WebkitTransform = "translateX(" + r + "px)";
							}
						}
						else {     //向左滑动
							obj.style.WebkitTransform = "translateX(" + -80 + "px)";
						}
					}
				});
			}

		})
		window.addEventListener('touchend',function(event){
			// event.preventDefault();
			var obj = event.target.parentNode;
			if(obj.className == "item"){
				objX =(obj.style.WebkitTransform.replace(/translateX\(/g,"").replace(/px\)/g,""))*1;
				if(objX>-40){
					obj.style.WebkitTransform = "translateX(" + 0 + "px)";
				}else{
					obj.style.WebkitTransform = "translateX(" + -80 + "px)";
				}
			}
		 })

	})