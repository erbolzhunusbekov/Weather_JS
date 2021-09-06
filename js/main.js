document.addEventListener('DOMContentLoaded', () => {

    'use strict';



    document.addEventListener('keypress', (event) => {
        const keyName = event.key
        if (keyName == 'Enter') {

            let pogoda;

            let input = document.querySelector('#input__main');

            let city = input.value;

            let apiKey = 'c29b4afb74e48537fca59909a8bc380f';

            let url1 = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

            let cityName = document.querySelector('.cityName');

            let cityTemp = document.querySelector('.cityTemp');

            let weatherMain = document.querySelector('.weatherMain');

            let windSpeed = document.querySelector('.windSpeed');

            let h3 = document.querySelector('h3')

            let img1 = document.querySelector('.img1');
            let img2 = document.querySelector('.img2');
            let img3 = document.querySelector('.img3');
            let img4 = document.querySelector('.img4');
            let img5 = document.querySelector('.img5');
            let img6 = document.querySelector('.img6');
            let img7 = document.querySelector('.img7')


            console.log(input.value);

                fetch(url1, {
                    method: 'GET'
                })
                .then((response) => {
                    return response.json()
                })
                .then((data) => pogoda = data)
                .then(() => test(pogoda))

            function test(pogoda) {
                if (pogoda['cod'] == '404') {
                    h3.style.display = 'block'
                    img2.style.display = 'none';
                    img6.style.display = 'none';
                    img7.style.display = 'block';
                    img3.style.display = 'none';
                    img4.style.display = 'none';
                    img5.style.display = 'none';
                    img1.style.display = 'none';
                    cityName.style.display = 'none'
                    cityTemp.style.display = 'none'
                    weatherMain.style.display = 'none'
                    windSpeed.style.display = 'none'
                } else {
                    cityName.innerHTML = pogoda['name'];
                    h3.style.display = 'none'
                    img6.style.display = 'none';
                    img7.style.display = 'none'

                }
                console.log(pogoda);

                cityName.innerHTML = pogoda['name'];
                cityTemp.innerHTML = `<p>Temperature is:</p> <br> ${pogoda['main']['temp']}`;

                cityName.style.display = 'block';
                cityTemp.style.display = 'block';

                weatherMain.innerHTML = pogoda['weather'][0]['main'];
                windSpeed.innerHTML = `<p>Wind speed is:</p> <br> ${pogoda['wind']['speed']}`;

                weatherMain.style.display = 'block';
                windSpeed.style.display = 'block';




                if (pogoda['weather'][0]['main'] == 'Clouds') {
                    img2.style.display = 'none';
                    img6.style.display = 'none';
                    img7.style.display = 'none';
                    img3.style.display = 'none';
                    img4.style.display = 'none';
                    img5.style.display = 'none';
                    img1.style.display = 'block';
                } else if (pogoda['weather'][0]['main'] == 'Rain') {
                    img1.style.display = 'none';
                    img3.style.display = 'none';
                    img6.style.display = 'none';
                    img7.style.display = 'none';
                    img4.style.display = 'none';
                    img5.style.display = 'none';
                    img2.style.display = 'block';
                } else if (pogoda['weather'][0]['main'] == "Clear") {
                    img2.style.display = 'none';
                    img1.style.display = 'none';
                    img4.style.display = 'none';
                    img7.style.display = 'none';
                    img6.style.display = 'none';
                    img5.style.display = 'none';
                    img3.style.display = 'block';
                } else if (pogoda['weather'][0]['main'] == 'Windy') {
                    img2.style.display = 'none';
                    img3.style.display = 'none';
                    img6.style.display = 'none';
                    img7.style.display = 'none';
                    img1.style.display = 'none';
                    img5.style.display = 'none';
                    img4.style.display = 'block';
                } else if (pogoda['weather'][0]['main'] == 'Snow') {
                    img2.style.display = 'none';
                    img3.style.display = 'none';
                    img6.style.display = 'none';
                    img7.style.display = 'none';
                    img4.style.display = 'none';
                    img1.style.display = 'none';
                    img5.style.display = 'block';
                } else {
                    img2.style.display = 'none';
                    img3.style.display = 'none';
                    img7.style.display = 'none';
                    img6.style.display = 'block';
                    img4.style.display = 'none';
                    img1.style.display = 'none';
                    img5.style.display = 'none';
                }
            }
        }
    });

    let btn = document.querySelector('button');

    btn.addEventListener('click', () => {

        let pogoda;

        let input = document.querySelector('#input__main');

        let city = input.value;

        let apiKey = 'c29b4afb74e48537fca59909a8bc380f';

        let url1 = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        let cityName = document.querySelector('.cityName');

        let cityTemp = document.querySelector('.cityTemp');

        let weatherMain = document.querySelector('.weatherMain');

        let windSpeed = document.querySelector('.windSpeed');

        let h3 = document.querySelector('h3')

        let img1 = document.querySelector('.img1');
        let img2 = document.querySelector('.img2');
        let img3 = document.querySelector('.img3');
        let img4 = document.querySelector('.img4');
        let img5 = document.querySelector('.img5');
        let img6 = document.querySelector('.img6');
        let img7 = document.querySelector('.img7')


        console.log(input.value);

        fetch(url1, {
                method: 'GET'
            })
            .then((response) => {
                return response.json()
            })
            .then((data) => pogoda = data)
            .then(() => test(pogoda))

        function test(pogoda) {
            if (pogoda['cod'] == '404') {
                h3.style.display = 'block'
                img2.style.display = 'none';
                img6.style.display = 'none';
                img7.style.display = 'block';
                img3.style.display = 'none';
                img4.style.display = 'none';
                img5.style.display = 'none';
                img1.style.display = 'none';
                cityName.style.display = 'none'
                cityTemp.style.display = 'none'
                weatherMain.style.display = 'none'
                windSpeed.style.display = 'none'
            } else {
                cityName.innerHTML = pogoda['name'];
                h3.style.display = 'none'
                img6.style.display = 'none';
                img7.style.display = 'none'

            }
            console.log(pogoda);

            cityName.innerHTML = pogoda['name'];
            cityTemp.innerHTML = `<p>Temperature is:</p> <br> ${pogoda['main']['temp']}`;

            cityName.style.display = 'block';
            cityTemp.style.display = 'block';

            weatherMain.innerHTML = pogoda['weather'][0]['main'];
            windSpeed.innerHTML = `<p>Wind speed is:</p> <br> ${pogoda['wind']['speed']}`;

            weatherMain.style.display = 'block';
            windSpeed.style.display = 'block';




            if (pogoda['weather'][0]['main'] == 'Clouds') {
                img2.style.display = 'none';
                img6.style.display = 'none';
                img7.style.display = 'none';
                img3.style.display = 'none';
                img4.style.display = 'none';
                img5.style.display = 'none';
                img1.style.display = 'block';
            } else if (pogoda['weather'][0]['main'] == 'Rain') {
                img1.style.display = 'none';
                img3.style.display = 'none';
                img6.style.display = 'none';
                img7.style.display = 'none';
                img4.style.display = 'none';
                img5.style.display = 'none';
                img2.style.display = 'block';
            } else if (pogoda['weather'][0]['main'] == "Clear") {
                img2.style.display = 'none';
                img1.style.display = 'none';
                img4.style.display = 'none';
                img7.style.display = 'none';
                img6.style.display = 'none';
                img5.style.display = 'none';
                img3.style.display = 'block';
            } else if (pogoda['weather'][0]['main'] == 'Windy') {
                img2.style.display = 'none';
                img3.style.display = 'none';
                img6.style.display = 'none';
                img7.style.display = 'none';
                img1.style.display = 'none';
                img5.style.display = 'none';
                img4.style.display = 'block';
            } else if (pogoda['weather'][0]['main'] == 'Snow') {
                img2.style.display = 'none';
                img3.style.display = 'none';
                img6.style.display = 'none';
                img7.style.display = 'none';
                img4.style.display = 'none';
                img1.style.display = 'none';
                img5.style.display = 'block';
            } else {
                img2.style.display = 'none';
                img3.style.display = 'none';
                img7.style.display = 'none';
                img6.style.display = 'block';
                img4.style.display = 'none';
                img1.style.display = 'none';
                img5.style.display = 'none';
            }
        }


    });



});