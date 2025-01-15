import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import HallOfFame from './pages/HallOfFame';
import Resources from './pages/Resources';
import Events from './pages/Events';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import Community from './pages/Community';
import Donation from './pages/Donation';
import Alumni from './pages/Alumni';
import Tools from './pages/Tools';
import Feedback from './pages/Feedback';
import AboutUs from './pages/AboutUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Gamification from './pages/Gamification';
import Internship from './pages/Internship';
import Contribute from './pages/Contribute';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hall-of-fame" element={<HallOfFame />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/community" element={<Community />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/gamification" element={<Gamification />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/contribute" element={<Contribute />} />
      </Routes>
    </Router>
  );
};

export default App;