import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: 'sdfd',
    imgUrl: '//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
  },{
    id: 2,
    title: '22sdfd',
    imgUrl: '//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
  }],
  articleList: [{
    id: 1,
    title: 'sfjlds',
    desc: 'sdfdsffds',
    imgUrl: '//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
  },
  {
    id: 2,
    title: 'sfjlds',
    desc: 'sdfdsffds',
    imgUrl: '//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
  },{
    id: 3,
    title: 'sfjlds',
    desc: 'sdfdsffds',
    imgUrl: '//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
  }],
  recommendList: [{
    id: 1,
    imgUrl: '//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
  },{
    id: 2,
    imgUrl: '//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
  }]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
