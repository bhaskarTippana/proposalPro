export const updatedSelectedTab = (tab) => {
    return {
        type : "UPDATE_SELECTED_TAB",
        payload: tab,
    };
};