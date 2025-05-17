import React from 'react';

const videos = [
  'https://www.youtube.com/embed/yourVideoId1',
  'https://www.youtube.com/embed/yourVideoId2',
  'https://www.youtube.com/embed/yourVideoId3',
];

export default function TopRankers() {
  return (
    <>
    {/* // <section className="bg-gray-100 py-12 px-4 md:px-10"> */}
      {/* <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-4">
            Listen to What the Rankers and Top Scorers Have to Say
          </h2>
          <p className="text-gray-700 text-base sm:text-lg">
            Discover inspiring success stories from our top-performing students! Hear firsthand how SPC’s expert guidance, 
            structured learning, and innovative teaching methods helped them achieve outstanding CA results.
          </p>
        </div>

        <div className="flex-1 overflow-x-auto flex gap-4 snap-x snap-mandatory scrollbar-hide">
          {videos.map((url, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 snap-start w-[250px] sm:w-[280px] md:w-[320px] h-[180px] sm:h-[200px] md:h-[220px] bg-black rounded-xl overflow-hidden shadow-md"
            >
              <iframe
                width="100%"
                height="100%"
                src={url}
                title={`YouTube video testimonial ${idx + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl"
              ></iframe>
            </div>
          ))}
        </div>
      </div> */}
    {/* // </section> */}
    </>
  );
};
