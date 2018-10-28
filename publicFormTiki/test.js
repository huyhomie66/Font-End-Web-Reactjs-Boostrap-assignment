
class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      requestFailed: false,
      clubs: [],
      club: {}
    }
  }

  componentDidMount() {
    fetch("https://api.weatherbit.io/v2.0/forecast/daily?city=Hanoi&key=02b62f697c6441439486b77a01b83ee4")
      .then(response => {
        if (!response.ok) {
          throw Error("Failed connection to the API")
        }
        return response
      })
      .then(response => response.json())
      .then(response => {
        this.setState({
          clubs: response
        })
      }, () => {
        this.setState({
          requestFailed: true
        })
      })
  }

  click = (id) => {
    console.log('clicked item', id);
  }

  render() {
    return (
      <div className="App">
        <div className="App-left-side">
          <Clubs clubs={this.state.clubs} clicked={this.click} />
        </div>
        <div className="App-center-side">
          <div className="App-center-side-content">
            <Club club={this.state.club} />
          </div>
        </div>
      </div>
    );
  }
}



class Clubs extends React.Component {

  render() {
    if (!this.props.clubs.length) return <h1>No results</h1>

    return (
      <div>
        <ul>
          {this.props.clubs.map((item) => {
            return <a key={item.id} onClick={() => this.props.clicked(item.id)}>
              <li key={item.id}>{item.name}</li>
            </a>
          })}
        </ul>
      </div>
    );
  }
}




class Club extends React.Component {

  render() {
    if (!Object.keys(this.props.club)) return <h1>No club selected !</h1>;

    return (
      <ul>
        <li>Name : {this.props.club.name}</li>
        <li>Email : {this.props.club.email}</li>
        <li>Website : {this.props.club.website}</li>
      </ul>
    );
  }
}



ReactDOM.render(
  <App/>,
  document.getElementById('WeatherDataHeader')
)