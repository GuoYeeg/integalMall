<template>
	<view class="homePage">
		<view class="banner">
			<view class="banner_in">
				<view class="banner_in_hearder">
					<view class="banner_in_hearder_l">						<view class="avatar">							<image :src="isLogin?userInfo.headImg:defaultAvatar" mode="widthFix"></image>						</view>
						<text>{{isLogin?userInfo.nickName:'游客'}}</text>
					</view>
					<view class="banner_in_hearder_r" v-if="isLogin">
						<image src="../../static/index/Shopping.png" mode="widthFix"></image>
						<text>购物车</text>
						<view class="num">{{cartTotal}}</view>
					</view>					<view class="banner_in_hearder_r" v-else>						<view class="banner_in_hearder_r_btn" @click="goLoginPage">登录</view>					</view>
				</view>
				<view class="banner_in_total">
					<view class="total_title">总积分</view>
					<view class="total_scoure">{{isLogin?userInfo.coin:'--'}}</view>
				</view>
				<view class="banner_in_scoure">					<view class="able">						<text >{{isLogin?userInfo.balance:'--'}}</text>						<text >可用积分</text>					</view>					<view class="frozen">						<text>{{isLogin?userInfo.freezeCoin:'--'}}</text>						<text>冻结积分</text>					</view>				</view>			</view>
		</view>		<view class="nav">			<text @click="goUserPage">个人中心</text>			<text>我的订单</text>			<text>积分明细</text>			<text>专属福利</text>		</view>
		<view class="title">			<view class="title_l">				<image src="../../static/index/Recommend.png" mode="widthFix"></image>				<text>{{recommandTitle}}</text>			</view>			<view class="title_r">				<text>更多</text>				<image src="../../static/index/More.png" mode="widthFix"></image>			</view>		</view>		<view class="products">			<view class="products_box" v-for="(item,index) in goodsRecommandList" :key="item.id">				<image :src="'http://gz.wolfcode.cn'+item.coverImg" mode="widthFix"></image>				<text class="products_box_title">{{item.title}}</text>				<text class="products_box_coin">{{item.coin}}积分</text>				<button class="products_box_btn">立即兑换</button>				<image v-if="item.isHotSale==1" src="../../static/index/hot-j.png" mode="widthFix" class="products_box_tips"></image>				<image v-if="item.isLatest==1" src="../../static/index/new.png" mode="widthFix" class="products_box_tips"></image>			</view>		</view>		<view class="title">			<view class="title_l">				<image src="../../static/index/hot.png" mode="widthFix"></image>				<text>{{hotTitle}}</text>			</view>			<view class="title_r">				<text>更多</text>				<image src="../../static/index/More.png" mode="widthFix"></image>			</view>		</view>		<view class="ad">			<image src="../../static/index/banner.png" mode="heightFix"></image>		</view>		<view class="products">			<view class="products_box" v-for="(item,index) in goodsHotList" :key="item.id">				<image :src="'http://gz.wolfcode.cn'+item.coverImg" mode="widthFix"></image>				<text class="products_box_title">{{item.title}}</text>				<text class="products_box_coin">{{item.coin}}积分</text>				<button class="products_box_btn">立即兑换</button>				<image v-if="item.isHotSale==1" src="../../static/index/hot-j.png" mode="widthFix" class="products_box_tips"></image>				<image v-if="item.isLatest==1" src="../../static/index/new.png" mode="widthFix" class="products_box_tips"></image>			</view>		</view>		<view class="allgoods">			<button class="allgoods_btn">查看全部商品</button>		</view>		<view class="title">			<view class="title_l">				<image src="../../static/index/hot.png" mode="widthFix"></image>				<text>积分攻略</text>			</view>			<view class="title_r">				<text>更多</text>				<image src="../../static/index/More.png" mode="widthFix"></image>			</view>		</view>		<view class="trick">			<view class="trick_box">				<image src="../../static/index/integral-01.png" mode="widthFix"></image>			</view>			<view class="trick_box">				<image src="../../static/index/integral-02.png" mode="widthFix"></image>			</view>			<view class="trick_box">				<image src="../../static/index/integral-03.png" mode="widthFix"></image>			</view>			<view class="trick_box">				<image src="../../static/index/integral-04.png" mode="widthFix"></image>			</view>		</view>		<view class="footer">			<view class="footer_l">				<image src="../../static/index/service.png" mode="widthFix"></image>				<text>在线客服</text>			</view>			<view class="footer_r">				<image src="../../static/index/phone.png" mode="widthFix"></image>				<text>电话咨询</text>			</view>		</view>	</view>
</template>

<script>	import {getuserInfo,getgoodsRecommand,getgoodsHot} from '../../request/fetch.js'
	export default {
		data() {
			return {
				title: 'Hello',				recommandTitle:'',				hotTitle:'',				defaultAvatar:require('../../static/index/photo.png'),				isLogin:false,				userInfo:{},				cartTotal:5,				goodsRecommandList:[],				goodsHotList:[]
			}
		},
		onLoad() {
			getgoodsRecommand().then(res=>{				if(res.code==0){					console.log(res);					this.recommandTitle=res.data.data.name					this.goodsRecommandList=res.data.data.records.splice(0,3)					console.log(this.goodsRecommandList);				}			})			getgoodsHot().then(res=>{				if(res.code==0){					console.log(res);					this.hotTitle=res.data.data.name					this.goodsHotList=res.data.data.records.splice(0,3)					console.log(this.goodsRecommandList);				}			})
		},		async onShow(){			//每次进入页面判断是否登录			let res=await this.isLoginFn()			if(res&&res.errMsg&&res.errMsg=='getStorage:ok'){				console.log('已经拿到token');				console.log(res);				getuserInfo({					//属性名有-字符 加引号否则不被认为是一个键 					'x-auth-token':res.data				}).then(res=>{					if(res.code==0){						console.log(res.data);						this.isLogin=true;						this.userInfo=res.data.userInfo						this.cartTotal=res.data.cartTotal					}				})							} else{				console.log('没有token');			}					},
		methods: {			goUserPage(){				uni.navigateTo({					url:'../user/user'				})			},			goLoginPage(){				uni.navigateTo({					url:'/pages/login/login'				})			},
			isLoginFn(){				//这个api是异步的 调用时加await 返回一个promise				return new Promise((resolve,reject)=>{					uni.getStorage({					    key: 'intrgalMall-token',					    success(res){								console.log(res);								resolve(res)					    },							fail(err){								console.log(err);								reject(err)							}					})				}).catch(e=>{})			},
		}
	}
</script>

<style lang="scss">
	.homePage{
		padding: 31rpx 0 0 0;
		.banner{
			height: 448rpx;			color: #FFFFFF;
			border-radius: 6rpx;
			overflow: hidden;
			background: url(../../static/index/bg.png) no-repeat;
			background-size: contain;
			padding: 40rpx 65rpx;
			box-sizing: border-box;
			.banner_in{
				width: 100%;
				height: 100%;
				// background-color: pink;
				.banner_in_hearder{
					display: flex;
					height: 48rpx;
					width: 100%;
					margin-bottom: 55rpx;
					justify-content: space-between;
					.banner_in_hearder_l{
						height: 100%;
						display: flex;
						align-items: center;						.avatar{							width: 50rpx;							height: 50rpx;							margin: 10rpx;							border-radius: 50%;							overflow: hidden;							text-align: center;							line-height: 50rpx;						}
						image{
							width: 50rpx;
						}
					}
					.banner_in_hearder_r{
						box-sizing: border-box;
						display: flex;
						align-items: center;
						font-size: 24rpx;
						view,text,image{
							margin-right: 8rpx;
						}
						image{
							width: 28rpx;
						}
						.num{
							width: 23rpx;
							line-height: 23rpx;
							text-align: center;
							height: 23rpx;
							border-radius: 50%;
							background-color: #FD604D;
							font-size: 18rpx;
						}						.banner_in_hearder_r_btn{							width: 80rpx;							height: 40rpx;							line-height: 40rpx;							text-align: center;							background-color: #FFFFFF;							color: #0C3CA9;							font-size: 28rpx;							border-radius: 30rpx;												}
					}

				}
				.banner_in_total{					text-align: center;					margin-bottom: 60rpx;					.total_title{						height: 26rpx;						font-size: 26rpx;						margin-bottom: 25rpx;					}					.total_scoure{						height: 60rpx;						font-size: 60rpx;						line-height: 60rpx;					}				}				.banner_in_scoure{					display: flex;					justify-content: space-between;					padding: 0 106rpx 62rpx 106rpx;					font-size: 28rpx;					.able,.frozen{						display: flex;						flex-direction: column;						justify-content: space-between;						align-items: center;					}				}			}
		}
		.nav{			padding: 0 35rpx;			display: flex;			justify-content: space-between;			height: 80rpx;			line-height: 80rpx;			width: 100%;			box-sizing: border-box;			font-size: 28rpx;			color: #333333;			margin-bottom: 8rpx;		}		.title{			padding: 0 35rpx;			display: flex;			justify-content: space-between;			height: 96rpx;			.title_l{				display: flex;				align-items: center;				font-weight: bold;				image{					width: 40rpx;					margin-right: 8rpx;				}			}			.title_r{				display: flex;				align-items: center;				font-size: 22rpx;				image{					width: 20rpx;					margin-left: 8rpx;				}			}		}		.products{			display: flex;			justify-content: space-between;			height: 429rpx;			padding: 0 35rpx;						.products_banner{				width: 680rpx;				display: block;			}			.products_box{				display: flex;				flex-direction: column;				text-align: center;				width: 214rpx;				height: 100%;				background-color: #FFFFFF;				position: relative;				image{					width: 214rpx;					margin-bottom: 20rpx;				}				.products_box_tips{					position: absolute;					top: 0; left:0;					width: 58rpx;				}				.products_box_title{					margin-bottom: 20rpx;					font-size: 28rpx;					overflow: hidden;					white-space: nowrap;					text-overflow: ellipsis;				}				.products_box_coin{					margin-bottom: 14rpx;					color: #FF5E0F;					font-size: 24rpx;					font-weight: bold;				}				.products_box_btn{					width: 140rpx;					height: 65rpx;					font-size: 22rpx;					border: 1rpx solid #0B338E;					color: #0B338E;					padding: 0;					line-height: 65rpx;					box-sizing: border-box;				}			}		}		.ad{			height: 182rpx;			width: 100%;			padding: 0 35rpx;			margin-bottom: 30rpx;			image{				height: 182rpx;			}		}		.allgoods{			margin: 40rpx 0 12rpx 0 ;			padding: 0 35rpx;			.allgoods_btn{				text-align: center;				line-height: 60rpx;				height: 60rpx;				width: 100%;				background-color: #0A328E;				color: #FFFFFF;				font-size: 26rpx;			}		}		.trick{			height: 432rpx;			padding: 0 35rpx;			display: flex;			flex-wrap: wrap;			justify-content: space-between;			margin-bottom: 28rpx;			.trick_box{				width: 328rpx;				margin-bottom: 23rpx;				image{					width: 328rpx;				}			}		}		.footer{			box-sizing: border-box;			height: 80rpx;			background-color: #0A328E;			padding: 22rpx 35rpx 23rpx 35rpx;			display: flex;			justify-content: space-between;			.footer_l,.footer_r{				text-align: center;				overflow: hidden;				height: 40rpx;				width: 330rpx;				font-size: 26rpx;				font-weight: bold;				display: flex;				justify-content: center;				color: #FFFFFF;				image{					width: 42rpx;					margin-right: 14rpx;				}			}		}	}
</style>
