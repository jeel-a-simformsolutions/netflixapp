import React from 'react';
import Amazon from './Amazon';
import Netflix from './Netflix';



const favSeries = 'netflix';

//const FavS = () => {
//if (favSeries === 'netflix') {
//return <Netflix />;
//} else {
//return <Amazon />;
//}
//};

const App = () => (
  <>

    <h1 className="heading_style"> List of top 5 Series in 2022</h1>
    {/*<FavS />*/}

    {favSeries === "netflix" ? <Netflix /> : <Amazon />}
  </>
);

export default App;