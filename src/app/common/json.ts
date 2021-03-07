export class Json
{
getJsonObjectFromObject(object:Object){
    var jsonString = JSON.stringify(object);
    var jsonObject = JSON.parse(jsonString);
    return jsonObject;
}
}