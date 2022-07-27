<template>
    <div>pinia测试</div>
    <div class=''>是否登录:{{userStore.hasLogin}}</div>
    <div class=''>登录token:{{userStore.token}}</div>
    <div class=''>
        <button @click="loginClick">登录</button>
    </div>
</template>

<script lang='ts' setup>
import { useUserStore } from '@/store/user';
// import { useCookies } from '@vueuse/integrations/useCookies';

const userStore = useUserStore()

// const USER_STATE_KEY = "user_state_key";
// let cookies = useCookies([USER_STATE_KEY]);
const loginClick = () => {
    userStore.loginByPw()
}
</script>

<style scoped lang="scss">
</style>