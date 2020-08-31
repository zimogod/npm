// 工程化引入组件

// webpack中提供了一种工程化加载组件的方法
/**
 * require.context():自动加载文件的方法，有三个参数：
 *  1、路径 【你要加载文件的路径】   其中 '.' 代表同级目录内
 *  2、true 当前目录的路径内如果有嵌套的文件夹，则深层查找
 *  3、正则匹配  找文件类型  /\.vue/   
*/
const install = Vue =>{
    let requireComponent =  require.context('.',true,/\.vue/);
    // 把找到的组件缓存到一个集合【数组】 requireComponent.keys()里面
    requireComponent.keys().forEach(fileName => {
        // fileName 数组中的每一项  每一个.vue组件

        // requireComponent(每一个组件)，必须在循环里面调用
        let config = requireComponent(fileName);
        console.log(config)
        // 全局注册一个组件 Vue.component('组件名',当前组件)
        Vue.component(config.default.name,config.default)
    });
}

// 全局install方法，所以在使用你的UI库时，可以使用Vue.use()进行使用
export default {
    install
}