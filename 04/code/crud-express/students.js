var fs = require('fs');
var dbPath = './db.json';

/**
 * 获取所有学生列表
 * return []
 */
exports.find = function (callBack) {
	// 第二个参数 ’utf-8‘ 表示将取到的数据以固定格式转换成我们能识别的字符串
	fs.readFile(dbPath, 'utf-8', function (err, data) {
		callBack(err, JSON.parse(data).students);
	})
}

/** 
 * 添加保存学生
*/
exports.save = function (student, callBack) {
	// 第二个参数 ’utf-8‘ 表示将取到的数据以固定格式转换成我们能识别的字符串
	fs.readFile(dbPath, 'utf-8', function (err, data) {
		var students = JSON.parse(data).students;
		
		student.id = students.slice(-1)[0].id + 1;
		students.push(student);

		var fileData = JSON.stringify({
			students: students
		});
		console.log(fileData);
		console.log(typeof(fileData));
		fs.writeFile(dbPath, fileData, function (err) {
			if (err) {
				return callBack(err);
			}
		})
		callBack(err);
	})
}
// save(student, function (err) {
// 	if (err) {
// 		return res.status(500).send('Server error!');
// 	}
// 	
// })

/**
 * 更新学生
 */
exports.update = function () {}

/**
 * 删除学生
 */
exports.delete = function () {}

