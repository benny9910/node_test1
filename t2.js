    var curdate="2021-06-27";
    var epgdate="2021-06-28";

    var week = new Date(epgdate).getDay();

    
    if (week==0) {
        week = 7;
    }


    if (new Date(curdate).getDay()==0) {
        week = week + 7;
    }

	console.log(new Date(curdate).getDay());
	console.log(new Date(epgdate).getDay());
	console.log(week);
	console.log(week);
