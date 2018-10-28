class Student extends React.Component {
  render() {
    return (
      <li className="stu">
        <div>
          <b>Full Name : </b>{this.props.FullName}
        </div>
        <div>
          <b>Age       : </b>{this.props.Age}
        </div>
        <div>
          <b>Gender    :</b>{this.props.Gender}
        </div>
      </li>
    )
  }
}

class ListStudents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Student: [
        { FullName: "Huy ", Age: "19", std_id:"1", Gender: "Male" },
        { FullName: "RiceGumSis", Age: "21", std_id:"2", Gender: "FeMale" },
        { FullName: "JakePaulSis", Age: "20", std_id:"3", Gender: "FeMale" },

      ]
     
    }
  };

  render() {
    var lisitem = this.state.Student.map(e => (
      <Student key={e.std_id} FullName={e.FullName} Age={e.Age} Gender={e.Gender} />
    ));
    return (
      <ul className="List-Std">
        {lisitem}
      </ul>
    );
  }
}


ReactDOM.render(
  <ListStudents />,
  document.getElementById('root')
);