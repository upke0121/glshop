
import MSite from '@/pages/MSite/MSite'
import Order from '@/pages/Order/Order'
import Profile from '@/pages/Profile/Profile'
import Search from '@/pages/Search/Search'

export default [
  {
    path:'/msite',
    component:MSite
  },
  {
    path:'/order',
    component:Order
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/search',
    component:Search
  },
  {
    path:'/',
    redirect: '/msite'
  }
]