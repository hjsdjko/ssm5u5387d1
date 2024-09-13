<template>
<div class="home-preview" :style='{"margin":"0px auto","flexWrap":"wrap","flexDirection":"column","background":"none","display":"flex","width":"100%","justifyContent":"center"}'>

	<!-- 搜索 -->
	<div id="search" class="search animate__animated" :style='{"padding":"10px 7% 0","margin":"0 0 10px","flexWrap":"wrap","background":"none","display":"flex","width":"100%","justifyContent":"flex-end","height":"auto"}'>
		<div :style='{"margin":"0 10px 0 0"}' class="select">
			<el-select v-model="queryIndex">
				<el-option
				  v-for="(item,index) in queryList"
				  :key="index"
				  :label="item.queryName"
				  :value="index"
				></el-option>
			</el-select>
		</div>
		<div :style='{"margin":"0 10px 0 0"}' class="input" v-if="queryIndex==0">
			<el-input v-model="zhaopinxinxigangweimingcheng" placeholder="岗位名称"></el-input>
		</div>
		<div :style='{"margin":"0"}' class="btn" v-if="queryIndex==0">
			<el-button :style='{"border":"0","cursor":"pointer","padding":"0 10px","margin":"0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"4px","background":"#F5BB00","width":"auto","lineHeight":"36px","fontSize":"14px","height":"36px"}' type="primary" @click="search('zhaopinxinxi')">
				<span class="icon iconfont icon-fangdajing07" :style='{"color":"rgba(255, 255, 255, 1)","margin":"0 4px 0 0","fontSize":"14px"}'></span>
				搜索
			</el-button>
		</div>
	</div>
	<!-- 搜索 -->



		<!-- 系统简介 -->
		<div id="system" class="animate__animated" :style='{"padding":"30px 7% 20px","margin":"20px auto 0","flexWrap":"wrap","background":"#f1f1f1","display":"flex","width":"100%","height":"auto","order":"5"}'>
		  <div :style='{"width":"100%","lineHeight":"56px","fontSize":"32px","color":"#F5BB00","textAlign":"center","background":"url(http://codegen.caihongy.cn/20230915/b96d1e15768f4ac495e60a79e04cb731.png) no-repeat center bottom"}'>{{systemIntroductionDetail.title}}</div>
		  <div :style='{"width":"100%","margin":"0 0 30px","lineHeight":"1.5","fontSize":"26px","color":"#C5C5C5","textAlign":"center"}'>{{systemIntroductionDetail.subtitle}}</div>
		  <div :style='{"padding":"0 0px","borderRadius":"6px","flexWrap":"wrap","display":"flex","width":"48%","height":"320px","order":"2"}'>
		    <img :style='{"width":"100%","margin":"0 10px","objectFit":"contain","background":"#fff","display":"block","height":"100%"}' :src="baseUrl + systemIntroductionDetail.picture1">
		    <img :style='{"margin":"0 10px","objectFit":"cover","flex":1,"display":"none","height":"120px"}' :src="baseUrl + systemIntroductionDetail.picture2">
		    <img :style='{"margin":"0 10px","objectFit":"cover","flex":1,"display":"none","height":"120px"}' :src="baseUrl + systemIntroductionDetail.picture3">
		  </div>
		  <div :style='{"padding":"0px","margin":"0 0 10px 0","overflow":"hidden","color":"rgb(102, 102, 102)","width":"48%","lineHeight":"24px","fontSize":"16px","textIndent":"2em","height":"320px"}' v-html="systemIntroductionDetail.content"></div>
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"border":"0","cursor":"pointer","margin":"20px auto","borderRadius":"6px","textAlign":"center","background":"#F5BB00","display":"block","width":"120px","lineHeight":"36px","order":"3"}' @click="toDetail('systemintroDetail',systemIntroductionDetail)">
		    <span :style='{"color":"#f5f5f5","fontSize":"14px"}'>点击查看</span>
		    <span class="icon iconfont icon-gengduo1" :style='{"color":"#f5f5f5","fontSize":"12px"}'></span>
		  </div>
		</div>
		<!-- 系统简介 -->
		
	<!-- 新闻资讯 -->
	<div id="animate_newsnews" class="news animate__animated" :style='{"padding":"0","margin":"0 0 10px","background":"#f1f1f1","order":"3"}'>
		<div v-if="false" class="idea newsIdea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
			<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
			<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
			<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
			<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
			<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		</div>
		
		<div class="title" :style='{"width":"100%","margin":"40px auto","lineHeight":"50px","textAlign":"center","background":"url(http://codegen.caihongy.cn/20230915/b96d1e15768f4ac495e60a79e04cb731.png) no-repeat center top"}'>
			<span :style='{"color":"#F5BB00","fontSize":"32px","lineHeight":"40px"}'>招聘资讯</span>
		</div>
		
			
			
			
			
			
			
			
			
			
			
		









		<div v-if="newsList.length" class="list list22 index-pv1" :style='{"width":"100%","padding":"10px 7%","fontSize":"14px","height":"auto"}'>
		  <div :style='{"width":"100%","color":"#fff","flexWrap":"wrap","justifyContent":"space-between","display":"flex","height":"auto"}'>
			<template v-for="(item,index) in newsList">
			<div v-if="index < 3" class="list-item animation-box" :style='{"cursor":"pointer","width":"31%","position":"relative","height":"auto"}' @click="toDetail('newsDetail', newsList[index*5])">
		      <img :style='{"width":"100%","objectFit":"cover","borderRadius":"6px","display":"block","height":"300px"}' :src="baseUrl + item.picture" alt="" />
			  <div :style='{"padding":"0 0 6px","borderRadius":"0 0 6px 6px","left":"0","bottom":"0","background":"rgba(0,0,0,.3)","width":"100%","position":"absolute"}'>
		        <div :style='{"padding":"0 10px","overflow":"hidden","whiteSpace":"nowrap","color":"#fff","width":"100%","lineHeight":"44px","fontSize":"16px","textOverflow":"ellipsis"}' class="title">{{item.title}}</div>
		        <div :style='{"padding":"0 10px"}'>
		          <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
		          <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.addtime}}</span>
		        </div>
		        <div :style='{"padding":"0 10px","display":"inline-block"}'>
		          <span class="icon iconfont icon-geren16" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
		          <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.name}}</span>
		        </div>
		        <div :style='{"padding":"0 10px","display":"inline-block"}'>
		          <span class="icon iconfont icon-zan10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
		          <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.thumbsupnum}}</span>
		        </div>
		        <div :style='{"padding":"0 10px","display":"inline-block"}'>
		          <span class="icon iconfont icon-shoucang10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
		          <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.storeupnum}}</span>
		        </div>
		        <div :style='{"padding":"0 10px","display":"inline-block"}'>
		          <span class="icon iconfont icon-chakan9" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
		          <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.clicknum}}</span>
		        </div>
		      </div>
		    </div>
			</template>
		  </div>
		  <div :style='{"width":"100%","color":"#999","flexWrap":"wrap","display":"flex","height":"auto"}'>
			<template v-for="(item,index) in newsList">
			<div v-if="index > 2" class="list-item animation-box" :style='{"cursor":"pointer","width":"31.3%","margin":"20px 2% 0 0","display":"flex","height":"auto"}' @click="toDetail('newsDetail', item)">
		      <img :style='{"width":"150px","objectFit":"cover","borderRadius":"6px","display":"block","height":"130px"}' :src="baseUrl + item.picture" alt="" />
		  			  <div :style='{"padding":"10px","overflow":"hidden","flex":"1","height":"auto"}'>
		        <div :style='{"padding":"0 10px","lineHeight":"24px","fontSize":"14px","color":"#333","fontWeight":"600","height":"48px"}' class="title">{{item.title}}</div>
		        <div :style='{"padding":"0 10px","margin":"0 0 10px"}'>
		          <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
		          <span :style='{"color":"inherit","lineHeight":"24px","fontSize":"inherit"}'>{{item.addtime}}</span>
		        </div>
		        <div :style='{"padding":"0 10px","display":"inline-block"}'>
		          <span class="icon iconfont icon-geren16" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
		          <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.name}}</span>
		        </div>
		        <div :style='{"padding":"0 10px","display":"inline-block"}'>
		          <span class="icon iconfont icon-zan10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
		          <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.thumbsupnum}}</span>
		        </div>
		        <div :style='{"padding":"0 10px","display":"inline-block"}'>
		          <span class="icon iconfont icon-shoucang10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
		          <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.storeupnum}}</span>
		        </div>
		        <div :style='{"padding":"0 10px","display":"inline-block"}'>
		          <span class="icon iconfont icon-chakan9" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
		          <span :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.clicknum}}</span>
		        </div>
		      </div>
		    </div>
			</template>
		  </div>
		</div>


		<div @click="moreBtn('news')" :style='{"border":"0","cursor":"pointer","margin":"40px auto","borderRadius":"6px","textAlign":"center","background":"#F5BB00","display":"block","width":"120px","lineHeight":"36px"}'>
			<span :style='{"color":"#f5f5f5","fontSize":"14px"}'>查看更多</span>
			<i :style='{"color":"#f5f5f5","fontSize":"12px"}' class="icon iconfont icon-gengduo1"></i>
		</div>
		
		</div>
	<!-- 新闻资讯 -->


<!-- 商品推荐 -->
<div id="animate_recommendzhaopinxinxi" class="recommend animate__animated" :style='{"width":"100%","padding":"20px 0","margin":"0 0 20px","background":"#f1f1f1","order":"1"}'>
	<div v-if="false" class="idea recommendIdea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
    <div class="title" :style='{"width":"100%","margin":"30px auto","lineHeight":"50px","textAlign":"center","background":"url(http://codegen.caihongy.cn/20230915/b96d1e15768f4ac495e60a79e04cb731.png) no-repeat center top"}'>
		<span :style='{"color":"#F5BB00","fontSize":"32px","lineHeight":"40px"}'>招聘信息推荐</span>
	</div>
	
	
	
	
	
	
	
	
	
	



	<div v-if="zhaopinxinxiRecommend.length" class="list list12 index-pv1 list12zhaopinxinxi" :style='{"width":"100%","padding":"0 7%","background":"none","height":"auto"}'>
	  <div class="list" :style='{"margin":"30px 0 0","overflow":"hidden","flexWrap":"wrap","flex":"1","background":"none","display":"flex","height":"auto"}'>
	    <div :style='{"cursor":"pointer","width":"31.3%","margin":"0 2% 20px 0","overflow":"hidden","position":"relative","height":"auto"}' class="item list-item animation-box" v-for="item,index in zhaopinxinxiRecommend" :key="index" @click="toDetail('zhaopinxinxiDetail', item)">
			<img :name="item.id" :style='{"margin":"0 0 6px","objectFit":"contain","borderRadius":"6px","background":"#f8f8f8","display":"block","width":"100%","height":"280px"}' v-if="preHttp(item.gongzuohuanjing)" :src="item.gongzuohuanjing.split(',')[0]" alt="" />
			<img :name="item.id" :style='{"margin":"0 0 6px","objectFit":"contain","borderRadius":"6px","background":"#f8f8f8","display":"block","width":"100%","height":"280px"}' v-else :src="baseUrl + (item.gongzuohuanjing?item.gongzuohuanjing.split(',')[0]:'')" alt="" />
			<div class="line1" :style='{"padding":"0 10px","borderColor":"#ddd","margin":"0 0 6px","whiteSpace":"nowrap","color":"#333","textAlign":"center","overflow":"hidden","borderRadius":"6px","borderWidth":"0 0 0px","background":"none","width":"100%","lineHeight":"26px","fontSize":"14px","textOverflow":"ellipsis","borderStyle":"solid"}'>{{item.gangweimingcheng}}</div>
			<div class="line1" :style='{"padding":"0 10px","borderColor":"#ddd","margin":"0 0 6px","whiteSpace":"nowrap","color":"#333","textAlign":"center","overflow":"hidden","borderRadius":"6px","borderWidth":"0 0 0px","background":"none","width":"100%","lineHeight":"26px","fontSize":"14px","textOverflow":"ellipsis","borderStyle":"solid"}'>{{item.gangweifenlei}}</div>
			<div class="line1" :style='{"padding":"0 10px","borderColor":"#ddd","margin":"0 0 6px","whiteSpace":"nowrap","color":"#333","textAlign":"center","overflow":"hidden","borderRadius":"6px","borderWidth":"0 0 0px","background":"none","width":"100%","lineHeight":"26px","fontSize":"14px","textOverflow":"ellipsis","borderStyle":"solid"}'>{{item.qiyemingcheng}}</div>
	    </div>
	  </div>
	</div>




	
	<div @click="moreBtn('zhaopinxinxi')" :style='{"border":"0","cursor":"pointer","margin":"0px auto 20px","borderRadius":"6px","textAlign":"center","background":"#F5BB00","display":"block","width":"120px","lineHeight":"36px"}'>
		<span :style='{"color":"#f5f5f5","fontSize":"14px"}'>查看更多</span>
		<i :style='{"color":"#f5f5f5","fontSize":"12px"}' class="icon iconfont icon-gengduo1"></i>
	</div>
	
</div>
<!-- 商品推荐 -->

	
</div>
</template>

<script>
import 'animate.css'
import Swiper from "swiper";

  export default {
    //数据集合
    data() {
      return {
        baseUrl: '',
        systemIntroductionDetail: {},
        queryList:[
          {
              queryName:"岗位名称",
          },
        ],
        queryIndex: 0,
        zhaopinxinxigangweimingcheng: '',
        newsList: [],
        zhaopinxinxiRecommend: [],



		recommendIndex12zhaopinxinxi: 0,
		recommendList12zhaopinxinxi: [],
		recommendColumn12zhaopinxinxi: '',


      }
    },
    created() {
		this.baseUrl = this.$config.baseUrl;
		this.getNewsList();
		this.getSystemIntroduction();
		this.getList();
		this.zhaopinxinxiRecommendCate()
    },
	mounted() {
		window.addEventListener('scroll', this.handleScroll)
		setTimeout(()=>{
			this.handleScroll()
		},100)
		
		this.swiperChanges()
	},
	beforeDestroy() {
	  window.removeEventListener('scroll', this.handleScroll)
	},
    //方法集合
    methods: {
		swiperChanges() {
			setTimeout(()=>{
			},750)
		},
		zhaopinxinxiRecommendCate(){
			this.$http.get('gangweifenlei/list',{}).then(res => {
			  if (res.data.code == 0) {
				this.recommendList12zhaopinxinxi = res.data.data.list
			  }
			});
			this.recommendColumn12zhaopinxinxi = 'gangweifenlei'
		},
		recommendIndexClick12(index, name) {
			this['recommendIndex12' + name] = index
			this.getList()
			
			document.querySelectorAll('.recommend .list12' + name + ' .list .item').forEach(el => {
			  el.classList.remove("active")
			})
			setTimeout(() => {
			  document.querySelectorAll('.recommend .list12' + name + ' .list .item').forEach(el => {
			    el.classList.add("active")
			  })
			}, 1);
		},

		listIndexClick11(index, name) {
			this['listIndex11' + name] = index[this['listColumn11' + name]]
			this.getList()
		},

		handleScroll() {
			let arr = [
				{id:'search',css:'animate__bounce'},
				{id:'about',css:'animate__fadeInUp'},
				{id:'system',css:'animate__fadeInUp'},
				{id:'animate_recommendzhaopinxinxi',css:'animate__fadeInUp'},
				{id:'animate_newsnews',css:'animate__fadeInUp'},
				{id:'msgs',css:'animate__bounce'},
				{id:'friendly',css:'animate__bounce'}
			]
			
			for (let i in arr) {
				let doc = document.getElementById(arr[i].id)
				if (doc) {
					let top = doc.offsetTop
					let win_top = window.innerHeight + window.pageYOffset
					// console.log(top,win_top)
					if (win_top > top && doc.classList.value.indexOf(arr[i].css) < 0) {
						// console.log(doc)
						doc.classList.add(arr[i].css)
					}
				}
			}
		},
      preHttp(str) {
          return str && str.substr(0,4)=='http';
      },
      getSystemIntroduction() {
          this.$http.get('systemintro/detail/1', {}).then(res => {
            if(res.data.code == 0) {
              this.systemIntroductionDetail = res.data.data;
            }
          })
      },
      search(tablename) {
        if (this.queryIndex == 0 && this.zhaopinxinxigangweimingcheng) {
          this.$router.push({path: '/index/' + tablename, query: {indexQueryCondition: this.zhaopinxinxigangweimingcheng}});
        }
      },
		getNewsList() {
			let data = {
				page: 1,
				limit: 15,
                sort: 'addtime',
				order: 'desc'
			}
			this.$http.get('news/list', {params: data}).then(res => {
				if (res.data.code == 0) {
					this.newsList = res.data.data.list;
					
					
				}
			});
		},
		getList() {
			let autoSortUrl = "";
			let data = {}
          autoSortUrl = "zhaopinxinxi/autoSort";
          if(localStorage.getItem('frontToken')) {
              autoSortUrl = "zhaopinxinxi/autoSort2";
          }
			data = {
				page: 1,
				limit: 6,
			}
			if(this.recommendIndex12zhaopinxinxi != 0){
				data.gangweifenlei = this.recommendList12zhaopinxinxi[this.recommendIndex12zhaopinxinxi - 1].gangweifenlei
			}
			this.$http.get(autoSortUrl, {params: data}).then(res => {
				if (res.data.code == 0) {
					this.zhaopinxinxiRecommend = res.data.data.list;
					
					
					// 商品列表样式五
					
				}
			});
			
		},
		toDetail(path, item) {
			this.$router.push({path: '/index/' + path, query: {id: item.id}});
		},
		moreBtn(path) {
			this.$router.push({path: '/index/' + path});
		}
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.home-preview {
		// -------- search --------
		.search .select /deep/ .el-input__inner {
			border: 1px solid #ddd;
			border-radius: 4px;
			padding: 0 30px 0 10px;
			box-shadow: 0 0 0px rgba(64, 158, 255, .3);
			outline: none;
			color: rgba(64, 158, 255, 1);
			width: 180px;
			font-size: 14px;
			height: 36px;
		}
		
		.search .input /deep/ .el-input__inner {
			border: 1px solid #ddd;
			border-radius: 4px;
			padding: 0 10px;
			box-shadow: 0 0 0px rgba(64, 158, 255, .3);
			outline: none;
			color: rgba(64, 158, 255, 1);
			width: 180px;
			font-size: 14px;
			height: 36px;
		}
		// -------- search --------
		.recommend {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
        }
        
        .list5 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 10px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1.01) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
		
		.news {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list6 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list6 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	
		.lists {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
        }
        
        .list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-next {
            left: auto;
            right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 10px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	}
	







	.home-preview .recommend .list12 .tab .item {
				cursor: pointer;
				border: 0;
				border-radius: 6px;
				padding: 0 20px;
				margin: 0 10px;
				color: #fff;
				background: #333;
				width: auto;
				font-size: 16px;
				line-height: 40px;
			}
	
	.home-preview .recommend .list12 .tab .item:hover {
				color: #fff;
				background: #F5BB00;
				border-color: #F5BB00;
				border-width: 0 0 0px 0;
				border-style: solid;
			}
	
	.home-preview .recommend .list12 .tab .item.active {
				color: #fff;
				background: #F5BB00;
				border-color: #F5BB00;
				border-width: 0 0 0px 0;
				border-style: solid;
			}
	
	.home-preview .recommend .list12 .tab .more {
				cursor: pointer;
				padding: 5px 10px;
				margin: 0 10px;
				color: #666;
				background: #fff;
				display: none;
				line-height: 44px;
				align-items: center;
			}
	
	.home-preview .recommend .list12 .tab .more:hover {
				color: red;
			}
	
	.home-preview .recommend .list12 .item.active {
	  animation-name: mymove;
	
	  &:nth-of-type(1) {
	    animation-duration: 1s;
	  }
	  &:nth-of-type(2) {
	    animation-duration: 1.2s;
	  }
	  &:nth-of-type(3) {
	    animation-duration: 1.4s;
	  }
	  &:nth-of-type(4) {
	    animation-duration: 1.6s;
	  }
	  &:nth-of-type(5) {
	    animation-duration: 1.8s;
	  }
	  &:nth-of-type(6) {
	    animation-duration: 2s;
	  }
	}
	
	@keyframes mymove
	{
		from {top: 320px;}
		to {top: 0;}
	}



</style>
