<template>
    <div>
        <button @click="routeTo">路由带参数跳转</button>
    </div>
</template>

<script lang='ts' setup>
import { useRouter } from 'vue-router';

const router = useRouter()
const routeTo = () => {
    router.push({
        path: '/router',
        query: {
            a: 1
        }
    })
}
</script>

<style scoped lang="scss">
</style>