var Conf = require('../conf.jsx');
var Util = require('../mixin/mixin.jsx');
var LiveStore = require('../store/live.jsx');
var SearchStore = require('../store/search.jsx');
var LiveAction = require('../action/live.jsx');
var Live = React.createClass({
	getInitialState: function () {
		return {
			list:[]
		}
	},
	changeStyle: function (e) {
		var val = e.target.innerHTML;
		var li = e.currentTarget.childNodes;
		var a = [];
		for (var i = 0; i < li.length; i++){
			a.push(li[i].childNodes);
		}
		// console.log(a);
		// console.log(a[3])
		for (var j = 0; j < a.length; j++){
			//删除类
			a[j][0].className = "";
		}
		//添加类
		e.target.classList.add("cur");
	},
	//定义混合
	//第三步 为视图绑定 Store 第也个参数为Store对象，第二个参数是绑定的状态数据
	mixins:[Util,Reflux.connect(LiveStore,'list'), Reflux.connect(SearchStore,"list")],
	//创建列表
	createList: function () {
		// console.log(this.state.list)
		return this.state.list.map(function (obj, index) {
			// console.log(obj.tag_recommend)
			if(obj.tag_recommend && obj.tag_blue) {
				return (
					<li key={index}>
						<a href="http://www.huya.com/1929787489">
							<img src={obj.show_pics} alt="" className="pic"/>
							<em className="tag_recommend">{obj.tag_recommend}</em>
							<em className="tag_blue">{obj.tag_blue}</em>
							<div className="targ">
								<i className="targ_hover"></i>
							</div>
							<div className="title" href="">{obj.title}</div>
							<span className="txt">
								<span className="f1">
									<img src={obj.header_pics} alt="" className="header_pic"/>
									<i className="nick">{obj.alt}</i>
								</span>
								<div href="" className="type">{obj.type}</div>
								<span className="num">
									<i className="js_num">{obj.js_num}</i>
									<i className="js_icon"></i>
								</span>
							</span>
						</a>
					</li>
				)
			}else if (obj.tag_recommend && !obj.tag_blue) {
				return (
					<li key={index}>
						<a href="http://www.huya.com/1929787489">
							<img src={obj.show_pics} alt="" className="pic"/>
							<em className="tag_recommend">{obj.tag_recommend}</em>
							<div className="targ">
								<i className="targ_hover"></i>
							</div>
							<div className="title" href="">{obj.title}</div>
							<span className="txt">
								<span className="f1">
									<img src={obj.header_pics} alt="" className="header_pic"/>
									<i className="nick">{obj.alt}</i>
								</span>
								<div href="" className="type">{obj.type}</div>
								<span className="num">
									<i className="js_num">{obj.js_num}</i>
									<i className="js_icon"></i>
								</span>
							</span>
						</a>
					</li>
				)
			}else if (!obj.tag_recommend && obj.tag_blue) {
				return (
					<li key={index}>
						<a href="http://www.huya.com/1929787489">
							<img src={obj.show_pics} alt="" className="pic"/>
							<em className="tag_blue">{obj.tag_blue}</em>
							<div className="targ">
								<i className="targ_hover"></i>
							</div>
							<div className="title" href="">{obj.title}</div>
							<span className="txt">
								<span className="f1">
									<img src={obj.header_pics} alt="" className="header_pic"/>
									<i className="nick">{obj.alt}</i>
								</span>
								<div href="" className="type">{obj.type}</div>
								<span className="num">
									<i className="js_num">{obj.js_num}</i>
									<i className="js_icon"></i>
								</span>
							</span>
						</a>
					</li>
				)
			}else {
				return (
					<li key={index}>
						<a href="http://www.huya.com/1929787489">
							<img src={obj.show_pics} alt="" className="pic"/>
							<div className="targ">
								<i className="targ_hover"></i>
							</div>
							<div className="title" href="">{obj.title}</div>
							<span className="txt">
								<span className="f1">
									<img src={obj.header_pics} alt="" className="header_pic"/>
									<i className="nick">{obj.alt}</i>
								</span>
								<div href="" className="type">{obj.type}</div>
								<span className="num">
									<i className="js_num">{obj.js_num}</i>
									<i className="js_icon"></i>
								</span>
							</span>
						</a>
					</li>
				)
			}
		})
	},
	//定义默认状态数据
	getInitialState: function () {
		return {
			list:[]
		}
	},
	render: function () {
		return (
			<section className="_live">
				<div className="hd clearfix">
					<h2>全部直播</h2>
					<ul onClick={this.changeStyle}>
						<li>
							<a className="cur" href="#/live/all">全部</a>
						</li>
						<li>
							<a href="#/live/大神推荐">大神推荐</a>
						</li>
						<li>
							<a href="#/live/视频美女">视频美女</a>
						</li>
						<li>
							<a href="#/live/蓝光">蓝光</a>
						</li>
					</ul>
				</div>
				<div className="bd">
					<ul>{this.createList()}</ul>
				</div>
			</section>
		)
	},
	componentDidMount: function () {
		this.ajax("data/live.json", function (res) {
				// console.log(111);
			if(res && res.errno == 0) {
				// console.log(res.data);
				Conf.dataBase = res.data
				LiveAction.changeType(this.props.params.query);
				this.setState({
					list:Conf.dataBase
				})
				// console.log(this.state.list)
			}
		}.bind(this))
	}
})
module.exports = Live;