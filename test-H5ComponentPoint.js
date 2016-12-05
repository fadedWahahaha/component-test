// 散点图表组件对象


var H5ComponentPoint=function(name,cfg){
	
	var component=new H5ComponentBase(name,cfg);
	
	//	以第一个数据的比例为基准100%
	var base=cfg.data[0][1];
	
	//	输出每个Point
	$.each(cfg.data, function(idx,item) {
		var point=$('<div class="point point_'+idx+'">');
		point.css('borderRadius','50%');
		
		var name=$('<div class="name">'+item[0]+'</div>');
		var rate=$('<div class="per">'+(item[1]*100)+'%</div>');
		
		name.append(rate);
		point.append(name);
		component.append(point);
		
		var per=(item[1]/base*100)+'%';
		
		
		
		//	设置背景颜色
		if(item[2]){
			point.css({
				'backgroundColor':item[2]
			})
		}
		
		
		// 	设置相对位置————注意:if()逻辑判断里面不能写if(item[3]&&item[4]),因为item[3]里的值为'0',影响正确判断
		if(item[3]!==undefined && item[4]!==undefined){
			point.css({
				'left':item[3],
				'top' :item[4]
			})
		}
		
		
		
		point.width(per).height(per);
		
	});
	
	
	return component;
}