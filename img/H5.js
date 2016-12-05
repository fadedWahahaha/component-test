// 内容管理对象

var H5=function(){
	this.id=('h5_'+Math.random()).replace('.','_');
	this.el=$('<div class="h5" id="'+this.id+'">').hide();
	this.page=[];
	$('body').append(this.el);
	
	// 新增一个页
	this.addPage=function(name,text){
		var page=$('<div class="h5_page section">');
		if(name!=undefined){
			page.addClass('h5_page_'+name);
		}
		if(text!=undefined){
			page.text(text);
		}
		this.el.append(page);
		this.page.push(page);
		return this;
	}
	
	// 新增一个组件
	this.addComponent=function(name,cfg){
		
		var cfg=cfg||{};
		
		// extend
		cfg=$.extend({
			type:'base'
		},cfg);
		
		
		// 定义一个变量，存储组件元素 
		var component;
		var page=this.page.slice(-1)[0];
		
		switch(cfg.type){
			
			case 'base':
				component=new H5ComponentBase(name,cfg);
				break;
			default:
			
		}
		
		page.append(component);
		return this;
		
	}
	
	// H5对象初始化呈现
	this.loader=function(){
		this.el.fullpage({
			
					onLeave:function(index,nextIndex,direction){
						$(this).find('.h5_component').trigger('onLeave');
					},
					afterLoad:function(anchorLink,index){
						$(this).find('.h5_component').trigger('onLoad');
					}
			
		});
		
		this.page[0].find('.h5_component').trigger('onLoad');
		this.el.show();
	}
	
	return this;
	
}
