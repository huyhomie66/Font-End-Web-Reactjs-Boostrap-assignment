// var httpRequest = new XMLHttpRequest();
// var url = "https://api.openweathermap.org/data/2.5/weather?q=" + this.state.CityName + "&appid=06e033d1a3ceb1c41a5c7000b0d67e45";
// httpRequest.open("GET", url, false);
// // ddowij sevver tra ve de la false de chay sever dong borderBottomColor: 
// //de true la no chay tiep xuong duoi
// httpRequest.send(null);
// var cityweather = JSON.parse(httpRequest.responseText);
// element = (
//   <div>
//     <h2>Weather in {cityweather.CityName}</h2>
//     <h2>Temp: {cityweather.main.temp}</h2>
//   </div>
// );
class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iconlink: ''
    }
  }

  iconlink = () => {
    var httpRequest = new XMLDocument();
    var url = ""

  }
  render() {
    return (
      <div>

      </div>
    );
  }
}

class WeatherTemp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      tempWea: ''
    }
  }
  handleChange = (event) => {
    this.setState({
      cityName: event.target.value
    });
  }
  handleSubmit = () => {
    var httpRequest = new XMLHttpRequest();

    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.state.cityName + "&appid=65a82dc59f6b5b57febb7baeff01fc60";
    httpRequest.open("GET", url, false);
    httpRequest.addEventListener('load', function () {
    console.log(httpRequest.responseText);
    });
    httpRequest.send(null);
    var cityWeather = JSON.parse(httpRequest.responseText);
    alert(`City Name: ${this.state.cityName}  temp is ${cityWeather.main.temp} `)

  }
  render() {
    return (
      <form>
        <label>
          City Name:s
              </label>
        <input type="text" value={this.state.cityName} onChange={this.handleChange} />
        <input type="button" value="Button Now" onClick={this.handleSubmit} ></input>
      </form>
    );
  }
}

ReactDOM.render(
  <WeatherTemp></WeatherTemp>,
  document.getElementById('root')
);