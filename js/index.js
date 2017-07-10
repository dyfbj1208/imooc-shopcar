
	var shop_car = document.querySelector("section.shopcar");
	var select_ones= shop_car.querySelectorAll("input.shop-select");
	var select_all = shop_car.querySelector("input.select-all");
	var cuts = shop_car.querySelectorAll("span.cut");
	var adds = shop_car.querySelectorAll("span.add");
	var shop_values= shop_car.querySelectorAll("input.shop_num");
	var sum = shop_car.querySelector("span#sum");
	var each_alls=shop_car.querySelectorAll("span.each-all")
	console.log(shop_values);
	
	// 最先设置全选并且计算总数额
	for (var i = 0; i < select_ones.length; i++) {
		select_ones[i].onchange=function(){
		addAll();
	    }
		select_ones[i].checked="checked";
		select_all.checked="checked";
	}
	addAll();
	
	// 全选按钮函数
	select_all.onclick=function(){
		if (this.checked){
			selectAll("checked");
			addAll();
		}else{
			selectAll("");
			addAll();
		}			
	}


	// 点击调用增加或者减少数量
	addOrCut(adds,'+');
	addOrCut(cuts,'-');


	// 增加或者减少数量函数
	function addOrCut(elems,sym){
		for (var i = 0; i < elems.length; i++) {
		elems[i].i=i;
		elems[i].onclick=function(){
			// console.log(shop_values[this.i].value);
			var value=parseInt(shop_values[this.i].value);
				if(sym=="+"){
					shop_values[this.i].value=value+1;
				}
				if(sym=="-"){
					if (value>1) {
					shop_values[this.i].value=value-1;}
				}

				addAll();
				addEachAll();
			}
		}
	 }
	
	// 全选函数
	function selectAll(status){
	for (var i = 0; i < select_ones.length; i++) {
		select_ones[i].checked=status;
	}
	}
	// 计算全部课程数额函数
	function addAll(){
			var num=0,shop_value=0;
			for (var i=0; i< shop_values.length;i++){
			if(select_ones[i].checked){
				shop_value=parseInt(shop_values[i].value);
			}else{
				shop_value=0;
			}
			num+=shop_value*399;
		}
		sum.innerHTML=num;
	}


function addEachAll(){
	for (var i = 0; i < shop_values.length; i++) {
		each_alls[i].innerHTML = parseInt(shop_values[i].value)*399;
	}
	console.log(each_alls);
}