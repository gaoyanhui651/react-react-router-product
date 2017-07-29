var TypeAction = require('../action/type.jsx');
var Conf = require('../conf.jsx');
var typeStore = Reflux.createStore({
	// 监听 Action对象 参数是每一个Action对象
	listenables: [TypeAction],
	// 订阅事件
	onChangeType: function (type) {
		// console.log(type);
		// console.log(this, arguments);
		var result = [];
		if(type == "all"){
			result = Conf.dataBase;
		} else {
			Conf.dataBase.forEach(function (obj, index) {
				if(obj.type == type) {
					result.push(obj)
				}
			})
		}
		//通知组件更新
		this.trigger(result);
	}
})
module.exports = typeStore;