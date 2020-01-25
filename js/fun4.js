function tag(TagName,Attribute=[],Style = [],type = 0)//0 正常构造，1 下次构造构造兄弟节点 2 下次构造构造孩子节点
        {
        this.TagName = TagName;
        this.Attribute = Attribute;
        this.Style = Style;
        this.type = type;
        }
var tags = [
        new tag("li",[],[]),
        new tag("div",["class"],["single-doctor"]),
        new tag("div",["class"],["single-doctor"]),
        new tag("a",["class","data-path-hover"],["tdoctor","m 180,34.57627 -180,0 L 0,0 180,0 z"]),            
        new tag("figure"),
        new tag("img",["src"],[""],1),
        new tag("svg",["viewbox","preserveAspectRatio"],["0 0 180 320","none"],1),  
        new tag("path",["d"],["M 180,160 0,218 0,0 180,0 z"],2),          
        new tag("figcaption",[],[],1),
        new tag("h2",[],[],2),
        new tag("p",[],[],2),
        ];
var user_tags = [
    new tag("li"),
    new tag("div",["class"],["single-testimonial"],0),
    new tag("div",["class"],["testimonial-img"],1),
    new tag("img",[],[],2),
    new tag("div",["class"],["testimonial-cotent"],1),
    new tag("p",["class"],["testimonial-parg"],2),
]
function AddNodes(FatherLocation,Number)
{
    var para = document.createElement(tags[Number].TagName);//创建节点
    FatherLocation.appendChild(para);//插入到父节点
    for(var i = 0;i < tags[Number].Attribute.length;i ++)//设置属性
    {
        para.setAttribute(tags[Number].Attribute[i],tags[Number].Style[i]);
    }
    return para;//返回子节点
}
function ContributeDom(flag)//构造dom树
{
    if(flag == 1)
    {
        var NowLocation = document.getElementById("team_members");//初始结点
        var para ;
        for(var i = 0;i < tags.length;i ++)
        {
            //if(tags[i].TagName == "img"||tags[i].TagName == "svg"||tags[i].TagName == "figcaption")//开始插入兄弟节点
            if(tags[i].type == 1)
            {
                para = AddNodes(NowLocation,i);//这里就不更新父节点了，para是用来给这个节点插入子节点的
            }
            //if(tags[i].TagName == "h2"||tags[i].TagName == "p"||tags[i].TagName == "path")//遇到这几个节点就当上一次节点的子节点
            else if(tags[i].type == 2)
            AddNodes(para,i);
            else
            NowLocation = AddNodes(NowLocation,i);//这是正常构造
        }
    }
    if(flag == 2)
    {
        var NowLocation = document.getElementById("testimonialnodes");//初始结点
        var para ;
        for(var i = 0;i < user_tags.length;i ++)
        {
            //if(tags[i].TagName == "img"||tags[i].TagName == "svg"||tags[i].TagName == "figcaption")//开始插入兄弟节点
            if(user_tags[i].type == 1)
            {
                para = AddNodes(NowLocation,i);//这里就不更新父节点了，para是用来给这个节点插入子节点的
            }
            //if(tags[i].TagName == "h2"||tags[i].TagName == "p"||tags[i].TagName == "path")//遇到这几个节点就当上一次节点的子节点
            else if(user_tags[i].type == 2)
            AddNodes(para,i);
            else
            NowLocation = AddNodes(NowLocation,i);//这是正常构造
        }
    }
}
(function ContributeTaem()//构造团队成员
{
    function member(name,school,image)//成员对象
    {
        this.name = name;
        this.school = school;
        this.image = image;
    }
    var team = [//成员数组
        new member("陈家鹏","南京信息工程大学","images/cjp.jpg"),
        new member("韩佩恒","南京邮电大学","images/hph.jpg"),
        new member("徐荣荣","南京邮电大学","images/xrr.jpg"),
        new member("张晓铭","南京师范大学","images/zxm.jpg")
    ];
    for(var i = 0;i < team.length;i ++)
    {
        ContributeDom(1);//状态一表示构造成员
        var Temp = document.getElementById("team_members");
        Temp.getElementsByTagName("img")[i].setAttribute("src",team[i].image);//插入内容
         Temp.getElementsByTagName("h2")[i].innerHTML = team[i].name;
        Temp.getElementsByTagName("p")[i].innerHTML = team[i].school;
    }
    for(var i = 0;i <3;i ++)
    {
        ContributeDom(2);
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