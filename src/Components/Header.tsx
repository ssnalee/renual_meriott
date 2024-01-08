import { Link, useNavigate , useMatch } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion, useAnimation , useScroll} from "framer-motion";
import ReactStars from "react-stars";

const Nav = styled(motion.nav)`
  display: flex;
  justify-content : space-between;
  align-items :center;
  position : fixed;
  width : 100%;
  height : 150px;
  font-size : 14px;
  top : 0;
  border-bottom : 1px solid #000;
  padding : 20px 50px;
  z-index : 99;
  img{
    width : 150px;  
  }
`;
const NavLists = styled.ul`
  display : flex;
  align-items : center;
`;
const NavList = styled.li`
  margin-right: 15px;
  padding: 5px;
  box-sizing: border-box;
  position: relative;
  
`;
const ListBar = styled(motion.span)`
    position: absolute;
    width: 100%;
    height: 2px;
    border-radius: 5px;
    bottom: -5px;
    left: 0;
    right: 0;
    margin: 0 auto;
    background-color: #999;
`;
const Review = styled.div`
  display: flex;
  align-items: center;
  .rating {
    margin-top : -4px; 
    margin-right: 5px;
  }
`;
const navVariants = {
  top : {
      backgroundColor:"rgba(0,0,0,0)"
  },
  scroll : {
      backgroundColor:"rgba(255,255,255,0.5)"
  }
}
function Header(){
  // const navigate = useNavigate ();
  const homeMatch = useMatch("/");
  const galleryMatch = useMatch("/gallery");
  const roomMatch = useMatch("/room");
  const diningMatch = useMatch("/dining");
  const experienceMatch = useMatch("/experience");
  const eventMatch = useMatch("/event");
  const navAnimation = useAnimation();
  const {scrollY} = useScroll();
  let voteValue = 3.9;
  useEffect(()=>{
    scrollY.onChange(()=>{
        if(scrollY.get() >50){
            navAnimation.start("scroll" );
        } else{
            navAnimation.start("top");
        }
    });
},[scrollY, navAnimation]);
  return(
    <Nav
     variants={navVariants}
     animate={navAnimation}
     initial={"top"}
    >
    <img src="image/logo.webp" alt="fairfield by merriott" />

    <NavLists>
      <NavList>
        <Link to="/">소개
          {homeMatch ? <ListBar layoutId="listBar" /> : null}
        </Link>
      </NavList>
      <NavList>
        <Link to="/gallery">갤러리
          {galleryMatch ? <ListBar layoutId="listBar" /> : null}
        </Link>
      </NavList>
      <NavList>
        <Link to="/room">객실 & 스위트
          {roomMatch ? <ListBar layoutId="listBar" /> : null}
        </Link>
      </NavList>
      <NavList>
        <Link to="/dining">다이닝
          {diningMatch ? <ListBar layoutId="listBar" /> : null}
        </Link>
      </NavList>
      <NavList>
        <Link to="/experience">익스피리언스
          {experienceMatch ? <ListBar layoutId="listBar" /> : null}
        </Link>
      </NavList>
      <NavList>
        <Link to="/event">이벤트
          {eventMatch ? <ListBar layoutId="listBar" /> : null}
        </Link>
      </NavList>
    </NavLists>
    <Review>
      <ReactStars
        count={5}
        value={voteValue}
        color1="#E6E6E6"
        color2="#FFCC33"
        half
        size={20}
        edit={false}
        className="rating"
      />
      <span className="ratingValue">({voteValue}점)</span>
    </Review>
   
       
  </Nav>
  );
}

export default Header;