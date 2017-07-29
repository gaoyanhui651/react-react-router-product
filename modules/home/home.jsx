var Home = React.createClass({
	getInitialState: function () {
		return {
			data:[
				{src:"img/home/home_recommend0.jpg"},
				{src:"img/home/home_recommend1.jpg"},
				{src:"img/home/home_recommend2.jpg"},
				{src:"img/home/home_recommend3.jpg"},
				{src:"img/home/home_recommend4.jpg"},
				{src:"img/home/home_recommend5.jpg"}
			],
			num:0
		}
	},
	changeToggle: function (e) {
		var main_left = e.currentTarget.parentNode.parentNode.parentNode.childNodes[0];
		this.state.num = e.currentTarget.dataset.num;
		main_left.style.background = "url(img/home/home_recommend" + this.state.num + ".jpg)"+" no-repeat";
		main_left.style.backgroundSize = "cover";
		main_left.style.backgroundPostion = "center top";
		var li = e.currentTarget.parentNode.childNodes;
		for (var i = 0; i < li.length; i++){
			li[i].classList.remove('cur');
		}
		e.currentTarget.classList.add("cur");
	},
	createList: function () {
		return this.state.data.map(function (obj, index) {
			return <li key={index} className={index == 0 ? "cur" : ""} data-num={index} onClick={this.changeToggle}>
						<i></i>
						<a href="javascript:;">
							<img src={obj.src} alt=""/>
						</a>
					</li>
		}.bind(this))
	},
	render: function () {
		// console.log("首页")
		return (
			<section className="home">
				<div className="main">
					<div className="main_left">
						<i className="targ_hover"></i>
					</div>
					<div className="main_right">
						<ul>
						{this.createList()}
						</ul>
					</div>
				</div>
			</section>
		)
	},
	componentDidMount: function () {
		// console.log(this);
	}
})
module.exports = Home;