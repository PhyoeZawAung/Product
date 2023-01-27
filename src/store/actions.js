


export const addNotification = ({ commit }, { message, type }) => {
    commit('ADD_NOTIFICATION', { message, type })
}
export const removeNotification = ({ commit }, notiid) => {
    commit('REMOVE_NOTIFICATION', notiid)
}