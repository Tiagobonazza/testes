// 7b3732c4ab12f73f0d3ef8bedb6d5c62
    // coloquei a chave copiada aqui pra deixar reservada

    const apiKey = "7b3732c4ab12f73f0d3ef8bedb6d5c62"
    const apiCountryURL = "https://flagsapi.com/shiny/64.png"

    const cityInput = document.querySelector('#city-input');
    const searchBtn = document.querySelector('#search');

    const cityElement = document.querySelector('#city');
    const tempElement = document.querySelector('#temperature span');
    const descElement = document.querySelector('#description');
    const weatherIconElement = document.querySelector('#weather-icon');
    const countryElement = document.querySelector('#country');
    const umidityElement = document.querySelector('#umidity span');
    const windElement = document.querySelector('#wind span');   



    //funções
    const getWeatherData = async(city) => { // consulta a API, aguarda a resposta

        const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

        const res = await fetch(apiWeatherURL) // esperar o fetch dessa api...
        const data = await res.json() //...pra receber os dados em json

        return data //retornar a resposta data
    }

    const showWeatherData = async (city) => { // essa função vai esperar a city
        const data = await getWeatherData(city)
        //transformei em async await porque está chamando dados da função assincrona acima

        cityElement.innerText = data.name;
        tempElement.innerText = parseInt(data.main.temp)// temperatuta vem quebrada, precisamos colocar o parseInt.
        descElement.innerText = data.weather[0].description;
        weatherIconElement.setAttribute("src",`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`); //altera o icone do clima de forma variável.
        countryElement.setAttribute("src", apiCountryURL + data.sys.country)//altera a bandeira do país
        umidityElement.innerText = `${data.main.humidity}%`;
        windElement.innerText = `${data.wind.speed} km/h`;
    }

    //eventos

    searchBtn.addEventListener("click", (e)=> { // função anonima dentro do eventListener

            e.preventDefault();
            
            const city = cityInput.value;

            showWeatherData(city);
    })
