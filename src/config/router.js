import MainClass from '../pages/MainClass/MainClass';
import Welcome from '../pages/MainClass/Welcome';
import App from "../App"

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        label:'welcome',
        exact: true,
        component: Welcome
      }, {
        path: '/Main',
        label: 'main',
        component: MainClass
      }
    ]
  }
]

export default routes
