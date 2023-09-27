// 7b3732c4ab12f73f0d3ef8bedb6d5c62
    // coloquei a chave copiada aqui pra deixar reservada
    
   
const apiKey = '7b3732c4ab12f73f0d3ef8bedb6d5c62';
const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=-27.59&lon=-48.54&units=metric&appid=${apiKey}&lang=pt_br`;

const weatherDataContainer = document.getElementById('weather-data2');

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    // Os dados da previsão do tempo estão em 'data'
    console.log(data);

    // processar os dados e renderizá-los na página
    // Cria elementos HTML e adicioná-los ao 'weatherDataContainer'
    const forecastList = data.list;

    const city = 'Florianópolis';

    const currentDate = new Date();

    forecastList.forEach((forecast) => {
        const dateTime = new Date(forecast.dt_txt);            
      
    if (dateTime > currentDate.getTime() + 3 * 1 * 60 * 60 * 1000){ 

      const wind = parseInt(forecast.wind.speed);
      const temperature = parseInt(forecast.main.temp);
      const humi = forecast.main.humidity;
      const description = forecast.weather[0].description;

      // Crie elementos HTML para exibir os dados
      const forecastElement = document.createElement('div');
      forecastElement.innerHTML = `      
        
      <br> 
      <p class="cityS"> ${city}</p>
      <br>  
      <pclass="windyS">Vento: ${wind}km/h</pclass=>
        <p class="tempS">Temperatura: ${temperature}°C</p>
        <pclass="descriptionS">Descrição: ${description}</pclass=>
        <p class="humidityS">Umidade: ${humi}%</p>
        <p class="dateS">Data/Hora: ${dateTime}</p>
        <hr>
      `;

      // Adicione o elemento ao container
      weatherDataContainer.appendChild(forecastElement);
    }   
      
    });
  })
  .catch((error) => {
    console.error('Erro ao buscar dados da API:', error);
  });
