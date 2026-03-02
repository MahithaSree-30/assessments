import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <div className="home">
        <h2>Welcome to M & M Restro</h2>
        <p>Delicious food served with care</p>
      </div>

      <div className="section featured">
        <h3>Chef’s Specials</h3>
        <div className="menu-items">
          <div className="item">Chicken Biryani</div>
          <div className="item">Veg pulav</div>
          <div className="item">Paneer curry</div>
        </div>
      </div>

      <div className="section about">
        <h3>About Us</h3>
        <p>
          We serve freshly cooked food using the finest ingredients.
          Quality, hygiene, and taste are our top priorities.
        </p>
      </div>

      <div className="section why-us">
        <h3>Why Choose Us</h3>
        <ul>
          <li>Fresh Ingredients</li>
          <li>Hygienic Kitchen</li>
          <li>Fast Service</li>
          <li>Affordable Prices</li>
        </ul>
      </div>

      <div className="section info">
        <h3>Opening Hours</h3>
        <p>Mon – Sun: 10:00 AM – 11:00 PM</p>

        <h3>Location</h3>
        <p>Hyderabad, India</p>
      </div>

      <div className="section reviews">
        <h3>What Our Customers Say</h3>
        <p>“Amazing food and great service!”</p>
      </div>
    </div>
  );
}

export default Home;
