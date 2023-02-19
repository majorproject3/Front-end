import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const profile = () => {
  return (
    <div class="profile">
      {/* <div class="sidebar">
        <h4> Untitled Ui</h4>
      </div> */}
      <div class="propic">
        <img
          class="img1"
          src="https://images.unsplash.com/photo-1586210579191-33b45e38fa2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
        <img
          class="img2"
          src="https://plus.unsplash.com/premium_photo-1675768059320-399487e7fe14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt=""
        />
      </div>
      <div class="propic">
        <h3> Personal Info</h3>
        <div>
          <Form>
            <Form.Group className="mb-3" controlId="text">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <a href="#">Edit</a>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control value="njbjkh" type="email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Form>
          <div class="propic">
            <img
              class="img3"
              src="https://images.unsplash.com/photo-1586210579191-33b45e38fa2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
            />

            <a href="">Change Profile Photo</a>
            <div>
              <center>
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.66669 12.3333L10 9M10 9L13.3334 12.3333M10 9V16.5M16.6667 12.9524C17.6846 12.1117 18.3334 10.8399 18.3334 9.41667C18.3334 6.88536 16.2813 4.83333 13.75 4.83333C13.5679 4.83333 13.3976 4.73833 13.3051 4.58145C12.2184 2.73736 10.212 1.5 7.91669 1.5C4.46491 1.5 1.66669 4.29822 1.66669 7.75C1.66669 9.47175 2.36289 11.0309 3.48914 12.1613"
                    stroke="#475467"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </center>
              <a href="#"> Upload Photo</a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <a href="#">Logout</a>
      </div>
    </div>
  );
};

export default profile;
