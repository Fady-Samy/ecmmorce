export const SET_AUTHED_USER = "SET_AUTHED_USER";

//Dah el action creator elly by create el action elly bnset be men el user elly authenticated
export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id
  };
}
