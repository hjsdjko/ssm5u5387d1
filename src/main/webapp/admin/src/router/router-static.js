import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import qiye from '@/views/modules/qiye/list'
    import discusszhaopinxinxi from '@/views/modules/discusszhaopinxinxi/list'
    import news from '@/views/modules/news/list'
    import zhaopinxinxi from '@/views/modules/zhaopinxinxi/list'
    import systemintro from '@/views/modules/systemintro/list'
    import yonghu from '@/views/modules/yonghu/list'
    import gangweifenlei from '@/views/modules/gangweifenlei/list'
    import syslog from '@/views/modules/syslog/list'
    import yingpinxinxi from '@/views/modules/yingpinxinxi/list'
    import config from '@/views/modules/config/list'
    import mianshitongzhi from '@/views/modules/mianshitongzhi/list'
    import newstype from '@/views/modules/newstype/list'


//2.配置路由   注意：名字
export const routes = [{
    path: '/',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center', affix: true}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/qiye',
        name: '企业',
        component: qiye
      }
      ,{
	path: '/discusszhaopinxinxi',
        name: '招聘信息评论',
        component: discusszhaopinxinxi
      }
      ,{
	path: '/news',
        name: '招聘资讯',
        component: news
      }
      ,{
	path: '/zhaopinxinxi',
        name: '招聘信息',
        component: zhaopinxinxi
      }
      ,{
	path: '/systemintro',
        name: '系统简介',
        component: systemintro
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/gangweifenlei',
        name: '岗位分类',
        component: gangweifenlei
      }
      ,{
	path: '/syslog',
        name: '系统日志',
        component: syslog
      }
      ,{
	path: '/yingpinxinxi',
        name: '应聘信息',
        component: yingpinxinxi
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/mianshitongzhi',
        name: '面试通知',
        component: mianshitongzhi
      }
      ,{
	path: '/newstype',
        name: '招聘资讯分类',
        component: newstype
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
