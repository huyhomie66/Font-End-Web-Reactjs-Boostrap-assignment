class Weather extends React.Component {
  constructor(props) {
      super(props);

      this.state = ({
          url: "https://api.weatherbit.io/v2.0/forecast/daily?city=Hanoi&key=fe19e1593aee4c65afac6ad9d387df29",
          cityWeatherDaily: []
      });
  }


  componentDidMount = () => {
      fetch(this.state.url)
          .then(result => {
              console.log(result);
              if(result.status == 200)
              {
                  return result.json();
              }
              else
              {
                  alert("Lỗi cmnr" + result.statusText);
              }
          })
          .then(weatherObject => {
              //console.log(arrayWeather.city_name);
              let dailyWeathers = weatherObject.data.map(e => {
                  return (
                      <div key={e.datetime}>
                          <h1>{e.app_max_temp}</h1>
                      </div>
                  )
              })
              

              this.setState({
                  cityWeatherDaily: dailyWeathers
              });
              console.log("state", this.state.cityWeatherDaily);
          })
  }


  render() {
      return (
          <div>
              {this.state.cityWeatherDaily}
          </div>
      );
  }
}

ReactDOM.render(
  <Weather />,
  document.getElementById("root")
)