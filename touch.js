// 自定义移动端事件库

;(function(){
	var query = function(selector){
	
	return query.fn.init(selector);
	
	}
	
	query.fn=query.prototype={
		// 初始化方法
		init:function(selector){
			if(typeof selector=='string'){
				this.element=document.querySelector(selector);
				return this;
			}		
		},
//		// 单击事件
//		tap:function(handler){
//		// 给元素绑定事件
//		this.element.addEventListener('touchstart',touchFn);
//		this.element.addEventListener('touchend',touchFn);
//	
//		// 声明按下时间和结束时间，用来判断是否是合理的单击事件
//		var startTime,endTime;
//		
//		
//		function touchFn(e){
//			switch(e.type){
//				case 'touchstart':
//				// 记录按下时间
//				startTime=new Date().getTime();
//				break;
//				case 'touchend':
//				// 记录结束事件
//				endTime=new Date().getTime();
//				if(endTime-startTime<=400){
//					// 回调
//					handler();
//				}
//				
//				break;
//				
//			}
//		}
//		
//		},
		
//		// 双击 (独立版本)
//		doubleTap:function(handler){
//			
//			this.element.addEventListener('touchstart',touchFn);
//			this.element.addEventListener('touchend',touchFn);
//			
//			var timerId,flag=0;
//			
//			
//			function touchFn(e){
//				switch(e.type){
//					case 'touchstart':
//					flag++;
//					break;
//					case 'touchend':
//					timerId=setInterval(function(){
//						if(flag==2){
//							handler();
//						}
//					},200);
//					break;
//				}
//			}
//			
//			
//		},
		
		
		
		// 双击
		doubleTap:function(handler){
			
			this.element.addEventListener('touchstart',touchFn);
			this.element.addEventListener('touchend',touchFn);
			var count=0,timerId;
			
			function touchFn(e){
			switch(e.type){
				case 'touchstart':
				count++;
				// 每次按下前先清零
				clearTimeout(timerId);
				timerId=setTimeout(function(){
					// 两次按下间隔时间如果超过400ms就不算是双击事件
					count=0
				},400);
				break;
				case 'touchend':
				if(count==2){
					handler();
					// 每次执行过后次数清零
					count=0;
					
				}
				clearTimeout(timerId);
				break;
			}
		  }	
		},
		
		// 长按
//		longTap:function(handler){	
//		
//		
//		this.element.addEventListener('touchstart',touchFn);
//		this.element.addEventListener('touchend',touchFn);
//		
//		
//		var timerId;
//		
//		function touchFn(e){
//			switch(e.type){
//				case 'touchstart':
//				// 长按和提起没有关系，在start触发
//				// 定时器ID
//				timerId=setInterval(function(){
//					handler();
//				},500);
//				break;
//				case 'touchend':
//				clearInterval(timerId);
//				break;
//				
//			}
//		}
//			
//			
//		}   
		
		
		
		
		swiperLeft:function(handler){
			
			
			this.element.addEventListener('touchstart',touchFn);
			this.element.addEventListener('touchend',touchFn);
			
			var startX,startY,endX,endY;
			function touchFn(e){
			switch(e.type){
				case 'touchstart':
				startX=e.targetTouches[0].pageX;
				startY=e.targetTouches[0].pageY;
				
				break;
				case 'touchend':
				endX=e.changedTouches[0].pageX;
				endY=e.changedTouches[0].pageY;
				
				if(Math.abs(endX-startX)>=Math.abs(endY-startY)&&(startX-endX)>=40){
					handler();
				}
				
				break;
			
			}
		
		}
		
	}
	
	query.fn.init.prototype=query.fn;
	
	window.$=window.query=query;
})();

