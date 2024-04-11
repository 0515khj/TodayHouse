import React from 'react';
import {  BrowserRouter as Router ,  Routes,  Route } from "react-router-dom";
import GlobalStyle from './styled/GlobalStyle';
import Layout from './components/Layout';
import CategoryMain from './pages/shopping/category/CategoryMain/CategoryMain';
import ShoppingHome from './pages/shopping/shoppingHome/ShoppingHome';
import BestMain from './pages/shopping/best/BestMain';
import TimeDealCon from './pages/shopping/timedeal/TimeDealCon';
import Login from './pages/login/Login';
import Join from './pages/join/Join';
import LogOut from './pages/logout/Logout';
import ProductDetailCon from './pages/shopping/productDetail/ProductDetailCon';
import HouseMain from './pages/community/housego/HouseMain';
import HousepicMain from './pages/community/housepic/HousepicMain';
import House3DMain from './pages/community/house3D/House3DMain';
import HouseSub from './pages/community/housego/housego2/HouseSub';
import CumuHome from './pages/community/cumu/cumuHome/CumuHome';


const App = () => {
  return (
    <>


    

     <GlobalStyle />
    <Router basename='/Todayhouse' >
    <Routes>
    <Route path='/login' element={<Login />}/>
    <Route path='/join' element={<Join />}/>
    <Route path='/' element={<Layout />}>

      <Route path='/home' element={<CumuHome/>}/>
      <Route path='/housemain' element={<HouseMain/>}/>
      <Route path='/picmain' element={<HousepicMain/>}/>
      <Route path='/3dmain' element={<House3DMain/>}/>
    
    <Route path='housesub' element={<HouseSub/>}/>

    <Route path='/logout' element={<LogOut />}></Route>
    <Route path='/product' element={<ProductDetailCon/>}></Route>
    <Route index element={<CumuHome />}/>
    <Route path='/'>
      <Route index path='/shopping' element={<ShoppingHome/>}></Route>
      <Route path='/category' element={<CategoryMain/>}/>
      <Route path='/best' element={<BestMain/>}/>
      <Route path='/timedeal' element={<TimeDealCon/>}/>
    </Route>
    </Route>
    </Routes>
    </Router> 
    </>
  );
};

export default App;