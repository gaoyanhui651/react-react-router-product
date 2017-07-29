var Header = React.createClass({
	getInitialState: function () {
		return {
			list:[],
			data1:[
					{
						game_name:'英雄联盟',
						url:"#/live/英雄联盟"
					},
					{
						game_name:'王者荣耀',
						url:"#/live/王者荣耀"
					},
					{
						game_name:'星秀',
						url:"#/live/星秀"
					},
					{
						game_name:'主机游戏',
						url:"#/live/主机游戏"
					},
					{
						game_name:'乡野',
						url:"#/live/乡野"
					},
					{
						game_name:'穿越火线',
						url:"#/live/穿越火线"
					},
					{
						game_name:'球球大作战',
						url:"#/live/球球大作战"
					},
					{
						game_name:'我的世界',
						url:"#/live/我的世界"
					},
					{
						game_name:'地下城与勇士',
						url:"#/live/地下城与勇士"
					}
			],
			data2:[
					{
						game_name:'迷你世界',
						url:"javascript:;"
					},
					{
						game_name:'CS:GO',
						url:"javascript:;"
					},
					{
						game_name:'欢乐球吃球',
						url:"javascript:;"
					},
					{
						game_name:'跳伞专区',
						url:"javascript:;"
					},
					{
						game_name:'天天酷跑',
						url:"javascript:;"
					},
					{
						game_name:'极品飞车Online',
						url:"javascript:;"
					},
					{
						game_name:'颜值',
						url:"javascript:;"
					},
					{
						game_name:'美食',
						url:"javascript:;"
					},
					{
						game_name:'御宅',
						url:"javascript:;"
					}
			]
		}
	},
	changeStyle: function (e) {
		console.log(e.target);
		if(e.target.innerHTML == "热门分类" || e.target.innerHTML == "玩家推荐") {
			return;
		}
		var li = e.currentTarget.childNodes;
		var a = [];
		for (var i = 0; i < li.length; i++){
			a.push(li[i].childNodes);
		}
		// for (var j = 0; j < a.length; j++){
		// 	a[j][0].className = "";
		// }
		e.target.classList.add("cur");
	},
	gotoSearch: function (e) {
		// e.preventDefault();
		if (e.keyCode == 13){
			// e.PrventDefault();
			// console.log(this.refs.input.value);
			if (this.refs.inputs.value == "") {
				return;
			}
			this.refs.search.style.display = "none";
			ReactRouter.hashHistory.replace("/live/" + this.refs.inputs.value);
			// console.log(location.hash)
		}
	},
	createKindlist: function (data) {
		return data.map(function (obj, index) {
			return <li key={index}>
				<a href={obj.url}>{obj.game_name}</a>
			</li>
		})
	},
	render: function () {
		return (
			<div className="header">
				<div className="container">
					<div className="navbar-header">
						<a href="#" className="navbar-brand">
							<img src="img/logo.png" alt=""/>
						</a>
					</div>
					<ul className="navbar-nav nav nav-pills pull-right">
						<li>
							<a className ="down" href="javascript:;">下载</a>
						</li>
						<li>
							<a className = 'history' href="javascript:;">历史</a>
						</li>
						<li>
							<a className = "login" href="javascript:;">登陆</a>
						</li>
						<li>
							<a className = "regist" href="javascript:;">注册</a>
						</li>
					</ul>
					<ul onClick={this.changeStyle} ref="inp" className="navbar-nav nav nav-pills pull-left">
						<li>
							<a className="cur" href="#/">首页</a>
						</li>
						<li>
							<a href="#/live/all">直播</a>
						</li>
						<li>
							<a href="#/kinds/all">分类</a>
							<div className="expand_game">
								<i className="arrow"></i>
								<div className="top">
									<p>热门分类</p>
									<ul>{this.createKindlist(this.state.data1)}</ul>
								</div>
								<div className="bottom">
									<p>玩家推荐</p>
									<ul>{this.createKindlist(this.state.data2)}</ul>
								</div>
								<a href="javascript:;" className="link">
									更多
								</a>
							</div>
						</li>
						<li>
							<a href="javascript:;">视频</a>
						</li>
					</ul>
					<div className="form form-group">
						<div className="form-horizontal">
							<input onKeyDown={this.gotoSearch} onKeyUp={this.showSearch} ref="inputs" type="text" className="form-control" placeholder="kpl"/>
							<div ref="search" className="search-tip">
								<i></i>
								<ul onClick={this.getValue}>
									{this.createList()}
								</ul>
							</div>
						</div>
						<span className="glyphicon glyphicon-search" aria-hidden="true"></span>
					</div>
				</div>
			</div>
		)
	},
	showSearch: function () {
		var val = this.refs.inputs.value;
		$.ajax({
				url:"http://search.huya.com/?callback=Huya&m=Search&do=getSearchContent&q="+val+"&uid=0&v=4&typ=-5&livestate=0&rows=5&_=1500096819282"
,
				dataType:'jsonp',
				jsonpCallback:"Huya",
				success: function (data) {
					var result = [];
					// console.log(data.response[1024].docs)
					data.response[1024].docs.forEach(function (obj, index) {
						if(index % 5 == 0) {
							result.push(obj);
						}
					})
					// console.log(result);
					this.setState({
						list:result
					})
					// console.log(this.state.list);
				}.bind(this)
			});
		this.refs.search.style.display = "block";
	},
	createList: function () {
		return this.state.list.map(function (obj, index) {
			return <li key={index}>
						{obj.game_name}
					</li>
		})
	},
	blur: function () {
		// console.log(123);
		this.refs.search.style.display = "none";
	},
	getValue:function (e) {
		console.log(e.target.innerHTML);
		this.refs.inputs.value = e.target.innerHTML;
		this.refs.search.style.display = "none";
	},
	componentDidMount: function () {
		document.onclick = function () {
			this.refs.search.style.display = "none";
		}.bind(this)
	}
})
module.exports = Header;