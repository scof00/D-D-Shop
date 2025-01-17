import { useState } from "react";
import "./App.css";
import { UnsoldItemsList } from "../components/items/itemsList";
import { Outlet, Route, Routes } from "react-router-dom";
import { Navbar } from "../navbar/navbar";
import { Welcome } from "../welcome/welcome";
import { AddItems } from "../components/addItem/addItem";
import { Purchases } from "../purchases/purchases";

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar/>
            <Outlet/>
          </>
        }
      >
        {/* <Route  index element={<Welcome />}/> */}
        <Route index path="/" element={<UnsoldItemsList />} />
        <Route path="newItem" element={<AddItems/>}/>
        <Route path="purchases" element={<Purchases/>} />
      </Route>
    </Routes>
  );
}

export default App;
