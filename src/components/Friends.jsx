import { NavLink } from "react-router-dom";
import friendsImg from "../assets/img/login.jpg";
import React from "react";

const TableRow = (props) => {
  return (
    <tr>
      <th scope="row">{props.index + 1}</th>
      <td><NavLink to={"/profile/" + props.id}>{props.name} {props.lastname}</NavLink></td>
      <td>{props.email}</td>
    </tr>
  );
};

export class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {userRow: []};
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h3>Список друзей</h3>
            <p>Дополнительная информация</p>
            <img src={friendsImg} alt="" width={150} />
          </div>
        </div>
  
        <div className="row">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Имя и фамилия</th>
                <th scope="col">E-mail</th>
              </tr>
            </thead>
            <tbody>
              
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export const Friends = (props) => {
  let users = props.function();
  console.log(users);
  let usersCount = Object.keys(users).length;
  let userRow = [];

  for (let i = 0; i < usersCount; i++) {
    userRow.push(<TableRow key={i} index={i} id={users[i].id} name={users[i].name} lastname = {users[i].lastname} email={users[i].email}/>);
  }
  
};
