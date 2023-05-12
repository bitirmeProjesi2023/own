import {defineStore} from 'pinia'
import { computed, ref } from 'vue'

const useTokenStore = defineStore('token',() => {
    const authentication = ref(false);
    const token = ref('');
    const getToken = computed(() => token);
    const isAuthenticated = computed(() => token.value != '');

    function setToken(value: string){
        token.value = value;
        authentication.value = true;
    }

    function resetToken(){
        token.value = '';
        authentication.value = false;
    }

    return {authentication, isAuthenticated, getToken, setToken, resetToken}
})

export default useTokenStore;