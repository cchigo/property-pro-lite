import dummyData from '../utilities/dummydata';
import Prop from '../models/user.model';

const userService = {
    getUsers(){
        return dummyData.users;
       
    },
 

    addNewUser(user){
        const newUser = user;
        const lengthOfUser = dummyData.user.length;
        const lastUserId = dummyData.user[lengthOfUser - 1].id;
        const newUserId = lastUserId + 1;
        newUser.id = newUserId;
        dummyData.users.push(user);
        return user;
    },

    getAUser(userId){
        const requiredUser = dummyData.users.find(user => users.id === userId);
        console.log(requiredUser);
       
        return requiredUser || [];
    },

    updateUser(userId){
        const userToBeUpdated = dummyData.users.find(user => user.id ===user.Id);
        return userToBeUpdated || [];
    },
    deleteProp(userId){
        const userToBeDeleted = dummyData.users.find(user => user.id === user);
        if (userToBeDeleted === undefined) {
            return `user not found`;
        }
        const UserIndex = dummyData.users.indexOf(userToBeDeleted);
        dummyData.users.splice(UserIndex, 1);
        return dummyData.user;
     }
    

};
export default  UserService;