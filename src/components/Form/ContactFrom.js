import React, { Component } from "react";
import "./ContactFrom.css";

class ContactFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {},
    };
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Firstname
    if (!fields["Firstname"]) {
      formIsValid = false;
      errors["Firstname"] = "Cannot be empty";
    }

    if (typeof fields["Firstname"] !== "undefined") {
      if (!fields["Firstname"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["Firstname"] = "Only letters";
      }
    }
    //Lastname
    if (!fields["Lastname"]) {
      formIsValid = false;
      errors["Lastname"] = "Cannot be empty";
    }

    if (typeof fields["Lastname"] !== "undefined") {
      if (!fields["Lastname"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["Lastname"] = "Only letters";
      }
    }

    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  contactSubmit(e) {
    e.preventDefault();

    if (this.handleValidation()) {
      alert("Form submitted");
    } else {
      alert("Form has errors.");
    }
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  render(props) {
    const classes = "from " + this.props.className;
    const fromid = this.props.id;
    return (
      <div>
        <form
          name="contactform"
          className={classes}
          onSubmit={this.contactSubmit.bind(this)}
          id={fromid}
        >
          <div className="col-md-6">
            <label htmlFor="Firstname" className="form-label">
              First name
            </label>
            <input
              className="form-control"
              id="Firstname"
              name="Firstname"
              type="text"
              size="30"
              onChange={this.handleChange.bind(this, "Firstname")}
              value={this.state.fields["Firstname"]}
            />
            <span className="error" style={{ color: "red" }}>
              {this.state.errors["Firstname"]}
            </span>
          </div>
          <div className="col-md-6">
            <label htmlFor="Lastname" className="form-label">
              Last name
            </label>
            <input
              className="form-control"
              id="Lastname"
              name="Lastname"
              type="text"
              size="30"
              onChange={this.handleChange.bind(this, "Lastname")}
              value={this.state.fields["Lastname"]}
            />
            <span className="error" style={{ color: "red" }}>
              {this.state.errors["Lastname"]}
            </span>
          </div>
          <div className="col-12">
            <label htmlFor="inputEmail" className="form-label">
              Email
            </label>
            <input
              className="form-control"
              id="inputEmail"
              name="email"
              type="text"
              size="30"
              onChange={this.handleChange.bind(this, "email")}
              value={this.state.fields["email"]}
            />
            <span className="error" style={{ color: "red" }}>
              {this.state.errors["email"]}
            </span>
          </div>
          {this.props.children}
          <div className="col-12">
            <label htmlFor="Massage" className="form-label">
              Massage
            </label>
            <textarea
              className="form-control"
              name="massage"
              id="Massage"
              rows="3"
            ></textarea>
          </div>
          <div className="col-12">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default ContactFrom;
