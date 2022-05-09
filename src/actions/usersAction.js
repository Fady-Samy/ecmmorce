export const RECEIVE_USERS = 'RECEIVE_USERS'

//[4]
export function receiveUsers (users){
    return{
    type: RECEIVE_USERS,
    users,
    }
}