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
				<view class="banner_in_scoure">					<view class="able">						<text able_scoure>40000</text>						<text title>可用积分</text>					</view>					<view class="frozen">						<text frozen_scoure>10000</text>						<text title>冻结积分</text>					</view>				</view>			</view>
		</view>
	</view>
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
		color: #FFFFFF;
		.banner{
			height: 448rpx;
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
	}
</style>
