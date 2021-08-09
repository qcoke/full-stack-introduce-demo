import Mock from 'mockjs';
import mockFetch from 'mockjs-fetch';
mockFetch(Mock);

Mock.mock('/api/users', () => {
  let _tempData_ = [];
  for (let i = 0, icount = 20; i < icount; i++) {
    _tempData_.push({
      key: i,
      name: Mock.mock('@cname'),
      age: Mock.mock({ "number|1-100": 100 }),
      address: Mock.mock('@county(true)'),
    })
  }
  return {
    success: true,
    code: 200,
    total: 20,
    data: _tempData_,
    message: ""
  }
})