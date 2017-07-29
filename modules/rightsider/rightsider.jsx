var Rightsider = React.createClass({
	render: function () {
		return (
			<section className="right_sider">
				<ul>
					<li className="first">
						<a href="javascript:;">
							<i className="download"></i>
							<span>下载</span>
						</a>
						<div className="app">
							<a href="" className="click_down">下载APP</a>
						</div>
					</li>
					<li>
						<a href="javascript:;">
							<i className="livestart"></i>
							<span>开播</span>
						</a>
					</li>
					<li>
						<a href="javascript:;">
							<i className="request"></i>
							<span>反馈</span>
						</a>
					</li>
					<li>
						<a href="javascript:;">
							<i className="help"></i>
							<span>帮助</span>
						</a>
					</li>
					<li className="last">
						<a href="javascript:;">
							<i className="gotop"></i>
							<span>顶部</span>
						</a>
					</li>
				</ul>
			</section>
		)
	},
	componentDidMount: function () {
		var last = document.getElementsByClassName("last")[0];
		console.log(last);
		last.onclick = function () {
			console.log(123);
			window.scrollTo(0,0);
		}
		window.onscroll = function () {
			// console.log(window.scrollY);
			if (window.scrollY >= 500) {
				last.style.display = "block";
			}else {
				last.style.display = "none";
			}
		}
	}
})
module.exports = Rightsider;