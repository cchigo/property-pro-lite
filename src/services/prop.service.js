import dummyData from '../utilities/dummydata';
import Prop from '../models/property.model';

const PropService = {
    getProperties(){
        return dummyData.properties;
       
    },
 

    addNewProp(prop){
        const newProp = prop;
        const lengthOfProp = dummyData.prop.length;
        const lastPropId = dummyData.prop[lengthOfMeal - 1].id;
        const newPropId = lastPropId + 1;
        newProp.id = newPropId;
        dummyData.prop.push(meal);
        return prop;
    },

    getAProperty(propId){
        const requiredProp = dummyData.properties.find(prop => prop.id === propId);
        console.log(requiredProp);
       
        return requiredProp || [];
    },

    updateProp(propId){
        const propToBeUpdated = dummyData.prop.find(prop => prop.id ===prop.Id);
        return propToBeUpdated || [];
    },
    deleteProp(propId){
        const propToBeDeleted = dummyData.prop.find(prop => prop.id === prop);
        if (propToBeDeleted === undefined) {
            return `prop not found`;
        }
        const PropIndex = dummyData.prop.indexOf(propToBeDeleted);
        dummyData.prop.splice(propIndex, 1);
        return dummyData.prop;
     }
    

};
export default  PropService;