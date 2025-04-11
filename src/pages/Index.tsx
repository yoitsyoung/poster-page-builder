
import React from 'react';
import PosterLayout from '../components/PosterLayout';
import EmbedArea from '../components/EmbedArea';

const Index = () => {
  return (
    <PosterLayout>
      <div className="small-heading text-white/90 text-sm tracking-widest mb-2">SOME TEXT</div>
      
      <h1 className="spring-title text-6xl md:text-8xl font-normal mb-0 leading-[0.9]">
        SPRING
      </h1>
      <h1 className="spring-title text-6xl md:text-8xl font-normal mt-0 mb-6 leading-[0.9]">
        SALE
      </h1>
      
      <h2 className="spring-title text-5xl md:text-6xl font-normal mb-4">25% OFF</h2>
      
      <div className="poster-divider"></div>
      
      <p className="weekend-text text-white/90 text-2xl md:text-3xl mb-8">this weekend only</p>
      
      <div className="poster-divider"></div>
      
      <EmbedArea />
    </PosterLayout>
  );
};

export default Index;
