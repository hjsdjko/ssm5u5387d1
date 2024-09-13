<template>
	<div>
		<div class="container" :style='{"minHeight":"100vh","alignItems":"center","background":"url(http://codegen.caihongy.cn/20230830/25e4efeaf5f14216b2e7e70a43d1c06e.jpg)","display":"flex","width":"100%","backgroundSize":"cover","backgroundPosition":"center top","backgroundRepeat":"no-repeat","justifyContent":"center"}'>
			<el-form v-if="pageFlag=='register'" :style='{"border":"0px solid #eee","minHeight":"690px","padding":"100px 60px 20px 600px","boxShadow":"0 0px 0px rgba(64, 158, 255, .6)","margin":"0","borderRadius":"10px","color":"#999","background":"url(http://codegen.caihongy.cn/20230801/017937c712194d5e8a38f9bca47c4a73.png) no-repeat center top / 100% 100%","width":"1200px","height":"auto"}' ref="rgsForm" class="rgs-form" :model="rgsForm" :rules="rules">
				<div v-if="true" :style='{"padding":"10px","margin":"0 auto 30px","color":"#56b2c6","textAlign":"center","background":"none","width":"96%","lineHeight":"40px","fontSize":"24px","textShadow":"4px 4px 2px rgba(64, 158, 255, .1)"}' class="title">益兼职注册</div>
				<el-form-item :style='{"width":"80%","padding":"0 100px","margin":"0 auto 10px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"inherit","textAlign":"right","left":"-120px","width":"120px","lineHeight":"40px","fontSize":"16px","position":"absolute"}' class="lable" :class="changeRules('yonghuzhanghao')?'required':''">用户账号：</div>
					<el-input  v-model="ruleForm.yonghuzhanghao"  autocomplete="off" placeholder="用户账号"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0 100px","margin":"0 auto 10px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"inherit","textAlign":"right","left":"-120px","width":"120px","lineHeight":"40px","fontSize":"16px","position":"absolute"}' class="lable" :class="changeRules('mima')?'required':''">密码：</div>
					<el-input  v-model="ruleForm.mima"  autocomplete="off" placeholder="密码"  type="password"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0 100px","margin":"0 auto 10px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"inherit","textAlign":"right","left":"-120px","width":"120px","lineHeight":"40px","fontSize":"16px","position":"absolute"}' class="lable" :class="changeRules('mima')?'required':''">确认密码：</div>
					<el-input  v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password" />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0 100px","margin":"0 auto 10px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"inherit","textAlign":"right","left":"-120px","width":"120px","lineHeight":"40px","fontSize":"16px","position":"absolute"}' class="lable" :class="changeRules('yonghuxingming')?'required':''">用户姓名：</div>
					<el-input  v-model="ruleForm.yonghuxingming"  autocomplete="off" placeholder="用户姓名"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0 100px","margin":"0 auto 10px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"inherit","textAlign":"right","left":"-120px","width":"120px","lineHeight":"40px","fontSize":"16px","position":"absolute"}' class="lable" :class="changeRules('touxiang')?'required':''">头像：</div>
                    <file-upload
                        tip="点击上传头像"
                        action="file/upload"
                        :limit="3"
                        :multiple="true"
                        :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
                        @change="yonghutouxiangUploadChange"
                    ></file-upload>
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0 100px","margin":"0 auto 10px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"inherit","textAlign":"right","left":"-120px","width":"120px","lineHeight":"40px","fontSize":"16px","position":"absolute"}' class="lable" :class="changeRules('nianling')?'required':''">年龄：</div>
					<el-input  v-model.number="ruleForm.nianling"  autocomplete="off" placeholder="年龄"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0 100px","margin":"0 auto 10px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"inherit","textAlign":"right","left":"-120px","width":"120px","lineHeight":"40px","fontSize":"16px","position":"absolute"}' class="lable" :class="changeRules('xingbie')?'required':''">性别：</div>
                    <el-select v-model="ruleForm.xingbie" placeholder="请选择性别" >
                        <el-option
                            v-for="(item,index) in yonghuxingbieOptions"
                            v-bind:key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0 100px","margin":"0 auto 10px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"inherit","textAlign":"right","left":"-120px","width":"120px","lineHeight":"40px","fontSize":"16px","position":"absolute"}' class="lable" :class="changeRules('xueli')?'required':''">学历：</div>
                    <el-select v-model="ruleForm.xueli" placeholder="请选择学历" >
                        <el-option
                            v-for="(item,index) in yonghuxueliOptions"
                            v-bind:key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0 100px","margin":"0 auto 10px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"inherit","textAlign":"right","left":"-120px","width":"120px","lineHeight":"40px","fontSize":"16px","position":"absolute"}' class="lable" :class="changeRules('lianxifangshi')?'required':''">联系方式：</div>
					<el-input  v-model="ruleForm.lianxifangshi"  autocomplete="off" placeholder="联系方式"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0 100px","margin":"0 auto 10px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='qiye'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"inherit","textAlign":"right","left":"-120px","width":"120px","lineHeight":"40px","fontSize":"16px","position":"absolute"}' class="lable" :class="changeRules('qiyemingcheng')?'required':''">企业名称：</div>
					<el-input  v-model="ruleForm.qiyemingcheng"  autocomplete="off" placeholder="企业名称"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0 100px","margin":"0 auto 10px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='qiye'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"inherit","textAlign":"right","left":"-120px","width":"120px","lineHeight":"40px","fontSize":"16px","position":"absolute"}' class="lable" :class="changeRules('mima')?'required':''">密码：</div>
					<el-input  v-model="ruleForm.mima"  autocomplete="off" placeholder="密码"  type="password"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0 100px","margin":"0 auto 10px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='qiye'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"inherit","textAlign":"right","left":"-120px","width":"120px","lineHeight":"40px","fontSize":"16px","position":"absolute"}' class="lable" :class="changeRules('mima')?'required':''">确认密码：</div>
					<el-input  v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password" />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0 100px","margin":"0 auto 10px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='qiye'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"inherit","textAlign":"right","left":"-120px","width":"120px","lineHeight":"40px","fontSize":"16px","position":"absolute"}' class="lable" :class="changeRules('qiyelogo')?'required':''">企业logo：</div>
                    <file-upload
                        tip="点击上传企业logo"
                        action="file/upload"
                        :limit="3"
                        :multiple="true"
                        :fileUrls="ruleForm.qiyelogo?ruleForm.qiyelogo:''"
                        @change="qiyeqiyelogoUploadChange"
                    ></file-upload>
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0 100px","margin":"0 auto 10px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='qiye'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"inherit","textAlign":"right","left":"-120px","width":"120px","lineHeight":"40px","fontSize":"16px","position":"absolute"}' class="lable" :class="changeRules('qiyexingzhi')?'required':''">企业性质：</div>
                    <el-select v-model="ruleForm.qiyexingzhi" placeholder="请选择企业性质" >
                        <el-option
                            v-for="(item,index) in qiyeqiyexingzhiOptions"
                            v-bind:key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0 100px","margin":"0 auto 10px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='qiye'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"inherit","textAlign":"right","left":"-120px","width":"120px","lineHeight":"40px","fontSize":"16px","position":"absolute"}' class="lable" :class="changeRules('yingyezhizhao')?'required':''">营业执照：</div>
                    <file-upload
                        tip="点击上传营业执照"
                        action="file/upload"
                        :limit="3"
                        :multiple="true"
                        :fileUrls="ruleForm.yingyezhizhao?ruleForm.yingyezhizhao:''"
                        @change="qiyeyingyezhizhaoUploadChange"
                    ></file-upload>
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0 100px","margin":"0 auto 10px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='qiye'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"inherit","textAlign":"right","left":"-120px","width":"120px","lineHeight":"40px","fontSize":"16px","position":"absolute"}' class="lable" :class="changeRules('gongsidianhua')?'required':''">公司电话：</div>
					<el-input  v-model="ruleForm.gongsidianhua"  autocomplete="off" placeholder="公司电话"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0 100px","margin":"0 auto 10px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='qiye'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"inherit","textAlign":"right","left":"-120px","width":"120px","lineHeight":"40px","fontSize":"16px","position":"absolute"}' class="lable" :class="changeRules('renshixingming')?'required':''">人事姓名：</div>
					<el-input  v-model="ruleForm.renshixingming"  autocomplete="off" placeholder="人事姓名"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0 100px","margin":"0 auto 10px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='qiye'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"inherit","textAlign":"right","left":"-120px","width":"120px","lineHeight":"40px","fontSize":"16px","position":"absolute"}' class="lable" :class="changeRules('lianxifangshi')?'required':''">联系方式：</div>
					<el-input  v-model="ruleForm.lianxifangshi"  autocomplete="off" placeholder="联系方式"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0 100px","margin":"0 auto 10px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='qiye'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"inherit","textAlign":"right","left":"-120px","width":"120px","lineHeight":"40px","fontSize":"16px","position":"absolute"}' class="lable" :class="changeRules('qiyeyouxiang')?'required':''">企业邮箱：</div>
					<el-input  v-model="ruleForm.qiyeyouxiang"  autocomplete="off" placeholder="企业邮箱"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0 100px","margin":"0 auto 10px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='qiye'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"inherit","textAlign":"right","left":"-120px","width":"120px","lineHeight":"40px","fontSize":"16px","position":"absolute"}' class="lable" :class="changeRules('qiyedizhi')?'required':''">企业地址：</div>
					<el-input  v-model="ruleForm.qiyedizhi"  autocomplete="off" placeholder="企业地址"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0 100px","margin":"0 auto 10px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='qiye'">
					<div v-if="true" :style='{"padding":"0 8px 0 0","color":"inherit","textAlign":"right","left":"-120px","width":"120px","lineHeight":"40px","fontSize":"16px","position":"absolute"}' class="lable" :class="changeRules('qiyejieshao')?'required':''">企业介绍：</div>
					<editor
						style="min-width: 200px; max-width: 600px;"
						:style='{"width":"100%","height":"auto"}'
						v-model="ruleForm.qiyejieshao" 
						class="editor" 
						action="file/upload">
					</editor>
				</el-form-item>
				<button :style='{"border":"0","cursor":"pointer","padding":"0 24px","boxShadow":"0 0 0px rgba(64, 158, 255, .5)","margin":"20px auto 10px","color":"#fff","display":"block","outline":"none","borderRadius":"30px","background":"#56b2c6","width":"200px","fontSize":"16px","height":"40px"}' type="button" class="r-btn" @click="login()">注册</button>
				<div :style='{"cursor":"pointer","padding":"0","color":"rgba(159, 159, 159, 1)","textAlign":"right","display":"inline-block","width":"80%","lineHeight":"1","fontSize":"14px","textDecoration":"underline"}' class="r-login" @click="close()">已有账号，直接登录</div>
			</el-form>
			
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			ruleForm: {
			},
			forgetForm: {},
            pageFlag : '',
			tableName:"",
			rules: {},
            yonghuxingbieOptions: [],
            yonghuxueliOptions: [],
            qiyeqiyexingzhiOptions: [],
		};
	},
	mounted(){
		this.pageFlag = this.$route.query.pageFlag
		if(this.$route.query.pageFlag=='register'){
			
			let table = this.$storage.get("loginTable");
			this.tableName = table;
			if(this.tableName=='yonghu'){
				this.ruleForm = {
					yonghuzhanghao: '',
					mima: '',
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
				this.ruleForm = {
					qiyemingcheng: '',
					mima: '',
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
				this.rules.yonghuzhanghao = [{ required: true, message: '请输入用户账号', trigger: 'blur' }]
			}
			if ('yonghu' == this.tableName) {
				this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
			if ('yonghu' == this.tableName) {
				this.rules.yonghuxingming = [{ required: true, message: '请输入用户姓名', trigger: 'blur' }]
			}
			if ('qiye' == this.tableName) {
				this.rules.qiyemingcheng = [{ required: true, message: '请输入企业名称', trigger: 'blur' }]
			}
			if ('qiye' == this.tableName) {
				this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
			if ('qiye' == this.tableName) {
				this.rules.qiyelogo = [{ required: true, message: '请输入企业logo', trigger: 'blur' }]
			}
			this.yonghuxingbieOptions = "男,女".split(',')
			this.yonghuxueliOptions = "硕士,本科,专科".split(',')
			this.qiyeqiyexingzhiOptions = "外资,中外合资,国有企业,私人企业".split(',')
		}
	},
	created() {
	},
	destroyed() {
		  	},
	methods: {
		changeRules(name){
			if(this.rules[name]){
				return true
			}
			return false
		},
		// 获取uuid
		getUUID () {
			return new Date().getTime();
		},
		close(){
			this.$router.push({ path: "/login" });
		},
        yonghutouxiangUploadChange(fileUrls) {
            this.ruleForm.touxiang = fileUrls;
        },
        qiyeqiyelogoUploadChange(fileUrls) {
            this.ruleForm.qiyelogo = fileUrls;
        },
        qiyeyingyezhizhaoUploadChange(fileUrls) {
            this.ruleForm.yingyezhizhao = fileUrls;
        },

        // 多级联动参数


		// 注册
		login() {
			var url=this.tableName+"/register";
					if((!this.ruleForm.yonghuzhanghao) && `yonghu` == this.tableName){
						this.$message.error(`用户账号不能为空`);
						return
					}
					if(this.ruleForm.yonghuzhanghao && ((this.ruleForm.yonghuzhanghao).toString().length<3) && `yonghu` == this.tableName){
						this.$message.error(`用户账号长度不能小于3`);
						return
					}
					if(this.ruleForm.yonghuzhanghao && ((this.ruleForm.yonghuzhanghao).toString().length>13) && `yonghu` == this.tableName){
						this.$message.error(`用户账号长度不能大于13`);
						return
					}
					if((!this.ruleForm.mima) && `yonghu` == this.tableName){
						this.$message.error(`密码不能为空`);
						return
					}
					if(this.ruleForm.mima && ((this.ruleForm.mima).toString().length<3) && `yonghu` == this.tableName){
						this.$message.error(`密码长度不能小于3`);
						return
					}
					if((this.ruleForm.mima!=this.ruleForm.mima2) && `yonghu` == this.tableName){
						this.$message.error(`两次密码输入不一致`);
						return
					}
					if((!this.ruleForm.yonghuxingming) && `yonghu` == this.tableName){
						this.$message.error(`用户姓名不能为空`);
						return
					}
            if(this.ruleForm.touxiang!=null) {
                this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
            }
					if(`yonghu` == this.tableName && this.ruleForm.nianling &&(!this.$validate.isIntNumer(this.ruleForm.nianling))){
						this.$message.error(`年龄应输入整数`);
						return
					}
					if(`yonghu` == this.tableName && this.ruleForm.lianxifangshi &&(!this.$validate.isMobile(this.ruleForm.lianxifangshi))){
						this.$message.error(`联系方式应输入手机格式`);
						return
					}
			  if(this.tableName=='qiye'){
				  this.ruleForm.sfsh = '待审核'
			  }
					if((!this.ruleForm.qiyemingcheng) && `qiye` == this.tableName){
						this.$message.error(`企业名称不能为空`);
						return
					}
					if(this.ruleForm.qiyemingcheng && ((this.ruleForm.qiyemingcheng).toString().length<3) && `qiye` == this.tableName){
						this.$message.error(`企业名称长度不能小于3`);
						return
					}
					if((!this.ruleForm.mima) && `qiye` == this.tableName){
						this.$message.error(`密码不能为空`);
						return
					}
					if(this.ruleForm.mima && ((this.ruleForm.mima).toString().length<3) && `qiye` == this.tableName){
						this.$message.error(`密码长度不能小于3`);
						return
					}
					if((this.ruleForm.mima!=this.ruleForm.mima2) && `qiye` == this.tableName){
						this.$message.error(`两次密码输入不一致`);
						return
					}
            if(this.ruleForm.qiyelogo!=null) {
                this.ruleForm.qiyelogo = this.ruleForm.qiyelogo.replace(new RegExp(this.$base.url,"g"),"");
            }
					if((!this.ruleForm.qiyelogo) && `qiye` == this.tableName){
						this.$message.error(`企业logo不能为空`);
						return
					}
            if(this.ruleForm.yingyezhizhao!=null) {
                this.ruleForm.yingyezhizhao = this.ruleForm.yingyezhizhao.replace(new RegExp(this.$base.url,"g"),"");
            }
					if(`qiye` == this.tableName && this.ruleForm.gongsidianhua &&(!this.$validate.isPhone(this.ruleForm.gongsidianhua))){
						this.$message.error(`公司电话应输入电话格式`);
						return
					}
					if(`qiye` == this.tableName && this.ruleForm.lianxifangshi &&(!this.$validate.isMobile(this.ruleForm.lianxifangshi))){
						this.$message.error(`联系方式应输入手机格式`);
						return
					}
					if(`qiye` == this.tableName && this.ruleForm.qiyeyouxiang &&(!this.$validate.isEmail(this.ruleForm.qiyeyouxiang))){
						this.$message.error(`企业邮箱应输入邮件格式`);
						return
					}
			this.$http({
				url: url,
				method: "post",
				data:this.ruleForm
			}).then(({ data }) => {
				if (data && data.code === 0) {
					this.$message({
						message: "注册成功",
						type: "success",
						duration: 1500,
						onClose: () => {
							this.$router.replace({ path: "/login" });
						}
					});
				} else {
					this.$message.error(data.msg);
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
	.container {
	  position: relative;
	  background: url(http://codegen.caihongy.cn/20230830/25e4efeaf5f14216b2e7e70a43d1c06e.jpg);

		.el-date-editor.el-input {
		  width: 100%;
		}
		
		.rgs-form .el-input /deep/ .el-input__inner {
						border-radius: 0px;
						padding: 0 10px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .3);
						outline: none;
						color: inherit;
						background: none;
						width: calc(100% - 0px);
						font-size: 14px;
						border-color: #e0e0e0;
						border-width: 0 0 2px;
						border-style: solid;
						height: 40px;
					}
		
		.rgs-form .el-select /deep/ .el-input__inner {
						border-radius: 0px;
						padding: 0 10px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .3);
						outline: none;
						color: inherit;
						background: none;
						width: 100%;
						font-size: 14px;
						border-color: #e0e0e0;
						border-width: 0 0 2px;
						border-style: solid;
						height: 40px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border-radius: 0px;
						padding: 0 10px 0 30px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .3);
						outline: none;
						color: inherit;
						background: none;
						width: 288px;
						font-size: 14px;
						border-color: #e0e0e0;
						border-width: 0 0 2px;
						border-style: solid;
						height: 40px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border-radius: 0px;
						padding: 0 10px 0 30px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .3);
						outline: none;
						color: inherit;
						background: none;
						width: 288px;
						font-size: 14px;
						border-color: #e0e0e0;
						border-width: 0 0 2px;
						border-style: solid;
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
		  		  border: 2px solid #e0e0e0;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  color: inherit;
		  		  width: 160px;
		  		  font-size: 32px;
		  		  line-height: 80px;
		  		  text-align: center;
		  		  height: 80px;
		  		}
		
		.rgs-form /deep/ .el-upload-list .el-upload-list__item {
		  		  border: 2px solid #e0e0e0;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  color: inherit;
		  		  width: 160px;
		  		  font-size: 32px;
		  		  line-height: 80px;
		  		  text-align: center;
		  		  height: 80px;
		  		}
		
		.rgs-form /deep/ .el-upload .el-icon-plus {
		  		  border: 2px solid #e0e0e0;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  color: inherit;
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
				position: absolute;
				right: 5px;
				content: "*";
			}
	.editor>.avatar-uploader {
		line-height: 0;
		height: 0;
	}
</style>
