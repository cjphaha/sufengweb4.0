(function(){
  /*-------------------一些后面需要用到的属性，内容等，统一用对象数组储存起来 */
  function member(name, school, image){//成员对象
    this.name = name;
    this.school = school;
    this.image = image;
    }
  var team = [//成员数组
    new member("陈家鹏", "南京信息工程大学", "images/cjp.jpg"),
    new member("韩佩恒", "南京邮电大学", "images/hph.jpg"),
    new member("徐荣荣", "南京邮电大学", "images/xrr.jpg"),
    new member("张晓铭", "南京师范大学", "images/zxm.jpg")
    ];
  function usersFun(image, words){//用户对象函数
      this.image = image;
      this.words = words;
  }
  var users = [//用户对象数组
      new usersFun("images/users1.jpg", "111宿蜂是一款非常轻便的小程序，一键发单，接单速度快，准时高效，为我的生活提供了很多便利。"),
      new usersFun("images/users2.jpg", "刚接触宿蜂是被朋友安利的，听说是一群学姐学长创业做的，就尝试了一下。发现真的很人性化，减少了很多沟通的成本。现在一有快递，就想到去宿蜂发单。偶尔自己取快递的时候，也会接别人发的订单，顺路送一下。"),
      new usersFun("images/users3.jpg", "相比于我之前用过的校园跑腿小程序来说，宿蜂更加值得信赖，只要是在两个方面，第一：接单的人都有宿蜂平台的审核，确保是学生才会审核通过；第二：完善的发单接单流程，有人接单后，会把接单员的一些信息告知给发单人，体验很好，不用担心包裹丢失。"),
      new usersFun("images/users4.jpg", "我是宿蜂的认证接单员，在宿蜂平台上通过接单，算是也赚到了一些生活费。一开始也只是试试的态度，但接触到了宿蜂创业团队的成员，也是跟我差不多大的学生，我觉得他们是在做一件很了不起的事情。"), new usersFun("images/users5.jpg", "宿蜂的主要特色就是顺路带物，互帮互助。平台的“宿蜂榜”真的超级吸引人，多劳多得被完美诠释出来，并且并没有什么套路，简单粗暴，希望宿蜂能够继续这样下去，")
  ];
/* --------------------开始构造dom结构---------------------*/
  for(var i = 0;i < team.length ; i ++){//构造团队
    addDom(0);
    addStyle(i,team[i],0);
    }
  for(var i = 0;i < users.length ; i ++){//构造用户
    addDom(1);
    addStyle(i,users[i],1);
    }
})();
function addDom (flag) {//添加dom的函数
  var dom;
  if(flag == 0){//插入成员
    dom = $("#team_members");//获取jQuery对象
    dom.append('<li>'+//插入html代码
      '<div  class="single-doctor">'+
        '<div class="single-doctor">'+
        '<a class="tdoctor" data-path-hover="m 180,34.57627 -180,0 L 0,0 180,0 z">'+
        '<figure>'+
          '<img src="images/cjp.jpg" />'+
          '<svg viewBox="0 0 180 320" preserveAspectRatio="none"><path></path></svg>'+
            '<figcaption>'+
            '<h2>陈家鹏</h2>'+
              '<p>南京信息工程大学</p>'+
            '</figcaption>'+
          '</figure>'+
        '</a>'+
      '</div>'+
      '</div>'+
    '</li>');
  }
  else if(flag == 1){//插入用户
    dom = $("#testimonialnodes");//获取jQuery对象
    dom.append('<li>'+//插入html代码
      '<div class="single-testimonial">'+
        '<div class="testimonial-img">'+
        '<img src="images/users1.jpg" alt="img">'+
        '</div>'+
        '<div class="testimonial-cotent">'+
          '<p class="testimonial-parg"></p>'+
        '</div>'+
      '</div>'+
    '</li>' 
    );
  }
}
/*-----------------------------插入属性的函数----------------------------------- */
function addStyle (i,object,flag) {//i：目前是第几个对象， object ：函数传递过来的对象    ，flag：模式（0：对团队成员进行属性设置 1：对用户评价进行属性设置）  
  var dom;
  if(flag == 0){//设置成员的属性
    dom = getjQuery("#team_members  h2",i);//获取jQuery对象
    dom.html(object.name);//设置属性
    dom = getjQuery("#team_members p",i);//获取jQuery对象
    dom.html(object.school);//设置属性
    dom = getjQuery("#team_members img",i);//获取jQuery对象
    dom.attr("src",object.image); //设置属性
  }
  else if(flag == 1){//设置用户的属性
    dom = getjQuery("#testimonialnodes img",i);//获取jQuery对象
    dom.attr("src",object.image);//设置属性
    dom = getjQuery("#testimonialnodes p",i);//获取jQuery对象
    dom.html(object.words);//设置属性
  }
}
function getjQuery (name,i) {//获取jQuery对象的函数
  var dom;
  dom = $(name);//先获取jQuery对象
  dom = dom.get(i);//因为可能会获取很多个同样类型的标签，这里用i来标记我们取第几个，get（）将第i个变为dom对象
  return $(dom);//把取到的dom对象编程jQuery对象传递回去
}
/* -------------------------插入一些文字------------------------ */
(function () {//文字
  var functions = ["代取快递", "超市代买", "帮我取/送"];//插入普通文本内容
  $("#our_feature").html("“宿蜂”校园有偿互助信息平台,是一款针.对在校路带物,时间共享”的理念,促使当化大学生更好的利用自己的碎片化扩间,以达到互帮互助共同提高的目标。以效率为本、以安全为先。");
  $("#topintroduce").html("“宿蜂”校园互助小程序是一款只针对在校大学生提供有偿互助的小程序。本着“顺路带物，时间共享”的理念，促使当代大学生更好的利用自己的碎片化时间以达到互帮互助共同提高的目标。");
  var developHistory = [
      "校园互助平台想法诞生",
      "创始团队成立。根据市场调研结果，宿蜂进入研发阶段",
      "校园有偿互助平台宿蜂小程序研发基本完成",
      "南京市有你互联网有限公司正式注册",
      "宿蜂小程序上线内测",
      "宿蜂小程序上线外测"
  ];
  var dom;
  for (i = 0; i < 6; i++){//开始替换发展历史
    dom = getjQuery("#develop_history p",i);//获取jQuery对象
    dom.html(developHistory[i]);
  }
  for (i = 0; i < 3; i++){//替换我们的特色
    dom = getjQuery("#our_functions div",i);//获取jQuery对象
    dom.html(functions[i]);
  }
})();