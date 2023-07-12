import React from 'react'
import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar.js';
import Navoptions from "./components/Navoptions.js"
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Slider from "./components/Slider.js"
import data from "./data/data.json"
import Offers from "./components/Offers.js"
import Heading from "./components/Heading.js"
import StarProduct   from "./components/StarProduct.js"
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js"
import HotAccessories from './components/HotAccessories.js';
import ProductReviews from "./components/ProductReviews.js"
import Videos from "./components/Videos.js"
import Banner from "./components/Banner.js"
import Footer from "./components/Footer.js"

// import   Navbar from './Navbar';
// const name = "Product";
// return ke andar javascript likhne ke
// liye we will use {}

// right bottom se language select javascript react

// for inline css we used in html like style = "background-color:red"
// but here we write like style = {name of object defined above}

// object ke andar sab like background-color we used in html
// yaha saare - hata ke next word ka first letter capital kardo

// const styling = {
//   backgroundColor:"red" ,
//   padding:"10px"
// }

// instead of passing variable name as a object wahi object bhi
// bana sakte hain

// now lets see how to add other components
/* <>
    <div className="App" style={styling}>
      IMG
      
      Name 
      Price
    </div>
    <div style={{backgroundColor:"blue", padding:"20px"}}>
      How are you
    </div>
    </> */
    // components ke liye its preffered ki tum naya file banao
    // so lets make navbar.js
/* <div className="App">
      IMG
      <Navbar />
      Name 
      Price
    </div>
    <div>
      How are you
    </div>
    </> */



function App() {

  

  return (
    <Router>
      
      <PreNavbar />
      
      <Navbar />
      <Navoptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories} />
      
      <Slider start={data.banner.start}/>
      
      <Offers offer={data.offer}/>
      
      <Heading text="STAR PRODUCTS"/>
      
      <StarProduct starProduct={data.starProduct}/>
      
      <Heading text="HOT ACCESSORIES"/>
      
      <HotAccessoriesMenu />

      <Routes>

        <Route exact path="/music" element={
          <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />}>
        </Route>

        <Route exact path="/smartDevice" element={
          <HotAccessories music={data.hotAccessories.smartDevice} musicCover={data.hotAccessoriesCover.smartDevice} />}>
        </Route>

        <Route exact path="/home" element={
          <HotAccessories music={data.hotAccessories.home} musicCover={data.hotAccessoriesCover.home} />}>
        </Route>

        <Route exact path="/lifeStyle" element={
          <HotAccessories music={data.hotAccessories.lifeStyle} musicCover={data.hotAccessoriesCover.lifeStyle} />}>
        </Route>

        <Route exact path="/mobileAccessories" element={
          <HotAccessories music={data.hotAccessories.mobileAccessories} musicCover={data.hotAccessoriesCover.mobileAccessories} />}>
        </Route>
        
      </Routes>

      <Heading text="PRODUCT REVIEWS" />
      
      <ProductReviews product={data.productReviews}/>
      
      <Heading text="VIDEOS" />
      
      <Videos videos={data.videos} />

      <Heading text="IN THE PRESS" />

      <Banner banner={data.banner}/>

      <Footer footer={data.footer}/>  

    </Router>
  );
}

export default App;
