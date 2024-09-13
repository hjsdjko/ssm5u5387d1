<template>
<div :style='{"width":"100%","padding":"30px 7% 40px","margin":"0px auto","position":"relative","background":"#fff"}'>
    <el-form
	  :style='{"border":"1px solid #eee","width":"100%","padding":"30px","position":"relative","background":"#fcfcfc"}'
      class="add-update-preview"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="180px"
    >
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="岗位名称" prop="gangweimingcheng">
            <el-input v-model="ruleForm.gangweimingcheng" 
                placeholder="岗位名称" clearable :disabled=" false  ||ro.gangweimingcheng"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="工作环境" v-if="type!='cross' || (type=='cross' && !ro.gongzuohuanjing)" prop="gongzuohuanjing">
            <file-upload
            tip="点击上传工作环境"
            action="file/upload"
            :limit="3"
            :multiple="true"
            :fileUrls="ruleForm.gongzuohuanjing?ruleForm.gongzuohuanjing:''"
            @change="gongzuohuanjingUploadChange"
            ></file-upload>
          </el-form-item>
            <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' class="upload" v-else label="工作环境" prop="gongzuohuanjing">
                <img v-if="ruleForm.gongzuohuanjing.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.gongzuohuanjing.split(',')[0]" width="100" height="100">
                <img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.gongzuohuanjing.split(',')" :src="baseUrl+item" width="100" height="100">
            </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}'  label="岗位分类" prop="gangweifenlei">
            <el-select v-model="ruleForm.gangweifenlei" placeholder="请选择岗位分类" :disabled=" false  ||ro.gangweifenlei" >
              <el-option
                  v-for="(item,index) in gangweifenleiOptions"
                  :key="index"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="学历要求" prop="xueliyaoqiu">
            <el-input v-model="ruleForm.xueliyaoqiu" 
                placeholder="学历要求" clearable :disabled=" false  ||ro.xueliyaoqiu"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="岗位要求" prop="gangweiyaoqiu">
            <el-input v-model="ruleForm.gangweiyaoqiu" 
                placeholder="岗位要求" clearable :disabled=" false  ||ro.gangweiyaoqiu"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="薪酬待遇" prop="xinchoudaiyu">
            <el-input v-model="ruleForm.xinchoudaiyu" 
                placeholder="薪酬待遇" clearable :disabled=" false  ||ro.xinchoudaiyu"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="工作地点" prop="gongzuodidian">
            <el-input v-model="ruleForm.gongzuodidian" 
                placeholder="工作地点" clearable :disabled=" false  ||ro.gongzuodidian"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="企业名称" prop="qiyemingcheng">
            <el-input v-model="ruleForm.qiyemingcheng" 
                placeholder="企业名称" clearable :disabled=" false  ||ro.qiyemingcheng"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="人事姓名" prop="renshixingming">
            <el-input v-model="ruleForm.renshixingming" 
                placeholder="人事姓名" clearable :disabled=" false  ||ro.renshixingming"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="企业地址" prop="qiyedizhi">
            <el-input v-model="ruleForm.qiyedizhi" 
                placeholder="企业地址" clearable :disabled=" false  ||ro.qiyedizhi"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="公司电话" prop="gongsidianhua">
            <el-input v-model="ruleForm.gongsidianhua" 
                placeholder="公司电话" clearable :disabled=" false  ||ro.gongsidianhua"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="岗位详情" prop="gangweixiangqing">
            <editor 
                :style='{"minHeight":"250px","padding":"0","boxShadow":"0 0 0px rgba(75,223,201,.5)","margin":"0","borderColor":"#eee","backgroundColor":"#fff","borderRadius":"0","borderWidth":"1px","width":"100%","borderStyle":"solid","height":"auto"}'
                v-model="ruleForm.gangweixiangqing" 
                class="editor" 
                action="file/upload">
            </editor>
          </el-form-item>

      <el-form-item :style='{"padding":"0","margin":"0"}'>
        <el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"4px","background":"#F5BB00","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}'  type="primary" @click="onSubmit">提交</el-button>
        <el-button :style='{"border":"0px solid rgba(64, 158, 255, 1)","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#fff","borderRadius":"4px","background":"#333","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
</div>
</template>

<script>
  export default {
    data() {
	  let self = this
      return {
        id: '',
        baseUrl: '',
        ro:{
				gangweimingcheng : false,
				gongzuohuanjing : false,
				gangweifenlei : false,
				xueliyaoqiu : false,
				gangweiyaoqiu : false,
				xinchoudaiyu : false,
				gongzuodidian : false,
				gangweixiangqing : false,
				qiyemingcheng : false,
				renshixingming : false,
				qiyedizhi : false,
				gongsidianhua : false,
				thumbsupnum : false,
				crazilynum : false,
				clicktime : false,
				clicknum : false,
				discussnum : false,
				storeupnum : false,
        },
        type: '',
        userTableName: localStorage.getItem('UserTableName'),
        ruleForm: {
          gangweimingcheng: '',
          gongzuohuanjing: '',
          gangweifenlei: '',
          xueliyaoqiu: '',
          gangweiyaoqiu: '',
          xinchoudaiyu: '',
          gongzuodidian: '',
          gangweixiangqing: '',
          qiyemingcheng: '',
          renshixingming: '',
          qiyedizhi: '',
          gongsidianhua: '',
          thumbsupnum: '',
          crazilynum: '',
          clicktime: '',
          clicknum: '',
          discussnum: '',
          storeupnum: '',
        },
        gangweifenleiOptions: [],


        rules: {
          gangweimingcheng: [
          ],
          gongzuohuanjing: [
          ],
          gangweifenlei: [
          ],
          xueliyaoqiu: [
          ],
          gangweiyaoqiu: [
          ],
          xinchoudaiyu: [
          ],
          gongzuodidian: [
          ],
          gangweixiangqing: [
          ],
          qiyemingcheng: [
          ],
          renshixingming: [
          ],
          qiyedizhi: [
          ],
          gongsidianhua: [
            { validator: this.$validate.isPhone, trigger: 'blur' },
          ],
          thumbsupnum: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          crazilynum: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          clicktime: [
          ],
          clicknum: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          discussnum: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          storeupnum: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
        },
		centerType: false,
      };
    },
    computed: {



    },
    components: {
    },
    created() {
		if(this.$route.query.centerType){
			this.centerType = true
		}
	  //this.bg();
      let type = this.$route.query.type ? this.$route.query.type : '';
      this.init(type);
      this.baseUrl = this.$config.baseUrl;
    },
    methods: {
      getMakeZero(s) {
          return s < 10 ? '0' + s : s;
      },
      // 下载
      download(file){
        window.open(`${file}`)
      },
      // 初始化
      init(type) {
        this.type = type;
        if(type=='cross'){
          var obj = JSON.parse(localStorage.getItem('crossObj'));
          for (var o in obj){
            if(o=='gangweimingcheng'){
              this.ruleForm.gangweimingcheng = obj[o];
              this.ro.gangweimingcheng = true;
              continue;
            }
            if(o=='gongzuohuanjing'){
              this.ruleForm.gongzuohuanjing = obj[o].split(",")[0];
              this.ro.gongzuohuanjing = true;
              continue;
            }
            if(o=='gangweifenlei'){
              this.ruleForm.gangweifenlei = obj[o];
              this.ro.gangweifenlei = true;
              continue;
            }
            if(o=='xueliyaoqiu'){
              this.ruleForm.xueliyaoqiu = obj[o];
              this.ro.xueliyaoqiu = true;
              continue;
            }
            if(o=='gangweiyaoqiu'){
              this.ruleForm.gangweiyaoqiu = obj[o];
              this.ro.gangweiyaoqiu = true;
              continue;
            }
            if(o=='xinchoudaiyu'){
              this.ruleForm.xinchoudaiyu = obj[o];
              this.ro.xinchoudaiyu = true;
              continue;
            }
            if(o=='gongzuodidian'){
              this.ruleForm.gongzuodidian = obj[o];
              this.ro.gongzuodidian = true;
              continue;
            }
            if(o=='gangweixiangqing'){
              this.ruleForm.gangweixiangqing = obj[o];
              this.ro.gangweixiangqing = true;
              continue;
            }
            if(o=='qiyemingcheng'){
              this.ruleForm.qiyemingcheng = obj[o];
              this.ro.qiyemingcheng = true;
              continue;
            }
            if(o=='renshixingming'){
              this.ruleForm.renshixingming = obj[o];
              this.ro.renshixingming = true;
              continue;
            }
            if(o=='qiyedizhi'){
              this.ruleForm.qiyedizhi = obj[o];
              this.ro.qiyedizhi = true;
              continue;
            }
            if(o=='gongsidianhua'){
              this.ruleForm.gongsidianhua = obj[o];
              this.ro.gongsidianhua = true;
              continue;
            }
            if(o=='thumbsupnum'){
              this.ruleForm.thumbsupnum = obj[o];
              this.ro.thumbsupnum = true;
              continue;
            }
            if(o=='crazilynum'){
              this.ruleForm.crazilynum = obj[o];
              this.ro.crazilynum = true;
              continue;
            }
            if(o=='clicktime'){
              this.ruleForm.clicktime = obj[o];
              this.ro.clicktime = true;
              continue;
            }
            if(o=='clicknum'){
              this.ruleForm.clicknum = obj[o];
              this.ro.clicknum = true;
              continue;
            }
            if(o=='discussnum'){
              this.ruleForm.discussnum = obj[o];
              this.ro.discussnum = true;
              continue;
            }
            if(o=='storeupnum'){
              this.ruleForm.storeupnum = obj[o];
              this.ro.storeupnum = true;
              continue;
            }
          }
        }else if(type=='edit'){
			this.info()
		}
        // 获取用户信息
        this.$http.get(this.userTableName + '/session', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            var json = res.data.data;
            if((json.qiyemingcheng!=''&&json.qiyemingcheng) || json.qiyemingcheng==0){
                this.ruleForm.qiyemingcheng = json.qiyemingcheng
            }
            if((json.renshixingming!=''&&json.renshixingming) || json.renshixingming==0){
                this.ruleForm.renshixingming = json.renshixingming
            }
            if((json.qiyedizhi!=''&&json.qiyedizhi) || json.qiyedizhi==0){
                this.ruleForm.qiyedizhi = json.qiyedizhi
            }
            if((json.gongsidianhua!=''&&json.gongsidianhua) || json.gongsidianhua==0){
                this.ruleForm.gongsidianhua = json.gongsidianhua
            }
          }
        });
        this.$http.get('option/gangweifenlei/gangweifenlei', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.gangweifenleiOptions = res.data.data;
          }
        });

		if (localStorage.getItem('raffleType') && localStorage.getItem('raffleType') != null) {
			localStorage.removeItem('raffleType')
			setTimeout(() => {
				this.onSubmit()
			}, 300)
		}
      },

    // 多级联动参数
      // 多级联动参数
      info() {
        this.$http.get(`zhaopinxinxi/detail/${this.$route.query.id}`, {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.ruleForm = res.data.data;
          }
        });
      },
      // 提交
      onSubmit() {

			//更新跨表属性
			var crossuserid;
			var crossrefid;
			var crossoptnum;
			this.$refs["ruleForm"].validate(valid => {
				if(valid) {
					if(this.type=='cross'){
						var statusColumnName = localStorage.getItem('statusColumnName');
						var statusColumnValue = localStorage.getItem('statusColumnValue');
						if(statusColumnName && statusColumnName!='') {
							var obj = JSON.parse(localStorage.getItem('crossObj'));
							if(!statusColumnName.startsWith("[")) {
								for (var o in obj){
									if(o==statusColumnName){
										obj[o] = statusColumnValue;
									}
								}
								var table = localStorage.getItem('crossTable');
								this.$http.post(table+'/update', obj).then(res => {});
							} else {
								crossuserid=Number(localStorage.getItem('frontUserid'));
								crossrefid=obj['id'];
								crossoptnum=localStorage.getItem('statusColumnName');
								crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
							}
						}
					}
					if(crossrefid && crossuserid) {
						this.ruleForm.crossuserid=crossuserid;
						this.ruleForm.crossrefid=crossrefid;
						var params = {
							page: 1,
							limit: 10,
							crossuserid:crossuserid,
							crossrefid:crossrefid,
						}
						this.$http.get('zhaopinxinxi/list', {
							params: params
						}).then(res => {
							if(res.data.data.total>=crossoptnum) {
								this.$message({
									message: localStorage.getItem('tips'),
									type: 'error',
									duration: 1500,
								});
								return false;
							} else {
								// 跨表计算


								this.$http.post(`zhaopinxinxi/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
									if (res.data.code == 0) {
										this.$message({
											message: '操作成功',
											type: 'success',
											duration: 1500,
											onClose: () => {
												this.$router.go(-1);
											}
										});
									} else {
										this.$message({
											message: res.data.msg,
											type: 'error',
											duration: 1500
										});
									}
								});
							}
						});
					} else {


						this.$http.post(`zhaopinxinxi/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
							if (res.data.code == 0) {
								this.$message({
									message: '操作成功',
									type: 'success',
									duration: 1500,
									onClose: () => {
										this.$router.go(-1);
									}
								});
							} else {
								this.$message({
									message: res.data.msg,
									type: 'error',
									duration: 1500
								});
							}
						});
					}
				}
			});
		},
		// 获取uuid
		getUUID () {
			return new Date().getTime();
		},
		// 返回
		back() {
			this.$router.go(-1);
		},
      gongzuohuanjingUploadChange(fileUrls) {
          this.ruleForm.gongzuohuanjing = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");;
      },
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  padding: 0 10px 0 0;
	  color: #666;
	  font-weight: 500;
	  width: 180px;
	  font-size: 14px;
	  line-height: 40px;
	  text-align: right;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 180px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  border: 1px solid #ddd;
	  border-radius: 4px;
	  padding: 0 12px;
	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  outline: none;
	  color: #666;
	  background: #fff;
	  width: 400px;
	  font-size: 14px;
	  height: 40px;
	}
	.add-update-preview .el-input-number /deep/ .el-input__inner {
		text-align: left;
	  border: 1px solid #ddd;
	  border-radius: 4px;
	  padding: 0 12px;
	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  outline: none;
	  color: #666;
	  background: #fff;
	  width: 400px;
	  font-size: 14px;
	  height: 40px;
	}
	.add-update-preview .el-input-number /deep/ .el-input-number__decrease {
		display: none;
	}
	.add-update-preview .el-input-number /deep/ .el-input-number__increase {
		display: none;
	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  border: 1px solid #ddd;
	  border-radius: 4px;
	  padding: 0 10px;
	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  outline: none;
	  color: #666;
	  background: #fff;
	  width: 200px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  border: 1px solid #ddd;
	  border-radius: 4px;
	  padding: 0 10px 0 30px;
	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  outline: none;
	  color: #666;
	  background: #fff;
	  width: 200px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  border: 1px solid #ddd;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #999;
	  background: #fff;
	  width: 200px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  border: 1px solid #ddd;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #999;
	  background: #fff;
	  width: 200px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  border: 1px solid #ddd;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #999;
	  background: #fff;
	  width: 200px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  border: 1px solid #ddd;
	  border-radius: 4px;
	  padding: 12px;
	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  outline: none;
	  color: #666;
	  background: #fff;
	  width: 400px;
	  font-size: 14px;
	  height: 120px;
	}
</style>
