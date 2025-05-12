
import React from 'react';
import PosterLayout from '../components/PosterLayout';
import EmbedArea from '../components/EmbedArea';

const Index = () => {
  return (
    <PosterLayout>
      <div className="small-heading text-white/90 text-sm tracking-widest mb-2">getsao.ai</div>

      <h1 className="spring-title text-6xl md:text-8xl font-normal mb-0 leading-[0.9]">
        GOOGLE IS OLD
      </h1>


      <h2 className="spring-title text-5xl md:text-6xl font-normal mb-4">What does ChatGPT Think?</h2>

      <div className="poster-divider"></div>

      <div className="poster-divider"></div>

      <EmbedArea />
    </PosterLayout>
  );
};

export default Index;
