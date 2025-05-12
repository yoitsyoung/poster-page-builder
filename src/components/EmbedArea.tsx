import React from 'react';

const EmbedArea = () => {
  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 mt-8 w-full h-60 flex items-center justify-center">
      <iframe
        className="airtable-embed"
        src="https://airtable.com/embed/appEUhUkVNvpOnESs/pag5XhhTE10hjPnrM/form"
        frameBorder="0"
        width="100%"
        height="533"
        style={{ background: 'transparent' }}
      />
    </div>
  );
};

export default EmbedArea;
