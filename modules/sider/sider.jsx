var Sider = React.createClass({
	changeStyle: function (e) {
		var li = e.currentTarget.parentNode.childNodes;
		for (var i = 0; i < li.length; i++){
			li[i].className = "";
		}
		e.currentTarget.classList.add("cur");
	},
	render : function () {
		return (
			<section className="sider">
				<ul id="siderList">
					<li onClick={this.changeStyle}>
						<a className="take" href="javascript:;">
							订阅
							<i></i>
						</a>
					</li>
					<li onClick={this.changeStyle}>
						<a className="live" href="#/live/all">
							直播
							<i></i>
						</a>
					</li>
					<li onClick={this.changeStyle}>
						<a className="type" href="#/kinds/all">
							分类
							<i></i>
						</a>
					</li>
					<li onClick={this.changeStyle}>
						<a className="netgame" href="#/netgame">
							网游
							<i></i>
						</a>
					</li>
					<li onClick={this.changeStyle}>
						<a className="single" href="">
							单机
							<i></i>
						</a>
					</li>
					<li onClick={this.changeStyle}>
						<a className="happy" href="">
							娱乐
							<i></i>
						</a>
					</li>
					<li onClick={this.changeStyle}>
						<a className="handgame" href="">
							手游
							<i></i>
						</a>
					</li>
					<li onClick={this.changeStyle}>
						<a className="startlive" href="">
							开直播
							<i></i>
						</a>
					</li>
				</ul>
				<div>
					<a href="">举报</a>
				</div>
				<span className="show"></span>
			</section>
		)
	},
})
module.exports = Sider;