var LiveAction = require('../action/live.jsx');
var Conf = require('../conf.jsx');
var LiveStore = Reflux.createStore({
	//监听action对象
	listenables:[LiveAction],
	//订阅
	onChangeType: function (query) {
		// console.log(query)
		var result = [];
		if(query == "all"){
			result = Conf.dataBase;
			this.trigger(result);
		}
		else {
			Conf.dataBase.forEach(function (obj, index) {
				for (var i in obj){
					if (obj[i].indexOf(query) === 0){
						result.push(obj);
					}
				}
			})
			this.trigger(result);
		}
	}
})
module.exports = LiveStore;