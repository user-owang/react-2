import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Routes, Navigate } from "react-router-dom";
import Menu from "./FoodMenu";
import Item from "./FoodItem";
import NotFound from "./NotFound";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getItems() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      let drinks = await SnackOrBoozeApi.getDrinks()
      setSnacks(snacks);
      setDrinks(drinks);
      setIsLoading(false);
    }
    getItems();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home snacks={snacks} drinks={drinks} />} />
            <Route path="/snacks" element={<Menu items={snacks} title="Snack" />} />
            <Route path="/snacks/:id" element={<Item items={snacks} cantFind="/snacks" />} />
            <Route path="/drinks" element={<Menu items={drinks} title="Drink" />} />
            <Route path="/drinks/:id" element={<Item items={drinks} cantFind="/drinks" />} />
            <Route path="/*" element={<NotFound/>} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
