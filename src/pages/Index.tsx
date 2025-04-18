
import React, { useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import PartnersSection from '../components/PartnersSection';

const Index: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <PartnersSection />
    </MainLayout>
  );
};

export default Index;
