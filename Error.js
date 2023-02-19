import React from "react";
import Button from "react-bootstrap/Button";

const Error = () => {
  return (
    <div class="error">
      <div>
        <p>404 error</p>
        <h2> Page not found</h2>
        <p>
          {" "}
          Sorry, the page you are looking for doesn't exist. <br />
          here are some helpful links:
        </p>
        <Button variant="light">Go back</Button>
        <Button style={{ backgroundColor: "#7f56d9" }} variant="primary">
          Home
        </Button>
      </div>
      <img
        style={{ height: 400, width: 400 }}
        src="https://plus.unsplash.com/premium_photo-1661769609338-f80f92401516?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c29ycnl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt=""
      />
    </div>
  );
};

export default Error;
