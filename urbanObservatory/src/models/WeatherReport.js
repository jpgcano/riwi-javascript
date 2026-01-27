export class WeatherReport{
    constructor(data){
        this.latitude = data.latitude;
        this.longitude =data.longitude;
        this.timeZone = data.timeZone;
        this.hourly = data.hourly;
    }

    // Metódo  para obtener información
    getSummary(){
        return `Ubicado en`;
    }

}