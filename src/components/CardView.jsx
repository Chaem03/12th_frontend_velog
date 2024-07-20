import React, { useState, useEffect } from "react";
import { dummy_data } from "../data/dummy_data";
import Card from "../components/Card";

function CardView() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "6rem",
          flexWrap: "wrap",
        }}
      >
        {dummy_data.map((item) => (
          <Card key={item.postID} item={item} />
        ))}
      </div>
    </div>
  );
}

export default CardView;
