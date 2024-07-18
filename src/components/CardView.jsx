import React, { useState, useEffect } from "react";
import { dummy_data } from "../data/dummy_data";
import Card from "../components/Card";
import PostDetailPage from "../pages/PostDetailPage";

function CardView() {
  const [selectedPost, setselectedPost] = useState(null);

  const handleCardClick = (item) => {
    setselectedPost(item);
    console.log("Selected Post:", item);
  };

  useEffect(() => {
    console.log("Selected Post (after setState):", selectedPost);
  }, [selectedPost]);
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
          <Card key={item.postID} item={item} onSelectPost={handleCardClick} />
        ))}
      </div>
      {selectedPost && <PostDetailPage selectedPost={selectedPost} />}
    </div>
  );
}

export default CardView;
