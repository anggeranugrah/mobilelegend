import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const Navbar = lazy(() => import('./Navbar'));
const Hero = lazy(() => import('./Hero'));
const ProScene = lazy(() => import('./ProScene'));
const Daftar= lazy(() => import('./Daftar'));
const Api = lazy(() => import('./Api'));
const Produk = lazy(() => import('./Produk'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/Hero" element={<Hero />} />
        <Route path="/ProScene" element={<ProScene />} />
        <Route path="/Daftar" element={<Daftar />} />
        <Route path="/Api" element={<Api />} />
        <Route path="Produk" element={<Produk />} />


      </Routes>
    </Suspense>
  </Router>
);
export default App;