import "./Menu.css";

function Menu() {
  return (
    <div className="menu-page">
      <div className="menu">
        <h2><center>MENU</center></h2>
        <p className="menu-desc">
          Explore our delicious selection of freshly prepared dishes
        </p>

        <h3>STARTERS</h3>
        <ul>
          <li>Veg Manchuria ------- 220</li>
          <li>Paneer 65 ----------- 260</li>
          <li>Chicken 65 ---------- 320</li>
          <li>Chilli Chicken ------ 340</li>
        </ul>

        <h3>VEG</h3>
        <ul>
          <li>Paneer Curry -------- 250</li>
          <li>Mushroom Curry ------ 250</li>
          <li>Brinjal Curry ------- 200</li>
          <li>Tomato Rice --------- 250</li>
          <li>Veg Pulav ----------- 250</li>
        </ul>

        <h3>NON VEG</h3>
        <ul>
          <li>Chicken Curry ------- 350</li>
          <li>Mutton Curry -------- 500</li>
          <li>Chicken Biryani ----- 500</li>
          <li>Dum Biryani --------- 600</li>
          <li>Fish Curry ---------- 500</li>
        </ul>

        <h3>LIQUIDS</h3>
        <ul>
          <li>Mineral Water ------- 30</li>
          <li>Soft Drinks --------- 60</li>
          <li>Fresh Lime Soda ----- 80</li>
          <li>Buttermilk ---------- 50</li>
        </ul>

        <p className="menu-note">
        </p>
      </div>
    </div>
  );
}

export default Menu;
