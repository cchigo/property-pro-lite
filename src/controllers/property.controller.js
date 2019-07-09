 import propertyService from "../services/prop.service";
 import model from "../models/property.model";
 
 export default class PropertyController{
   static async getProperties(req, res){
    const allProps = await propertyService.getProperties();
    return res
      .json({
        status: 'success',
        data: allProps,
        message: `All properties retrieved`
      })
      .status(200);
   } 
   static getAProperty(req, res){
    const propId = req.params.id;
    const foundProp = propertyService.getAProperty(propId);
    return res
      .json({
        status: 'success',
        data: foundProp,
        message: `Property with id ${req.params.id} retrieved`
      })
      .status(200);
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
     data : leftProp
   }); 
 }
 }