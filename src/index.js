import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';



ReactDOM.render(
  <>
    <Card imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
      title="A Netflix Orignal Series"
      sname="DARK"
      link="https://www.netflix.com/in/title/80990668?source=35"
    />
    <Card imgsrc="https://wallpapercave.com/wp/wp1917154.jpg"
      title="A Netflix Orignal Series"
      sname="extra curricular"
      link="https://www.netflix.com/in/title/80990668?source=35" />
    <Card imgsrc="https://wallpapercave.com/wp/wp1917154.jpg"
      title="A Netflix Orignal Series"
      sname="Stranger Things"
      link="https://www.netflix.com/in/title/80990668?source=35" />
  </>,
  document.getElementById("root")
);
