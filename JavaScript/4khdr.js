var rule = {
	title:'4KHDR[磁]',
	host:'https://www.4khdr.cn',
        homeUrl: "/forum.php?mod=forumdisplay&fid=2&page=1",
	url: '/forum.php?mod=forumdisplay&fid=2&filter=typeid&typeid=fyclass&page=fypage',
	filter_url:'{{fl.class}}',
	filter:{
	},
	searchUrl: '',
	searchable:0,
	quickSearch:0,
	filterable:0,
	headers:{
		'User-Agent': 'PC_UA',
        'Cookie':'hvLw_2132_saltkey=D7vrZUuH; hvLw_2132_lastvisit=1691929536; hvLw_2132_visitedfid=2; hvLw_2132_seccodecS=5677.870ed2d7d2d2fb4d5b; _clck=lt4may|2|fe4|0|1320; hvLw_2132_ulastactivity=1691933224%7C0; hvLw_2132_auth=119fboaRVYrtqTya4c3Chmb2cGc2IZ3h4ELGDMagyTlJofiK47RHPXimw7ufupmZNTU4o9%2FchPpSo7kSkIhLrggLzg; hvLw_2132_creditnotice=0D0D10D0D0D0D0D0D0D99214; hvLw_2132_creditbase=0D0D0D0D0D0D0D0D0; hvLw_2132_creditrule=%E6%AF%8F%E5%A4%A9%E7%99%BB%E5%BD%95; hvLw_2132_sid=0; hvLw_2132_st_t=99214%7C1691933228%7C2f46d89bab46b2162f50a04fec9fc593; hvLw_2132_forum_lastvisit=D_2_1691933228; hvLw_2132_lastact=1691933228%09home.php%09spacecp; _clsk=14zpbdc|1691933231647|2|1|v.clarity.ms/collect',
	},
	timeout:5000,
	class_name: "4K电影&4K美剧&4K华语&4K动画&4K纪录片&4K日韩印&蓝光电影&蓝光美剧&蓝光华语&蓝光动画&蓝光日韩印",
	class_url:"3&8&15&6&11&4&29&31&33&32&34",
	play_parse:false,
	lazy:'',
	limit:6,
	推荐:'ul#waterfall li;a&&title;img&&src;div.auth.cl&&Text;a&&href',
	一级:'ul#waterfall li;a&&title;img&&src;div.auth.cl&&Text;a&&href',
	二级:{
		title:"#thead_subject&&Text",
		img:"img.zoom&&src",
		desc:'td[id^="postmessage_"] font&&Text',
		content:'td[id^="postmessage_"] font&&Text',
		tabs:`js:
			pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
			TABS=[]
			var d = pdfa(html, 'table.t_table');
			let magnetIndex=0;
			let aliIndex=0;
			d.forEach(function(it) {
				let burl = pdfh(it, 'a&&href');
				log("burl >>>>>>" + burl);
				if (burl.startsWith("https://www.aliyundrive.com/s/")){
					let result = 'aliyun' + aliIndex;
					aliIndex = aliIndex + 1;
					TABS.push(result);
				}
			});
			d.forEach(function(it) {
				let burl = pdfh(it, 'a&&href');
				log("burl >>>>>>" + burl);
				if (burl.startsWith("magnet")){
					let result = 'magnet' + magnetIndex;
					magnetIndex = magnetIndex + 1;
					TABS.push(result);
				}
			});
			log('TABS >>>>>>>>>>>>>>>>>>' + TABS);
		`,
		lists:`js:
			log(TABS);
			pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
			LISTS = [];
			var d = pdfa(html, 'table.t_table');
			TABS.forEach(function(tab) {
				log('tab >>>>>>>>' + tab);
				if (/^aliyun/.test(tab)) {
					let targetindex = parseInt(tab.substring(6));
					let index = 0;
					d.forEach(function(it){
						let burl = pdfh(it, 'a&&href');
						if (burl.startsWith("https://www.aliyundrive.com/s/")){
							if (index == targetindex){
								let title = pdfh(it, 'a&&Text');
								log('title >>>>>>>>>>>>>>>>>>>>>>>>>>' + title);
								burl = "http://127.0.0.1:9978/proxy?do=ali&type=push&url=" + encodeURIComponent(burl);
								log('burl >>>>>>>>>>>>>>>>>>>>>>>>>>' + burl);
								let loopresult = title + '$' + burl;
								LISTS.push([loopresult]);
							}
							index = index + 1;
						}
					});
				}
			});
			TABS.forEach(function(tab) {
				log('tab >>>>>>>>' + tab);
				if (/^magnet/.test(tab)) {
					let targetindex = parseInt(tab.substring(6));
					let index = 0;
					d.forEach(function(it){
						let burl = pdfh(it, 'a&&href');
						if (burl.startsWith("magnet")){
							if (index == targetindex){
								let title = pdfh(it, 'a&&Text');
								log('title >>>>>>>>>>>>>>>>>>>>>>>>>>' + title);
								log('burl >>>>>>>>>>>>>>>>>>>>>>>>>>' + burl);
								let loopresult = title + '$' + burl;
								LISTS.push([loopresult]);
							}
							index = index + 1;
						}
					});
				}
			});
			`,

	},
	搜索:'',
}
