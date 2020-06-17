var http = require("http");
var fs = require("fs");
var template = require("art-template");
var url = require("url");

// 评论的数据
// var comments = [
//   {
//     name: '张三0',
//     massage: '今天天气不错0！',
//     dateTime: '2015-10-16'
//   },
//   {
//     name: '张三1',
//     massage: '今天天气不错1！',
//     dateTime: '2015-10-16'
//   },
//   {
//     name: '张三2',
//     massage: '今天天气不错2！',
//     dateTime: '2015-10-16'
//   },
//   {
//     name: '张三3',
//     massage: '今天天气不错3！',
//     dateTime: '2015-10-16'
//   }
// ];

// /pinglun?name=地方萨芬&message=发士大夫撒
// 对于这种 get 提交数据的方式，由于有用户的动态数据在里边，所以不能通过判断完整的 url 路径来处理这个请求
// 所以通过 url 模块判断请求路径是 /pinglun 时默认为用户提交数据操作

http
  .createServer(function (req, res) {
    // 使用 url.parse 方法将路径解析为一个对象，第二个参数 true 则将路径后边的请求数据变成对象
    var parseObj = url.parse(req.url, true);
    // 单独获取不包含查询字符串的路径部分（该路径不包含 ？ 后的内容）
    var parseName = parseObj.pathname;
    // var url = req.url;

    if (parseName === "/") {
      fs.readFile("./view/index.html", (err, indexData) => {
        if (err) {
          return res.end("404 Not Found...");
        }

        fs.readFile("./public/lib/data.txt", (err, data) => {
          if (err) return res.end("404 Not Found...");

          var comments = JSON.parse(data.toString());
          var htmlStr = template.render(indexData.toString(), {
            comments: comments,
          });
          res.end(htmlStr);
        });
        // 读取到的数据默认是二进制数据，而 render 只能处理字符串，所以需要转换
        // var htmlStr = template.render(data.toString(), {
        //   comments: comments
        // })
        // res.end(htmlStr);
      });
    } else if (parseName.indexOf("/public/") === 0) {
      fs.readFile("." + parseName, function (err, data) {
        if (err) {
          return res.end("404 Not Found...");
        }
        if (parseName.match(/(.jpg)/g)) {
          res.setHeader("Content-type", "image/jpeg");
        }
        res.end(data);
      });
    } else if (parseName === "/post") {
      fs.readFile("./view/post.html", (err, data) => {
        if (err) return res.end("404 Not Found...");
        res.end(data);
      });
      // 提交评论数据
    } else if (parseName === "/pinglun") {
      fs.readFile("./public/lib/data.txt", (err, data) => {
        if (err) return res.end("404 Not Found...");
        var comments = JSON.parse(data.toString());
        // parseObj.query 就是用户提交的评论组成的对象
        var comment = parseObj.query;
        comments.push(comment);

        fs.writeFile(
          "./public/lib/data.txt",
          JSON.stringify(comments),
          (error) => {
            if (error) return;
            console.log("写入成功！");
            var today = new Date();
            var m = checkTime(today.getMonth() + 1);
            var d = checkTime(today.getDate());
            function checkTime(i) {
              if (i < 10) {
                i = "0" + i;
              }
              return i;
            }

            comment.dateTime = today.getFullYear() + "-" + m + "-" + d;
            res.statusCode = 302;
            res.setHeader("Location", "/");
            res.end();
          }
        );
      });
      // console.log('收到表单提交的数据');
      // parseObj.query 就是用户提交的评论组成的对象
      // var comment = parseObj.query;
      // var today = new Date();
      // var m = checkTime(today.getMonth() + 1);
      // var d = checkTime(today.getDate());
      // function checkTime(i) {
      //   if (i < 10) {
      //     i = "0" + i;
      //   }
      //   return i;
      // }

      // comment.dateTime = today.getFullYear() + "-" + m + "-" + d;
      // 向数组中添加评论数据
      // comments.push(comment);
      // 如何通过服务器让客户端重定向？
      // 1.状态码设置为 302 临时重定向
      // statusCode
      // 2.在响应头中通过 Location 告诉客户端往哪重定向
      // setHeader
      // 如果客户端发现状态码是 302 就会去响应头中寻找 Location 重定向到该地址
      // res.statusCode = 302;
      // res.setHeader('Location', '/');

      // res.setHeader('Content-type', 'text/html; charset=utf-8');
      // res.end(JSON.stringify(parseObj.query));
      // res.end();
    } else {
      // 页面找不到就跳转404页面
      fs.readFile("./view/404.html", (err, data) => {
        if (err) return res.end("404 Not Found...");
        res.end(data);
      });
    }

    // res.end(parseName);
  })
  .listen(3000, function () {
    console.log("runing...");
  });
