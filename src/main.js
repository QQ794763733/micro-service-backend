import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 导入全局样式
import '@/global/Global.css'

// 导入ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 导入Echarts 模块表：https://github.com/apache/incubator-echarts/blob/master/index.js
import VueECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/title'
import 'echarts/lib/component/dataZoom'
import 'echarts/lib/component/geo'
import 'echarts/lib/component/polar'
import 'echarts/lib/component/dataset'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/visualMap'
import 'echarts/lib/component/visualMapContinuous'
import 'echarts/lib/component/visualMapPiecewise'
import 'echarts-gl'
require('echarts/map/js/world.js');
Vue.component('v-chart', VueECharts)

// 导入高德地图
import VueAMap from 'vue-amap'
Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
	key: '09fa9218f1f40f737a32328c386dcd9c',
	plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType',
		'AMap.PolyEditor', 'AMap.CircleEditor'
	],
	// 默认高德 sdk 版本为 1.4.4
	v: '1.4.4'
})

// 导入全局常量
import {apiUrl} from "@/global/Global.js"
Vue.prototype.apiUrl = apiUrl;

// 导入AXIOS
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = apiUrl;

Vue.use(VueAxios, axios)

// 自定义权限指令
Vue.directive('auth',{
	inserted(el, binding, vnode){
		let value = binding.value;
		if(!store.state.apis.get(value)){
			el.parentNode.removeChild(el);
		}
	}
});

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");
