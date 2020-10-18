import http from '../../api/http'
import {INFO_API} from '../../api/url'

export default{
    namespaced: true,
    state:{
        course:[]
    },
    mutations:{
        setCourse(state,payload){
            state.course=payload;
        }
    },
    actions:{
        //课程
        async requestCourse(context,payload){
            const {data} =await http.get(INFO_API);
            context.commit('setCourse',data)
        }
    }
}