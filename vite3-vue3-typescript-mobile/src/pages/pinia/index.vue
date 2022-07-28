<template>
    <div>pinia options写法测试</div>
    <div class=''>是否登录:{{ userStore.hasLogin }}</div>
    <div class=''>登录token:{{ userStore.token }}</div>
    <div class=''>
        <button @click="loginClick">登录</button>
    </div>
    <div class=''>
        <button @click="userStore.logout">登出</button>
    </div>
    <div class=''>pinia composition api 写法测试</div>
    <div class='navbar-border'
        :style="[{ height: profileStore.navbarHeight }, { backgroundColor: profileStore.themeColor }]">高度与主题</div>
    <div class=''>
        <button @click="profileStore.changeTheme('#a2d2ff')">变换主题</button>
    </div>
</template>

<script lang='ts' setup>
import { useProfileStore } from '@/store/profile';
import { useUserStore } from '@/store/user';
// import { useCookies } from '@vueuse/integrations/useCookies';
const profileStore = useProfileStore();

const userStore = useUserStore()

// const USER_STATE_KEY = "user_state_key";
// let cookies = useCookies([USER_STATE_KEY]);
const loginClick = () => {
    userStore.loginByPw()
}
</script>

<style scoped lang="scss">
.navbar-border {
    width:233px;
    border: 1px solid gray;
}
</style>