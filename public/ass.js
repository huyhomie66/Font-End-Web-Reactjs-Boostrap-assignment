
function NavBar(props) {
  function onChangez(e) {
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
            <h4 className="temp my-1 " id="dataheader">    <img alt="Responsive image" className="img" src={linkicon} /> {props.Temp} <span style={tempStyle}>ºc</span></h4>
          </div>

        </div>

        <div className="row">
          <div className="col col-xs-1">
            <h2 id="dataheader" className="mt-1" >{props.Descreption}</h2>
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

function WeatherDataDaily(props) {

  function scrollleft() {
    props._scrollleft();
  }
  function scrollright() {
    props._scrollright();
  }
  var linkIcon = "https://www.weatherbit.io/static/img/icons/" + props.icon + ".png";
  return (
    <div className="row d-flex align-items-center mx-auto px-auto">

      <div className="col-2 ">

        <div onClick={scrollleft} className="d-none d-md-block" id="Button1">
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="0 0 25 48">
            <g>
              <path id="path1" transform="rotate(360,24,24) translate(15.8657012209571,9) scale(-0.937617193654483,0.937617193654483)  "
                fill="#696969" d="M1.4200482,0L17.351001,16.046996 1.4980513,31.996001 0.078979631,30.585997 14.531046,16.046019 0,1.4089964z" />
            </g>
          </svg>
        </div>

      </div>
      <div className="col-8 ">
        <h5>Daily</h5>
        <div className="live__scroll no-gutters " id="horizon">

          <div className="row text-center justify-content-center no-gutters ">
            <div className="col-8">
              <div className="live__scroll--box align-self-baseline no-gutters">
                <div className="col">{props.mon} {props.day}</div>
                <div className="col"><img alt="icon list" src={linkIcon}/> </div>
                <div className="col">{props.temp}</div>
                <div className="col">{props.description}</div>
              </div>
              <div className="live__scroll--box align-self-baseline no-gutters">
                <div className="col">{props.mon} {props.day}</div>
                <div className="col"><img alt="icon list" src={linkIcon} /></div>
                <div className="col">{props.temp}</div>
                <div className="col">{props.description}</div>
              </div>
              <div className="live__scroll--box align-self-baseline no-gutters">
                <div className="col">{props.mon} {props.day}</div>
                <div className="col"><img alt="icon list" src={linkIcon} /></div>
                <div className="col">{props.temp}</div>
                <div className="col">{props.description}</div>
              </div>
              <div className="live__scroll--box align-self-baseline no-gutters">
                <div className="col">{props.mon} {props.day}</div>
                <div className="col"><img alt="icon list" src={linkIcon} /></div>
                <div className="col">{props.temp}</div>
                <div className="col">{props.description}</div>
              </div>
              <div className="live__scroll--box align-self-baseline no-gutters">
                <div className="col">{props.mon} {props.day}</div>
                <div className="col"><img alt="icon list" src={linkIcon} /></div>
                <div className="col">{props.temp}</div>
                <div className="col">{props.description}</div>
              </div>
              <div className="live__scroll--box align-self-baseline no-gutters">
                <div className="col">{props.mon} {props.day}</div>
                <div className="col"><img alt="icon list" src={linkIcon} /></div>
                <div className="col">{props.temp}</div>
                <div className="col">{props.description}</div>
              </div>
              <div className="live__scroll--box align-self-baseline no-gutters">
                <div className="col">{props.mon} {props.day}</div>
                <div className="col"><img alt="icon list" src={linkIcon} /></div>
                <div className="col">{props.temp}</div>
                <div className="col">{props.description}</div>
              </div>
              <div className="live__scroll--box align-self-baseline no-gutters">
                <div className="col">{props.mon} {props.day}</div>
                <div className="col"><img alt="icon list" src={linkIcon} /></div>
                <div className="col">{props.temp}</div>
                <div className="col">{props.description}</div>
              </div>
            </div>

          </div>

        </div>
      </div>
      <div className="col-2 ">

        <div onClick={scrollright} className="d-none d-xl-block" id="Button2">
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="0 0 25 48">
            <g>
              <path id="path1" transform="rotate(0,24,24) translate(15.8657012209571,9) scale(0.937617193654483,0.937617193654483)  "
                fill="#696969" d="M1.4200482,0L17.351001,16.046996 1.4980513,31.996001 0.078979631,30.585997 14.531046,16.046019 0,1.4089964z" />
            </g>
          </svg>

        </div>

      </div>


    </div>
  );
}

class WeatherAppMain extends React.Component {
  constructor(props) {
    super(props);
    var d = new Date();

    var day = ["Monday", "Tuesday", "Wendesday", "Thursday","Friday", "Saturday", "Sunday"];
    var DayinWeek = day[d.getDay()];
    this.state = ({
      dataday: [],
      cityname: "Hanoi",
      Temp: 0,
      Descreption: "",
      FeelLike: 0,
      Wind: 0,
      Vi: 0,
      Day_InWeek: DayinWeek,
      weather: [],
      Barometer: 0,
      Humidity: 0,
      Dewpoint: 0,
      DateTime: "",
      Icon: "",
      img: "",
      search: "",
      Country_code: "",
      listicon: "",
      listday: [],
      listtemp: 0,
      listdescription: [],
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
        let Listicon = weatherData.data.map(e => {
          return (
            <div key={e.datetime}>
              <h3>  {e.weather.icon}</h3>
            </div>
          )
        })
        let Listday = weatherData.data.map(e => {
          return (
            <div key={e.datetime}>
              <h3> {e.datetime}</h3>
            </div>
          )

        })
        let Listtemp = weatherData.data.map(e => {
          return (
            <div key={e.datetime}>
              <h3>{e.temp}</h3>
            </div>
          )

        })
        let Listdescription = weatherData.data.map(e => {
          return (
            <div key={e.datetime}>
              <h3>  {e.weather.description}</h3>
            </div>
          )

        })

        this.setState(
          {
            weather: weatherData,
            listday: Listday,
            listicon: Listicon,
            listtemp: Listtemp,
            listdescription: Listdescription

          }
        );
        if (this.state.weather.data[0].weather.code === 801) {
          document.body.style.backgroundImage = "url('./Photo-Background/801.jpg')";
        }
        else if (this.state.weather.data[0].weather.code === 202 || this.state.weather.data[0].weather.code == 201 || this.state.weather.data[0].weather.code == 202) {
          document.body.style.backgroundImage = "url('./Photo-Background/200-202.jpg')";
        }
        else if (this.state.weather.data[0].weather.code === 230 || this.state.weather.data[0].weather.code === 231 || this.state.weather.data[0].weather.code === 232 || this.state.weather.data[0].weather.code === 233) {
          document.body.style.backgroundImage = "url('./Photo-Background/230-233.jpg')";
        }
        else if (this.state.weather.data[0].weather.code === 500 || this.state.weather.data[0].weather.code === 501 || this.state.weather.data[0].weather.code === 502) {
          document.body.style.backgroundImage = "url('./Photo-Background/500-502.jpg')";
        }
        else if (this.state.weather.data[0].weather.code === 511) {
          document.body.style.backgroundImage = "url('./Photo-Background/511.jpg')";
        }
        else if (this.state.weather.data[0].weather.code === 520) {
          document.body.style.backgroundImage = "url('./Photo-Background/520.jpg')";
        }
        else if (this.state.weather.data[0].weather.code === 521) {
          document.body.style.backgroundImage = "url('./Photo-Background/521.jpg')";
        }
        else if (this.state.weather.data[0].weather.code === 522) {
          document.body.style.backgroundImage = "url('./Photo-Background/522.jpg')";
        }
        else if (this.state.weather.data[0].weather.code === 600) {
          document.body.style.backgroundImage = "url('./Photo-Background/600.jpg')";
        }
        else if (this.state.weather.data[0].weather.code === 601) {
          document.body.style.backgroundImage = "url('./Photo-Background/601.jpg')";
        }
        else if (this.state.weather.data[0].weather.code === 602) {
          document.body.style.backgroundImage = "url('./Photo-Background/602.jpg')";
        }
        else if (this.state.weather.data[0].weather.code === 610) {
          document.body.style.backgroundImage = "url('./Photo-Background/610.jpg')";
        }
        else if (this.state.weather.data[0].weather.code === 611) {
          document.body.style.backgroundImage = "url('./Photo-Background/611.jpg')";
        }
        else if (this.state.weather.data[0].weather.code === 612) {
          document.body.style.backgroundImage = "url('./Photo-Background/612.jpg')";
        }
        else if (this.state.weather.data[0].weather.code === 621) {
          document.body.style.backgroundImage = "url('./Photo-Background/621.jpg')";
        }
        else if (this.state.weather.data[0].weather.code === 622) {
          document.body.style.backgroundImage = "url('./Photo-Background/622.jpg')";
        }
        else if (this.state.weather.data[0].weather.code === 623) {
          document.body.style.backgroundImage = "url('./Photo-Background/623.jpg')";
        }
        else if (this.state.weather.data[0].weather.code === 700) {
          document.body.style.backgroundImage = "url('./Photo-Background/700.jpg')";
        }
        else if (this.state.weather.data[0].weather.code === 711) {
          document.body.style.backgroundImage = "url('./Photo-Background/711.jpg')";
        }
        else if (this.state.weather.data[0].weather.code === 721) {
          document.body.style.backgroundImage = "url('./Photo-Background/721.jpg')";
        }
        else if (this.state.weather.data[0].weather.code === 731) {
          document.body.style.backgroundImage = "url('./Photo-Background/731.jpg')";
        }
        else if (this.state.weather.data[0].weather.code === 741) {
          document.body.style.backgroundImage = "url('./Photo-Background/741.jpg')";
        }
        else if (this.state.weather.data[0].weather.code === 751) {
          document.body.style.backgroundImage = "url('./Photo-Background/751.jpg')";
        }
        else if (this.state.weather.data[0].weather.code === 800) {
          document.body.style.backgroundImage = "url('./Photo-Background/801.jpg')";
        }
        else if (this.state.weather.data[0].weather.code === 802) {
          document.body.style.backgroundImage = "url('./Photo-Background/802.jpg')";
        }
        else if (this.state.weather.data[0].weather.code === 803) {
          document.body.style.backgroundImage = "url('./Photo-Background/803.jpg')";
        }
        else if (this.state.weather.data[0].weather.code === 804) {
          document.body.style.backgroundImage = "url('./Photo-Background/804.jpg')";
        }
        else if (this.state.weather.data[0].weather.code === 900) {
          document.body.style.backgroundImage = "url('./Photo-Background/900.jpg')";
        }



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
        let Listicon = weatherData.data.map(e => {
          return (
            <div key={e.datetime}>
              <h3>{e.weather.icon}</h3>
            </div>
          )
        })
        let Listday = weatherData.data.map(e => {
          return (
            <div key={e.datetime}>
              <h3>   {e.datetime} </h3>
            </div>
          )

        })
        let Listtemp = weatherData.data.map(e => {
          return (
            <div key={e.datetime}>
              {e.temp}
            </div>
          )

        })
        let Listdescription = weatherData.data.map(e => {
          return (
            <div key={e.datetime}>
              <h3> {e.weather.description}</h3>
            </div>
          )

        })
        this.setState({
          weather: weatherData,
          listday: Listday,
          listicon: Listicon,
          listtemp: Listtemp,
          listdescription: Listdescription


        });
      })
      console.log(this.state.weather.data[0].weather.code)
      if (this.state.weather.data[0].weather.code === 801) {
        document.body.style.backgroundImage = "url('./Photo-Background/801.jpg')";
      }
      if (this.state.weather.data[0].weather.code === 202 || this.state.weather.data[0].weather.code == 201 || this.state.weather.data[0].weather.code == 202) {
        document.body.style.backgroundImage = "url('./Photo-Background/200-202.jpg')";
      }
      if (this.state.weather.data[0].weather.code === 230 || this.state.weather.data[0].weather.code === 231 || this.state.weather.data[0].weather.code === 232 || this.state.weather.data[0].weather.code === 233) {
        document.body.style.backgroundImage = "url('./Photo-Background/230-233.jpg')";
      }
      if (this.state.weather.data[0].weather.code === 500 || this.state.weather.data[0].weather.code === 501 || this.state.weather.data[0].weather.code === 502) {
        document.body.style.backgroundImage = "url('./Photo-Background/500-502.jpg')";
      }
      if (this.state.weather.data[0].weather.code === 511) {
        document.body.style.backgroundImage = "url('./Photo-Background/511.jpg')";
      }
      if (this.state.weather.data[0].weather.code === 520) {
        document.body.style.backgroundImage = "url('./Photo-Background/520.jpg')";
      }
      if (this.state.weather.data[0].weather.code === 521) {
        document.body.style.backgroundImage = "url('./Photo-Background/521.jpg')";
      }
      if (this.state.weather.data[0].weather.code === 522) {
        document.body.style.backgroundImage = "url('./Photo-Background/522.jpg')";
      }
      if (this.state.weather.data[0].weather.code === 600) {
        document.body.style.backgroundImage = "url('./Photo-Background/600.jpg')";
      }
      if (this.state.weather.data[0].weather.code === 601) {
        document.body.style.backgroundImage = "url('./Photo-Background/601.jpg')";
      }
      if (this.state.weather.data[0].weather.code === 602) {
        document.body.style.backgroundImage = "url('./Photo-Background/602.jpg')";
      }
      if (this.state.weather.data[0].weather.code === 610) {
        document.body.style.backgroundImage = "url('./Photo-Background/610.jpg')";
      }
      if (this.state.weather.data[0].weather.code === 611) {
        document.body.style.backgroundImage = "url('./Photo-Background/611.jpg')";
      }
      if (this.state.weather.data[0].weather.code === 612) {
        document.body.style.backgroundImage = "url('./Photo-Background/612.jpg')";
      }
      if (this.state.weather.data[0].weather.code === 621) {
        document.body.style.backgroundImage = "url('./Photo-Background/621.jpg')";
      }
      if (this.state.weather.data[0].weather.code === 622) {
        document.body.style.backgroundImage = "url('./Photo-Background/622.jpg')";
      }
      if (this.state.weather.data[0].weather.code === 623) {
        document.body.style.backgroundImage = "url('./Photo-Background/623.jpg')";
      }
      if (this.state.weather.data[0].weather.code === 700) {
        document.body.style.backgroundImage = "url('./Photo-Background/700.jpg')";
      }
      if (this.state.weather.data[0].weather.code === 711) {
        document.body.style.backgroundImage = "url('./Photo-Background/711.jpg')";
      }
      if (this.state.weather.data[0].weather.code === 721) {
        document.body.style.backgroundImage = "url('./Photo-Background/721.jpg')";
      }
      if (this.state.weather.data[0].weather.code === 731) {
        document.body.style.backgroundImage = "url('./Photo-Background/731.jpg')";
      }
      if (this.state.weather.data[0].weather.code === 741) {
        document.body.style.backgroundImage = "url('./Photo-Background/741.jpg')";
      }
      if (this.state.weather.data[0].weather.code === 751) {
        document.body.style.backgroundImage = "url('./Photo-Background/751.jpg')";
      }
      if (this.state.weather.data[0].weather.code === 800) {
        document.body.style.backgroundImage = "url('./Photo-Background/801.jpg')";
      }
      if (this.state.weather.data[0].weather.code === 802) {
        document.body.style.backgroundImage = "url('./Photo-Background/802.jpg')";
      }
      if (this.state.weather.data[0].weather.code === 803) {
        document.body.style.backgroundImage = "url('./Photo-Background/803.jpg')";
      }
      if (this.state.weather.data[0].weather.code === 804) {
        document.body.style.backgroundImage = "url('./Photo-Background/804.jpg')";
      }
      if (this.state.weather.data[0].weather.code === 900) {
        document.body.style.backgroundImage = "url('./Photo-Background/900.jpg')";
      }

    }

  }

  onChangez = (value) => {
    this.setState({ search: value })
  }
  scrollleft() {
    var elmnt = document.getElementById("horizon");
    elmnt.scrollLeft = elmnt.scrollLeft - 100;
  }

  scrollright() {
    var elmnt = document.getElementById("horizon");
    elmnt.scrollLeft = elmnt.scrollLeft + 100;
  }
  render() {

    console.log("xx");
    if (this.state.weather.length == 0) {
      return (<div></div>);
    }
    if (this.state.listday.length == 0) {
      return (<div>fuck</div>);
    }
    console.log(this.state.listicon[0])
    console.log(this.state.listtemp)
    return (
      <div>

        <NavBar _onChange={this.onChangez} onClickz={this._onClick} onKeyPressz={this.onKeyPress} />,
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
        <WeatherDataDaily _scrollleft={this.scrollleft} _scrollright={this.scrollright} icon={this.state.weather.data[0].weather.icon} mon={this.state.Day_InWeek} day={this.state.listday[0]} temp={this.state.listtemp[0]} description={this.state.listdescription[0]} />
      </div>
    );
  }
}

ReactDOM.render(

  < WeatherAppMain />,
  document.getElementById('WeatherDataHeader')
);



