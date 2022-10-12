import React from 'react';
import Images from './components/Images';
function App() {

  // const [lat, setlat] = React.useState();

  // window.navigator.geolocation.getCurrentPosition(
  //   position => {
  //     console.log(position);
  //     setlat(position.coords.latitude);
  //   },
  //   err => console.log(err)
  // );

  return (
    <div className="App">
      <Images />
    </div>
  );
}

export default App;
