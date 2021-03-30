import React from "react";
import { Container, ListGroup, Alert, Badge } from "react-bootstrap";

class DishComments extends React.Component {
  render() {
    return (
      <Container>
        {this.props.selectedDish && (
          <ListGroup className="my-5">
            <h1 className="text-center mb-3">{this.props.selectedDish.name}</h1>
            {this.props.selectedDish.comments.map((comment, idx) => {
              let variant = "";

              switch (comment.rating) {
                case 1:
                  variant = "danger";
                  break;
                case 2:
                  variant = "warning";
                  break;
                case 3:
                  variant = "secondary";
                  break;
                default:
                  variant = "success";
                  break;
              }

              return (
                <ListGroup.Item key={idx}>
                  <strong>{comment.author}</strong>: {comment.comment}
                  <Badge style={{ float: "right" }} variant={variant}>
                    {comment.rating}
                  </Badge>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        )}
        {!this.props.selectedDish && (
          <Alert variant="danger" className="mt-5 ">
            Click on a dish to see the comments
          </Alert>
        )}
      </Container>
    );
  }
}

export default DishComments;
