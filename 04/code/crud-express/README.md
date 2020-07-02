# Express - crud

## 起步
- 初始化
- 模板处理

## 路由设计
| 请求方法   | 请求路径          | get参数 | post参数                      | 备注            |
|。。。。。。|。。。。。。。。。。|。。。。。|。。。。。。。。。。。。。。。。。|。。。。。。。。。|
|    GET    | /studens         |         |                               | 渲染首页        |
|    GET    | /studens/new     |         |                               | 渲染添加学生页面 |
|    PODT   | /studens/new     |         | id、name、age、gender、hobbies | 处理添加学生请求 |
|    GET    | /studens/edit    | id      |                               | 渲染编辑页面     |
|    POST   | /studens/edit    |         | id、name、age、gender、hobbies | 处理编辑请求     |
|    GET    | /studens/delete  | id      |                               | 处理删除请求     |


