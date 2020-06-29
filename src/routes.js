import showBlog from './components/showBlog.vue'
import addBlog from './components/addBlog.vue'
import ViewPs from './components/ViewPs.vue'
import showXbox from './components/showXbox.vue'
import Profile from './components/Profile.vue'
import Home from './components/Home.vue'



export default[
    {path:'/',component:showBlog},
    {path:'/add',component:addBlog},
    {path:'/ps',component:ViewPs},
    {path:'/xbox',component:showXbox},
    {path:'/profile',component:Profile},
    {path:'/home',component:Home}



]