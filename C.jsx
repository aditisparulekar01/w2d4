import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const C = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
            <h1>Lorem Ipsum</h1>
            </div>
            <h1>Lorem Ipsum</h1>
            <div className="card-body">
              <h5 className="card-title">Card 1</h5>
              <p className="card-text">
                This is the first card. You can add content here.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ci04JDq4t2YBxLJqMuBFalZvm23Tsv423w&usqp=CAU"
              className="card-img-top"
              alt="Card Image"
            />
            <div className="card-body">
              <h5 className="card-title">Card 2</h5>
              <p className="card-text">
                This is the second card. More content goes here.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSwo1rcpJOBkCiu6sHorhqvRKOvxku8CfoLg&usqp=CAU"
              className="card-img-top"
              alt="Card Image"
            />
            <div className="card-body">
              <h5 className="card-title">Card 3</h5>
              <p className="card-text">
                This is the third card. Add your own content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default C;
