// JavaScript Document
/*
《阴阳师六星肝帝计算器》声明：
　　此计算器网页由 彼岸星霜 制作，发布于个人网站 http://www.xin6.net/6x.html；
　　该计算器除计算式神升级六星的进度和成本外，不含任何其他非相关功能和内容；
　　本页面及相关文件可转载、传阅、下载自用及代码研究，无需知会原作者（彼岸星霜）；
　　但请勿在对代码进行二次编辑（包括修改作者名、修改源代码、注入广告或恶意程序等）后重新发布至网络，由此造成的法律责任由该行为人负责。
　　祝各位肝的开心，玩的愉快，一发入魂SSR~~
　　彼岸星霜敬上。
--------------------------------------------------------------------------------
修改原因在于我当时想算我肝狗粮需要多少经验，奈何找到的这个工具后发现只停留在困22版本，估计作者是脱坑了，
因此修改了作者的代码用来计算困28获取的经验值，上面也标明了原作者，没有植入广告以及收费，
如果侵权了希望作者联系我（泥潭ID：60633818），我尽快rm -rf /*
*/

//输入框控制
$("#smsContent").focus(function(){  
    this.select();  
});

//阻止浏览器默认右键点击事件
document.oncontextmenu = function() {
    return false;
}

//小数点去误差
	Math.formatFloat = function(f, digit) { 
    var m = Math.pow(10, digit); 
    return parseInt(f * m, 10) / m; 
} 

//加减赋值
    $(function() {
		$(".starintext input").mousedown(function(e) {
		        $(this).val("");
		})
    });

    $(function() {
		$(".starintext").mousedown(function(e) {
		    console.log(e.which);

		    if (1 == e.which) {
		    //左键为1
		    var starinnum = parseFloat($(this).find("input").val());
		    	if (starinnum="") {
		    		$(this).find("input").val(0);
		    	}else{
			    	var starinnum = parseFloat($(this).find("input").val());
			    	if (starinnum>=0) {
			        	starinnum++;
			        	$(this).find("input").val(starinnum);
			    	}
		    	};
		    	if (starinnum>0) {
		    		$(this).addClass('starintexthot');
		    	};

		    } else if (3 == e.which) {
		    //右键为3
		    var starinnum = parseFloat($(this).find("input").val());
		    	if (starinnum="") {
		    alert(starinnum);
		    		$(this).find("input").val(0);
		    	}else{
			    	var starinnum = parseFloat($(this).find("input").val());
			    	if (starinnum>=1) {
			        	starinnum--;
			        	$(this).find("input").val(starinnum);
			    	}
		    	};
		    	if (starinnum==0) {
		    		$(this).removeClass('starintexthot');
		    	};
		    account();
		    }
		})
    });

//清空选项
$(function(){
	$("#clearlv").click(function(){
		$(".starintext").removeClass('starintexthot');
		$(".ssnum").val(0);
	});
})


//下拉选项控件
$(function(){
	$(".select").each(function(){
		var s=$(this);
		var z=parseInt(s.css("z-index"));
		var dt=$(this).children("dt");
		var dd=$(this).children("dd");
		var _show=function(){dd.slideDown(200);s.css("z-index",z+1);dt.addClass("cur");};   //展开效果
		var _hide=function(){dd.slideUp(200);s.css("z-index",z);setTimeout(function(){dt.removeClass("cur")} , 200);};    //关闭效果
		dt.click(function(){dd.is(":hidden")?_show():_hide();});
		dd.find("a").click(function(){dt.html($(this).html());_hide();});     //选择效果（如需要传值，可自定义参数，在此处返回对应的“value”值 ）
		$("body").click(function(i){ !$(i.target).parents(".select").first().is(s) ? _hide():"";});
	})
})

//算法控件
function account(){
	//个数统计及赋值
	var num_2x_01 = parseFloat($("#num_2x_01").val());	var exp_2x_01 = 0;	var exp201 = num_2x_01 * exp_2x_01;
	var num_2x_02 = parseFloat($("#num_2x_02").val());	var exp_2x_02 = 180;	var exp202 = num_2x_02 * exp_2x_02;
	var num_2x_03 = parseFloat($("#num_2x_03").val());	var exp_2x_03 = 420;	var exp203 = num_2x_03 * exp_2x_03;
	var num_2x_04 = parseFloat($("#num_2x_04").val());	var exp_2x_04 = 840;	var exp204 = num_2x_04 * exp_2x_04;
	var num_2x_05 = parseFloat($("#num_2x_05").val());	var exp_2x_05 = 1470;	var exp205 = num_2x_05 * exp_2x_05;
	var num_2x_06 = parseFloat($("#num_2x_06").val());	var exp_2x_06 = 2510;	var exp206 = num_2x_06 * exp_2x_06;
	var num_2x_07 = parseFloat($("#num_2x_07").val());	var exp_2x_07 = 3950;	var exp207 = num_2x_07 * exp_2x_07;
	var num_2x_08 = parseFloat($("#num_2x_08").val());	var exp_2x_08 = 6110;	var exp208 = num_2x_08 * exp_2x_08;
	var num_2x_09 = parseFloat($("#num_2x_09").val());	var exp_2x_09 = 8900;	var exp209 = num_2x_09 * exp_2x_09;
	var num_2x_10 = parseFloat($("#num_2x_10").val());	var exp_2x_10 = 12800;	var exp210 = num_2x_10 * exp_2x_10;
	var num_2x_11 = parseFloat($("#num_2x_11").val());	var exp_2x_11 = 17600;	var exp211 = num_2x_11 * exp_2x_11;
	var num_2x_12 = parseFloat($("#num_2x_12").val());	var exp_2x_12 = 23980;	var exp212 = num_2x_12 * exp_2x_12;
	var num_2x_13 = parseFloat($("#num_2x_13").val());	var exp_2x_13 = 31570;	var exp213 = num_2x_13 * exp_2x_13;
	var num_2x_14 = parseFloat($("#num_2x_14").val());	var exp_2x_14 = 41290;	var exp214 = num_2x_14 * exp_2x_14;
	var num_2x_15 = parseFloat($("#num_2x_15").val());	var exp_2x_15 = 52570;	var exp215 = num_2x_15 * exp_2x_15;
	var num_2x_16 = parseFloat($("#num_2x_16").val());	var exp_2x_16 = 66610;	var exp216 = num_2x_16 * exp_2x_16;
	var num_2x_17 = parseFloat($("#num_2x_17").val());	var exp_2x_17 = 82600;	var exp217 = num_2x_17 * exp_2x_17;
	var num_2x_18 = parseFloat($("#num_2x_18").val());	var exp_2x_18 = 102060;	var exp218 = num_2x_18 * exp_2x_18;
	var num_2x_19 = parseFloat($("#num_2x_19").val());	var exp_2x_19 = 123900;	var exp219 = num_2x_19 * exp_2x_19;
	var num_2x_20 = parseFloat($("#num_2x_20").val());	var exp_2x_20 = 150000;	var exp220 = num_2x_20 * exp_2x_20;
	var num_2x_0209 = parseFloat($("#num_2x_0209").val());	var exp_2x_0209 = 5000;	var exp20209 = num_2x_0209 * exp_2x_0209;
	var num_2x_1015 = parseFloat($("#num_2x_1015").val());	var exp_2x_1015 = 30000;	var exp21015 = num_2x_1015 * exp_2x_1015;
	var num_2x_1617 = parseFloat($("#num_2x_1617").val());	var exp_2x_1617 = 80000;	var exp21617 = num_2x_1617 * exp_2x_1617;
	var num_2x_1819 = parseFloat($("#num_2x_1819").val());	var exp_2x_1819 = 120000;	var exp21819 = num_2x_1819 * exp_2x_1819;
	var num_3x_20 = parseFloat($("#num_3x_20").val());	var exp_3x_20 = 150000;	var exp320 = num_3x_20 * exp_3x_20;
	var num_3x_21 = parseFloat($("#num_3x_21").val());	var exp_3x_21 = 178950;	var exp321 = num_3x_21 * exp_3x_21;
	var num_3x_22 = parseFloat($("#num_3x_22").val());	var exp_3x_22 = 213030;	var exp322 = num_3x_22 * exp_3x_22;
	var num_3x_23 = parseFloat($("#num_3x_23").val());	var exp_3x_23 = 250470;	var exp323 = num_3x_23 * exp_3x_23;
	var num_3x_24 = parseFloat($("#num_3x_24").val());	var exp_3x_24 = 293990;	var exp324 = num_3x_24 * exp_3x_24;
	var num_3x_25 = parseFloat($("#num_3x_25").val());	var exp_3x_25 = 341420;	var exp325 = num_3x_25 * exp_3x_25;
	var num_4x_25 = parseFloat($("#num_4x_25").val());	var exp_4x_25 = 791420;	var exp425 = num_4x_25 * exp_4x_25;
	var num_4x_26 = parseFloat($("#num_4x_26").val());	var exp_4x_26 = 845960;	var exp426 = num_4x_26 * exp_4x_26;
	var num_4x_27 = parseFloat($("#num_4x_27").val());	var exp_4x_27 = 905000;	var exp427 = num_4x_27 * exp_4x_27;
	var num_4x_28 = parseFloat($("#num_4x_28").val());	var exp_4x_28 = 972260;	var exp428 = num_4x_28 * exp_4x_28;
	var num_4x_29 = parseFloat($("#num_4x_29").val());	var exp_4x_29 = 1044650;	var exp429 = num_4x_29 * exp_4x_29;
	var num_4x_30 = parseFloat($("#num_4x_30").val());	var exp_4x_30 = 1126450;	var exp430 = num_4x_30 * exp_4x_30;
	var num_5x_all = parseFloat($("#num_5x_all").val());	var exp_5x_all = 4292130;	var exp5all = num_5x_all * exp_5x_all;

	var num2x = parseFloat(num_2x_01 + num_2x_0209 + num_2x_1015 + num_2x_1617 + num_2x_1819 + num_2x_20);
	var num3x = parseFloat(num_3x_20 + num_3x_21 + num_3x_22 + num_3x_23 + num_3x_24 + num_3x_25);
	var num4x = parseFloat(num_4x_25 + num_4x_26 + num_4x_27 + num_4x_28 + num_4x_29 + num_4x_30);
	var num5x = parseFloat(num_5x_all);

	var exp2x = parseFloat(exp201 + exp20209 + exp21015 + exp21617 + exp21819 + exp220);
	var exp3x = parseFloat(exp320 + exp321 + exp322 + exp323 + exp324 + exp325);
	var exp4x = parseFloat(exp425 + exp426 + exp427 + exp428 + exp429 + exp430);
	var exp5x = parseFloat(exp5all);

	var datacard = parseFloat(300-(num5x*60)-(num4x*12)-(num3x*3)-num2x);
	if (datacard<0) {
		datacard = 0;
	}
	var expfull = parseFloat(exp5x + exp4x + exp3x + exp2x);
	if (expfull>21460650) {expfull = 21460650;}
	
	var expall=21460650;

	/*经验溢出判定*/
	$(".part .overflowType").html("");
	$(".part .overflowType").css("opacity","1");
	if (num5x<5) {
		//五星正常
		$(".star5 input").css("color","#9df");
		if (num4x<25-5*num5x) {
			//四星正常
			$(".star4 input").css("color","#9df");
			if (num3x<100-20*num5x-4*num4x) {
				//三星正常
				$(".star3 input").css("color","#9df");
				if (num2x<300-60*num5x-12*num4x-3*num3x) {
					//二星正常(考虑1J卡)
					$(".star2 input").css("color","#9df");
				}else if (num2x==300-60*num5x-12*num4x-3*num3x) {
					//二星刚好够(考虑1J卡)
					$(".star2 input").css("color","#9df");
				}else{
					//二星卡超了（考虑1J卡）
					$(".star2 input").css("color","#f55");
					$(".star2 .overflowType").html("<b>二星卡总量溢出了</b>");
				};
			}else if (num3x==100-20*num5x-4*num4x) {
				//三星刚够，二星全部无效
				$(".star3 input").css("color","#9df");
				$(".star2 .overflowType").html("<span>该层无需纳入进度计算</span>");
			}else{
				//三星溢出警告，二星全部无效
				$(".star3 input").css("color","#f55");
				$(".star2 .overflowType").html("<span>该层无需纳入进度计算</span>");
				$(".star3 .overflowType").html("<b>三星卡总量溢出</b>");
			};
		}else if (num4x==25-5*num5x) {
			//四星满了，二星三星要全部无效
			$(".star4 input").css("color","#9df");
			$(".star3 .overflowType,.star2 .overflowType").html("<span>该层无需纳入进度计算</span>");
		}else{
			//四星溢出警告，二星三星要全部无效
			$(".star4 input").css("color","#f55");
			$(".star3 .overflowType,.star2 .overflowType").html("<span>该层无需纳入进度计算</span>");
			$(".star4 .overflowType").html("<b>四星卡总量溢出</b>");
		};
	}else if (num5x==5) {
		//五星满了，其他的要全部判定无效
		$(".star5 input").css("color","#9df");
		$(".part .overflowType").html("<span>该层无需纳入进度计算</span>");
		$(".star5 .overflowType").html("<b></b>");
	}else{
		//五星溢出警告，其他全部溢出
		$(".star5 input").css("color","#f55");
		$(".part .overflowType").html("<span>该层无需纳入进度计算</span>");
		$(".star5 .overflowType").html("<b>五星卡总量溢出</b>");
	};


	/*单星级内溢出判定*/
	//alert("4星有经验的已足够");
	if (num_4x_30>5-num5x) {
		$("#lf4x30,#lf29,#lf28,#lf27,#lf26").show(180);
	}else if (num_4x_29>5-num5x-num_4x_30) {
		$("#lf4x30").hide(180);
		$("#lf29,#lf28,#lf27,#lf26").show(180);
	}else if (num_4x_28>5-num5x-num_4x_30-num_4x_29) {
		$("#lf4x30,#lf29").hide(180);
		$("#lf28,#lf27,#lf26").show(180);
	}else if (num_4x_27>5-num5x-num_4x_30-num_4x_29-num_4x_28) {
		$("#lf4x30,#lf29,#lf28").hide(180);
		$("#lf27,#lf26").show(180);
	}else if (num_4x_26>5-num5x-num_4x_30-num_4x_29-num_4x_28-num_4x_27) {
		$("#lf4x30,#lf29,#lf28,#lf27").hide(180);
		$("#lf26").show(180);
	}else{
		$("#lf4x30,#lf29,#lf28,#lf27,#lf26").hide(180);
	};
	//alert("3星有经验的已足够");
	if (num_3x_25>25-5*num5x-num4x) {
		$("#lf3x25,#lf24,#lf23,#lf22,#lf21").show(180);
	}else if (num_3x_24>25-5*num5x-num4x-num_3x_25) {
		$("#lf3x25").hide(180);
		$("#lf24,#lf23,#lf22,#lf21").show(180);
	}else if (num_3x_23>25-5*num5x-num4x-num_3x_25-num_3x_24) {
		$("#lf3x25,#lf24").hide(180);
		$("#lf23,#lf22,#lf21").show(180);
	}else if (num_3x_22>25-5*num5x-num4x-num_3x_25-num_3x_24-num_3x_23) {
		$("#lf3x25,#lf24,#lf23").hide(180);
		$("#lf22,#lf21").show(180);
	}else if (num_3x_21>25-5*num5x-num4x-num_3x_25-num_3x_24-num_3x_23-num_3x_22) {
		$("#lf3x25,#lf24,#lf23,#lf22").hide(180);
		$("#lf21").show(180);
	}else{
		$("#lf3x25,#lf24,#lf23,#lf22,#lf21").hide(180);
	};
	//alert("3星有经验的已足够");
	if (num_2x_20>100-20*num5x-4*num4x-num3x) {
		$("#lf2x20,#lf1819,#lf1617,#lf1015,#lf0209").show(180);
	}else if (num_2x_1819>100-20*num5x-4*num4x-num3x-num_2x_20) {
		$("#lf2x20").hide(180);
		$("#lf1819,#lf1617,#lf1015,#lf0209").show(180);
	}else if (num_2x_1617>100-20*num5x-4*num4x-num3x-num_2x_20-num_2x_1819) {
		$("#lf2x20,#lf1819").hide(180);
		$("#lf1617,#lf1015,#lf0209").show(180);
	}else if (num_2x_1015>100-20*num5x-4*num4x-num3x-num_2x_20-num_2x_1819-num_2x_1617) {
		$("#lf2x20,#lf1819,#lf1617").hide(180);
		$("#lf1015,#lf0209").show(180);
	}else if (num_2x_0209>100-20*num5x-4*num4x-num3x-num_2x_20-num_2x_1819-num_2x_1617-num_2x_1015) {
		$("#lf2x20,#lf1819,#lf1617,#lf1015").hide(180);
		$("#lf0209").show(180);
	}else{
		$("#lf2x20,#lf1819,#lf1617,#lf1015,#lf0209").hide(180);
	}
	

	/*白蛋节省经验计算*/
	var egginnum = parseFloat($("#egginnum").val());
	if (egginnum =="0"){
		$("#egg5xnum,#egg4xnum,#egg3xnum").text("0");
		$("#eggexp").text(0);
	}else if (egginnum > 0 && egginnum <= 5) {
		$("#egg5xnum").text(egginnum);
		$("#egg4xnum,#egg3xnum").text("0");
		$("#eggexp").text(egginnum * 338225);
		$("#eggexpxz").text("");
	}else if (egginnum > 5 && egginnum <= 25) {
		$("#egg5xnum").text("5");
		$("#egg4xnum").text(egginnum - 5);
		$("#egg3xnum").text("0");
		$("#eggexp").text(1691125 + (egginnum-5) * 170710);
		$("#eggexpxz").text("");
	}else if (egginnum > 25 && egginnum <= 100) {
		$("#egg5xnum").text("5");
		$("#egg4xnum").text("20");
		$("#egg3xnum").text(egginnum - 25);
		$("#eggexp").text(5105325 + (egginnum-25) * 75000);
		$("#eggexpxz").text("");
	}else if (egginnum > 100 && egginnum <= 999) {
		$("#egg5xnum").text("5");
		$("#egg4xnum").text("20");
		$("#egg3xnum").text("75");
		$("#eggexp").text(10730325);
		$("#eggexpxz").text("（白蛋溢出）");
	}else{
		$("#egg5xnum,#egg4xnum,#egg3xnum").text("错误");
	}
	var eggexp = parseFloat($("#eggexp").text());
	//alert(eggexp);


	//副本刷本选项
	var nandu = $("#s_a0").text();
	var expone = 0;
	if (nandu == "困难10") {expone = 960;}
	else if (nandu == "困难11") {expone = 1000;}
	else if (nandu == "困难12") {expone = 1040;}
	else if (nandu == "困难13") {expone = 1080;}
	else if (nandu == "困难14") {expone = 1120;}
	else if (nandu == "困难15") {expone = 1160;}
	else if (nandu == "困难16") {expone = 1200;}
	else if (nandu == "困难17") {expone = 1240;}
	else if (nandu == "困难18") {expone = 1280;}
	else if (nandu == "困难19") {expone = 1320;}
	else if (nandu == "困难20") {expone = 1360;}
	else if (nandu == "困难21") {expone = 1400;}
	else if (nandu == "困难22") {expone = 1440;}
	else if (nandu == "困难23") {expone = 1480;}
	else if (nandu == "困难24") {expone = 1520;}
	else if (nandu == "困难25") {expone = 1560;}
	else if (nandu == "困难26") {expone = 1600;}
	else if (nandu == "困难27") {expone = 1640;}
	else if (nandu == "困难28") {expone = 1680;}
	else if (nandu == "困难29") {expone = 1720;}
	else if (nandu == "困难30") {expone = 1800;}
	else{expone = 0;};

	//副本打法选项
	var dafa = $("#s_a1").text();
	var exprate = 0;
	if (dafa == "阴阳师一带五") {exprate = 4.2;}
	else if (dafa == "狗粮队长一拖四") {exprate = 3.2;}
	else if (dafa == "双队长二拖三") {exprate = 2.2;}
	else if (dafa == "三队长三拖二") {exprate = 1.2;}
	else{exprate = 0;};


	//经验buff加成选项相关
	var checkbox1 = document.getElementById('buff_10');
	var checkbox2 = document.getElementById('buff_15');
	var checkbox3 = document.getElementById('buff_50');
	var checkbox4 = document.getElementById('buff_100');
	var checkbox5 = document.getElementById('buff_10_2');
	//var checkbox4 = document.getElementById('buff_100');
	if(checkbox1.checked){var bf1=1.1;document.getElementById("buff1").className = 'ff fz';}
		else{var bf1=1;document.getElementById("buff1").className = 'ff';}
	if(checkbox2.checked){var bf2=1.15;document.getElementById("buff2").className = 'ff fz';}
		else{var bf2=1;document.getElementById("buff2").className = 'ff';}
	if(checkbox3.checked){var bf3=1.5;document.getElementById("buff3").className = 'ff fz';}
		else{var bf3=1;document.getElementById("buff3").className = 'ff';}
	if(checkbox4.checked){var bf4=2.0;document.getElementById("buff4").className = 'ff fz';}
		else{var bf4=1;document.getElementById("buff4").className = 'ff';}
	if(checkbox5.checked){var bf5=1.1;document.getElementById("buff5").className = 'ff fz';}
		else{var bf5=1;document.getElementById("buff5").className = 'ff';}
	var fzbuff=bf1*bf2*bf3*bf4*bf5;


	//买体力
	var tili = $("#s_a3").text();
	var tilipayone = 0;
	if (tili == "每天买一次") {tilipayone = 60;}
	else if (tili == "每天买两次") {tilipayone = 70;}
	else if (tili == "每天买三次") {tilipayone = 80;}
	else if (tili == "每天买四次") {tilipayone = 90;}
	else if (tili == "每天买五次") {tilipayone = 100;}
	else if (tili == "不购买") {tilipayone = 0;}
	else{tilipayone = 0;};


	//组队+羁绊判定
	if (dafa == "狗粮队长一拖四") {
		//alert(11);
		$(".capType li").css("display","block");
	}else if (dafa == "阴阳师一带五") {
		//alert(15);
		$(".capType li").css("display","block");
		$(".capType .cap").css("display","none");
	};

	var zudui = $("#s_a4").text();
	var checkjipan1 = document.getElementById('jiban_1');
	if(checkjipan1.checked){var zdbuff = 1.4;document.getElementById("jiban1").className = 'ff fz';}
		else{var zdbuff = 1.3;document.getElementById("jiban1").className = 'ff';};
	if (zudui == "单刷不组队") {zdbuff = 1;}
	else if (zudui == "队长|狗粮队长") {exprate = 2.2*zdbuff;}
	else if (zudui == "队长|全狗粮") {exprate = 3.2*zdbuff;}
	else if (zudui == "队员|狗粮队长") {exprate = 3.2*zdbuff;}
	else if (zudui == "队员|全狗粮") {exprate = 4.2*zdbuff;}
	else{};
	




	//全要素加成后的每局总经验
	var exponefull = Math.formatFloat(fzbuff*100*exprate*expone/100,5).toFixed(0);
	//alert("buff*倍率*单局经验=" + fzbuff +" " + exprate+" " +expone);

	//金钱需求（仅计算升星花费）
	var payfull = parseFloat(300 - (num5x * 59) - (num4x * 11) - (num3x * 2));
		if (payfull<0) {
			var payfull =0;
		};

	//算上白蛋经验总计
	var expfullegg = Math.formatFloat(expfull + eggexp*(1-(expfull/expall)), 5).toFixed(0);

	//算上组队因素之后的经验buff倍率
	expbuffrate=Math.formatFloat(fzbuff*zdbuff*100, 5).toFixed(1); 

	//经验百分比的后两位
	var expBFB=Math.formatFloat(100*expfullegg/expall, 5).toFixed(1); 
	var expBFBa=Math.floor(expBFB); 	//取出小数前的整数
	var expBFBb=expBFB.substr(expBFB.length-2,expBFB.length-1);	//取出最后2个字符  
	if (expBFBb==".0") {expBFBb="";}	
	//alert(expBFB + "/" + expBFBa+ "/" + expBFBb);

	$("#expBFB").html(expBFBa+ "<span>" +expBFBb+ "</span>");	//百分比数字（前后分开）
	$("#expBFBJD").css('width',expBFB+'%'); 	//经验百分比进度条
	$("#expfull").text(expfullegg);			//总的已获取经验

	$("#dataexpbuffrate").text(expbuffrate);			//经验加成倍率
	$("#dataexp").text(exponefull);			//每局经验
	$("#datafight").text(Math.formatFloat((expall-expfullegg)/exponefull, 5).toFixed(0));		//战斗次数
	$("#datacard").text(datacard);		//狗粮消耗
	$("#dataspirit").text(Math.formatFloat(3*(expall-expfullegg)/exponefull, 5).toFixed(0));		//体力消耗
	$("#datajade").text(Math.formatFloat(tilipayone*0.03*(expall-expfullegg)/exponefull, 5).toFixed(0));		//买体力花费勾玉
	$("#datagold").text(payfull);		//升星金币

}

/*渐隐渐显*/
    $(function() {
		$(".demoname .about").hover(function(e) {
				$(".demoname .about .abouthover").show(0);
				$(".demoname .about .abouthover").css("opacity", "1");
				$(".demoname .about .abouthover").css("margin-top", "6px");
		},
		function(e) {
				$(".demoname .about .abouthover").css("margin-top", "0px");
				$(".demoname .about .abouthover").css("opacity", "0");
				$(".demoname .about .abouthover").delay(140).hide(0);
		});
    });
    $(function() {
		$(".dtitle").hover(function(e) {
			  $(this).children(".dtext").show(0);
			  $(this).children(".dtext").css("opacity", "1");
		},
		function(e) {
			  $(this).children(".dtext").css("opacity", "0");
			  $(this).children(".dtext").delay(200).hide(0);
		});
    });


/*回车事件*/
document.onkeydown = function (e) {
        var ev = document.all ? window.event : e;
        if (ev.keyCode == 13) {
            account();
        	$("input").blur();
        }
}

