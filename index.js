const element = (
  // Write your code here.
  <div class="congrats-container">
    <h1 class="heading">Congratulations</h1>
    <div class="card-container">
      <img
        className="profile-photo"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <h1 className="name">Kiran V</h1>
      <p className="description">
        Vishnu Institute of Computer Education and Technology, Bhimavaram
      </p>
      <img
        className="profile-photo"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
