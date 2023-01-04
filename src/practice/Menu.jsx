import React from "react";
import MenuJpg from "./Menu.png"
function Menu() {
    return(
      <div className={"container mt-5"}>
          <div className={"row"}>
              <div className={"col-sm mb-5"}>
                  <br />
                  <br />
                  <h1 className={"text-center"}>Our Menu</h1>
                  <h4 className={"mt-5"}>Bread Basket</h4>
                  <p className={"mt-4"}>Assortment of fresh baked fruit breads and muffins 5.50</p>
                  <br />
                  <h4 className={"mt-4"}>Honey Almond Granola with Fruits</h4>
                  <p className={"mt-4"}>Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p>
                  <br/>
                  <h4 className={"mt-4"}>Belgian Waffle</h4>
                  <p className={"mt-4"}>Vanilla flavored batter with malted flour 7.50</p>
                  <br/>
                  <h4 className={"mt-4"}>Scrambled eggs</h4>
                  <p className={"mt-4"}>Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p>
                  <br/>
                  <h4 className={"mt-4"}>Blueberry Pancakes</h4>
                  <p className={"mt-4"}>With syrup, butter and lots of berries 8.50</p>
                  <br/>
              </div>
              <div className={"col-sm"}>
                  <img src={MenuJpg} className={"w-100"}/>
              </div>
          </div>
          <hr />
      </div>
    );
}

export default Menu;