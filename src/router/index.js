
import HomeView from '@/views/HomeView.vue'
import ProductView from '@/views/ProductView.vue'
import YourProduct from '@/views/YourProduct.vue'
import VueRouter from 'vue-router';
const router = new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
         
            component:HomeView
        },
        {
            path:'/product/:id',
        
            component:ProductView,
            props:true
        },
        {
            path:'/yourproducts',
            component:YourProduct,
        }
    ]
});

export default router;