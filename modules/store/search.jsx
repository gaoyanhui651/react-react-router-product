var SearchAction = require('../action/search.jsx');
var Conf = require('../conf.jsx');
var SearchStore = Reflux.createStore({
	//监听事件
	listenables:[SearchAction],
	//注册消息
	onSearchChange: function (query) {
		var result = [];
		if (query == "all"){
			result = Conf.dataBase;
		}else {
			Conf.dataBase.forEach(function (obj, index) {
				for (var i in obj) {
					if (obj[i].indexOf(query) >= 0) {
						result.push(obj);
					}
				}
			})
		}
			this.trigger(result);
	}
})
module.exports = SearchStore;