function tag(TagName,Attribute=[],Style = [],type = 0)//0 正常构造，Attribute是属性名，style是属性内容，1 下次构造构造兄弟节点 2 下次构造构造孩子节点
        {
        this.TagName = TagName;
        this.Attribute = Attribute;
        this.Style = Style;
        this.type = type;
        }
        var tags = [//标签数组
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
        new tag("li"),
        new tag("div",["class"],["single-testimonial"],0),
        new tag("div",["class"],["testimonial-img"],1),
        new tag("img",["src"],["images/users1.jpg"],2),
        new tag("div",["class"],["testimonial-cotent"],1),
        new tag("p",["class"],["testimonial-parg"],2),
        ];

/*------------------------------------下面是添加节点的函数------------------------------------ */

function AddNodes(FatherLocation,Number)//添加节点的函数
{
        var para = document.createElement(tags[Number].TagName);//创建节点
        FatherLocation.appendChild(para);//插入到父节点
        for(var i = 0;i < tags[Number].Attribute.length;i ++)//设置属性
        {
            para.setAttribute(tags[Number].Attribute[i],tags[Number].Style[i]);//设置属性
        }
    return para;//返回插入的节点的位置
}

/*------------------------------------下面是构造dom的函数------------------------------------ */
function ContributeDom(i,teamtags)//构造dom树
{
        var NowLocation = document.getElementById("team_members");//初始结点
        var para ;
        for( ;i < teamtags;i ++)
        {
            if(i == 11)//如果到了第11个（就是用户标签部分已经结束了，这个时候要切换初始位置）
            {
                NowLocation = document.getElementById("testimonialnodes");//初始位置
            }
            if(tags[i].type == 1)//这里的type表示插入状态  1 下次构造构造兄弟节点 2 下次构造构造孩子节点
            {
                para = AddNodes(NowLocation,i);//因为这里事构造兄弟节点，这里就不更新父节点了，para是用来保存给这个节点插入子节点的位置
            }
            else if(tags[i].type == 2)//这里就是给上一个节点构造子节点
            AddNodes(para,i);
            else
            NowLocation = AddNodes(NowLocation,i);//这是正常构造
        }
}

/*------------------------------------下面是主函数------------------------------------ */

(function Contribute()//构造团队成员
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
    function usersfun(image,words)//用户对象函数
    {
        this.image=image;
        this.words=words;
    }
    var users=[//用户对象数组
    new usersfun("images/users1.jpg","111宿蜂是一款非常轻便的小程序，一键发单，接单速度快，准时高效，为我的生活提供了很多便利。"),
    new usersfun("images/users2.jpg","刚接触宿蜂是被朋友安利的，听说是一群学姐学长创业做的，就尝试了一下。发现真的很人性化，减少了很多沟通的成本。现在一有快递，就想到去宿蜂发单。偶尔自己取快递的时候，也会接别人发的订单，顺路送一下。"),
    new usersfun("images/users3.jpg","相比于我之前用过的校园跑腿小程序来说，宿蜂更加值得信赖，只要是在两个方面，第一：接单的人都有宿蜂平台的审核，确保是学生才会审核通过；第二：完善的发单接单流程，有人接单后，会把接单员的一些信息告知给发单人，体验很好，不用担心包裹丢失。"),
    new usersfun("images/users4.jpg","我是宿蜂的认证接单员，在宿蜂平台上通过接单，算是也赚到了一些生活费。一开始也只是试试的态度，但接触到了宿蜂创业团队的成员，也是跟我差不多大的学生，我觉得他们是在做一件很了不起的事情。"),new usersfun("images/users5.jpg","宿蜂的主要特色就是顺路带物，互帮互助。平台的“宿蜂榜”真的超级吸引人，多劳多得被完美诠释出来，并且并没有什么套路，简单粗暴，希望宿蜂能够继续这样下去，")
    ];
    for(var i = 0;i < team.length+users.length;i ++)
    {
        if(i< team.length)
        {
            ContributeDom(0,11);//这里的两个数字是构造成员模块标签的开始和结束的位置，因为这个值本身就是固定的，就直接用数字了
            var Temp = document.getElementById("team_members");
            Temp.getElementsByTagName("img")[i].setAttribute("src",team[i].image);//插入内容
            Temp.getElementsByTagName("h2")[i].innerHTML = team[i].name;
            Temp.getElementsByTagName("p")[i].innerHTML = team[i].school;
        }
        else {
            ContributeDom(11,17);//这里的两个数字是构造用户模块标签的开始和结束的位置
            Temp = document.getElementById("testimonialnodes");
            Temp.getElementsByTagName("img")[i-team.length].setAttribute("src",users[i-team.length].image);//插入内容
            Temp.getElementsByTagName("p")[i-team.length].innerHTML = users[i-team.length].words;
        }
    }
})();


/*------------------------------下面的功能事替换大体的文字------------------------------------*/ 
(function(){//文字
    var functions=["代取快递","超市代买","帮我取/送"];
    //插入普通文本内容
    document.getElementById("our_feature").innerHTML="“宿蜂”校园有偿互助信息平台,是一款针.对在校路带物,时间共享”的理念,促使当化大学生更好的利用自己的碎片化扩间,以达到互帮互助共同提高的目标。以效率为本、以安全为先。";
	document.getElementById("topintroduce").innerHTML="宿蜂”校园互助小程序是一款只针对在校大学生提供有偿互助的小程序。本着“顺路带物，时间共享”的理念，促使当代大学生更好的利用自己的碎片化时间以达到互帮互助共同提高的目标。";
    var develop_history=[
        "校园互助平台想法诞生",
        "创始团队成立。根据市场调研结果，宿蜂进入研发阶段",
        "校园有偿互助平台宿蜂小程序研发基本完成",
        "南京市有你互联网有限公司正式注册",
        "宿蜂小程序上线内测",
        "宿蜂小程序上线外测"
    ];
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