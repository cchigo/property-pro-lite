import propertyService from "../services/prop.service";
 
export default class UserController{
  static getUsers(req, res){
    return res.status(200).json({
      data: {
        user: model
      },
      message: `all users retrieved successfully`,
      status: `SUCCESS`
    })
  } 
  static getUsersById(req, res){
    return res.json({
      data: {
        user: model.[req.params.id]
      },
      message: `User with id ${req.params.id} retrieved`,
      status: `SUCCESS`
    })
  }

static async addNewProp(req,res){
  const newProp = req.body;
  const createdProp= await mealService.addNewProp(newProp);
  return res.json({
    status: `success`,
    data: createdMeal
  })
  .status(201);
}

static updateProp(req, res){
  const propId = req.params.id;
  const foundProp = propertyService.updateMeal(mealId);
  foundProp.name = req.body.name;
  foundProp.type = req.body.type;
  foundProp.price = req.body.price;
  return res.json({
    status: `success`,
    data: foundProp
  });

}
static deleteProp(req, res){
  const propId = req.params.id;
  const leftProp = propertyService.deleteProp(propId);
  return res.json({
    status: `success`,
    data = leftProp
  }); 
}
}