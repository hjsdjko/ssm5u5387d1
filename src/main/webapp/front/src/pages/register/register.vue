<template>
	<div>

	<div class="container" :style='{"minHeight":"100vh","alignItems":"center","background":"url(http://codegen.caihongy.cn/20230918/e4c3de45e8454be08468ba32acc9108f.jpg)","display":"flex","width":"100%","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","justifyContent":"center"}'>
		<el-form class='rgs-form' v-if="pageFlag=='register'" :style='{"width":"30vw","padding":"0px","margin":"0 0 0 50vw","borderRadius":"0px","background":"#fff","height":"auto"}' ref="registerForm" :model="registerForm" :rules="rules">
			<div v-if="false" :style='{"width":"100%","margin":"0 0 10px 0","lineHeight":"44px","fontSize":"20px","color":"rgba(64, 158, 255, 1)","textAlign":"center"}'>USER / REGISTER</div>
			<div v-if="true" :style='{"width":"80%","margin":"20px auto 10px","lineHeight":"44px","fontSize":"28px","color":"#333","textAlign":"left"}'>益兼职注册</p></div>
			<el-form-item :style='{"width":"auto","padding":"0","margin":"0 auto 15px 10%","background":"none","height":"auto"}' v-if="tableName=='yonghu'" prop="yonghuzhanghao">
				<div v-if="true" :style='{"width":"100%","lineHeight":"36px","fontSize":"14px","color":"#333"}' :class="changeRules('yonghuzhanghao')?'required':''">用户账号：</div>
				<el-input v-model="registerForm.yonghuzhanghao"  placeholder="请输入用户账号" />
			</el-form-item>
			<el-form-item :style='{"width":"auto","padding":"0","margin":"0 auto 15px 10%","background":"none","height":"auto"}' v-if="tableName=='yonghu'" prop="mima">
				<div v-if="true" :style='{"width":"100%","lineHeight":"36px","fontSize":"14px","color":"#333"}' :class="changeRules('mima')?'required':''">密码：</div>
				<el-input v-model="registerForm.mima" type="password" placeholder="请输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"auto","padding":"0","margin":"0 auto 15px 10%","background":"none","height":"auto"}' v-if="tableName=='yonghu'" prop="mima2">
				<div v-if="true" :style='{"width":"100%","lineHeight":"36px","fontSize":"14px","color":"#333"}' :class="changeRules('mima')?'required':''">确认密码：</div>
				<el-input v-model="registerForm.mima2" type="password" placeholder="请再次输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"auto","padding":"0","margin":"0 auto 15px 10%","background":"none","height":"auto"}' v-if="tableName=='yonghu'" prop="yonghuxingming">
				<div v-if="true" :style='{"width":"100%","lineHeight":"36px","fontSize":"14px","color":"#333"}' :class="changeRules('yonghuxingming')?'required':''">用户姓名：</div>
				<el-input v-model="registerForm.yonghuxingming"  placeholder="请输入用户姓名" />
			</el-form-item>
			<el-form-item :style='{"width":"auto","padding":"0","margin":"0 auto 15px 10%","background":"none","height":"auto"}' v-if="tableName=='yonghu'" prop="touxiang">
				<div v-if="true" :style='{"width":"100%","lineHeight":"36px","fontSize":"14px","color":"#333"}' :class="changeRules('touxiang')?'required':''">头像：</div>
                <file-upload
					tip="点击上传头像"
					action="file/upload"
					:limit="1"
					:multiple="true"
					:fileUrls="registerForm.touxiang?registerForm.touxiang:''"
					@change="yonghutouxiangUploadChange"
				></file-upload>
			</el-form-item>
			<el-form-item :style='{"width":"auto","padding":"0","margin":"0 auto 15px 10%","background":"none","height":"auto"}' v-if="tableName=='yonghu'" prop="nianling">
				<div v-if="true" :style='{"width":"100%","lineHeight":"36px","fontSize":"14px","color":"#333"}' :class="changeRules('nianling')?'required':''">年龄：</div>
				<el-input v-model.number="registerForm.nianling"  placeholder="请输入年龄" />
			</el-form-item>
			<el-form-item :style='{"width":"auto","padding":"0","margin":"0 auto 15px 10%","background":"none","height":"auto"}' v-if="tableName=='yonghu'" prop="xingbie">
				<div v-if="true" :style='{"width":"100%","lineHeight":"36px","fontSize":"14px","color":"#333"}' :class="changeRules('xingbie')?'required':''">性别：</div>
                <el-select v-model="registerForm.xingbie" placeholder="请选择性别" >
                  <el-option
                      v-for="(item,index) in yonghuxingbieOptions"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
			</el-form-item>
			<el-form-item :style='{"width":"auto","padding":"0","margin":"0 auto 15px 10%","background":"none","height":"auto"}' v-if="tableName=='yonghu'" prop="xueli">
				<div v-if="true" :style='{"width":"100%","lineHeight":"36px","fontSize":"14px","color":"#333"}' :class="changeRules('xueli')?'required':''">学历：</div>
                <el-select v-model="registerForm.xueli" placeholder="请选择学历" >
                  <el-option
                      v-for="(item,index) in yonghuxueliOptions"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
			</el-form-item>
			<el-form-item :style='{"width":"auto","padding":"0","margin":"0 auto 15px 10%","background":"none","height":"auto"}' v-if="tableName=='yonghu'" prop="lianxifangshi">
				<div v-if="true" :style='{"width":"100%","lineHeight":"36px","fontSize":"14px","color":"#333"}' :class="changeRules('lianxifangshi')?'required':''">联系方式：</div>
				<el-input v-model="registerForm.lianxifangshi"  placeholder="请输入联系方式" />
			</el-form-item>
			<el-form-item :style='{"width":"auto","padding":"0","margin":"0 auto 15px 10%","background":"none","height":"auto"}' v-if="tableName=='qiye'" prop="qiyemingcheng">
				<div v-if="true" :style='{"width":"100%","lineHeight":"36px","fontSize":"14px","color":"#333"}' :class="changeRules('qiyemingcheng')?'required':''">企业名称：</div>
				<el-input v-model="registerForm.qiyemingcheng"  placeholder="请输入企业名称" />
			</el-form-item>
			<el-form-item :style='{"width":"auto","padding":"0","margin":"0 auto 15px 10%","background":"none","height":"auto"}' v-if="tableName=='qiye'" prop="mima">
				<div v-if="true" :style='{"width":"100%","lineHeight":"36px","fontSize":"14px","color":"#333"}' :class="changeRules('mima')?'required':''">密码：</div>
				<el-input v-model="registerForm.mima" type="password" placeholder="请输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"auto","padding":"0","margin":"0 auto 15px 10%","background":"none","height":"auto"}' v-if="tableName=='qiye'" prop="mima2">
				<div v-if="true" :style='{"width":"100%","lineHeight":"36px","fontSize":"14px","color":"#333"}' :class="changeRules('mima')?'required':''">确认密码：</div>
				<el-input v-model="registerForm.mima2" type="password" placeholder="请再次输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"auto","padding":"0","margin":"0 auto 15px 10%","background":"none","height":"auto"}' v-if="tableName=='qiye'" prop="qiyelogo">
				<div v-if="true" :style='{"width":"100%","lineHeight":"36px","fontSize":"14px","color":"#333"}' :class="changeRules('qiyelogo')?'required':''">企业logo：</div>
                <file-upload
					tip="点击上传企业logo"
					action="file/upload"
					:limit="1"
					:multiple="true"
					:fileUrls="registerForm.qiyelogo?registerForm.qiyelogo:''"
					@change="qiyeqiyelogoUploadChange"
				></file-upload>
			</el-form-item>
			<el-form-item :style='{"width":"auto","padding":"0","margin":"0 auto 15px 10%","background":"none","height":"auto"}' v-if="tableName=='qiye'" prop="qiyexingzhi">
				<div v-if="true" :style='{"width":"100%","lineHeight":"36px","fontSize":"14px","color":"#333"}' :class="changeRules('qiyexingzhi')?'required':''">企业性质：</div>
                <el-select v-model="registerForm.qiyexingzhi" placeholder="请选择企业性质" >
                  <el-option
                      v-for="(item,index) in qiyeqiyexingzhiOptions"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
			</el-form-item>
			<el-form-item :style='{"width":"auto","padding":"0","margin":"0 auto 15px 10%","background":"none","height":"auto"}' v-if="tableName=='qiye'" prop="yingyezhizhao">
				<div v-if="true" :style='{"width":"100%","lineHeight":"36px","fontSize":"14px","color":"#333"}' :class="changeRules('yingyezhizhao')?'required':''">营业执照：</div>
                <file-upload
					tip="点击上传营业执照"
					action="file/upload"
					:limit="1"
					:type="3"
					:multiple="true"
					:fileUrls="registerForm.yingyezhizhao?registerForm.yingyezhizhao:''"
					@change="qiyeyingyezhizhaoUploadChange"
				></file-upload>
			</el-form-item>
			<el-form-item :style='{"width":"auto","padding":"0","margin":"0 auto 15px 10%","background":"none","height":"auto"}' v-if="tableName=='qiye'" prop="gongsidianhua">
				<div v-if="true" :style='{"width":"100%","lineHeight":"36px","fontSize":"14px","color":"#333"}' :class="changeRules('gongsidianhua')?'required':''">公司电话：</div>
				<el-input v-model="registerForm.gongsidianhua"  placeholder="请输入公司电话" />
			</el-form-item>
			<el-form-item :style='{"width":"auto","padding":"0","margin":"0 auto 15px 10%","background":"none","height":"auto"}' v-if="tableName=='qiye'" prop="renshixingming">
				<div v-if="true" :style='{"width":"100%","lineHeight":"36px","fontSize":"14px","color":"#333"}' :class="changeRules('renshixingming')?'required':''">人事姓名：</div>
				<el-input v-model="registerForm.renshixingming"  placeholder="请输入人事姓名" />
			</el-form-item>
			<el-form-item :style='{"width":"auto","padding":"0","margin":"0 auto 15px 10%","background":"none","height":"auto"}' v-if="tableName=='qiye'" prop="lianxifangshi">
				<div v-if="true" :style='{"width":"100%","lineHeight":"36px","fontSize":"14px","color":"#333"}' :class="changeRules('lianxifangshi')?'required':''">联系方式：</div>
				<el-input v-model="registerForm.lianxifangshi"  placeholder="请输入联系方式" />
			</el-form-item>
			<el-form-item :style='{"width":"auto","padding":"0","margin":"0 auto 15px 10%","background":"none","height":"auto"}' v-if="tableName=='qiye'" prop="qiyeyouxiang">
				<div v-if="true" :style='{"width":"100%","lineHeight":"36px","fontSize":"14px","color":"#333"}' :class="changeRules('qiyeyouxiang')?'required':''">企业邮箱：</div>
				<el-input v-model="registerForm.qiyeyouxiang"  placeholder="请输入企业邮箱" />
			</el-form-item>
			<el-form-item :style='{"width":"auto","padding":"0","margin":"0 auto 15px 10%","background":"none","height":"auto"}' v-if="tableName=='qiye'" prop="qiyedizhi">
				<div v-if="true" :style='{"width":"100%","lineHeight":"36px","fontSize":"14px","color":"#333"}' :class="changeRules('qiyedizhi')?'required':''">企业地址：</div>
				<el-input v-model="registerForm.qiyedizhi"  placeholder="请输入企业地址" />
			</el-form-item>
			<el-form-item :style='{"width":"auto","padding":"0","margin":"0 auto 15px 10%","background":"none","height":"auto"}' v-if="tableName=='qiye'" prop="qiyejieshao">
				<div v-if="true" :style='{"width":"100%","lineHeight":"36px","fontSize":"14px","color":"#333"}' :class="changeRules('qiyejieshao')?'required':''">企业介绍：</div>
			    <editor
			        :style='{"minHeight":"150px","border":"1px solid #eee","width":"100%","borderRadius":"4px","background":"#fff","height":"auto"}'
			        v-model="registerForm.qiyejieshao" 
			        class="editor" 
			        action="file/upload">
			    </editor>
			</el-form-item>
			<el-button :style='{"border":"0","cursor":"pointer","padding":"0 10px","margin":"20px auto 5px 10%","color":"#fff","display":"block","minWidth":"400px","outline":"none","borderRadius":"4px","background":"#ffc000","width":"auto","fontSize":"16px","height":"44px"}' type="primary" @click="submitForm('registerForm')">注册</el-button>
			<el-button :style='{"border":"0","cursor":"pointer","padding":"0 10px","margin":"0px auto 0px 10%","color":"#666","textAlign":"right","display":"block","minWidth":"400px","outline":"none","borderRadius":"8px","background":"none","width":"auto","fontSize":"16px","height":"44px"}' @click="resetForm('registerForm')">重置</el-button>
			<router-link :style='{"cursor":"pointer","padding":"0 10%","margin":"0 0 40px","color":"rgba(159, 159, 159, 1)","display":"inline-block","lineHeight":"1","fontSize":"14px","textDecoration":"none"}' to="/login">已有账户登录</router-link>
			<div class="idea1" :style='{"width":"100%","background":"red","display":"none","height":"40px"}'></div>
			<div class="idea2" :style='{"width":"100%","background":"blue","display":"none","height":"40px"}'></div>
		</el-form>
    </div>
  </div>
</div>
</template>

<script>

export default {
    //数据集合
    data() {
		return {
            pageFlag : '',
			tableName: '',
			registerForm: {},
			forgetForm: {},
			rules: {},
			requiredRules: {},
            yonghuxingbieOptions: [],
            yonghuxueliOptions: [],
            qiyeqiyexingzhiOptions: [],
		}
    },
	mounted() {
		if(this.$route.query.pageFlag=='register'){
			this.tableName = this.$route.query.role;
			if(this.tableName=='yonghu'){
				this.registerForm = {
					yonghuzhanghao: '',
					mima: '',
					mima2: '',
					yonghuxingming: '',
					touxiang: '',
					nianling: '',
					xingbie: '',
					xueli: '',
					lianxifangshi: '',
					status: '',
					passwordwrongnum: '',
				}
			}
			if(this.tableName=='qiye'){
				this.registerForm = {
					qiyemingcheng: '',
					mima: '',
					mima2: '',
					qiyelogo: '',
					qiyexingzhi: '',
					yingyezhizhao: '',
					gongsidianhua: '',
					renshixingming: '',
					lianxifangshi: '',
					qiyeyouxiang: '',
					qiyedizhi: '',
					qiyejieshao: '',
					sfsh: '',
					shhf: '',
					thumbsupnum: '',
					crazilynum: '',
					status: '',
					passwordwrongnum: '',
				}
			}
			if ('yonghu' == this.tableName) {
				this.requiredRules.yonghuzhanghao = [{ required: true, message: '请输入用户账号', trigger: 'blur' }]
			}
			if ('yonghu' == this.tableName) {
				this.requiredRules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
			if ('yonghu' == this.tableName) {
				this.requiredRules.yonghuxingming = [{ required: true, message: '请输入用户姓名', trigger: 'blur' }]
			}
			if ('qiye' == this.tableName) {
				this.requiredRules.qiyemingcheng = [{ required: true, message: '请输入企业名称', trigger: 'blur' }]
			}
			if ('qiye' == this.tableName) {
				this.requiredRules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
			if ('qiye' == this.tableName) {
				this.requiredRules.qiyelogo = [{ required: true, message: '请输入企业logo', trigger: 'blur' }]
			}
		}
	},
    created() {
		this.pageFlag = this.$route.query.pageFlag;
		if(this.$route.query.pageFlag=='register'){
		  if ('yonghu' == this.tableName) {
			this.rules.yonghuzhanghao = [{ required: true, message: '请输入用户账号', trigger: 'blur' }];
		  }
		  if ('yonghu' == this.tableName) {
			this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }];
		  }
		  if ('yonghu' == this.tableName) {
			this.rules.yonghuxingming = [{ required: true, message: '请输入用户姓名', trigger: 'blur' }];
		  }
		  if ('yonghu' == this.tableName) {
			this.rules.nianling = [{ required: true, validator: this.$validate.isIntNumer, trigger: 'blur' }];
		  }
			this.yonghuxingbieOptions = "男,女".split(',');
			this.yonghuxueliOptions = "硕士,本科,专科".split(',');
		  if ('yonghu' == this.tableName) {
			this.rules.lianxifangshi = [{ required: true, validator: this.$validate.isMobile, trigger: 'blur' }];
		  }
		  if ('yonghu' == this.tableName) {
			this.rules.status = [{ required: true, validator: this.$validate.isIntNumer, trigger: 'blur' }];
		  }
		  if ('yonghu' == this.tableName) {
			this.rules.passwordwrongnum = [{ required: true, validator: this.$validate.isIntNumer, trigger: 'blur' }];
		  }
		  if ('qiye' == this.tableName) {
			this.rules.qiyemingcheng = [{ required: true, message: '请输入企业名称', trigger: 'blur' }];
		  }
		  if ('qiye' == this.tableName) {
			this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }];
		  }
		  if ('qiye' == this.tableName) {
			this.rules.qiyelogo = [{ required: true, message: '请输入企业logo', trigger: 'blur' }];
		  }
			this.qiyeqiyexingzhiOptions = "外资,中外合资,国有企业,私人企业".split(',');
		  if ('qiye' == this.tableName) {
			this.rules.gongsidianhua = [{ required: true, validator: this.$validate.isPhone, trigger: 'blur' }];
		  }
		  if ('qiye' == this.tableName) {
			this.rules.lianxifangshi = [{ required: true, validator: this.$validate.isMobile, trigger: 'blur' }];
		  }
		  if ('qiye' == this.tableName) {
			this.rules.qiyeyouxiang = [{ required: true, validator: this.$validate.isEmail, trigger: 'blur' }];
		  }
		  if ('qiye' == this.tableName) {
			this.rules.thumbsupnum = [{ required: true, validator: this.$validate.isIntNumer, trigger: 'blur' }];
		  }
		  if ('qiye' == this.tableName) {
			this.rules.crazilynum = [{ required: true, validator: this.$validate.isIntNumer, trigger: 'blur' }];
		  }
		  if ('qiye' == this.tableName) {
			this.rules.status = [{ required: true, validator: this.$validate.isIntNumer, trigger: 'blur' }];
		  }
		  if ('qiye' == this.tableName) {
			this.rules.passwordwrongnum = [{ required: true, validator: this.$validate.isIntNumer, trigger: 'blur' }];
		  }
		}
    },
    //方法集合
    methods: {
		changeRules(name){
			if(this.requiredRules[name]){
				return true
			}
			return false
		},
      // 获取uuid
      getUUID () {
        return new Date().getTime();
      },
        // 下二随
      yonghutouxiangUploadChange(fileUrls) {
          this.registerForm.touxiang = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },
      qiyeqiyelogoUploadChange(fileUrls) {
          this.registerForm.qiyelogo = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },
      qiyeyingyezhizhaoUploadChange(fileUrls) {
          this.registerForm.yingyezhizhao = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },

        // 多级联动参数


      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var url=this.tableName+"/register";
				if((!this.registerForm.yonghuzhanghao) && `yonghu` == this.tableName){
					this.$message.error(`用户账号不能为空`);
					return
				}
              if(`yonghu` == this.tableName && (this.registerForm.yonghuzhanghao).toString().length<3){
                this.$message.error('用户账号长度不能小于3');
                return
              }
              if(`yonghu` == this.tableName && (this.registerForm.yonghuzhanghao).toString().length>13){
                this.$message.error('用户账号长度不能大于13');
                return
              }
               if(`yonghu` == this.tableName && this.registerForm.mima!=this.registerForm.mima2) {
                this.$message.error(`两次密码输入不一致`);
                return
               }
				if((!this.registerForm.mima) && `yonghu` == this.tableName){
					this.$message.error(`密码不能为空`);
					return
				}
              if(`yonghu` == this.tableName && (this.registerForm.mima).toString().length<3){
                this.$message.error('密码长度不能小于3');
                return
              }
				if((!this.registerForm.yonghuxingming) && `yonghu` == this.tableName){
					this.$message.error(`用户姓名不能为空`);
					return
				}
				if(`yonghu` == this.tableName && this.registerForm.nianling &&(!this.$validate.isIntNumer2(this.registerForm.nianling))){
					this.$message.error(`年龄应输入整数`);
					return
				}
					if(`yonghu` == this.tableName && this.registerForm.lianxifangshi &&(!this.$validate.isMobile2(this.registerForm.lianxifangshi))){
						this.$message.error(`联系方式应输入手机格式`);
						return
					}
			  if(this.tableName=='qiye'){
				  this.registerForm.sfsh = '待审核'
			  }
				if((!this.registerForm.qiyemingcheng) && `qiye` == this.tableName){
					this.$message.error(`企业名称不能为空`);
					return
				}
              if(`qiye` == this.tableName && (this.registerForm.qiyemingcheng).toString().length<3){
                this.$message.error('企业名称长度不能小于3');
                return
              }
               if(`qiye` == this.tableName && this.registerForm.mima!=this.registerForm.mima2) {
                this.$message.error(`两次密码输入不一致`);
                return
               }
				if((!this.registerForm.mima) && `qiye` == this.tableName){
					this.$message.error(`密码不能为空`);
					return
				}
              if(`qiye` == this.tableName && (this.registerForm.mima).toString().length<3){
                this.$message.error('密码长度不能小于3');
                return
              }
				if((!this.registerForm.qiyelogo) && `qiye` == this.tableName){
					this.$message.error(`企业logo不能为空`);
					return
				}
					if(`qiye` == this.tableName && this.registerForm.gongsidianhua &&(!this.$validate.isPhone2(this.registerForm.gongsidianhua))){
						this.$message.error(`公司电话应输入电话格式`);
						return
					}
					if(`qiye` == this.tableName && this.registerForm.lianxifangshi &&(!this.$validate.isMobile2(this.registerForm.lianxifangshi))){
						this.$message.error(`联系方式应输入手机格式`);
						return
					}
					if(`qiye` == this.tableName && this.registerForm.qiyeyouxiang &&(!this.$validate.isEmail2(this.registerForm.qiyeyouxiang))){
						this.$message.error(`企业邮箱应输入邮件格式`);
						return
					}
            this.$http.post(url, this.registerForm).then(res => {
              if (res.data.code === 0) {
                this.$message({
                  message: '注册成功',
                  type: 'success',
                  duration: 1500,
                  onClose: () => {
                    this.$router.push('/login');
                  }
                });
              } else {
                this.$message.error(res.data.msg);
              }
            });
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.container {
		position: relative;
		background: url(http://codegen.caihongy.cn/20230918/e4c3de45e8454be08468ba32acc9108f.jpg);
		
		.el-input {
		  width: auto;
		}
		
		.el-date-editor.el-input {
			width: auto;
		}
		
		.el-form-item /deep/ .el-form-item__content {
						display: block;
						width: 100%;
					}
		
		.rgs-form .el-input /deep/ .el-input__inner {
						border: 1px solid #ddd;
						border-radius: 4px;
						padding: 0 10px;
						outline: none;
						color: #666;
						width: 100%;
						font-size: 14px;
						min-width: 400px;
						height: 40px;
					}
		
		.rgs-form .el-select /deep/ .el-input__inner {
						border: 1px solid #ddd;
						border-radius: 4px;
						padding: 0 10px;
						outline: none;
						color: #666;
						width: 100%;
						font-size: 14px;
						min-width: 400px;
						height: 40px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border: 1px solid #ddd;
						border-radius: 4px;
						padding: 0 10px 0 30px;
						outline: none;
						color: #666;
						width: 1;
						font-size: 14px;
						min-width: 400px;
						height: 40px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border: 1px solid #ddd;
						border-radius: 4px;
						padding: 0 10px 0 30px;
						outline: none;
						color: #666;
						width: 1;
						font-size: 14px;
						min-width: 400px;
						height: 40px;
					}
		
		.rgs-form /deep/ .el-upload--picture-card {
			background: transparent;
			border: 0;
			border-radius: 0;
			width: auto;
			height: auto;
			line-height: initial;
			vertical-align: middle;
		}
		
		.rgs-form /deep/ .upload .upload-img {
		  		  border: 1px solid #ddd;
		  		  cursor: pointer;
		  		  border-radius: 4px;
		  		  color: #999;
		  		  width: 160px;
		  		  font-size: 32px;
		  		  line-height: 80px;
		  		  text-align: center;
		  		  height: 80px;
		  		}
		
		.rgs-form /deep/ .el-upload-list .el-upload-list__item {
		  		  border: 1px solid #ddd;
		  		  cursor: pointer;
		  		  border-radius: 4px;
		  		  color: #999;
		  		  width: 160px;
		  		  font-size: 32px;
		  		  line-height: 80px;
		  		  text-align: center;
		  		  height: 80px;
		  		}
		
		.rgs-form /deep/ .el-upload .el-icon-plus {
		  		  border: 1px solid #ddd;
		  		  cursor: pointer;
		  		  border-radius: 4px;
		  		  color: #999;
		  		  width: 160px;
		  		  font-size: 32px;
		  		  line-height: 80px;
		  		  text-align: center;
		  		  height: 80px;
		  		}
	}
	.required {
		position: relative;
	}
	.required::after{
				color: red;
				left: -10px;
				position: absolute;
				content: "*";
			}
</style>
