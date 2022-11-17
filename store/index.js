export const state = ()=>({
 user: {
    name: '',
    age: '',
    address: '',
    phone: '',
 }
})

export const mutation = ()=>({
 getUser(state,param){
    state.user.name = param.name;
    state.user.age = param.age;
    state.user.address = param.address;
    state.user.phone = param.phone;

 }
})

export const action = ()=>({
 changeUser({commit},param){
    commit('getUser', param)
 }
})