import Mock from 'mockjs';

Mock.mock('/api/detail', {
  success: true,
  data: {
    title: 'sdfdf',
    content: '<img src="//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt=""/><p><b>dsfs</b>sdfssaa</p><p>dsfs</p><p>dsfs</p>'
  }
});
