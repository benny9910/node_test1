var https = require('https');
 
var url=process.argv[2];
var host=url.split('/')[2];
var path=url.split('/')[3];

//      console.log(path);
// 用于请求的选项
var options = {
   host: host,
//   port: '443',
   path: '/'+path
};
 
// 处理响应的回调函数
var callback = function(response){
   // 不断更新数据
   var body = '';
   response.on('data', function(data) {
	      body += data;
   });
   
   response.on('end', function() {
      // 数据接收完成
      console.log(body);
   });
}
// 向服务端发送请求
var req = https.request(options, callback);
req.end();