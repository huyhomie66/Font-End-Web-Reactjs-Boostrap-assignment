
function NavBar(props) {
  function onChangez(e){
    props._onChange(e.target.value);
  }
  function _onClick() {
    props.onClickz();
  }
  function _onKeyPress(e) {
    props.onKeyPressz(e.key);
  }
  return (

    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg  navbar-light bg-light row">
        <div className="col-9 col-xs-1 my-1 mx-0 no-gutters">
          <a className="navbar-brand ml-lg-3 ml-xl-5 mr-sm-5 no-gutters" href="#">The Weather Page</a>

        </div>

        <button className="navbar-toggler btn btn-outline-success col-xs-3" id="button1" type="button"
          data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">

          <svg xmlns="http://www.w3.org/2000/svg" height="30" width="38" viewBox="0 0 128 128">
            <g>
              <path id="path1" transform="rotate(90,64,64) translate(30.0011733402504,30) scale(2.12493337899701,2.12493337899701)  "
                fill="#262626" d="M11.170988,2.0000026C6.1139962,2.0000026 1.9999944,6.1120075 1.9999944,11.16603 1.9999944,16.219991 6.1139962,20.331996 11.170988,20.331996 16.227981,20.331996 20.341006,16.219991 20.341006,11.16603 20.341006,6.1120075 16.227981,2.0000026 11.170988,2.0000026z M11.170988,0C17.33003,0 22.341001,5.0089787 22.341001,11.16603 22.341001,13.76351 21.449155,16.156669 19.95551,18.055608L19.942527,18.071714 31.999898,30.615001 30.5589,32.001003 18.567029,19.525854 18.476871,19.605846C16.516895,21.303544 13.961804,22.332 11.170988,22.332 5.0119487,22.332 1.6168633E-07,17.32302 0,11.16603 1.6168633E-07,5.0089787 5.0119487,0 11.170988,0z" />
            </g>
          </svg>

        </button>

        <div className="collapse navbar-collapse col-xl-3 my-1   " id="navbarSupportedContent">

          <div className=" row my-1 ">
            <input className="form-control mx-sm-1 mx-md-1 col-xl-8" type="search" placeholder="Search"
              aria-label="Search" id="input" onChange={onChangez} onKeyPress={_onKeyPress} />
            <button className="btn btn-outline-success my-1 my-sm-1  my-lg-0 py-0 ml-sm-1  mr-xl-0 d-none d-xl-block  "
              id="button2" type="submit" onClick={_onClick}>
              <svg xmlns="http://www.w3.org/2000/svg" height="35" width="35" viewBox="0 0 48 48">
                <g>
                  <path id="path1" transform="rotate(90,24,24) translate(11.0004486300958,11) scale(0.812474527263561,0.812474527263561)  "
                    fill="#000000" d="M11.170988,2.0000026C6.1139962,2.0000026 1.9999944,6.1120075 1.9999944,11.16603 1.9999944,16.219991 6.1139962,20.331996 11.170988,20.331996 16.227981,20.331996 20.341006,16.219991 20.341006,11.16603 20.341006,6.1120075 16.227981,2.0000026 11.170988,2.0000026z M11.170988,0C17.33003,0 22.341001,5.0089787 22.341001,11.16603 22.341001,13.76351 21.449155,16.156669 19.95551,18.055608L19.942527,18.071714 31.999898,30.615001 30.5589,32.001003 18.567029,19.525854 18.476871,19.605846C16.516895,21.303544 13.961804,22.332 11.170988,22.332 5.0119487,22.332 1.6168633E-07,17.32302 0,11.16603 1.6168633E-07,5.0089787 5.0119487,0 11.170988,0z" />
                </g>
              </svg>
            </button>
          </div>

        </div>
      </nav>
    </div>

  );

}

const DataheaderStyle = {

  textalign: 'center',

  fontfamily: 'Arial, Helvetica, sans-serif',
}
const tempStyle = {
  height: '1px',
  fontsize: '1000px'

}



function WeatherDataHeader(props) {
  // var Temp = this.props.Temp;
  var linkicon = "https://www.weatherbit.io/static/img/icons/" + props.icon + ".png"
  return (

    <div className="container-fluid">
      <div className="col" id="dataheader">

        <div className="row">
          <div className="col">
            <h2 id="dataheader" className="mt-3">{props.CityName},{props.CountryCode}</h2>
          </div>

        </div>

        <div className="row">

          <div className="col">
            <img alt="Responsive image" src={linkicon} /> <h2 className="temp mt-0  " id="dataheader">{props.Temp} <span style={tempStyle}>ºC</span></h2>
          </div>

        </div>

        <div className="row">
          <div className="col col-xs-1">
            <h2 id="dataheader" className="mt-3" >{props.Descreption}</h2>
          </div>

        </div>

        <div className="row">
          <div className="col">
            <h6 id="dataheader">Updated as of {props.DateTime}</h6>
          </div>

        </div>

        <div className="row">
          <div className="col">
            Feel Like: {props.FeelLike}º Wind: {props.Wind}mph Visibility: {props.Vi}mi
          </div>
        </div>

        <div className="row">
          <div className="col">
            Barometer: {props.Barometer} mb Humidity: {props.Humidity}% Dew Point: {props.DewPoint}º
          </div>
        </div>

      </div>
    </div>
  );

}


class WeatherAppMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      dataday: [],
      cityname: "Hanoi",
      Temp: 0,
      Descreption: "",
      FeelLike: 0,
      Wind: 0,
      Vi: 0,
      weather: [],
      Barometer: 0,
      Humidity: 0,
      Dewpoint: 0,
      DateTime: "",
      Icon: "",
      img: "",
      search : "",
      Country_code: "",
      dataDaily: [],
      dataHourly: [],
    });
  
  }
  NumberFormat = (number) => {
    number = "0" + number;
    return number.substr(number.length - 2);
  }

  componentDidMount() {
    var url = "https://api.weatherbit.io/v2.0/forecast/daily?city=" + this.state.cityname + "&key=02b62f697c6441439486b77a01b83ee4";
    fetch(url)
      .then(result => {
        console.log(result);
        if (result.status == 200) {
          return result.json();
        }
        else {
          
        }
      }).then(weatherData => {
        this.setState(
          {
            weather: weatherData
          
          }
        )
        // if (this.state.weather.data[0].code === "200") {
        //   // document.body.style.backgroundImage = "url('img_tree.png')";
        // }

      })
  }
  onKeyPress = (value) => {
    if (value === "Enter") {
      this.setState({
        cityname: this.state.search
    });
    }
}
  
  componentDidUpdate(prevProps, prevState) {
    if (this.state.cityname !== prevState.cityname) {
      var url = "https://api.weatherbit.io/v2.0/forecast/daily?city=" + this.state.cityname + "&key=02b62f697c6441439486b77a01b83ee4";
       fetch(url).then(result => {
          if (result.status == 200) {
            return result.json();
          }
          else {
            alert("Error" + result.statusText);
          }
        }).then(weatherData => {
          this.setState({
            weather: weatherData

          })
        })

    }
    
  }
  // Onclick = () => {
  //   var New_Cityname = "";
  //   for (var i = 0; i < this.state.Cityname.length; i++) {
  //     if (i == 0) {
  //       New_Cityname = New_Cityname + this.state.Cityname[i].toUpperCase();
  //     }
  //     else {
  //       New_Cityname = New_Cityname + this.state.Cityname[i].toLowerCase();
  //     }
  //   }

  //   var url = "https://api.weatherbit.io/v2.0/forecast/daily?city=" + New_Cityname + "&key=02b62f697c6441439486b77a01b83ee4";

  //   fetch(url)
  //     .then(result => {
  //       console.log(result);
  //       if (result.status == 200) {
  //         return result.json();
  //       }
  //       else {
  //         alert("Error" + result.statusText);
  //       }
  //     })

  //     .then(weatherData => {

  //       let temp = weatherData.data.map(e => {
  //         return (
  //           <a key={e.datetime}>
  //             {e.temp}
  //           </a>
  //         )
  //       })
  //       let descreption = weatherData.data.map(e => {
  //         return (
  //           <a key={e.datetime}>
  //             {e.weather.description}

  //           </a>

  //         )
  //       })
  //       var icon = weatherData.data.map(e => {
  //         return (
  //           <a key={e.datetime}>
  //             {e.weather.icon}
  //           </a>
  //         )
  //       })
  //       let feellike = weatherData.data.map(e => {
  //         return (
  //           <a key={e.datetime}>
  //             {e.app_max_temp}
  //           </a>
  //         )
  //       })

  //       let wind = weatherData.data.map(e => {
  //         return (
  //           <a key={e.datetime}>
  //             {e.wind_gust_spd}
  //           </a>
  //         )
  //       })

  //       let vis = weatherData.data.map(e => {
  //         return (
  //           <a key={e.datetime}>
  //             {e.vis}
  //           </a>
  //         )
  //       })
  //       let barometer = weatherData.data.map(e => {
  //         return (
  //           <a key={e.datetime}>{e.pres}</a>
  //         )
  //       })
  //       let humidity = weatherData.data.map(e => {
  //         return (
  //           <a key={e.datetime}>{e.rh}</a>
  //         )
  //       })
  //       let dewpoint = weatherData.data.map(e => {
  //         return (
  //           <a key={e.datetime}>{e.dewpt}</a>
  //         )
  //       })
  //       let datetime = weatherData.data.map(e => {
  //         return (
  //           <a key={e.datetime}> {e.datetime}</a>
  //         )
  //       })
  //       let cityname = weatherData.city_name;

  //       let countrycode = weatherData.country_code;
  //       if (New_Cityname == weatherData.city_name) {


  //         this.setState(
  //           {
  //             Cityname: cityname,
  //             Temp: temp,
  //             Descreption: descreption,
  //             FeelLike: feellike,
  //             Wind: wind,
  //             Vi: vis,
  //             Barometer: barometer,
  //             Humidity: humidity,
  //             Dewpoint: dewpoint,
  //             DateTime: datetime,
  //             Country_code: countrycode,
  //             Icon: icon,

  //           }
  //         )
  //       }
  //     })
  // }
  onChangez = (value) => {
    this.setState({search: value})
  }
  
  render() {
    
    console.log("xx");
    if (this.state.weather.length == 0) 
    {
      return (<div></div>);
    }
    return (
      <div>
      
        <NavBar _onChange={this.onChangez} onClickz={this._onClick} onKeyPressz={this.onKeyPress}/>,
        <WeatherDataHeader key={this.state.weather.data[0].valid_date}
          icon={this.state.weather.data[0].weather.icon} CityName={this.state.weather.city_name}
          CountryCode={this.state.weather.country_code}
          Temp={this.state.weather.data[0].temp}
          Descreption={this.state.weather.data[0].weather.description}
          DateTime={this.state.weather.data[0].valid_date}
          FeelLike={this.state.weather.data[0].app_max_temp}
          Wind={this.state.weather.data[0].wind_spd}
          Vi={this.state.weather.data[0].vis}
          Barometer={this.state.weather.data[0].pres}
          Humidity={this.state.weather.data[0].rh}
          DewPoint={this.state.weather.data[0].dewpt} />
      </div>
    );
  }
}

ReactDOM.render(

  < WeatherAppMain />,
  document.getElementById('WeatherDataHeader')
);



