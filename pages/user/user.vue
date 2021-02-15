<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		async onShow(){			//每次进入页面判断是否登录			let res=await this.isLoginFn()						if(res&&res.errMsg&&res.errMsg=='getStorage:ok'){				console.log('已经拿到token');			} else{				console.log('没有token');				uni.showToast({					icon:'loading',					title:'请先登录'				})				setTimeout(()=>{					uni.navigateTo({						url:'/pages/login/login'					})				},600)			}					},		methods: {			goUserPage(){				uni.navigateTo({					url:'../user/user'				})			},			goLoginPage(){				uni.navigateTo({					url:'/pages/login/login'				})			},			isLoginFn(){				//这个api是异步的 调用时加await 返回一个promise				return new Promise((resolve,reject)=>{					uni.getStorage({							key: 'intrgalMall-token',							success(res){								console.log(res);								resolve(res)							},							fail(err){								console.log(err);								reject(err)							}					})				}).catch(e=>{})			},		}			}
</script>

<style lang="scss">

</style>
