(function($){
var myflow = $.myflow;

$.extend(true, myflow.editors, {
	inputEditor : function(){
		var _props,_k,_div,_src,_r;
		this.init = function(props, k, div, src, r){
			_props=props; _k=k; _div=div; _src=src; _r=r;
			
			$('<input style="width:100%;"/>').val(props[_k].value).change(function(){
				props[_k].value = $(this).val();
			}).appendTo('#'+_div);
			
			$('#'+_div).data('editor', this);
		}
		this.destroy = function(){
			$('#'+_div+' input').each(function(){
				_props[_k].value = $(this).val();
			});
		}
	},
	selectEditor : function(arg){
		var _props,_k,_div,_src,_r;
		this.init = function(props, k, div, src, r){
			_props=props; _k=k; _div=div; _src=src; _r=r;
			var fun=null;
			// if(arg=="equipmentType"){
			// 	var fun='onchange="changefun();"'
			// }
			eqType=arg['eqType'];
			console.log(arg['eqType']);
			var sle = $('<select id="'+eqType+'" style="width:100%" '+fun+'"/>').val(props[_k].value).change(function(){
				props[_k].value = $(this).val();
				$(_r).trigger('equipmentTypeChange', [$(this).val(), _src]);
			}).appendTo('#'+_div);
			
				//
				// $.ajax({
				//    type: "GET",
				//    url: arg,
				//    success: function(data){
				// 	  var opts = eval(data);
				// 	 if(opts && opts.length){
				// 		for(var idx=0; idx<opts.length; idx++){
				// 			sle.append('<option value="'+opts[idx].value+'">'+opts[idx].name+'</option>');
				// 		}
				// 		sle.val(_props[_k].value);
				// 	 }
				//    }
				// });
				if(eqType=="设备A"){
					var data=[{name:'',value:0},{name:'A1',value:1},{name:'A2',value:2}];
					for(var idx=0; idx<data.length; idx++){
						sle.append('<option id="EquipmentA'+idx+'" value="'+data[idx].value+'">'+data[idx].name+'</option>');
				}
				sle.val(_props[_k].value);
				}else if(eqType=="设备B"){
					var data=[{name:'',value:0},{name:'B1',value:1},{name:'B2',value:2}];
					for(var idx=0; idx<data.length; idx++){
						sle.append('<option id="EquipmentB'+idx+' value="'+data[idx].value+'">'+data[idx].name+'</option>');
					}
					sle.val(_props[_k].value);
				}
				else if(eqType=="equipmentType"){
					var data=[{name:'',value:''},{name:'设备A',value:'设备A'},{name:'设备B',value:'设备B'}];
					for(var idx=0; idx<data.length; idx++){
					 	sle.append('<option id="equipmentType'+idx+' value="'+data[idx].value+'">'+data[idx].name+'</option>');
					}
					sle.val(_props[_k].value);
				}else {
					for(var idx=0; idx<arg.length; idx++){
						sle.append('<option  value="'+arg[idx].value+'">'+arg[idx].name+'</option>');
					}
					sle.val(_props[_k].value);
				}
			
			$('#'+_div).data('editor', this);
		};
		this.destroy = function(){
			$('#'+_div+' input').each(function(){
				_props[_k].value = $(this).val();
			});
		};
	}
});

})(jQuery);