export const state =()=>({
    name : '',
    age : '',
    address : '',
    phone : '',
})

export const mutations ={
    setUser(state, params){
        
        state.name = params.name;
        state.age = params.age;
        state.address = params.address;
        state.phone = params.phone;
        console.log(state.name);
    }
}

export const actions ={
    set_user({commit}, params){
        commit('setUser',params)
    }
}