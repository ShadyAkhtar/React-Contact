import React from "react";

class Addcontact extends React.Component {
    render() {
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form action="" className="ui form">
                    <div className="field">
                        <label htmlFor="name">Name  </label>
                        <input type="text" id="name" name="name" placeholder="Name" />
                    </div>
                    <div className="field">
                        <label htmlFor="email">Email  </label>
                        <input type="email" id="email" name="email" placeholder="Email" />
                    </div>
                    <button className="ui blue button">Add</button>
                </form>
            </div>
        );
    }
}

export default Addcontact;