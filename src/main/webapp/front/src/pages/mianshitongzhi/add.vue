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
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="通知标题" prop="tongzhibiaoti">
            <el-input v-model="ruleForm.tongzhibiaoti" 
                placeholder="通知标题" clearable :disabled=" false  ||ro.tongzhibiaoti"></el-input>
          </el-form-item>
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
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="薪酬待遇" prop="xinchoudaiyu">
            <el-input v-model="ruleForm.xinchoudaiyu" 
                placeholder="薪酬待遇" clearable :disabled=" false  ||ro.xinchoudaiyu"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="工作地点" prop="gongzuodidian">
            <el-input v-model="ruleForm.gongzuodidian" 
                placeholder="工作地点" clearable :disabled=" false  ||ro.gongzuodidian"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="面试时间" prop="mianshishijian">
              <el-date-picker
				  :disabled=" false  ||ro.mianshishijian"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  v-model="ruleForm.mianshishijian" 
                  type="datetime"
                  :picker-options="mianshishijianPickerOptions"
                  placeholder="面试时间">
              </el-date-picker>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="面试地点" prop="mianshididian">
            <el-input v-model="ruleForm.mianshididian" 
                placeholder="面试地点" clearable :disabled=" false  ||ro.mianshididian"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="企业名称" prop="qiyemingcheng">
            <el-input v-model="ruleForm.qiyemingcheng" 
                placeholder="企业名称" clearable :disabled=" false  ||ro.qiyemingcheng"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="公司电话" prop="gongsidianhua">
            <el-input v-model="ruleForm.gongsidianhua" 
                placeholder="公司电话" clearable :disabled=" false  ||ro.gongsidianhua"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="用户账号" prop="yonghuzhanghao">
            <el-input v-model="ruleForm.yonghuzhanghao" 
                placeholder="用户账号" clearable :disabled=" false  ||ro.yonghuzhanghao"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="用户姓名" prop="yonghuxingming">
            <el-input v-model="ruleForm.yonghuxingming" 
                placeholder="用户姓名" clearable :disabled=" false  ||ro.yonghuxingming"></el-input>
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
				tongzhibiaoti : false,
				gangweimingcheng : false,
				gongzuohuanjing : false,
				xinchoudaiyu : false,
				gongzuodidian : false,
				mianshishijian : false,
				mianshididian : false,
				qiyemingcheng : false,
				gongsidianhua : false,
				yonghuzhanghao : false,
				yonghuxingming : false,
				crossuserid : false,
				crossrefid : false,
				shhf : false,
        },
        type: '',
        userTableName: localStorage.getItem('UserTableName'),
        ruleForm: {
          tongzhibiaoti: '',
          gangweimingcheng: '',
          gongzuohuanjing: '',
          xinchoudaiyu: '',
          gongzuodidian: '',
          mianshishijian: '',
          mianshididian: '',
          qiyemingcheng: '',
          gongsidianhua: '',
          yonghuzhanghao: '',
          yonghuxingming: '',
          crossuserid: '',
          crossrefid: '',
        },

            mianshishijianPickerOptions: {
                disabledDate(time) {
                    return time.getTime() < Date.now() - 8.64e7;
                }
            },

        rules: {
          tongzhibiaoti: [
          ],
          gangweimingcheng: [
          ],
          gongzuohuanjing: [
          ],
          xinchoudaiyu: [
          ],
          gongzuodidian: [
          ],
          mianshishijian: [
            { required: true, message: '面试时间不能为空', trigger: 'blur' },
          ],
          mianshididian: [
            { required: true, message: '面试地点不能为空', trigger: 'blur' },
          ],
          qiyemingcheng: [
          ],
          gongsidianhua: [
            { validator: this.$validate.isPhone, trigger: 'blur' },
          ],
          yonghuzhanghao: [
          ],
          yonghuxingming: [
          ],
          crossuserid: [
          ],
          crossrefid: [
          ],
          shhf: [
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
            if(o=='tongzhibiaoti'){
              this.ruleForm.tongzhibiaoti = obj[o];
              this.ro.tongzhibiaoti = true;
              continue;
            }
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
            if(o=='mianshishijian'){
              this.ruleForm.mianshishijian = obj[o];
              this.ro.mianshishijian = true;
              continue;
            }
            if(o=='mianshididian'){
              this.ruleForm.mianshididian = obj[o];
              this.ro.mianshididian = true;
              continue;
            }
            if(o=='qiyemingcheng'){
              this.ruleForm.qiyemingcheng = obj[o];
              this.ro.qiyemingcheng = true;
              continue;
            }
            if(o=='gongsidianhua'){
              this.ruleForm.gongsidianhua = obj[o];
              this.ro.gongsidianhua = true;
              continue;
            }
            if(o=='yonghuzhanghao'){
              this.ruleForm.yonghuzhanghao = obj[o];
              this.ro.yonghuzhanghao = true;
              continue;
            }
            if(o=='yonghuxingming'){
              this.ruleForm.yonghuxingming = obj[o];
              this.ro.yonghuxingming = true;
              continue;
            }
            if(o=='crossuserid'){
              this.ruleForm.crossuserid = obj[o];
              this.ro.crossuserid = true;
              continue;
            }
            if(o=='crossrefid'){
              this.ruleForm.crossrefid = obj[o];
              this.ro.crossrefid = true;
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
        this.$http.get(`mianshitongzhi/detail/${this.$route.query.id}`, {emulateJSON: true}).then(res => {
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
						this.$http.get('mianshitongzhi/list', {
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


								this.$http.post(`mianshitongzhi/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
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


						this.$http.post(`mianshitongzhi/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
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
