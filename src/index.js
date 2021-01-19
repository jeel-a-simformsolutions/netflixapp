import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import Sdata from './Sdata';
import "./index.css";

//console.log(Sdata[0].sname);

//function ncard(val) {
//console.log(val);

//);

//}

ReactDOM.render(
  <>

    <h1 className="heading_style"> List of top 5 Series in 2020</h1>

    {Sdata.map((val) => {
      return (
        <Card
          sname={val.sname}
          imgsrc={val.imgsrc}
          title={val.title}
          link={val.link}
        />
      );
    })}
  </>,
  document.getElementById("root")

);