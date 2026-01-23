export async function fetchMeteo() {
    const baseUrl = "https://api.open-meteo.com/v1/forecast";
    
    // Definimos los parámetros en un objeto
    const params = {
        latitude: 4,
        longitude: -73.25,
        hourly: [
            "temperature_2m",
            "wind_speed_80m",
            "visibility",
            "precipitation",
            "precipitation_probability",
            "relative_humidity_2m",
            "weather_code"
        ].join(","), // La API espera los valores separados por coma
        timezone: "auto",
        past_days: 7,
    };

    // Convertimos el objeto en una cadena de búsqueda (?latitude=4&longitude=-73.25...)
    const queryString = new URLSearchParams(params).toString();
    const fullUrl = `${baseUrl}?${queryString}`;

    try {
        const response = await fetch(fullUrl);

        if (!response.ok) {
            // Manejo de errores (ej: 400, 404, 500)
            const errorData = await response.json();
            throw new Error(`Error API: ${errorData.reason || "Desconocido"}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Hubo un problema al obtener el clima:", error);
        throw error;
    }
}