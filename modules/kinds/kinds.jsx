var Conf = require('../conf.jsx');
var Util = require('../mixin/mixin.jsx');
var typeStore = require('../store/type.jsx');
var TypeAction = require('../action/type.jsx');
var Kinds = React.createClass({
	changeStyle: function (e) {
		// console.log(e.target);
		var li = e.currentTarget.childNodes;
		var a = [];
		for (var i = 0; i < li.length; i++){
			a.push(li[i].childNodes);
		}
		// console.log(a);
		// console.log(a[3])
		for (var j = 0; j < a.length; j++){
			a[j][0].className = "";
		}
		e.target.classList.add("cur");
	},
	//定义混合
	//第三步 为视图 绑定Store 参数为Store实例化对象 和 状态数据
	mixins:[Util,Reflux.connect(typeStore,'list')],
	createList: function () {
		return this.state.list.map(function (obj, index) {
			// console.log(666)
			return (
				<li key={index}>
					<a href={'#/live/'+obj.name}>
						<img src={obj.url} alt=""/>
						<p>{obj.name}</p>
					</a>
				</li>
			)
		})
	},
	//定义 默认状态数据
	getInitialState: function () {
		return {
			list:[]
		}
	},
	render: function () {
		return (
			<section className="_kinds">
				<div className="hd clearfix">
					<h2>全部分类</h2>
					<ul onClick={this.changeStyle}>
						<li>
							<a className="cur" href="#/kinds/all">全部</a>
						</li>
						<li>
							<a href="#/kinds/netgame">网游竞技</a>
						</li>
						<li>
							<a href="#/kinds/single">单机热游</a>
						</li>
						<li>
							<a href="#/kinds/happy">娱乐综艺</a>
						</li>
						<li>
							<a href="#/kinds/handgame">手游休闲</a>
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
		this.ajax("data/kinds.json", function (res) {
				// console.log(111);
			if(res && res.errno == 0) {
				// console.log(res.data);
				Conf.dataBase = res.data
				this.setState({
					list:Conf.dataBase
				})
				// console.log(this.state.list)
			}
		}.bind(this))
	}
})
module.exports = Kinds;