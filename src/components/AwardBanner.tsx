import React from 'react';

export default function AwardBanner() {
  return (
    <section className="w-full m-0 p-0 overflow-hidden bg-white border-b-2 sm:border-b-4 border-amber-600/80 shadow-md">
      <div className="w-full m-0 p-0">
        <img
          src="/cri-nec-award-official.png"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/cri-award-banner.jpg';
          }}
          alt="C.R.I. Pumps - National Energy Conservation Award 2022 presented by Hon'ble President of India Smt. Droupadi Murmu"
          className="w-full h-auto block object-fill sm:object-cover m-0 p-0"
        />
      </div>
    </section>
  );
}
