export const selectUser = (user) =>{
    console.log("you clicked on:",user.subSeriesName)
    return{
        type: "USER_SELECTED",
        payload: user
    }
};