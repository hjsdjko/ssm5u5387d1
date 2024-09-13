<template>
  <div>
    <div class="container" :style='{"minHeight":"100vh","alignItems":"center","background":"url(http://codegen.caihongy.cn/20230801/5db22557138c43aa955609b9d805a0a9.jpg)","display":"flex","width":"100%","backgroundSize":"cover","backgroundPosition":"center top","backgroundRepeat":"no-repeat","justifyContent":"center"}'>
      <el-form :style='{"border":"0px solid #eee","padding":"150px 60px 20px 600px","boxShadow":"0 0px 0px rgba(64, 158, 255, .6)","margin":"0","borderRadius":"10px","background":"url(http://codegen.caihongy.cn/20230801/017937c712194d5e8a38f9bca47c4a73.png) no-repeat center top / cover","width":"1200px","fontSize":"16px","height":"690px"}'>
        <div v-if="true" :style='{"padding":"10px","margin":"0 auto 30px","color":"#56b2c6","textAlign":"center","background":"none","width":"96%","lineHeight":"40px","fontSize":"24px","textShadow":"4px 4px 2px rgba(64, 158, 255, .1)"}' class="title-container">益兼职登录</div>
        <div v-if="loginType==1" class="list-item" :style='{"width":"calc(80% - 150px)","margin":"0 auto 20px","position":"relative","alignItems":"center","flexWrap":"wrap","display":"flex"}'>
          <div v-if="true" class="lable" :style='{"color":"inherit","left":"-150px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"inherit","position":"absolute"}'>用户名：</div>
          <input :style='{"padding":"0 10px","boxShadow":"0 0 0px rgba(64, 158, 255, .3)","borderColor":"#e0e0e0","color":"inherit","outline":"0px solid #efefef","outlineOffset":"1px","borderRadius":"0px","borderWidth":"0 0 2px","background":"none","width":"100%","fontSize":"inherit","borderStyle":"solid","height":"40px"}' placeholder="请输入用户名" name="username" type="text" v-model="rulesForm.username">
        </div>
        <div v-if="loginType==1" class="list-item" :style='{"width":"calc(80% - 150px)","margin":"0 auto 20px","position":"relative","alignItems":"center","flexWrap":"wrap","display":"flex"}'>
          <div v-if="true" class="lable" :style='{"color":"inherit","left":"-150px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"inherit","position":"absolute"}'>密码：</div>
          <input :style='{"padding":"0 10px","boxShadow":"0 0 0px rgba(64, 158, 255, .3)","borderColor":"#e0e0e0","color":"inherit","outline":"0px solid #efefef","outlineOffset":"1px","borderRadius":"0px","borderWidth":"0 0 2px","background":"none","width":"100%","fontSize":"inherit","borderStyle":"solid","height":"40px"}' placeholder="请输入密码" name="password" type="password" v-model="rulesForm.password">
        </div>

        <div :style='{"width":"calc(80% - 150px)","margin":"20px auto"}' v-if="roles.length>1" prop="loginInRole" class="list-type">
          <el-radio v-if="loginType==1||(loginType==2&&item.roleName!='管理员')" v-for="item in roles" v-bind:key="item.roleName" v-model="rulesForm.role" :label="item.roleName">{{item.roleName}}</el-radio>
        </div>

		
        <div :style='{"margin":"90px auto 0","alignItems":"center","flexWrap":"wrap","display":"flex","width":"80%","position":"relative","justifyContent":"center"}'>
          <el-button v-if="loginType==1" :style='{"border":"0","cursor":"pointer","padding":"0 24px","margin":"0 5px","color":"#fff","minWidth":"200px","outline":"none","borderRadius":"30px","top":"-60px","background":"#56b2c6","width":"auto","fontSize":"inherit","position":"absolute","height":"44px"}' type="primary" @click="login()" class="loginInBt">登录</el-button>
          <el-button :style='{"border":"0px solid rgba(64, 158, 255, 1)","cursor":"pointer","padding":"0 12px","margin":"0 5px","outline":"none","color":"#666","borderRadius":"0px","background":"rgba(64, 158, 255, .0)","width":"auto","fontSize":"inherit","height":"44px"}' type="primary" @click="register('qiye')" class="register">注册企业</el-button>
        </div>
      </el-form>

    </div>
  </div>
</template>
<script>
import menu from "@/utils/menu";
export default {
  data() {
    return {
		verifyCheck2: false,
		flag: false,
      baseUrl:this.$base.url,
      loginType: 1,
      rulesForm: {
        username: "",
        password: "",
        role: "",
      },
      menus: [],
      roles: [],
      tableName: "",
    };
  },
  mounted() {
    let menus = menu.list();
    this.menus = menus;

    for (let i = 0; i < this.menus.length; i++) {
      if (this.menus[i].hasBackLogin=='是') {
        this.roles.push(this.menus[i])
      }
    }

  },
  created() {

  },
  destroyed() {
	    },
  components: {
  },
  methods: {

    //注册
    register(tableName){
		this.$storage.set("loginTable", tableName);
		this.$router.push({path:'/register',query:{pageFlag:'register'}})
    },
    // 登陆
    login() {

		if (!this.rulesForm.username) {
			this.$message.error("请输入用户名");
			return;
		}
		if (!this.rulesForm.password) {
			this.$message.error("请输入密码");
			return;
		}
		if(this.roles.length>1) {
			if (!this.rulesForm.role) {
				this.$message.error("请选择角色");
				return;
			}

			let menus = this.menus;
			for (let i = 0; i < menus.length; i++) {
				if (menus[i].roleName == this.rulesForm.role) {
					this.tableName = menus[i].tableName;
				}
			}
		} else {
			this.tableName = this.roles[0].tableName;
			this.rulesForm.role = this.roles[0].roleName;
		}
		
		this.loginPost()
    },
	loginPost() {
		this.$http({
			url: `${this.tableName}/login?username=${this.rulesForm.username}&password=${this.rulesForm.password}`,
			method: "post"
		}).then(({ data }) => {
			if (data && data.code === 0) {
				this.$storage.set("Token", data.token);
				this.$storage.set("role", this.rulesForm.role);
				this.$storage.set("sessionTable", this.tableName);
				this.$storage.set("adminName", this.rulesForm.username);
				this.$router.replace({ path: "/" });
			} else {
				this.$message.error(data.msg);
			}
		});
	},
  }
}
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  position: relative;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
      background: url(http://codegen.caihongy.cn/20230801/5db22557138c43aa955609b9d805a0a9.jpg);
        
  .list-item /deep/ .el-input .el-input__inner {
		padding: 0 10px;
		color: inherit;
		font-size: inherit;
		border-color: #e0e0e0;
		outline-offset: 1px;
		border-radius: 0px;
		box-shadow: 0 0 0px rgba(64, 158, 255, .3);
		outline: 0px solid #efefef;
		background: none;
		width: 100%;
		border-width: 0 0 2px;
		border-style: solid;
		height: 40px;
	  }
  
  .list-item.select /deep/ .el-select .el-input__inner {
		border: 1px solid rgba(64, 158, 255, 1);
		padding: 0 10px;
		box-shadow: 0 0 6px rgba(64, 158, 255, .5);
		outline: 1px solid #efefef;
		color: rgba(64, 158, 255, 1);
		width: 288px;
		font-size: 14px;
		outline-offset: 4px;
		height: 44px;
	  }
  
  .list-code /deep/ .el-input .el-input__inner {
  	  	border-radius: 0px;
  	  	padding: 0 10px;
  	  	outline: none;
  	  	color: inherit;
  	  	width: calc(100% - 80px);
  	  	font-size: inherit;
  	  	border-color: #e0e0e0;
  	  	border-width: 0 0 0px;
  	  	border-style: solid;
  	  	height: 40px;
  	  }

  .list-type /deep/ .el-radio__input .el-radio__inner {
		background: rgba(53, 53, 53, 0);
		border-color: #666666;
	  }
  .list-type /deep/ .el-radio__input.is-checked .el-radio__inner {
        background: #56b2c6;
        border-color: #56b2c6;
      }
  .list-type /deep/ .el-radio__label {
		color: #666666;
		font-size: 16px;
	  }
  .list-type /deep/ .el-radio__input.is-checked+.el-radio__label {
        color: inherit;
        font-size: 16px;
      }
}

</style>
