import React from "react";
import SingleBook from "./SingleBook.jsx";
import { Container, Row, Col } from "react-bootstrap";
import { Component } from "react";
import ShowComment from "./ShowComment.jsx";
export default class BookList extends Component {
  state = {
    selectedBook: null,
    selected: false,
  };
  selectBook = (book) => {
    // console.log("book selected", book);
    if (this.state.selected === true) {
      this.setState({ selected: false });
    } else {
      this.setState({ selectedBook: book, selected: true });
    }
  };
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col>
              {this.props.books.map((book, index) => {
                return (
                  <Col key={index} onClick={() => this.selectBook(book)}>
                    <SingleBook book={book} />
                  </Col>
                );
              })}
            </Col>
            <Col
              style={{
                // position: "-webkit-sticky",
                position: "sticky",
                top: "0",
              }}
            >
              {this.state.selected ? (
                <ShowComment book={this.state.selectedBook}></ShowComment>
              ) : (
                "Pick a book to show comment"
              )}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
