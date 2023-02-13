
   
   const fetchdata=async(dataquery)=>{
   const data=await fetch(`https://api.edamam.com/api/nutrition-data?app_id=c7b01f33&app_key=5aafc6e31997be74adbf9e539c4bc8c2&nutrition-type=logging&ingr=${dataquery}`); 
    const response=await data.json();
    return response.totalNutrientsKCal.ENERC_KCAL.quantity;
};
export default fetchdata;