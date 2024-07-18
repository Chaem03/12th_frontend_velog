import Header from "../components/header";

import NavItem from "../components/NavItem";
import CardView from "../components/CardView";
import SvgIcon from "../components/SvgIcon";
import React, { useState } from "react";

function Option() {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          background: "white",
          height: "30px",
          borderRadius: "4px",
          justifyContent: "space-between",
          boxShadow: "0 0 2px darkgray",
          alignItems: "center",
          padding: "2px",
          gap: "1px",
          fontSize: "0.8rem",
          fontWeight: "600",
          paddingLeft: "0.5rem",
        }}
      >
        <div>이번 주</div>
        <SvgIcon
          icon={
            <>
              <path fill="none" d="M 0 0 h 24 v 24 H 0 Z"></path>
              <path d="M 7 10 l 5 5 l 5 -5 Z"></path>
            </>
          }
        />
      </div>
      <SvgIcon
        style={{ fill: "gray", marginLeft: "8px" }}
        icon={
          <>
            <path fill="none" d="M 0 0 h 24 v 24 H 0 Z"></path>
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
          </>
        }
        size="1.5rem"
        width="2rem"
      />
    </div>
  );
}

function NavBar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "80%",
        padding: "12px 0",
        textAlign: "center",
        gap: "1rem",
      }}
    >
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px 0",
          gap: "0.7rem",
          fontSize: "1.2rem",
        }}
      >
        <NavItem
          icon={
            <>
              <path fill="none" d="M 0 0 h 24 v 24 H 0 Z"></path>
              <path d="M 16 6 l 2.29 2.29 l -4.88 4.88 l -4 -4 L 2 16.59 L 3.41 18 l 6 -6 l 4 4 l 6.3 -6.29 L 22 12 V 6 Z"></path>
            </>
          }
          text="트렌딩"
          isActive={true}
        />
        <NavItem
          icon={
            <>
              <path fill="none" d="M 0 0 h 24 v 24 H 0 Z"></path>
              <path d="M 11.99 2 C 6.47 2 2 6.48 2 12 s 4.47 10 9.99 10 C 17.52 22 22 17.52 22 12 S 17.52 2 11.99 2 Z M 12 20 c -4.42 0 -8 -3.58 -8 -8 s 3.58 -8 8 -8 s 8 3.58 8 8 s -3.58 8 -8 8 Z"></path>
              <path d="M 12.5 7 H 11 v 6 l 5.25 3.15 l 0.75 -1.23 l -4.5 -2.67 Z"></path>
            </>
          }
          text="최신"
          isActive={false}
        />
        <NavItem
          icon={
            <>
              <path fill="none" d="M 0 0 h 24 v 24 H 0 Z"></path>
              <circle cx="6.18" cy="17.82" r="2.18"></circle>
              <path d="M 4 4.44 v 2.83 c 7.03 0 12.73 5.7 12.73 12.73 h 2.83 c 0 -8.59 -6.97 -15.56 -15.56 -15.56 Z m 0 5.66 v 2.83 c 3.9 0 7.07 3.17 7.07 7.07 h 2.83 c 0 -5.47 -4.43 -9.9 -9.9 -9.9 Z"></path>
            </>
          }
          text="피드"
          isActive={false}
        />
      </nav>
      <Option />
    </div>
  );
}

function PostList() {
  return (
    <div
      style={{
        display: "flex",
        width: "80%",
        justifyContent: "space-between",
        alignContent: "center",
        marginTop: "1rem",
      }}
    >
      <CardView />
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Header />
      <NavBar />
      <PostList />
    </>
  );
}

export default HomePage;
