class Tableweather extends React.Component {

    constructor(props) {
        super(props);
        var httpRequest = new XMLHttpRequest();
        var url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=e781bab964854f203657f1ffcda4bdcb";
        httpRequest.open("GET", url, false);
        httpRequest.send(null);
        var cityWeather = JSON.parse(httpRequest.responseText);
        
        // var sunrise = this.timetick(cityWeather.sys.sunrise);
        // var sunset = this.timetick(cityWeather.sys.sunset);
        var  rise=new Date(cityWeather.sys.sunrise*1000);
        var set = new Date(cityWeather.sys.sunset*1000);
        // var sunrise = this.timetick(rise);
        // var sunset = this.timetick(set);
        var sunrise = this.pad2(rise.getHours())+":"+this.pad2(rise.getMinutes())+":"+this.pad2(rise.getSeconds());
        var sunset = this.pad2(set.getHours())+":"+this.pad2(set.getMinutes())+":"+this.pad2(set.getSeconds());

        var ctweather;
        var d = new Date();
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var day = this.pad2(d.getHours()) + ":"+this.pad2(d.getMinutes())+" "+ months[d.getMonth()] +" "+ d.getDate();
        if ((cityWeather.main.temp - 273.15) % 1 >= 5) {
            ctweather = parseInt((cityWeather.main.temp - 273.15) + 1);
        }
        else {
            ctweather = parseInt(cityWeather.main.temp - 273.15);
        }
        this.state = {
            date: day,
            image: cityWeather.weather[0].icon,
            temper: ctweather,
            country: cityWeather.name,
            countrytrue: cityWeather.name,
            winds: {
                speed: cityWeather.wind.speed,
                degree: cityWeather.wind.deg,
            },
            cloudiness: cityWeather.weather[0].description,
            pressure: cityWeather.main.pressure,
            humidity: cityWeather.main.humidity,
            sunrise: sunrise,
            sunset: sunset,
            geocoords: {
                lon: cityWeather.coord.lon,
                lat: cityWeather.coord.lat
            }
        };
        // console.log(cityWeather.weather.icon)
    }
    inputz = (e) => {
        this.setState({ country: e.target.value })
    }
    pad2 = (number) => {
        number = "0" + number;
        return number.substr(number.length - 2);
    }

    
    timetick = (tick) => {
        var ticks = tick;
        // ticks = new Date();
        // Assume milliseconds for now
        var seconds = Math.floor(ticks / 1000);
        // console.log(seconds);
        var hour = Math.floor((seconds / 3600) % 24);
        var minute = Math.floor((seconds / 60) % 60);
        var second = seconds % 60;

        var result = this.pad2(hour) + ":" + this.pad2(minute) + ":" + this.pad2(second)
        return result;
    }

    clickz = () => {
        var httpRequest = new XMLHttpRequest();
        // this.state.country[0].toUpperCase();
        var namevar = "";
        for(var i = 0 ; i < this.state.country.length ; i++)
        {
            if (i == 0) {
                namevar = namevar+this.state.country[i].toUpperCase();
            }
            else
            {
                namevar = namevar+this.state.country[i].toLowerCase();
            }
        }
        console.log(namevar);
        var url = "https://api.openweathermap.org/data/2.5/weather?q=" + namevar + "&appid=e781bab964854f203657f1ffcda4bdcb";
        httpRequest.open("GET", url, false);
        httpRequest.send(null);
        var cityWeather = JSON.parse(httpRequest.responseText);
        // var sunrise = this.timetick(cityWeather.sys.sunrise);
        // var sunset = this.timetick(cityWeather.sys.sunset);
        var  rise=new Date(cityWeather.sys.sunrise*1000);
        var set = new Date(cityWeather.sys.sunset*1000);
        // var sunrise = this.timetick(rise);
        // var sunset = this.timetick(set);
        var sunrise = this.pad2(rise.getHours())+":"+this.pad2(rise.getMinutes())+":"+this.pad2(rise.getSeconds());
        var sunset = this.pad2(set.getHours())+":"+this.pad2(set.getMinutes())+":"+this.pad2(set.getSeconds());
        var ctweather;
        var d = new Date();
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var day = this.pad2(d.getHours()) + ":"+this.pad2(d.getMinutes())+" "+ months[d.getMonth()] +" "+ d.getDate();
        // console.log(day);
        if (Math.floor((cityWeather.main.temp - 273.15) % 1) >= 5) {
            ctweather = parseInt((cityWeather.main.temp - 273.15) + 1);
        }
        else {
            ctweather = parseInt(cityWeather.main.temp - 273.15);
        }
        if (namevar == cityWeather.name) {
            // var newtemp = cityWeather.main.temp;
            // var newtempc = ((newtemp - 32) * 5) / 9;
            // this.setState({ tempf: newtemp })
            // this.setState({ tempc: newtempc })
            this.setState({
                date: day,
                image: cityWeather.weather[0].icon,
                temper: ctweather,
                country: cityWeather.name,
                countrytrue: cityWeather.name,
                winds: {
                    speed: cityWeather.wind.speed,
                    degree: cityWeather.wind.deg,
                },
                cloudiness: cityWeather.weather[0].description,
                pressure: cityWeather.main.pressure,
                humidity: cityWeather.main.humidity,
                sunrise: sunrise,
                sunset: sunset,
                geocoords: {
                    lon: cityWeather.coord.lon,
                    lat: cityWeather.coord.lat
                }
            })
           this.setState({ countrytrue: this.state.country })

        }


        // console.log(this.timetick(cityWeather.sys.sunset));
        
        // console.log(cityWeather.name);
    }
    render() {
        var imagez = "https://openweathermap.org/img/w/" + this.state.image + ".png";
        var wind = "Speed: " + this.state.winds.speed + ", Degree: " + this.state.winds.degree;
        var cloudiness = this.state.cloudiness;
        var pressure = this.state.pressure + " hpa";
        var humidity = this.state.humidity + " %";
        var sunrise = this.state.sunrise;
        var sunset = this.state.sunset;
        var geocoords = "[" + this.state.geocoords.lon + ", " + this.state.geocoords.lat + "]";
        var temp = this.state.temper;
        var datet = this.state.date;
        return ( 
            <div className="container">
                <div className="col-6">
                    <input type="text" onChange={this.inputz} placeholder="Your city name" />
                    <span>
                        <button onClick={this.clickz}><svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16">
                            <g>
                                <path id="path1" transform="rotate(0,8,8) translate(1.6,1.6) scale(0.4,0.4)  " fill="#FFFFFF" d="M14.580002,23.394012L14.580002,26.235001 17.18399,26.235001 17.18399,23.394012z M16.117996,5.7660065C14.539993,5.7660065 13.278992,6.2390137 12.332993,7.1880035 10.991989,8.5250092 10.320999,10.223007 10.320999,12.27301L13.043991,12.27301C13.043991,10.695007 13.437988,9.5130005 14.22699,8.7230072 14.697998,8.25 15.289001,8.0130005 16,8.0130005 16.867996,8.0130005 17.537003,8.25 18.009995,8.7230072 18.561996,9.2750092 18.838989,10.106003 18.838989,11.207001 18.838989,12.077011 18.522995,12.827011 17.89299,13.455002 16.789001,14.561005 16.039001,15.429001 15.644989,16.061005 15.090988,16.92601 14.817001,18.228012 14.817001,19.964005L16.947998,19.964005C16.947998,18.545013 17.302002,17.478012 18.009995,16.767014 18.955994,15.824005 19.705994,15.074005 20.259995,14.522003 21.205002,13.574005 21.679001,12.432007 21.679001,11.090012 21.679001,9.5130005 21.166,8.2109985 20.14299,7.1880035 19.194992,6.2390137 17.853989,5.7660065 16.117996,5.7660065z M16,0C24.819992,0 32,7.178009 32,16.001007 32,24.822006 24.819992,32 16,32 7.1759949,32 0,24.822006 0,16.001007 0,7.178009 7.1759949,0 16,0z" />
                            </g>
                        </svg>
                            <span>Search</span>
                        </button>
                    </span>
                    <br />
                    <h2 className = "city">Weather in {this.state.countrytrue}</h2>

                    <img alt="Responsive image" src={imagez} /> <h2>{temp} °C</h2>
                    <p>{cloudiness}</p>
                    <p>{datet}</p>
                    <table className="table table-striped table-bordered">
                        <tbody>
                            <Rowtable th="Wind" td={wind} />
                            <Rowtable th="Cloudiness" td={cloudiness} /> 
                            <Rowtable th="Pressure" td={pressure} />
                            <Rowtable th="Humidity" td={humidity} />
                            <Rowtable th="Sunrise" td={sunrise} />
                            <Rowtable th="Sunset" td={sunset} />
                            <Rowtable th="Geo coords" td={geocoords} />
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

function Rowtable(props) {
    return (
        <tr>
            <th scope="row">{props.th}</th>
            <td>{props.td}</td>
        </tr>
    );
}

ReactDOM.render(
    <Tableweather />,
    document.getElementById('root')
);