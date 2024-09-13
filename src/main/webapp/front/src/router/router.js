import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import payList from '../pages/pay'

import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import qiyeList from '../pages/qiye/list'
import qiyeDetail from '../pages/qiye/detail'
import qiyeAdd from '../pages/qiye/add'
import gangweifenleiList from '../pages/gangweifenlei/list'
import gangweifenleiDetail from '../pages/gangweifenlei/detail'
import gangweifenleiAdd from '../pages/gangweifenlei/add'
import zhaopinxinxiList from '../pages/zhaopinxinxi/list'
import zhaopinxinxiDetail from '../pages/zhaopinxinxi/detail'
import zhaopinxinxiAdd from '../pages/zhaopinxinxi/add'
import yingpinxinxiList from '../pages/yingpinxinxi/list'
import yingpinxinxiDetail from '../pages/yingpinxinxi/detail'
import yingpinxinxiAdd from '../pages/yingpinxinxi/add'
import mianshitongzhiList from '../pages/mianshitongzhi/list'
import mianshitongzhiDetail from '../pages/mianshitongzhi/detail'
import mianshitongzhiAdd from '../pages/mianshitongzhi/add'
import syslogList from '../pages/syslog/list'
import syslogDetail from '../pages/syslog/detail'
import syslogAdd from '../pages/syslog/add'
import newstypeList from '../pages/newstype/list'
import newstypeDetail from '../pages/newstype/detail'
import newstypeAdd from '../pages/newstype/add'
import systemintroList from '../pages/systemintro/list'
import systemintroDetail from '../pages/systemintro/detail'
import systemintroAdd from '../pages/systemintro/add'
import discusszhaopinxinxiList from '../pages/discusszhaopinxinxi/list'
import discusszhaopinxinxiDetail from '../pages/discusszhaopinxinxi/detail'
import discusszhaopinxinxiAdd from '../pages/discusszhaopinxinxi/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'qiye',
					component: qiyeList
				},
				{
					path: 'qiyeDetail',
					component: qiyeDetail
				},
				{
					path: 'qiyeAdd',
					component: qiyeAdd
				},
				{
					path: 'gangweifenlei',
					component: gangweifenleiList
				},
				{
					path: 'gangweifenleiDetail',
					component: gangweifenleiDetail
				},
				{
					path: 'gangweifenleiAdd',
					component: gangweifenleiAdd
				},
				{
					path: 'zhaopinxinxi',
					component: zhaopinxinxiList
				},
				{
					path: 'zhaopinxinxiDetail',
					component: zhaopinxinxiDetail
				},
				{
					path: 'zhaopinxinxiAdd',
					component: zhaopinxinxiAdd
				},
				{
					path: 'yingpinxinxi',
					component: yingpinxinxiList
				},
				{
					path: 'yingpinxinxiDetail',
					component: yingpinxinxiDetail
				},
				{
					path: 'yingpinxinxiAdd',
					component: yingpinxinxiAdd
				},
				{
					path: 'mianshitongzhi',
					component: mianshitongzhiList
				},
				{
					path: 'mianshitongzhiDetail',
					component: mianshitongzhiDetail
				},
				{
					path: 'mianshitongzhiAdd',
					component: mianshitongzhiAdd
				},
				{
					path: 'syslog',
					component: syslogList
				},
				{
					path: 'syslogDetail',
					component: syslogDetail
				},
				{
					path: 'syslogAdd',
					component: syslogAdd
				},
				{
					path: 'newstype',
					component: newstypeList
				},
				{
					path: 'newstypeDetail',
					component: newstypeDetail
				},
				{
					path: 'newstypeAdd',
					component: newstypeAdd
				},
				{
					path: 'systemintro',
					component: systemintroList
				},
				{
					path: 'systemintroDetail',
					component: systemintroDetail
				},
				{
					path: 'systemintroAdd',
					component: systemintroAdd
				},
				{
					path: 'discusszhaopinxinxi',
					component: discusszhaopinxinxiList
				},
				{
					path: 'discusszhaopinxinxiDetail',
					component: discusszhaopinxinxiDetail
				},
				{
					path: 'discusszhaopinxinxiAdd',
					component: discusszhaopinxinxiAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
