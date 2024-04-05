import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import AdminPanel from './pages/AdminPanel';
import KullaniciListesi from './pages/KullaniciListesi';
import KullaniciEkle from './pages/KullaniciEkle';
import UrunEkle from './pages/UrunEkle';
import UrunListesi from './pages/UrunListesi';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<App />} />
        <Route path='/admin-panel' element={<AdminPanel />} />
        <Route path='/kullanici-ekle' element={<KullaniciEkle />} />
        <Route path='/kullanici-listesi' element={<KullaniciListesi />} />
        <Route path='/urun-ekle' element={<UrunEkle />} />
        <Route path='/urun-listesi' element={<UrunListesi />} />            
    </Routes>
  </BrowserRouter>
);

