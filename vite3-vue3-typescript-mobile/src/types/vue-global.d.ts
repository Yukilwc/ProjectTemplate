// import { toEnquiry } from '@/utils/tools'
declare module "@vue/runtime-core" {
    interface ComponentCustomProperties {
        $globalUrl: string 
        // $popperOptions: typeof import("@/plugins/registerFunctions")['popperOptions']
    }
}
export { }