function member(name,school,image)//成员对象
	{
		this.name=name;
		this.school=school;
		this.image=image;
    }
function classandstyle(class1,style1)
    {
        this.class=class1;
        this.style=style1;
    }
function usersfun(image,words)
{
    this.image=image;
    this.words=words;
}
    var now_element=document.getElementById("team_members");
    var now_element2;
    var now_class=document.getElementById("team_members");
    var team=[new member("陈家鹏","南京信息工程大学","images/cjp.jpg"),new member("韩佩恒","南京邮电大学","images/hph.jpg"),new member("徐荣荣","南京邮电大学","images/xrr.jpg"),new member("张晓铭","南京师范大学","images/zxm.jpg")];
    var users=[new usersfun("images/users1.jpg","111宿蜂是一款非常轻便的小程序，一键发单，接单速度快，准时高效，为我的生活提供了很多便利。"),new usersfun("images/users2.jpg","刚接触宿蜂是被朋友安利的，听说是一群学姐学长创业做的，就尝试了一下。发现真的很人性化，减少了很多沟通的成本。现在一有快递，就想到去宿蜂发单。偶尔自己取快递的时候，也会接别人发的订单，顺路送一下。"),new usersfun("images/users3.jpg","相比于我之前用过的校园跑腿小程序来说，宿蜂更加值得信赖，只要是在两个方面，第一：接单的人都有宿蜂平台的审核，确保是学生才会审核通过；第二：完善的发单接单流程，有人接单后，会把接单员的一些信息告知给发单人，体验很好，不用担心包裹丢失。"),new usersfun("images/users4.jpg","我是宿蜂的认证接单员，在宿蜂平台上通过接单，算是也赚到了一些生活费。一开始也只是试试的态度，但接触到了宿蜂创业团队的成员，也是跟我差不多大的学生，我觉得他们是在做一件很了不起的事情。"),new usersfun("images/users5.jpg","宿蜂的主要特色就是顺路带物，互帮互助。平台的“宿蜂榜”真的超级吸引人，多劳多得被完美诠释出来，并且并没有什么套路，简单粗暴，希望宿蜂能够继续这样下去，")];
    var classandstyles=[new classandstyle("class","single-doctor"),new classandstyle("class","tdoctor"),new classandstyle("data-path-hover","m 180,34.57627 -180,0 L 0,0 180,0 z"),new classandstyle("src",""),new classandstyle("viewBox","0 0 180 320"),new classandstyle("preserveAspectRatio","none"),new classandstyle("d","M 180,160 0,218 0,0 180,0 z")];
   
   
    var classandstyles2=[new classandstyle("class","single-testimonial"),new classandstyle("class","testimonial-img"),
    new classandstyle("src",""),new classandstyle("alt","img"),new classandstyle("class","testimonial-cotent"),
    new classandstyle("class","testimonial-parg")];


function contribute()//构造整体dom树
{
    var divarr=["li","div","a","figure","figcaption"];
    for(var j=0;j<divarr.length;j++)
    {
        addnodes(now_element,divarr[j],1);
    }
}
function contribute2()//构造整体dom树
{
    var divarr=["li","div"];
    for(var j=0;j<divarr.length;j++)
    {
        addnodes(now_element,divarr[j],0);
    }
}
function contributeclass(k)//添加样式
{
    now_class.getElementsByTagName("div")[k].className=classandstyles[0].style;
    now_class.getElementsByTagName("a")[k].className=classandstyles[1].style;
    now_class.getElementsByTagName("a")[k].setAttribute(classandstyles[2].class,classandstyles[2].style);
    now_class.getElementsByTagName("img")[k].setAttribute(classandstyles[3].class,team[k].image);
    now_class.getElementsByTagName("svg")[k].setAttribute(classandstyles[4].class,classandstyles[4].style);
    now_class.getElementsByTagName("svg")[k].setAttribute(classandstyles[5].class,classandstyles[5].style);
  //  now_class.getElementsByTagName("path")[k].setAttribute(classandstyles[6].class,classandstyles[6].style);
    now_class.getElementsByTagName("h2")[k].innerHTML=team[k].name;
    now_class.getElementsByTagName("p")[k].innerHTML=team[k].school;
}
// alert(now_class.getElementsByTagName("div")[0].innerHTML);
    // alert(now_class.getElementsByTagName("div")[1].innerHTML);
    // alert( now_class.getElementsByTagName("div")[2].innerHTML);
     //alert(now_class.getElementsByTagName("img").innerHTML);
   // alert(now_class.getElementsByTagName("li")[i].innerHTML);
function contributeclass_uuers(i)
{
    now_class=now_class.getElementsByTagName("li")[i];
    var k=0;
    now_class.getElementsByTagName("div")[0].className=classandstyles2[0].style;
    now_class.getElementsByTagName("div")[1].className=classandstyles2[1].style;
    now_class.getElementsByTagName("div")[2].className=classandstyles2[4].style;
   now_class.getElementsByTagName("img").setAttribute("src","imgimages/users2.jpg");
   now_class.getElementsByTagName("p").className=classandstyles2[5].style;
    now_class.getElementsByTagName("p").innerHTML="hahahhahahah";
}
function addchildnodes(b)//把b插入到now_element2节点的函数
{
    var para=document.createElement(b);//插入到节点的主要操作
    now_element2.appendChild(para);
    if(b=="svg")
    {
        var para2=document.createElement("path");//插入到节点的主要操作
        para.appendChild(para2);
    }
    now_element2=para;
}
function addnodes(element,tag,flag)//把tag节点插入到now_element节点里面，充当子节点
{
    var para=document.createElement(tag);//插入节点的主要操作
    element.appendChild(para);
    now_element=para;
    if(tag=="figure"&&flag==1)//如果插入的标签是figure
    {
        now_element2=now_element;
        addchildnodes("img");
        addchildnodes("svg");
    }
    else if(tag=="figcaption"&&flag==1)//如果插入的标签是figcaption
    {
        now_element2=now_element;
        addchildnodes("h2");
        now_element2=now_element;
        addchildnodes("p");
    }
    if(tag=="div"&&flag==0)
    {
        now_element2=now_element;
        addchildnodes("div");
        addchildnodes("img");
        now_element2=now_element;
        addchildnodes("div");
        addchildnodes("p");
    }
} 

(function(){//构造成员
  
    
    for(var k=0;k<team.length;k++)//生成成员总体结构的模块
    {
        contribute();//构造结构
        now_element=document.getElementById("team_members");//一次循环过后把now_element节点重置
    }
    for(var k=0;k<team.length;k++)//生成样式的模块
    {
        contributeclass(k);//构造样式
    }
 }
)();

(function(){//用户评价
   // alert(document.getElementById("testimonialnodes").innerHTML);
    now_element=document.getElementById("testimonialnodes");
    for(var i=0;i<users.length;i++)
    {
        contribute2();
        now_element=document.getElementById("testimonialnodes");
    }
    for(var i=0;i<users.length;i++)
    {
        now_class=document.getElementById("testimonialnodes");
        contributeclass_uuers(i);
        
    }
})();

(function(){//文字
    var functions=["代取快递","超市代买","帮我取/送"];
    document.getElementById("our_feature").innerHTML="“宿蜂”校园有偿互助信息平台,是一款针.对在校路带物,时间共享”的理念,促使当化大学生更好的利用自己的碎片化扩间,以达到互帮互助共同提高的目标。以效率为本、以安全为先。";
	document.getElementById("topintroduce").innerHTML="宿蜂”校园互助小程序是一款只针对在校大学生提供有偿互助的小程序。本着“顺路带物，时间共享”的理念，促使当代大学生更好的利用自己的碎片化时间以达到互帮互助共同提高的目标。";
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

})();