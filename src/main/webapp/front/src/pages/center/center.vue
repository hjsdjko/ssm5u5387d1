<template>
<div class="center-preview" :style='{"padding":"0 7%","margin":"20px auto 40px","flexWrap":"wrap","background":"#fff","display":"flex","width":"100%","position":"relative","justifyContent":"space-between"}'>
	<div class="title" :style='{"margin":"10px 0","color":"#fff","textAlign":"center","background":"#333","width":"100%","fontSize":"20px","lineHeight":"54px"}'>{{ title }}</div>
	
	<div class="info" :style='{"padding":"10px","boxShadow":"0 0px 0px rgba(0, 0, 0, 0.3)","margin":"20px 3% 0 0","borderColor":"#eee","borderRadius":"0px","background":"#ffffff","borderWidth":"4px 2px 1px","width":"25%","borderStyle":"solid","height":"auto"}'>
		<div :style='{"padding":"0 20px","borderColor":"#efefef","color":"#fff","borderWidth":"0 0 1px 0","background":"#F5BB00","width":"100%","lineHeight":"44px","fontSize":"15px","borderStyle":"solid","height":"44px"}'>个人信息</div>
		<div :style='{"borderColor":"#efefef","margin":"0 auto","borderWidth":"0 0 1px 0","width":"90%","fontSize":0,"borderStyle":"solid","height":"auto"}' v-if="userTableName=='yonghu'">
			<el-image :style='{"margin":"10px auto","borderColor":"#efefef","objectFit":"cover","borderRadius":"100%","borderWidth":"0 0 1px 0","display":"block","width":"80px","borderStyle":"solid","height":"80px"}' :src="sessionForm.touxiang?baseUrl + sessionForm.touxiang:require('@/assets/avator.png')" fit="cover"></el-image>
		</div>
		<div :style='{"borderColor":"#efefef","margin":"0 auto","borderWidth":"0 0 1px 0","width":"90%","fontSize":0,"borderStyle":"solid","height":"auto"}' v-if="userTableName=='qiye'">
			<el-image :style='{"margin":"10px auto","borderColor":"#efefef","objectFit":"cover","borderRadius":"100%","borderWidth":"0 0 1px 0","display":"block","width":"80px","borderStyle":"solid","height":"80px"}' :src="sessionForm.qiyelogo?baseUrl + sessionForm.qiyelogo:require('@/assets/avator.png')" fit="cover"></el-image>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#efefef","margin":"0 auto","borderWidth":"0 0 1px 0","display":"flex","width":"90%","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='yonghu'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"color":"#333","padding":"0 5px","fontSize":"14px"}'></span>
			<div :style='{"color":"#333","fontSize":"14px"}'>用户账号</div>
			<div :style='{"fontSize":"14px","color":"#333","textAlign":"right","flex":1}'>{{sessionForm.yonghuzhanghao}}</div>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#efefef","margin":"0 auto","borderWidth":"0 0 1px 0","display":"flex","width":"90%","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='yonghu'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"color":"#333","padding":"0 5px","fontSize":"14px"}'></span>
			<div :style='{"color":"#333","fontSize":"14px"}'>用户姓名</div>
			<div :style='{"fontSize":"14px","color":"#333","textAlign":"right","flex":1}'>{{sessionForm.yonghuxingming}}</div>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#efefef","margin":"0 auto","borderWidth":"0 0 1px 0","display":"flex","width":"90%","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='yonghu'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"color":"#333","padding":"0 5px","fontSize":"14px"}'></span>
			<div :style='{"color":"#333","fontSize":"14px"}'>年龄</div>
			<div :style='{"fontSize":"14px","color":"#333","textAlign":"right","flex":1}'>{{sessionForm.nianling}}</div>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#efefef","margin":"0 auto","borderWidth":"0 0 1px 0","display":"flex","width":"90%","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='yonghu'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"color":"#333","padding":"0 5px","fontSize":"14px"}'></span>
			<div :style='{"color":"#333","fontSize":"14px"}'>性别</div>
			<div :style='{"fontSize":"14px","color":"#333","textAlign":"right","flex":1}'>{{sessionForm.xingbie}}</div>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#efefef","margin":"0 auto","borderWidth":"0 0 1px 0","display":"flex","width":"90%","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='yonghu'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"color":"#333","padding":"0 5px","fontSize":"14px"}'></span>
			<div :style='{"color":"#333","fontSize":"14px"}'>学历</div>
			<div :style='{"fontSize":"14px","color":"#333","textAlign":"right","flex":1}'>{{sessionForm.xueli}}</div>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#efefef","margin":"0 auto","borderWidth":"0 0 1px 0","display":"flex","width":"90%","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='yonghu'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"color":"#333","padding":"0 5px","fontSize":"14px"}'></span>
			<div :style='{"color":"#333","fontSize":"14px"}'>联系方式</div>
			<div :style='{"fontSize":"14px","color":"#333","textAlign":"right","flex":1}'>{{sessionForm.lianxifangshi}}</div>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#efefef","margin":"0 auto","borderWidth":"0 0 1px 0","display":"flex","width":"90%","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='qiye'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"color":"#333","padding":"0 5px","fontSize":"14px"}'></span>
			<div :style='{"color":"#333","fontSize":"14px"}'>企业名称</div>
			<div :style='{"fontSize":"14px","color":"#333","textAlign":"right","flex":1}'>{{sessionForm.qiyemingcheng}}</div>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#efefef","margin":"0 auto","borderWidth":"0 0 1px 0","display":"flex","width":"90%","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='qiye'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"color":"#333","padding":"0 5px","fontSize":"14px"}'></span>
			<div :style='{"color":"#333","fontSize":"14px"}'>企业性质</div>
			<div :style='{"fontSize":"14px","color":"#333","textAlign":"right","flex":1}'>{{sessionForm.qiyexingzhi}}</div>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#efefef","margin":"0 auto","borderWidth":"0 0 1px 0","display":"flex","width":"90%","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='qiye'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"color":"#333","padding":"0 5px","fontSize":"14px"}'></span>
			<div :style='{"color":"#333","fontSize":"14px"}'>公司电话</div>
			<div :style='{"fontSize":"14px","color":"#333","textAlign":"right","flex":1}'>{{sessionForm.gongsidianhua}}</div>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#efefef","margin":"0 auto","borderWidth":"0 0 1px 0","display":"flex","width":"90%","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='qiye'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"color":"#333","padding":"0 5px","fontSize":"14px"}'></span>
			<div :style='{"color":"#333","fontSize":"14px"}'>人事姓名</div>
			<div :style='{"fontSize":"14px","color":"#333","textAlign":"right","flex":1}'>{{sessionForm.renshixingming}}</div>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#efefef","margin":"0 auto","borderWidth":"0 0 1px 0","display":"flex","width":"90%","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='qiye'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"color":"#333","padding":"0 5px","fontSize":"14px"}'></span>
			<div :style='{"color":"#333","fontSize":"14px"}'>联系方式</div>
			<div :style='{"fontSize":"14px","color":"#333","textAlign":"right","flex":1}'>{{sessionForm.lianxifangshi}}</div>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#efefef","margin":"0 auto","borderWidth":"0 0 1px 0","display":"flex","width":"90%","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='qiye'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"color":"#333","padding":"0 5px","fontSize":"14px"}'></span>
			<div :style='{"color":"#333","fontSize":"14px"}'>企业邮箱</div>
			<div :style='{"fontSize":"14px","color":"#333","textAlign":"right","flex":1}'>{{sessionForm.qiyeyouxiang}}</div>
		</div>
		
	</div>
	
    <el-tabs tab-position="left" :style='{"width":"72%","margin":"20px 0 0","flexWrap":"wrap","background":"#fff","flex":"1","display":"flex"}' @tab-click="handleClick">
      <el-tab-pane label="个人中心">
        <el-form class="center-preview-pv" ref="sessionForm" :model="sessionForm" :rules="rules" label-width="180px">
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' v-if="userTableName=='yonghu'" label="用户账号" prop="yonghuzhanghao">
            <el-input v-model="sessionForm.yonghuzhanghao" placeholder="用户账号" readonly></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' v-if="userTableName=='yonghu'" label="用户姓名" prop="yonghuxingming">
            <el-input v-model="sessionForm.yonghuxingming" placeholder="用户姓名" ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' v-if="userTableName=='yonghu'" label="头像" prop="touxiang">
			<file-upload
			tip="点击上传头像"
			action="file/upload"
			:limit="1"
			:multiple="true"
			:fileUrls="sessionForm.touxiang?sessionForm.touxiang:''"
			@change="yonghutouxiangHandleAvatarSuccess"
			></file-upload>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' v-if="userTableName=='yonghu'" label="年龄" prop="nianling">
            <el-input v-model="sessionForm.nianling" placeholder="年龄" ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' v-if="userTableName=='yonghu'" label="性别" prop="xingbie">
            <el-select v-model="sessionForm.xingbie" placeholder="请选择性别" >
              <el-option v-for="(item, index) in dynamicProp.xingbie" :key="index" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' v-if="userTableName=='yonghu'" label="学历" prop="xueli">
            <el-select v-model="sessionForm.xueli" placeholder="请选择学历" >
              <el-option v-for="(item, index) in dynamicProp.xueli" :key="index" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' v-if="userTableName=='yonghu'" label="联系方式" prop="lianxifangshi">
            <el-input v-model="sessionForm.lianxifangshi" placeholder="联系方式" ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' v-if="userTableName=='qiye'" label="企业名称" prop="qiyemingcheng">
            <el-input v-model="sessionForm.qiyemingcheng" placeholder="企业名称" readonly></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' v-if="userTableName=='qiye'" label="企业logo" prop="qiyelogo">
			<file-upload
			tip="点击上传企业logo"
			action="file/upload"
			:limit="1"
			:multiple="true"
			:fileUrls="sessionForm.qiyelogo?sessionForm.qiyelogo:''"
			@change="qiyeqiyelogoHandleAvatarSuccess"
			></file-upload>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' v-if="userTableName=='qiye'" label="企业性质" prop="qiyexingzhi">
            <el-select v-model="sessionForm.qiyexingzhi" placeholder="请选择企业性质" >
              <el-option v-for="(item, index) in dynamicProp.qiyexingzhi" :key="index" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' v-if="userTableName=='qiye'" label="营业执照" prop="yingyezhizhao">
			<file-upload
			tip="点击上传营业执照"
			action="file/upload"
			:limit="1"
			:type="3"
			:multiple="true"
			:fileUrls="sessionForm.yingyezhizhao?sessionForm.yingyezhizhao:''"
			@change="qiyeyingyezhizhaoHandleAvatarSuccess"
			></file-upload>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' v-if="userTableName=='qiye'" label="公司电话" prop="gongsidianhua">
            <el-input v-model="sessionForm.gongsidianhua" placeholder="公司电话" ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' v-if="userTableName=='qiye'" label="人事姓名" prop="renshixingming">
            <el-input v-model="sessionForm.renshixingming" placeholder="人事姓名" ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' v-if="userTableName=='qiye'" label="联系方式" prop="lianxifangshi">
            <el-input v-model="sessionForm.lianxifangshi" placeholder="联系方式" ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' v-if="userTableName=='qiye'" label="企业邮箱" prop="qiyeyouxiang">
            <el-input v-model="sessionForm.qiyeyouxiang" placeholder="企业邮箱" ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' v-if="userTableName=='qiye'" label="企业地址" prop="qiyedizhi">
            <el-input v-model="sessionForm.qiyedizhi" placeholder="企业地址" ></el-input>
          </el-form-item>
		  <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' v-if="userTableName=='qiye'" label="企业介绍">
		    <editor
		        :style='{"minHeight":"250px","border":"0","boxShadow":"0 0 0px rgba(64, 158, 255, .5)","outline":"none","color":"#333","borderRadius":"4px","width":"100%","lineHeight":"32px","fontSize":"14px"}'
		        v-model="sessionForm.qiyejieshao" 
		        class="editor" 
		        action="file/upload">
		    </editor>
		  </el-form-item>
          <el-form-item :style='{"padding":"0","margin":"0"}'>
            <el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"4px","background":"#F5BB00","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' type="primary" @click="onSubmit('sessionForm')">更新信息</el-button>
            <el-button :style='{"border":"0px solid rgba(64, 158, 255, 1)","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#fff","borderRadius":"4px","background":"#333","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' type="danger" @click="logout">退出登录</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
	  <el-tab-pane label="修改密码">
		<el-form class="center-preview-pv" ref="passwordForm" :model="passwordForm" :rules="passwordRules" label-width="180px">
			<el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="原密码" prop="password">
			  <el-input type="password" v-model="passwordForm.password" placeholder="原密码"></el-input>
			</el-form-item>
			<el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="新密码" prop="newpassword">
			  <el-input type="password" v-model="passwordForm.newpassword" placeholder="新密码"></el-input>
			</el-form-item>
			<el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="确认密码" prop="repassword">
			  <el-input type="password" v-model="passwordForm.repassword" placeholder="确认密码"></el-input>
			</el-form-item>
			<el-form-item :style='{"padding":"0","margin":"0"}'>
			  <el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"4px","background":"#F5BB00","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' type="primary" @click="updatePassword">修改密码</el-button>
			</el-form-item>
		</el-form>
	  </el-tab-pane>
		<el-tab-pane v-for="(item,index) in menuList" :key="index" v-if="hasBack(item.menu)" :label="item.child[0].menu" :name="item.child[0].tableName"></el-tab-pane>
      <el-tab-pane label="我的收藏"></el-tab-pane>
    </el-tabs>

</div>
</template>

<script>
  import config from '@/config/config'
  import menu from '@/config/menu'
  import Vue from 'vue'
  export default {
    //数据集合
    data() {
      return {
        title: '个人中心',
        baseUrl: config.baseUrl,
        sessionForm: {},
		passwordForm: {},
		passwordRules: {
			password: [
				{
					required: true,
					message: "密码不能为空",
					trigger: "blur"
				}
			],
			newpassword: [
				{
					required: true,
					message: "新密码不能为空",
					trigger: "blur"
				}
			],
			repassword: [
				{
					required: true,
					message: "确认密码不能为空",
					trigger: "blur"
				}
			]
		},
        rules: {},
		menuList: [],
        disabled: false,
        uploadUrl: config.baseUrl + 'file/upload',
        imageUrl: '',
        headers: {Token: localStorage.getItem('frontToken')},
        userTableName: localStorage.getItem('UserTableName'),
        dynamicProp: {},
      }
    },
    created() {
		let menus = menu.list()
		for(let x in menus){
			if(menus[x].tableName == this.userTableName){
				this.menuList = menus[x].backMenu
			}
		}
		if ('yonghu' == this.userTableName) {
			this.$set(this.sessionForm, 'yonghuzhanghao', null);
		}
		if ('yonghu' == this.userTableName) {
			this.$set(this.sessionForm, 'mima', null);
		}
		if ('yonghu' == this.userTableName) {
			this.$set(this.sessionForm, 'yonghuxingming', null);
		}
		if ('yonghu' == this.userTableName) {
			this.$set(this.sessionForm, 'touxiang', null);
		}
		if ('yonghu' == this.userTableName) {
			this.$set(this.sessionForm, 'nianling', null);
		}
		if ('yonghu' == this.userTableName) {
			this.$set(this.sessionForm, 'xingbie', null);
		}
		if ('yonghu' == this.userTableName) {
			this.$set(this.sessionForm, 'xueli', null);
		}
		if ('yonghu' == this.userTableName) {
			this.$set(this.sessionForm, 'lianxifangshi', null);
		}
		if ('yonghu' == this.userTableName) {
			this.$set(this.sessionForm, 'status', null);
		}
		if ('yonghu' == this.userTableName) {
			this.$set(this.sessionForm, 'passwordwrongnum', null);
		}
		if ('qiye' == this.userTableName) {
			this.$set(this.sessionForm, 'qiyemingcheng', null);
		}
		if ('qiye' == this.userTableName) {
			this.$set(this.sessionForm, 'mima', null);
		}
		if ('qiye' == this.userTableName) {
			this.$set(this.sessionForm, 'qiyelogo', null);
		}
		if ('qiye' == this.userTableName) {
			this.$set(this.sessionForm, 'qiyexingzhi', null);
		}
		if ('qiye' == this.userTableName) {
			this.$set(this.sessionForm, 'yingyezhizhao', null);
		}
		if ('qiye' == this.userTableName) {
			this.$set(this.sessionForm, 'gongsidianhua', null);
		}
		if ('qiye' == this.userTableName) {
			this.$set(this.sessionForm, 'renshixingming', null);
		}
		if ('qiye' == this.userTableName) {
			this.$set(this.sessionForm, 'lianxifangshi', null);
		}
		if ('qiye' == this.userTableName) {
			this.$set(this.sessionForm, 'qiyeyouxiang', null);
		}
		if ('qiye' == this.userTableName) {
			this.$set(this.sessionForm, 'qiyedizhi', null);
		}
		if ('qiye' == this.userTableName) {
			this.$set(this.sessionForm, 'qiyejieshao', null);
		}
		if ('qiye' == this.userTableName) {
			this.$set(this.sessionForm, 'sfsh', null);
		}
		if ('qiye' == this.userTableName) {
			this.$set(this.sessionForm, 'shhf', null);
		}
		if ('qiye' == this.userTableName) {
			this.$set(this.sessionForm, 'thumbsupnum', null);
		}
		if ('qiye' == this.userTableName) {
			this.$set(this.sessionForm, 'crazilynum', null);
		}
		if ('qiye' == this.userTableName) {
			this.$set(this.sessionForm, 'status', null);
		}
		if ('qiye' == this.userTableName) {
			this.$set(this.sessionForm, 'passwordwrongnum', null);
		}

		if ('yonghu' == this.userTableName&&this.rules['yonghuzhanghao']){
			this.rules['yonghuzhanghao'].push({ required: true, message: '请输入用户账号', trigger: 'blur' })
		}else if('yonghu' == this.userTableName&&!this.rules['yonghuzhanghao']) {
			this.$set(this.rules, 'yonghuzhanghao', [{ required: true, message: '请输入用户账号', trigger: 'blur' }]);
		}
		if ('yonghu' == this.userTableName&&this.rules['mima']){
			this.rules['mima'].push({ required: true, message: '请输入密码', trigger: 'blur' })
		}else if('yonghu' == this.userTableName&&!this.rules['mima']) {
			this.$set(this.rules, 'mima', [{ required: true, message: '请输入密码', trigger: 'blur' }]);
		}
		if ('yonghu' == this.userTableName&&this.rules['yonghuxingming']){
			this.rules['yonghuxingming'].push({ required: true, message: '请输入用户姓名', trigger: 'blur' })
		}else if('yonghu' == this.userTableName&&!this.rules['yonghuxingming']) {
			this.$set(this.rules, 'yonghuxingming', [{ required: true, message: '请输入用户姓名', trigger: 'blur' }]);
		}
		if ('yonghu' == this.userTableName) {
			this.$set(this.rules, 'nianling', [{ required: false, validator: this.$validate.isIntNumer, trigger: 'blur' }]);
		}
		if ('yonghu' == this.userTableName) {
			this.$set(this.rules, 'lianxifangshi', [{ required: false, validator: this.$validate.isMobile, trigger: 'blur' }]);
		}
		if ('yonghu' == this.userTableName) {
			this.$set(this.rules, 'status', [{ required: false, validator: this.$validate.isIntNumer, trigger: 'blur' }]);
		}
		if ('yonghu' == this.userTableName) {
			this.$set(this.rules, 'passwordwrongnum', [{ required: false, validator: this.$validate.isIntNumer, trigger: 'blur' }]);
		}
		if ('qiye' == this.userTableName&&this.rules['qiyemingcheng']){
			this.rules['qiyemingcheng'].push({ required: true, message: '请输入企业名称', trigger: 'blur' })
		}else if('qiye' == this.userTableName&&!this.rules['qiyemingcheng']) {
			this.$set(this.rules, 'qiyemingcheng', [{ required: true, message: '请输入企业名称', trigger: 'blur' }]);
		}
		if ('qiye' == this.userTableName&&this.rules['mima']){
			this.rules['mima'].push({ required: true, message: '请输入密码', trigger: 'blur' })
		}else if('qiye' == this.userTableName&&!this.rules['mima']) {
			this.$set(this.rules, 'mima', [{ required: true, message: '请输入密码', trigger: 'blur' }]);
		}
		if ('qiye' == this.userTableName&&this.rules['qiyelogo']){
			this.rules['qiyelogo'].push({ required: true, message: '请输入企业logo', trigger: 'blur' })
		}else if('qiye' == this.userTableName&&!this.rules['qiyelogo']) {
			this.$set(this.rules, 'qiyelogo', [{ required: true, message: '请输入企业logo', trigger: 'blur' }]);
		}
		if ('qiye' == this.userTableName) {
			this.$set(this.rules, 'gongsidianhua', [{ required: false, validator: this.$validate.isPhone, trigger: 'blur' }]);
		}
		if ('qiye' == this.userTableName) {
			this.$set(this.rules, 'lianxifangshi', [{ required: false, validator: this.$validate.isMobile, trigger: 'blur' }]);
		}
		if ('qiye' == this.userTableName) {
			this.$set(this.rules, 'qiyeyouxiang', [{ required: false, validator: this.$validate.isEmail, trigger: 'blur' }]);
		}
		if ('qiye' == this.userTableName) {
			this.$set(this.rules, 'thumbsupnum', [{ required: false, validator: this.$validate.isIntNumer, trigger: 'blur' }]);
		}
		if ('qiye' == this.userTableName) {
			this.$set(this.rules, 'crazilynum', [{ required: false, validator: this.$validate.isIntNumer, trigger: 'blur' }]);
		}
		if ('qiye' == this.userTableName) {
			this.$set(this.rules, 'status', [{ required: false, validator: this.$validate.isIntNumer, trigger: 'blur' }]);
		}
		if ('qiye' == this.userTableName) {
			this.$set(this.rules, 'passwordwrongnum', [{ required: false, validator: this.$validate.isIntNumer, trigger: 'blur' }]);
		}

      this.init();
      this.sessionForm = JSON.parse(localStorage.getItem('sessionForm'))
    },
    //方法集合
    methods: {
      init() {
        if ('yonghu' == this.userTableName) {
          this.dynamicProp.xingbie = '男,女'.split(',');
        }
        if ('yonghu' == this.userTableName) {
          this.dynamicProp.xueli = '硕士,本科,专科'.split(',');
        }
        if ('qiye' == this.userTableName) {
          this.dynamicProp.qiyexingzhi = '外资,中外合资,国有企业,私人企业'.split(',');
        }
      },
	  setSession(){
		  localStorage.setItem('sessionForm',JSON.stringify(this.sessionForm))
	  },
      onSubmit(formName) {
		if(`yonghu` == this.userTableName && (this.sessionForm.yonghuzhanghao).toString().length<3){
			this.$message.error('用户账号长度不能小于3');
			return
		}
		if(`yonghu` == this.userTableName && (this.sessionForm.yonghuzhanghao).toString().length>13){
			this.$message.error('用户账号长度不能大于13');
			return
		}
		if(`yonghu` == this.userTableName && (this.sessionForm.mima).toString().length<3){
			this.$message.error('密码长度不能小于3');
			return
		}
		if(`yonghu` == this.userTableName && this.sessionForm.touxiang!=null){
			this.sessionForm.touxiang = this.sessionForm.touxiang.replace(new RegExp(this.$config.baseUrl,"g"),"");
		}
		if(`qiye` == this.userTableName && (this.sessionForm.qiyemingcheng).toString().length<3){
			this.$message.error('企业名称长度不能小于3');
			return
		}
		if(`qiye` == this.userTableName && (this.sessionForm.mima).toString().length<3){
			this.$message.error('密码长度不能小于3');
			return
		}
		if(`qiye` == this.userTableName && this.sessionForm.qiyelogo!=null){
			this.sessionForm.qiyelogo = this.sessionForm.qiyelogo.replace(new RegExp(this.$config.baseUrl,"g"),"");
		}
		if(`qiye` == this.userTableName && this.sessionForm.yingyezhizhao!=null){
			this.sessionForm.yingyezhizhao = this.sessionForm.yingyezhizhao.replace(new RegExp(this.$config.baseUrl,"g"),"");
		}
        this.$refs[formName].validate((valid) => {
			if (valid) {
				this.$http.post(this.userTableName + '/update', this.sessionForm).then(res => {
					if (res.data.code == 0) {
						this.setSession()
						this.$message({
							message: '更新成功',
							type: 'success',
							duration: 1500
						});
					}
				});
			} else {
				return false;
			}
        });
      },
      yonghutouxiangHandleAvatarSuccess(fileUrls) {
        this.sessionForm.touxiang = fileUrls;
      },
      qiyeqiyelogoHandleAvatarSuccess(fileUrls) {
        this.sessionForm.qiyelogo = fileUrls;
      },
      qiyeyingyezhizhaoHandleAvatarSuccess(fileUrls) {
        this.sessionForm.yingyezhizhao = fileUrls;
      },
      handleClick(tab, event) {
        switch(event.target.outerText) {
          case '个人中心':
            tab.$router.push('/index/center');
            break;
          case '修改密码':
            this.passwordForm = {
				password: '',
				newpassword: '',
				repassword: '',
			}
			this.$forceUpdate()
            break;
          case '我的收藏':
            localStorage.setItem('storeupType', 1);
            tab.$router.push('/index/storeup');
            break;
		  default:
		  	tab.$router.push(`/index/${tab.name}?centerType=1`);
        }

        this.title = event.target.outerText;
      },
	  async updatePassword(){
			this.$refs["passwordForm"].validate(async valid => {
				if (valid) {
					var password = "";
					if (this.sessionForm.mima) {
						password = this.sessionForm.mima;
					} else if (this.sessionForm.password) {
						password = this.sessionForm.password;
					}
					var nowpassword = ''
					await this.$http.get('encrypt/md5?text=' + this.passwordForm.password,).then(res=>{
						if(res.data&&res.data.code==0){
							nowpassword = res.data.data
						}
					})
					if(nowpassword!=password){
						this.$message.error("原密码错误");
						return;
					}
					if (this.passwordForm.newpassword != this.passwordForm.repassword) {
						this.$message.error("两次密码输入不一致");
						return;
					}
					if (this.userTableName == 'yonghu') {
						if(this.passwordForm.newpassword && (this.passwordForm.newpassword.length<3)){
							this.$message.error(`新密码长度不能小于3`);
							return
						}
					}
					this.sessionForm.password = this.passwordForm.newpassword;
					this.sessionForm.mima = this.passwordForm.newpassword;
					this.$http.post(`${this.userTableName}/update`,this.sessionForm).then(({data})=>{
						if (data && data.code === 0) {
							this.$message({
								message: "修改密码成功,下次登录系统生效",
								type: "success",
								duration: 1500,
								onClose: () => {
								}
							});
							this.setSession()
						} else {
							this.$message.error(data.msg);
						}
					});
				}
			})
	  },
      logout() {
        localStorage.clear();
        Vue.http.headers.common['Token'] = "";
        this.$router.push('/index/home');
        this.activeIndex = '0'
        localStorage.setItem('keyPath', this.activeIndex)
        this.$forceUpdate()
        this.$message({
            message: '登出成功',
            type: 'success',
            duration: 1500,
        });
      },
	  hasBack(name){
		  switch(name){
			case '我的收藏管理':
				return false
				break;
			default:
				return true
		  }
	  }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .center-preview {
  
    .el-tabs {
      & /deep/ .el-tabs__header {
		.el-tabs__nav{
			overflow: auto;
		}
		::-webkit-scrollbar {
		  -webkit-appearance: none;
		  width: 6px;
		  height: 6px;
		}
		::-webkit-scrollbar-track {
		  background: rgba(0, 0, 0, 0.1);
		  border-radius: 0;
		}
		::-webkit-scrollbar-thumb {
		  cursor: pointer;
		  border-radius: 5px;
		  background: rgba(0, 0, 0, 0.15);
		  transition: color 0.2s ease;
		}
		::-webkit-scrollbar-thumb:hover {
		  background: rgba(0, 0, 0, 0.3);
		}
        .el-tabs__nav-wrap {
          margin: 0;
  
          &::after {
            content: none;
          }
        }
  
        .el-tabs__active-bar {
          display: none !important;
        }
      }
  
      .center-preview-pv {
        .el-date-editor.el-input {
          width: auto;
        }
  
        .balance {
          .el-input {
            width: auto;
          }
        }
      }
    }
  }
  
  .center-preview .el-tabs /deep/ .el-tabs__header {
	padding: 0;
	margin: 0;
	background: #fff;
	width: 100%;
	border-color: #eee;
	border-width: 0 0 1px;
	position: relative;
	float: left;
	border-style: solid;
	height: auto;
  }
  
  .center-preview .el-tabs /deep/ .el-tabs__header .el-tabs__item {
  	padding: 0 10px;
  	margin: 0 10px 10px 0;
  	color: #fff;
  	font-weight: 500;
  	display: block;
  	font-size: 14px;
  	line-height: 40px;
  	float: left;
  	background: #333;
  	width: auto;
  	position: relative;
  	text-align: center;
  	height: 40px;
  }
  
  .center-preview .el-tabs /deep/ .el-tabs__header .el-tabs__item:hover {
  	padding: 0 10px;
  	color: #fff;
  	background: #F5BB00;
  	font-weight: 500;
  	font-size: 14px;
  	line-height: 40px;
  	position: relative;
  	text-align: center;
  	height: 40px;
  }
  
  .center-preview .el-tabs /deep/ .el-tabs__header .el-tabs__item.is-active {
  	padding: 0 10px;
  	margin: 0 10px 10px 0;
  	color: #fff;
  	font-weight: 500;
  	display: block;
  	font-size: 14px;
  	line-height: 40px;
  	float: left;
  	background: #F5BB00;
  	width: auto;
  	position: relative;
  	text-align: center;
  	height: 40px;
  }
  
  .center-preview .el-tabs /deep/ .el-tabs__content {
  	padding: 0px;
  	margin: 20px 0 0;
  	background: #fff;
  	width: 100%;
  }
  .center-preview .el-tabs /deep/ .el-tabs__content .el-tab-pane {
  	width: 100%;
  }
  
  .center-preview-pv .el-form-item /deep/ .el-form-item__label {
  	padding: 0 10px 0 0;
  	color: #666;
  	font-weight: 500;
  	width: 180px;
  	font-size: 14px;
  	line-height: 40px;
  	text-align: right;
  }
  
  .center-preview-pv .el-form-item .el-form-item__content {
    margin-left: 180px;
  }
  
  .center-preview-pv .el-input /deep/ .el-input__inner {
  	border: 1px solid #ddd;
  	border-radius: 4px;
  	padding: 0 12px;
  	box-shadow: 0 0 0px rgba(64, 158, 255, .5);
  	outline: none;
  	color: #666;
  	width: 400px;
  	font-size: 14px;
  	height: 40px;
  }
  
  .center-preview-pv .el-select /deep/ .el-input__inner {
  	border: 1px solid #ddd;
  	border-radius: 4px;
  	padding: 0 12px;
  	box-shadow: 0 0 0px rgba(64, 158, 255, .5);
  	outline: none;
  	color: #666;
  	width: 400px;
  	font-size: 14px;
  	height: 40px;
  }
  
  .center-preview-pv .el-date-editor /deep/ .el-input__inner {
  	border: 1px solid #ddd;
  	border-radius: 4px;
  	padding: 0 10px 0 30px;
  	box-shadow: 0 0 0px rgba(64, 158, 255, .5);
  	outline: none;
  	color: #666;
  	width: 200px;
  	font-size: 14px;
  	height: 40px;
  }
  
  .center-preview-pv /deep/ .avatar-uploader-icon {
  	border: 1px solid #ddd;
  	cursor: pointer;
  	border-radius: 6px;
  	color: #999;
  	width: 160px;
  	font-size: 32px;
  	line-height: 80px;
  	text-align: center;
  	height: 80px;
  }
  
  .center-preview-pv .el-form-item.balance /deep/ .el-input__inner {
  	border: 1px solid #ddd;
  	border-radius: 4px 0 0 4px;
  	padding: 0 12px;
  	box-shadow: 0 0 0px rgba(64, 158, 255, .5);
  	outline: none;
  	color: #666;
  	display: inline-block;
  	width: 200px;
  	font-size: 14px;
  	height: 40px;
  }
</style>
