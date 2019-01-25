
const Weather = props => (
    <div className="results">
        <div className="textResults">
            { props.city && props.country && <p>Place: { props.city } , { props.country }</p> }
            { props.temperature && <p>Temperature: { props.temperature }</p> }
            { props.humidity && <p>Humidity: { props.humidity }</p>}
            { props.description && <p>Conditions: { props.description }</p> }
            { props.error && <p>{ props.error }</p> }
        </div>
        <div className="imgResults">
            { props.image && <i className={ props.image }></i> }
        </div>
        <input type="submit"
               className="bttResults"
               onClick={(e) => window.location = 'assets/owm/example/index.html?zoom=9&lon='+props.lon+'&lat='+props.lat}
               value="See Map"
        />

    </div>
);


class App extends React.Component {
        state = {
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            lon: undefined,
            lat: undefined,
            error: undefined,
            image: undefined
        }
    

    searchWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=fb8ae8d5470a016c29a257575bad4fd2&units=metric`);
        const data = await api_call.json();
        console.log(data);
        let div = document.querySelector(".container");
        div.style.margin = "0 auto";
        let textResults = document.querySelector(".textResults");
        let mapBtt = document.querySelector(".bttResults");

        //<i className="wu wu-white wu-25 wu-rain"></i>
        if (city && country) {
            let imageName = "";
            if (data.weather[0].description.includes("rain")){
                imageName = "wu wu-white wu-128 wu-rain";
                textResults.style.color = "rgb(40, 133, 199)";
            }
            else if (data.weather[0].description.includes("drizzle")){
                imageName = "wu wu-white wu-128 wu-chancerain";
                textResults.style.color = "rgb(40, 133, 199)";
            }
            else if (data.weather[0].description.includes("clouds")){
                imageName = "wu wu-white wu-128 wu-cloudy";
                textResults.style.color = "rgb(247, 247, 247)";
            }
            else if (data.weather[0].description.includes("clear")){
                imageName = "wu wu-white wu-128 wu-clear";
                textResults.style.color = "rgb(236, 177, 48)";
            }
            else if (data.weather[0].description.includes("mist")){
                imageName = "wu wu-white wu-128 wu-fog";
                textResults.style.color = "rgb(247, 247, 247)";
            }
            else if (data.weather[0].description.includes("snow")){
                imageName = "wu wu-white wu-128 wu-snow";
                textResults.style.color = "rgb(40, 103, 199)";
            }
            mapBtt.style.visibility = "visible";
          this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                lon: data.coord.lon,
                lat: data.coord.lat,
                error: "",
                image: imageName
          });

        } else {
          this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                lon: undefined,
                lat: undefined,
                error: "Please enter the values.",
                image: ""
          });
        }
      }
    
    render() {
        return (
            <div  className="container">
                <div className="meteoAnimLeft">
                    <div data-include="rain.html"></div>
                </div>

                <div className="form">
                    <h1>MeteoHub<span id="toggle"><i className="fas fa-sun"></i></span></h1>
                    <form onSubmit={this.searchWeather}>
                        <input type="text" name="city" placeholder="City..." />
                        <input type="text" name="country" placeholder="Country..." />
                        <input type="submit" className="button bot-left" value="Get Weather"/>
                    </form>
                    <Weather
                        temperature={this.state.temperature}
                        city={this.state.city}
                        country={this.state.country}
                        humidity={this.state.humidity}
                        description={this.state.description}
                        lon={this.state.lon}
                        lat={this.state.lat}
                        error={this.state.error}
                        image={this.state.image}
                    />
                </div>

                <div className="meteoAnimRight">

                </div>

            </div>
        );
	}
}

ReactDOM.render(<App/>, document.getElementById("app"));
