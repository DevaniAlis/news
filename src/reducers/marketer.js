export const Marketer = (state="",action) => {

    if(action.type === "search") {
        state = action.payload
        return state
    }
    return state

}