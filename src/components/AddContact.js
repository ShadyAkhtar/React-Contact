import React from "react";

class Addcontact extends React.Component {
state = {
    name :"",
    email: "",
};

add = (e) =>{
    e.preventDefault();
    if(this.state.name === "" || this.state.email===""){
        alert("Field cannot be empty");
        return
    }
    this.props.addContactHandler(this.state);
    // console.log(this.state);
    this.setState({name: "", email: ""});
    this.props.history.push("/");
}
    render() {
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form action="" className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label htmlFor="name">Name  </label>
                        <input type="text" id="name" name="name" placeholder="Name" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} />
                    </div>
                    <div className="field">
                        <label htmlFor="email">Email  </label>
                        <input type="email" id="email" name="email" placeholder="Email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/>
                    </div>
                    <button className="ui blue button">Add</button>
                </form>
            </div>
        );
    }
}

export default Addcontact;