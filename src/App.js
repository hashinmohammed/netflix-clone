import React from 'react';
import Row from './Row';
import requests from './requests';
function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>hey hashin</h1>
      <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    </div>
  );
 
}

export default App;
