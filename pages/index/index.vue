<template>
	<view class="homePage">
		<view class="banner">
			<view class="banner_in">
				<view class="banner_in_hearder">
					<view class="banner_in_hearder_l">
						<image src="../../static/index/photo.png" mode="widthFix"></image>
						<text>世界和平</text>
					</view>
					<view class="banner_in_hearder_r">
						<image src="../../static/index/Shopping.png" mode="widthFix"></image>
						<text>购物车</text>
						<view class="num">5</view>
					</view>
				</view>
				<view class="banner_in_total">
					<view class="total_title">总积分</view>
					<view class="total_scoure">50000</view>
				</view>
				<view class="banner_in_scoure">					<view class="able">						<text >40000</text>						<text >可用积分</text>					</view>					<view class="frozen">						<text>10000</text>						<text>冻结积分</text>					</view>				</view>			</view>
		</view>		<view class="nav">			<text>个人中心</text>			<text>我的订单</text>			<text>积分明细</text>			<text>专属福利</text>		</view>
		<view class="title">			<view class="title_l">				<image src="../../static/index/Recommend.png" mode="widthFix"></image>				<text>精品推荐</text>			</view>			<view class="title_r">				<text>更多</text>				<image src="../../static/index/More.png" mode="widthFix"></image>			</view>		</view>		<view class="products">			<view class="products_box">				<image src="../../static/index/img.png" mode="widthFix"></image>				<text class="products_box_title">精品T恤</text>				<text class="products_box_coin">200积分</text>				<button class="products_box_btn">立即兑换</button>				<image src="../../static/index/hot-j.png" mode="widthFix" class="products_box_tips"></image>			</view>			<view class="products_box">				<image src="../../static/index/img.png" mode="widthFix"></image>				<text class="products_box_title">精品T恤</text>				<text class="products_box_coin">200积分</text>				<button class="products_box_btn">立即兑换</button>			</view>			<view class="products_box">				<image src="../../static/index/img.png" mode="widthFix"></image>				<text class="products_box_title">精品T恤</text>				<text class="products_box_coin">200积分</text>				<button class="products_box_btn">立即兑换</button>			</view>		</view>		<view class="title">			<view class="title_l">				<image src="../../static/index/hot.png" mode="widthFix"></image>				<text>热门推荐</text>			</view>			<view class="title_r">				<text>更多</text>				<image src="../../static/index/More.png" mode="widthFix"></image>			</view>		</view>		<view class="ad">			<image src="../../static/index/banner.png" mode="heightFix"></image>		</view>		<view class="products">			<view class="products_box">				<image src="../../static/index/img.png" mode="widthFix"></image>				<text class="products_box_title">精品T恤</text>				<text class="products_box_coin">200积分</text>				<button class="products_box_btn">立即兑换</button>				<image src="../../static/index/hot-j.png" mode="widthFix" class="products_box_tips"></image>			</view>			<view class="products_box">				<image src="../../static/index/img.png" mode="widthFix"></image>				<text class="products_box_title">精品T恤</text>				<text class="products_box_coin">200积分</text>				<button class="products_box_btn">立即兑换</button>			</view>			<view class="products_box">				<image src="../../static/index/img.png" mode="widthFix"></image>				<text class="products_box_title">精品T恤</text>				<text class="products_box_coin">200积分</text>				<button class="products_box_btn">立即兑换</button>			</view>		</view>		<view class="allgoods">			<button class="allgoods_btn">查看全部商品</button>		</view>		<view class="title">			<view class="title_l">				<image src="../../static/index/hot.png" mode="widthFix"></image>				<text>积分攻略</text>			</view>			<view class="title_r">				<text>更多</text>				<image src="../../static/index/More.png" mode="widthFix"></image>			</view>		</view>		<view class="trick">			<view class="trick_box">				<image src="../../static/index/integral-01.png" mode="widthFix"></image>			</view>			<view class="trick_box">				<image src="../../static/index/integral-02.png" mode="widthFix"></image>			</view>			<view class="trick_box">				<image src="../../static/index/integral-03.png" mode="widthFix"></image>			</view>			<view class="trick_box">				<image src="../../static/index/integral-04.png" mode="widthFix"></image>			</view>		</view>		<view class="footer">			<view class="footer_l">				<image src="../../static/index/service.png" mode="widthFix"></image>				<text>在线客服</text>			</view>			<view class="footer_r">				<image src="../../static/index/phone.png" mode="widthFix"></image>				<text>电话咨询</text>			</view>		</view>	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

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
						align-items: center;
						image{
							width: 48rpx;
							margin: 10rpx;
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
						}
					}

				}
				.banner_in_total{					text-align: center;					margin-bottom: 60rpx;					.total_title{						height: 26rpx;						font-size: 26rpx;						margin-bottom: 25rpx;					}					.total_scoure{						height: 60rpx;						font-size: 60rpx;						line-height: 60rpx;					}				}				.banner_in_scoure{					display: flex;					justify-content: space-between;					padding: 0 106rpx 62rpx 106rpx;					font-size: 28rpx;					.able,.frozen{						display: flex;						flex-direction: column;						justify-content: space-between;						align-items: center;					}				}			}
		}
		.nav{			padding: 0 35rpx;			display: flex;			justify-content: space-between;			height: 80rpx;			line-height: 80rpx;			width: 100%;			box-sizing: border-box;			font-size: 28rpx;			color: #333333;			margin-bottom: 8rpx;		}		.title{			padding: 0 35rpx;			display: flex;			justify-content: space-between;			height: 96rpx;			.title_l{				display: flex;				align-items: center;				font-weight: bold;				image{					width: 40rpx;					margin-right: 8rpx;				}			}			.title_r{				display: flex;				align-items: center;				font-size: 22rpx;				image{					width: 20rpx;					margin-left: 8rpx;				}			}		}		.products{			display: flex;			justify-content: space-between;			height: 429rpx;			padding: 0 35rpx;			image{				width: 214rpx;				height: 87;				margin-bottom: 20rpx;			}			.products_banner{				width: 680rpx;				display: block;			}			.products_box{				display: flex;				flex-direction: column;				text-align: center;				width: 214rpx;				height: 100%;				background-color: #FFFFFF;				position: relative;				.products_box_tips{					position: absolute;					top: 0; left:0;					width: 58rpx;				}				.products_box_title{					margin-bottom: 20rpx;				}				.products_box_coin{					margin-bottom: 14rpx;					color: #FF5E0F;					font-size: 24rpx;					font-weight: bold;				}				.products_box_btn{					width: 140rpx;					height: 45rpx;					font-size: 22rpx;					border: 1rpx solid #0B338E;					color: #0B338E;					padding: 0;					line-height: 45rpx;					box-sizing: border-box;				}			}		}		.ad{			height: 182rpx;			width: 100%;			padding: 0 35rpx;			margin-bottom: 30rpx;			image{				height: 182rpx;			}		}		.allgoods{			margin: 40rpx 0 12rpx 0 ;			padding: 0 35rpx;			.allgoods_btn{				text-align: center;				line-height: 60rpx;				height: 60rpx;				width: 100%;				background-color: #0A328E;				color: #FFFFFF;				font-size: 26rpx;			}		}		.trick{			height: 432rpx;			padding: 0 35rpx;			display: flex;			flex-wrap: wrap;			justify-content: space-between;			margin-bottom: 28rpx;			.trick_box{				width: 328rpx;				margin-bottom: 23rpx;				image{					width: 328rpx;				}			}		}		.footer{			box-sizing: border-box;			height: 80rpx;			background-color: #0A328E;			padding: 22rpx 35rpx 23rpx 35rpx;			display: flex;			justify-content: space-between;			.footer_l,.footer_r{				text-align: center;				overflow: hidden;				height: 40rpx;				width: 330rpx;				font-size: 26rpx;				font-weight: bold;				display: flex;				justify-content: center;				color: #FFFFFF;				image{					width: 42rpx;					margin-right: 14rpx;				}			}		}	}
</style>
