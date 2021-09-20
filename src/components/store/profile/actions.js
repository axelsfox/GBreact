export const SHOWNAME_ACTION = "PROFILE__SHOWNAME_ACTION";
export const CHANGE_NAME = "PROFILE__CHANGE_NAME";

export const showNameAction = {
  type: SHOWNAME_ACTION
}

export const changeName = (newName) => ({
  type: CHANGE_NAME,
  payload: newName,
});


