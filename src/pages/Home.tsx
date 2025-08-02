import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Globe, CheckCircle, Star, Users, TrendingUp } from 'lucide-react';
import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import SolutionsPreview from '../components/home/SolutionsPreview';
import ClientLogos from '../components/home/ClientLogos';
import CtaSection from '../components/home/CtaSection';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <SolutionsPreview />
      <ClientLogos />
      <CtaSection />
    </div>
  );
};

export default Home;