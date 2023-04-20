import React from "react";
import { Route, Routes } from "react-router-dom";
import Generator from "./Generator";

export default function App({ allColor, allPicture, allPattern }) {
  return (
    <>
      <Routes>
        <Route
          path="/generator"
          element={
            <Generator
              allColor={allColor}
              allPicture={allPicture}
              allPattern={allPattern}
            />
          }
        />
      </Routes>
    </>
  );
}
