


export const ADD_NOTIFICATION = (state,{message,type}) => {
    state.notification.push({message:message,type:type,id:(Math.random().toString(36)+Date.now().toString(36)).substr(2)})
}
export const REMOVE_NOTIFICATION = (state,notiid) =>{
    state.notification = state.notification.filter((data)=>data.id != notiid)
}