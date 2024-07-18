import React from "react";
import { Link } from "react-router-dom";

function Card({ item, onSelectPost }) {
  const handleClick = () => {
    onSelectPost(item);
  };
  return (
    <Link
      to={`/detail/${item.postID}`}
      style={{
        textDecoration: "none",
        color: "inherit",
        flex: "1 1 290px",
        maxWidth: "290px",
      }}
      onClick={handleClick}
    >
      <div
        className="card"
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          textAlign: "left",
          borderRadius: "4px",
          boxShadow: "1px 1px 3px darkgray",
          marginBottom: "1rem",
          backgroundColor: "white",
          position: "relative",
        }}
      >
        <img
          src={item.thumbnail}
          alt={item.title}
          style={{
            display: "flex",
            height: "50%",
            width: "100%",
            objectFit: "cover",
            marginBottom: "0.5rem",
          }}
        />
        <h2 style={{ margin: "0.5rem", fontSize: "1.2rem" }}>{item.title}</h2>
        <p style={{ margin: "0.3rem", fontSize: "0.9rem" }}>{item.content}</p>
        <div
          style={{
            fontSize: "10px",
            color: "gray",
            position: "absolute",
            bottom: "1rem",
            left: "1rem",
          }}
        >
          {item.createdAt}
        </div>
      </div>
    </Link>
  );
}

export default Card;
