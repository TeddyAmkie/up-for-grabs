import React from 'react';


class Map extends React.Component {
  componentDidMount() { 
    const script = document.createElement('script');
    script.src = process.env.PUBLIC_URL + '/sdk/tomtom.min.js';
    document.body.appendChild(script);
    script.async = true;
    script.onload = function () {
      window.tomtom.L.map('map', {
        source: 'vector',
        key: 'uPxVlGdisX4QTfwcvbq47GAEuG0hna5C',
        center: [37.769167, -122.478468],
        basePath: '/sdk',
        zoom: 15
      });
    }
  }

render (){
  return (
    <div>
        <div id = 'map'></div>
    </div>
  );
}
 
}

export default Map;
