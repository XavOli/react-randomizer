import React from 'react';

export default function PlayerCount({ totalCount, activeCount }) {
  return (
    <div className="pt-2 col-span-full  md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-center">
      {activeCount !== totalCount ? (
        <>
          <span>Active players : {activeCount}</span>
          <span> Total players : {totalCount}</span>{' '}
        </>
      ) : (
        <span> Total players : {totalCount}</span>
      )}
    </div>
  );
}
