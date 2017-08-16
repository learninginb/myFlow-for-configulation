$(function() {
	var flowdata="{states:{rect1502528329849:{type:'task',ID:'',text:{text:'设备'}, attr:{ x:98, y:254, width:100, height:50}, props:{text:{value:'任务'},assignee:{value:''},form:{value:''},equipmentType:{value:''}}}},paths:{},props:{props:{name:{value:'新建流程1234'},key:{value:''},desc:{value:''}}}}";
	$('#myflow').myflow(
		{
			basePath : "",
			allowStateMutiLine:true,
			restore : eval('('+flowdata+')'),
			tools : {
				save : function(data) {
					//console.log("保存",eval("("+data+")"));
					console.log(data);
					//window.localStorage.setItem("data",data)
				},
				publish:function(data){
					console.log("发布",eval("("+data+")"));
				},
				addPath:function(id,data){
					//console.log("添加路径",id,data);
					//console.log(eval("("+data+")").from);

				},
				addRect:function(id,data){
					//console.log("添加状态",id,eval("("+data+")"));
				},
				clickPath:function(id){
					//console.log("点击线",id)
				},
				clickRect:function(id,data){
					//console.log("点击状态",id,eval("("+data+")"));
					//console.log("点击状态，"+data);
				},
				deletePath:function(id){
					
					console.log("删除线",id);
				},
				deleteRect:function(id,data){
					//console.log("删除状态",id,eval("("+data+")"));
				},
				equipmentTypeChange:function(event,value,data){
					console.log(event);
				}
				,
				revoke:function(id){

				}
			}
		});

	});