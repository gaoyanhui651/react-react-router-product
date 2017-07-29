var Header = require('../modules/header/');
var Sider = require('../modules/sider/sider.jsx');
var Rightsider = require('../modules/rightsider/rightsider.jsx');
var LiveAction = require('../modules/action/live.jsx');
var TypeAction = require('../modules/action/type.jsx');
var SearchAction = require('../modules/action/search.jsx');
var App = React.createClass({
	//检测路变化
	checkRoute: function () {
		// console.log(this.props.location.pathname);
		// console.log(this.props.params.query)
		// console.log(this.props.location.pathname.indexOf("/kinds/") === 0)
			var sider = document.getElementsByClassName("sider")[0];
			var siderLi = sider.getElementsByTagName('li')
			var headerA = document.getElementsByClassName("pull-left")[0].getElementsByTagName('a')
			// console.log(headerLi);
			for (var i = 0; i< siderLi.length; i++){
				siderLi[i].classList.remove('cur');
			}
			for (var j = 0; j < headerA.length; j++){
				headerA[j].classList.remove('cur');
			}
		if (this.props.location.pathname === "/") {
			headerA[0].classList.add('cur');
			return;
		}else if (this.props.location.pathname.indexOf("/kinds/") === 0) {
			//改变侧边栏的样式
			siderLi[2].classList.add('cur');
			//改变header的样式
			headerA[2].classList.add('cur');
			//第四步 将分类的类型发送给Store
			//分类筛选
			TypeAction.changeType(this.props.params.type);
		}else if (this.props.location.pathname.indexOf('/live/' === 0)){
			//第四步 将分类的数据传递Store
			// console.log(this.props.params.query);
			LiveAction.changeType(this.props.params.query);
			//搜索筛选
			SearchAction.searchChange(this.props.params.query);
			//改变侧边栏的样式
			siderLi[1].classList.add('cur');
			//改变header的样式
			headerA[1].classList.add('cur');

		}
	},
	render: function () {
		return (
			<div>
				<Header></Header>
				<Sider></Sider>
				<Rightsider></Rightsider>
				{/*第一步 定义路由容器*/}
				{this.props.children}
			</div>
		)
	},
	//组件构建完成后 检测路由
	componentDidMount: function () {
		this.checkRoute();
		var sider = document.getElementsByClassName("sider")[0];
		// console.log(this.props.location.pathname)
		if (this.props.location.pathname == '/') {
			sider.style.display = "none";
		}else {
			sider.style.display = "block";
		}
	},
	//组件存在其再次进行检测
	componentDidUpdate: function () {
		this.checkRoute();
		var sider = document.getElementsByClassName("sider")[0];
		// console.log(this.props.location.pathname)
		if (this.props.location.pathname == '/') {
			sider.style.display = "none"
		}else {
			sider.style.display = "block"
		}
	}
})
module.exports = App;