var App = require('../app.jsx');
var Netgame = require('../netgame/netgame.jsx');
var Kinds = require('../kinds/kinds.jsx');
var Live = require('../live/live.jsx');
var Home = require('../home/home.jsx');
// 定义路由规则
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var routes = (
	<Router>
		<Route path='/' component={App}>
			<Route path="netgame" component={Netgame}></Route>
			<Route path="kinds/:type" component={Kinds}></Route>
			<Route path="live/:query" component={Live}></Route>
			<IndexRoute component={Home}></IndexRoute>
		</Route>
	</Router>
)
module.exports = routes;