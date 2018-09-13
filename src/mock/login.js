import Mock from 'mockjs';

Mock.mock('/api/login', {
  success: true,
  data: true
});
