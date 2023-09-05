import "./App.css";
import React from "react";

function App() {
  return (
    <div className="App">
      <button
        type="button"
        className="btn btn-success btn-lg"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Click Me
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Happy Teachers Day
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Happy Teachers day Suraj sir.
              <br />
              First of all I want to say thank you for helping me in all the way
              possible through out this 5 months and resolving all the quarries
              for me and doing whatever is needed to be done.
              <br />
              Your student,
              <br />
              Avik Mitra
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
