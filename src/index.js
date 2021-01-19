import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import Sdata from './Sdata';
import "./index.css";

console.log(Sdata[0].sname);



ReactDOM.render(
  <>

    <h1 className="heading_style"> List of top 5 Series in 2020</h1>
    <Card
      sname={Sdata[0].sname}
      imgsrc={Sdata[0].imgsrc}
      title={Sdata[0].title}
      link={Sdata[0].link}
    />
    <Card
      sname={Sdata[1].sname}
      imgsrc={Sdata[1].imgsrc}
      title={Sdata[1].title}
      link={Sdata[1].link}
    />
    <Card
      sname={Sdata[2].sname}
      imgsrc={Sdata[2].imgsrc}
      title={Sdata[2].title}
      link={Sdata[2].link}
    />
    <Card
      sname={Sdata[3].sname}
      imgsrc={Sdata[3].imgsrc}
      title={Sdata[3].title}
      link={Sdata[3].link}
    />
    <Card
      sname={Sdata[4].sname}
      imgsrc={Sdata[4].imgsrc}
      title={Sdata[4].title}
      link={Sdata[4].link}
    />
  </>,
  document.getElementById("root")
);
