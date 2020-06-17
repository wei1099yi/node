var url = require('url');

var obj = url.parse('http://127.0.0.1:3000/pinglun?name=地方萨芬&message=发士大夫撒');
console.log(obj);

/**
 * Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: '127.0.0.1:3000',
  port: '3000',
  hostname: '127.0.0.1',
  hash: null,
  search: '?name=地方萨芬&message=发士大夫撒',
  query: 'name=地方萨芬&message=发士大夫撒',
  pathname: '/pinglun',
  path: '/pinglun?name=地方萨芬&message=发士大夫撒',
  href: 'http://127.0.0.1:3000/pinglun?name=地方萨芬&message=发士大夫撒'
}
 */

 // url.parse() 的第二个参数表示将生成的 obj 对象里边的 query 内容由字符串转成对象  
var obj = url.parse('/pinglun?name=地方萨芬&message=发士大夫撒', true);
console.log(obj.query.name);