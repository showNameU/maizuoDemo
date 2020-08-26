import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        isTabbarShow:true
    },
    mutations:{//修改state属性时 必须通过mutations
        hiddlAndShowTabbar(s,data){
//s就是state,data就是传递过来的参数
            // console.log(s)
            s.isTabbarShow=data;
        }
    },
    actions:{},
})

export default store