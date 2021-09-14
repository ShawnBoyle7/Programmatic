import React, { useEffect, useState } from 'react';

function AspirationList() {
  const sessionUser = useSelector(state => state.session?.user)
  const aspirations = sessionUser?.aspirations
  const aspirationComponents = aspirations.map((aspiration) => {
    return (
      <li key={aspiration.id}>
        <p>{aspiration.id}</p>
      </li>
    );
  });

  return (
    <>
      <h1>Learning Path: </h1>
      <ul>{aspirationComponents}</ul>
    </>
  );
}

export default AspirationList;
