import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ArticlePost = () => {
  return (
    <div class="center">
      <Card style={{ width: "50rem" }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Img
            variant="top"
            src="https://plus.unsplash.com/premium_photo-1675768059320-399487e7fe14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          />
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>

          <Card.Text> Author : </Card.Text>
          <Card.Text> created at:</Card.Text>
          <Card.Text> Updated at :</Card.Text>
          <button class="btn2">Like</button>
          <Card.Text> Comment</Card.Text>
          <input type="text" id="textbox" />
        </Card.Body>
      </Card>
    </div>
  );
};

export default ArticlePost;
