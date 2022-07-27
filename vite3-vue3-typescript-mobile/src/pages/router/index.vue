<template>
    <div>
        <button @click="routeTo">路由带参数跳转</button>
    </div>
</template>

<script lang='ts' setup>
import { watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter()
const route = useRoute()
const routeTo = () => {
    router.push({
        path: '/router',
        query: {
            a: 1
        }
    })
}
watch(() => route.query, (n, o) => {
    console.log('==========query change',n,o)
})

</script>

<style scoped lang="scss">
</style>