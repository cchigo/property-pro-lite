import userService from "../services/user.service";
import model from "../models/user.model";
 
export default class UserController{
  static getUsers(req, res){
    const allProps = await propertyService.getProperties();
    return res
      .json({
        status: 'success',
        data: allProps,
        message: `All users retrieved successfully`
      })
      .status(200);
   } 
    

  static getAUser(req, res){
    const userId = req.params.id;
    const foundUser = userService.getAUser(userId);
    return res
    .json({
      status: 'success',
      data: foundUser,
      message: `User with id ${req.params.id} retrieved`
    })
    .status(200);
  }

static async addNewUser(req,res){
  const newUser = req.body;
  const createdUser= await userService.addNewUser(newUser);
  return res.json({
    status: `success`,
    data: createdUser
  })
  .status(201);
}

static updateUser(req, res){
  const userId = req.params.id;
  const foundUser = UserService.updateuser(userId);
  foundUser.name = req.body.name;
  foundUser.type = req.body.type;
  foundProp.isAdmin = req.body.isAdmin;
  return res.json({
    status: `success`,
    data: foundUser
  });

}
static deleteUser(req, res){
  const userId = req.params.id;
  const leftUser = userService.deleteUser(userId);
  return res.json({
    status: `success`,
    data = leftUser
  }); 
}
}