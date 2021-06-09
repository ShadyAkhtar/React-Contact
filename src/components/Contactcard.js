import React from 'react'
import user from '../images/user.png';
import {Link} from 'react-router-dom';

const ContactCard = (props) => {
    const {id, name, email} = props.contact;
    return (
        <div className="item">
            <img src={user} alt="user" className="ui avatatr image" />
        <div className="content">
            <Link to={{pathname:`/contact/${id}`, state:{contact: props.contact}}}>
            <div className="header">{name}</div>
            <div>{email}</div>
            </Link>
        </div>
        <Link to={{pathname:`/edit`, state:{contact: props.contact}}}>
        <i className="edit alternate outline icon"
        style={{color: "blue", marginTop: "7px", marginLeft: "5px"}} ></i>
        </Link>

        <i className="trash alternate outline icon"
        style={{color: "red", marginTop: "7px"}} onClick={() => props.clickHandler(id)}></i>

    </div>
    );
};

export default ContactCard;