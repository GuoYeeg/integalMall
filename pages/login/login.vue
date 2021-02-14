<template>
	<view class="loginPage">
		<input type="number" v-model="phoneNum" placeholder="请输入手机号码"/>
		<view class="code">			<input type="text" v-model="vertifyCode" placeholder="请输入验证码"  />			<text v-if="isSendSMS" style="color:#C8C7CC">重新发送:{{countdown}}</text>			<text v-else @click="getVertifyCode">获取验证码</text>		</view>		<button class="loginbtn" @click="goLoginFn">登录</button>	</view>
</template>
<script>
	import {getSMS,loginFn} from '../../request/fetch.js'	export default {
		data() {
			return {
				phoneNum:'',
				vertifyCode:'',				//是否已发送验证码 默认未发送				isSendSMS:false,				//重发验证码倒计时				countdown:60,			};
		},		onLoad(){		},		methods:{			//正则验证手机号			phoneformat(phone){				return new Promise((resolve,reject)=>{					var myreg = /^[1][3,4,5,7,8,9][0-9]{9}$/					console.log(phone);					if (!myreg.test(phone)) {						reject(false)					} else {						resolve(true)					}				}).catch(e=>{					console.log(e)				})			},			//交互反馈			toastFn(iconStr,titleStr){				uni.showToast({						title:titleStr,						duration: 2000,						mask:true,						icon:iconStr				})			},			//获取验证码			async getVertifyCode(){				let res = await this.phoneformat(this.phoneNum)				// console.log(res)				if(res){					getSMS({						phone:this.phoneNum,					}).then(res=>{						console.log(res);						if(res.code==0){							this.toastFn("success","验证码发送成功")							this.isSendSMS=true							//设置重新发送的定时器							const timer=setInterval(()=>{								this.countdown--								if(this.countdown==0){									this.countdown=60 									clearInterval(timer)									this.isSendSMS=false								}							},1000)						}					})				}else{					this.toastFn("none","请输入正确手机号")				}			},			//登录按钮函数			async goLoginFn(){				let res=await this.phoneformat(this.phoneNum)				//判断手机号				if(!res){					this.toastFn("none","请输入正确手机号")					return				}				//判断验证码				else if(this.vertifyCode==""){					this.toastFn("none","请输入验证码")					return				} else{					loginFn({						phone:this.phoneNum,						verifyCode:this.vertifyCode					}).then(res=>{						console.log(res);						if(res.code==400)							this.toastFn("none","验证码过期")						if(res.code==0){							this.toastFn("success","登录成功")							uni.setStorage({							    key: 'intrgalMall-token',							    data: res['x-auth-token'],							    success: function () {							        console.log('success');							    }							});							//跳回登录前的页面							setTimeout(()=>{								// uni.navigateBack()								uni.switchTab({									url:"pages/index/index"								})																console.log(1111);							},1000)						}					})				}			}		}
	}
</script>

<style lang="scss">
	.loginPage{		padding:30vh 56rpx 0;		input{			height: 80rpx;			border-bottom: 2rpx solid #c8c8c8;			margin-bottom: 20rpx;		}		.code{			display: flex;			input{				flex: 5;			}			text{				flex: 2;				text-align: center;				line-height: 80rpx;				color: #0B3595;			}		}		.loginbtn{			background-color:#0B3595;			margin-top: 80rpx;			color: #FFFFFF;		}	}
</style>
