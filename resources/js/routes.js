import Home from './components/Home';
import About from './components/About'
import Page404 from './components/NotFound'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'

export default {
    mode: 'history',
    linkActiveClass: 'active',
    routes: [
        {
          path: '*',
          component: Page404
        },
        {
            path: '/',
            component: Home,
            name: 'Home'
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/login',
            component: Login,
            name: 'Login'
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/dashboard',
            component: Dashboard,
            name: 'Dashboard',
            beforeEnter: (to, form, next) => {
                axios.get('/api/authenticated').then(()=>{
                    next();
                }).catch(()=>{
                    return next({name: 'Login'})
                })
            }
        }
    ]
}
