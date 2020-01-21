//document.getElementById("intorduction111111").innerHTML = "hahhaah";
(function( )
{
    var i;
//	alert(document.getElementById("topintroduce").innerHTML);
    document.getElementById("our_feature").innerHTML="“宿蜂”校园有偿互助信息平台,是一款针.对在校路带物,时间共享”的理念,促使当化大学生更好的利用自己的碎片化扩间,以达到互帮互助共同提高的目标。以效率为本、以安全为先。";
	document.getElementById("topintroduce").innerHTML="宿蜂”校园互助小程序是一款只针对在校大学生提供有偿互助的小程序。本着“顺路带物，时间共享”的理念，促使当代大学生更好的利用自己的碎片化时间以达到互帮互助共同提高的目标。";
//	alert(ppppp.getElementsByTagName("div").innerHTML);
//	ppppp.getElementsByTagName("p").innerHTML="hahhahah";
	var functions=["代取快递","超市代买","帮我取/送"];
	var members_name=["陈家鹏","韩佩恒","徐荣荣","张晓铭"];
	var members_school=["南京信息工程大学","南京邮电大学","南京邮电大学","南京师范大学"];
	var develop_history=["校园互助平台想法诞生","创始团队成立。根据市场调研结果，宿蜂进入研发阶段","校园有偿互助平台宿蜂小程序研发基本完成","南京市有你互联网有限公司正式注册","宿蜂小程序上线内测","宿蜂小程序上线外测"];
	var his=document.getElementById("develop_history");//找到我们的历史节点
	var his1=his.getElementsByTagName("p");//查找p标签
	for(i=0;i<6;i++)//开始替换发展历史
		{
			his1[i].innerHTML=develop_history[i];
		}
	var temp =document.getElementById("our_functions");
	var temp2=temp.getElementsByTagName("div");
	for(i=0;i<3;i++)//替换我们的特色
		{
			temp2[i].innerHTML=functions[i];
		}
	function member(name,school,image)//成员对象
	{
		this.name=name;
		this.school=school;
		this.image=image;
	}
	var team=[new member("陈家鹏","南京信息工程大学","images/cjp.jpg"),new member("韩佩恒","南京邮电大学","images/hph.jpg"),new member("徐荣荣","南京邮电大学","images/xrr.jpg"),new member("张晓铭","南京师范大学","images/zxm.jpg")];
	for(var k=0;k<team.length;k++)
		{
			var para=document.createElement("li");//插入一个li
			var element=document.getElementById("team_members");
			element.appendChild(para);
//			alert(element.getElementsByTagName("li")[0].innerHTML);
			//往li里面插入<div>
			var para1=document.createElement("div");
			para.appendChild(para1);
			para1.className="single-doctor";
			var para2=document.createElement("a");
			para1.appendChild(para2);
			para2.className="tdoctor";
			para2.setAttribute("data-path-hover","m 180,34.57627 -180,0 L 0,0 180,0 z");
			
			var para3=document.createElement("figure");
			para2.appendChild(para3);
			
			var para4=document.createElement("img");
			var para5=document.createElement("svg");
			para3.appendChild(para4);
			para3.appendChild(para5);
			para4.src=team[k].image;
			para5.setAttribute("viewBox","0 0 180 320");
			para5.setAttribute("preserveAspectRatio","none");
			var para6=document.createElement("path")
			para6.setAttribute("d","M 180,160 0,218 0,0 180,0 z");
		//	para2.className="";
			para5.appendChild(para6);
			
			var para7=document.createElement("figcaption");
			para3.appendChild(para7);
			
			var para8=document.createElement("h2");
			para8.innerHTML=team[k].name;
			var para9=document.createElement("p");
			para9.innerHTML=team[k].school;
			para7.appendChild(para8);
			para7.appendChild(para9);
		}
})();


