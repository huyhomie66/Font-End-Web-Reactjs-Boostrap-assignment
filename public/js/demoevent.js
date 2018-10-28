class Input extends React.Component {
  render() {
    return (
      <div>
        <input className="btn-Click" type="button" value="place" onClick={this.showMess} ></input>
      </div>
    )
  }
  showMess() {
    alert("abc")
  }
}
let Noti = (props) => {

  // const {title} = props;
  return (
    <div className="noti">
      <h1>hello {props.title}</h1>
      <p>{props.children}</p>
    </div>
  )
}

class Hello extends React.Component {

  constructor(props) {
    super(props)
    this.state = { notifi: 'Ten cua ban' }

  }

  onChange(e) {
    this.setState({
      notifi: e.target.value
    });
  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.onChange.bind(this)}></input>
        <Noti title="fffff">{this.state.notifi}</Noti>

      </div>
    )
  }
}



class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);

  }
 
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <div>
        <div className="row">
          <img src="https://vcdn-ngoisao.vnecdn.net/2018/10/04/VENOM-7709-1538618684.jpg"></img>
          </div>
        <div className="row">
        <p>{this.state}</p>
        <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'Like' : 'Unlike'}
      </button>
          </div>  
      
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <Toggle /></div>,

  document.getElementById('root')
);