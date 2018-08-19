import Mock from 'mockjs';

Mock.mock('/api/home', {
  success: true,
  data: {
    topicList: [
      {
        id: 1,
        title: '社会热点',
        imgUrl:
          '//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
      },
      {
        id: 2,
        title: '手手绘',
        imgUrl:
          '//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
      }
    ],
    articleList: [
      {
        id: 1,
        title: '胡歌12年后首谈车祸',
        desc:
          '文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...',
        imgUrl:
          '//upload-images.jianshu.io/upload_images/2259045-2986b9be86b01f63?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
      },
      {
        id: 2,
        title: '胡歌12年后首谈车祸：既然活下来了，就不能白白活着',
        desc:
          '文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...',
        imgUrl:
          '//upload-images.jianshu.io/upload_images/2259045-2986b9be86b01f63?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
      },
      {
        id: 3,
        title: '胡歌12年后首谈车祸：既然活下来了，就不能白白活着',
        desc:
          '文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...',
        imgUrl:
          '//upload-images.jianshu.io/upload_images/2259045-2986b9be86b01f63?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
      },
      {
        id: 4,
        title: '胡歌12年后首谈车祸：既然活下来了，就不能白白活着',
        desc:
          '文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...',
        imgUrl:
          '//upload-images.jianshu.io/upload_images/2259045-2986b9be86b01f63?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
      }
    ],
    recommendList: [
      {
        id: 1,
        imgUrl:
          'https://hbimg.b0.upaiyun.com/a7028caef07008d08a3ac64dc302425a7ea270dd10b37-RKP3NB_sq320'
      },
      {
        id: 2,
        imgUrl:
          'https://hbimg.b0.upaiyun.com/9c517b172a5acd40bd634c2ed6b5726251580f5520545-ntjvjl_sq320'
      }
    ]
  }
});
