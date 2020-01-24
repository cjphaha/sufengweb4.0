function tag(TagName,BortherNumber,AttributeNomber,Attribute,Style,Attribute1,Style1)
        {
            this.TagName = TagName;
            this.BortherNumber = BortherNumber;
            this.AttributeNomber = AttributeNomber;
            this.Attribute = Attribute;
            this.Style = Style;
            this.Attribute1 = Attribute1;
            this.Style1 = Style1;
        }
        var tags = [
            new tag("div",0,1,"class","single-doctor"),
            new tag("div",0,1,"class","single-doctor"),
            new tag("a",0,2,"class","tdoctor","data-path-hover","m 180,34.57627 -180,0 L 0,0 180,0 z"),
            new tag("figure",0,0),
            new tag("img",0,1,"src",""),
            new tag("svg",0,2,"viewbox","0 0 180 320","preserveAspectRatio","none"),
            new tag("path",0,1,"d","M 180,160 0,218 0,0 180,0 z"),
            new tag("figcaption",2,0),
            new tag("h2",0,0),
            new tag("p",0,0),
        ];

function AddNodes(FatherLocation,ChildTag,Number)
{
   // alert("AddNodes");
    var para = document.createElement(ChildTag);
    FatherLocation.appendChild(para);
    // if(tags[Number].BortherNumber > 0)//如果它有超过一个子节点，开始递归，为其插入子节点
    // {
    //     AddNodes(para,ChildTag,Number++);
    // }
    return para;
}
function ContributeDom(flag)//构造dom树
{
    if(flag == 1)
    {
        var NowLocation = document.getElementById("team_members");
        alert(  NowLocation.innerHTML);
        for(var i = 0;i < tags.length;i ++)
        {
            var TempLocation = AddNodes(NowLocation,tags[i].TagName,i);//temp是临时的父节点，也就是构造之后的返回节点
            // if(tags[i].BortherNumber != 0)//如果有兄弟节点的话
            // {
            //     var TotalBorther=tags[i].BortherNumber;//把兄弟节点的个数给一个参数
            //     for(var j = 0;j < TotalBorther;j++)
            //     {
            //         AddNodes(NowLocation,tags[++i].TagName,i);//继续构造兄弟节点
            //     }
            // }
  //          else {//如果没有兄弟节点
                NowLocation = TempLocation;//更新父节点，下次就继续插入
  //          }
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
        new member("张晓铭","南京师范大学","imgages/zxm.jpg")
    ];
    for(var i = 0;i < team.length;i ++)
    {
 //       alert(tags[i].TagName);
        ContributeDom(1);
    }
})();