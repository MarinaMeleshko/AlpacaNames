export async function generateAlpacaName(){
    try{
        const response = await fetch('api/generateAlpacaName');
        return await response.json();
    }
    catch(error){
        return null;
    }
}

export default generateAlpacaName;