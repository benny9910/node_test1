	var request = require('superagent');

    var ua = 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36';
	var url=process.argv[2];

    request.get(url).set('User-Agent', ua).end(function (err, res) {
        if (err) {
            if (err.errno){
                console.log(url+" -> "+"error:1001:"+err.errno);
            }else{
                switch (err.status) {
                    case 403: 
                        console.log(url+" -> "+"error:1003:"+err.status);
                        break;
                    case 404: 
                        console.log(url+" -> "+"error:1004:"+err.status);
                        break;
                    default: 
                        console.log(url+" -> "+"error:1005:"+err);
                        break;
                }            
            }
        } else if (res.statusCode != 200) {
            console.log(url+" -> "+"error:1999:"+res.statusCode);
        } else {
            console.log(res.text.toString());
/*
			if (epg[0]==1){
                console.log(url+" -> "+"error!");
                return;
            }

            var programList=epg[channelKey]["program"];

            if (programList.length>0){
                var programTime=programList[programList.length-1]["showTime"];

                if (programTime.split(':')[0]<13){
                    console.log(url+" -> "+"short!");
                }else{
                    console.log(url);
                }
            }else{
                console.log(url+" -> "+"empty!");
            }            
  */
		}
   });
