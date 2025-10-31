import {createRouter, createWebHistory} from 'vue-router'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'
import KeysView from '../views/KeysView.vue'
import DocumentsView from '../views/DocumentsView.vue'
import SignView from '../views/SignView.vue'
import VerifyView from '../views/VerifyView.vue'
import RegisterView from "../views/RegisterView.vue";
import HomeView from "../views/HomeView.vue";

const routes = [
    {path: '/', redirect: '/login'},
    {path: '/login', component: LoginView},
    {path: '/register', component: RegisterView},
    {path: '/dashboard', component: DashboardView},
    {path: '/keys', component: KeysView},
    {path: '/documents', component: DocumentsView},
    {path: '/sign/:id', component: SignView},
    {path: '/verify/:id', component: VerifyView},
    {path: '/home', component: HomeView},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router