function show_copyright(){$(".copyright").html('©2021 - <span id="span_cr">2024</span> <i class="fa-fw fas fa-arrows-h fa-beat" style="color: #44dbae;"></i> By XiaoJun'),span_cr.innerHTML=(new Date).getFullYear()}function show_date_time(){$(".framework-info").html('本站已运行<span id="span_dt_dt" style="color: #fff;"></span>'),window.setTimeout("show_date_time()",1e3),BirthDay=new Date("2022-11-06 00:00:00"),today=new Date,timeold=today.getTime()-BirthDay.getTime(),sectimeold=timeold/1e3,secondsold=Math.floor(sectimeold),msPerDay=864e5,e_daysold=timeold/msPerDay,daysold=Math.floor(e_daysold),e_hrsold=24*(e_daysold-daysold),hrsold=Math.floor(e_hrsold),e_minsold=60*(e_hrsold-hrsold),minsold=Math.floor(60*(e_hrsold-hrsold)),seconds=Math.floor(60*(e_minsold-minsold)),span_dt_dt.innerHTML="<font style=color:#cd853f>"+daysold+"</font> 天 <font style=color:#f391a9>"+hrsold+"</font> 时 <font style=color:#fdb933>"+minsold+"</font> 分 <font style=color:#708090>"+seconds+"</font> 秒"}$(document).ready((function(o){show_copyright(),show_date_time()}));