import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import SignInView from '@/views/SignInView.vue';
import SignUpView from '@/views/SignUpView.vue';
import ProfileView from '@/views/ProfileView.vue';
import NftMetadaUploadView from '@/views/NftMetadataUploadView.vue'
import NftView from '@/views/NftView.vue';


const routes = [
  { path: '/sign-in', name: 'sign-in', component: SignInView },
  { path: '/', name: 'home', component: HomeView },
  { path: '/sign-up', name: 'sign-up', component: SignUpView },
  { path: '/profile', name: 'profile', component: ProfileView, },
  { path: '/nft-upload', name: 'nftUpload', component: NftMetadaUploadView },
  { path: '/nft/:nftId', name: 'nft', component: NftView }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
