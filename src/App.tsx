import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import PGDetails from './components/PGDetails';
export function App() {
  return <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pg/:id" element={<PGDetails />} />
        </Routes>
      </Layout>
    </BrowserRouter>;
}