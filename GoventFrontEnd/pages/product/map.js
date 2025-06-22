// import SingleMapDetail from '@/components/product/SingleMapDetail'
import { useState, useEffect } from 'react'

function Map() {
  // 給一個預設的中心點
  const [lat, setLat] = useState(25.033198)
  const [lng, setLng] = useState(121.543575)

   // 儲存地標的數據
   const [landmarks, setLandmarks] = useState([
    // { lat: 25.033198, lng: 121.543575, title: '測試', content: 'this is a sample string' },
    { lat: 25.026312, lng: 121.543439, title: '捷運科技大樓站', content: 'this is another sample string' },
    { lat: 25.032728, lng: 121.545635, title: '台北市政府', content: 'this is another sample string' },
    { lat: 25.037531, lng: 121.565732, title: '松山文創園區', content: 'this is another sample string' },
    { lat: 25.041457, lng: 121.569365, title: '台北101', content: 'this is another sample string' },

  ]);

  useEffect(() => {
    console.log(lat)
  }, [lat])

  useEffect(() => {
    console.log(lng)
  }, [lng])

  return (
    <>
      {/* 暫時禁用地圖功能 - google-maps-react 與 React 18 不相容 */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold text-yellow-800 mb-4">🗺️ 地圖功能維護中</h2>
          <p className="text-yellow-700 mb-4">
            我們正在升級地圖功能以提供更好的使用體驗，預計很快就會重新上線！
          </p>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-2">活動地點資訊：</h3>
            <ul className="text-left space-y-2">
              {landmarks.map((landmark, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  <span className="font-medium">{landmark.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* {landmarks.map((landmark, i) => ( */}
        {/* <SingleMapDetail
          // key={i}
          lat={landmarks[0].lat}
          lng={landmarks[0].lng}
          // infoTitle={landmark.title}
          // infoContent={landmark.content}
          landmarks={landmarks}
        /> */}
      {/* ))} */}
    </>
  )
}

export default Map


// import React, { Component } from 'react';
// import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

// const mapStyles = {
//   width: '100%',
//   height: '100%',
// };

// const locations = [
//   { lat: 22.5789248, lng: 120.3000704 },
//   { latitude: 22.7007095, longitude: 120.2960015 },
//   // 更多位置...
// ];

// const formattedLocations = locations.map(location => ({
//   Position: {
//     PositionLat: location.lat || location.latitude,
//     PositionLon: location.lng || location.longitude,
//   }
// }));

// class MapContainer extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <Map
//         google={this.props.google}
//         zoom={8}
//         style={mapStyles}
//         initialCenter={{ lat: 23.5, lng: 120 }}
//       >
//         {this.props.data.map((d, i) => (
//           <Marker
//             key={i}
//             position={{ lat: d.Position.PositionLat, lng: d.Position.PositionLon }}
//           />
//         ))}
//       </Map>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY // 使用環境變數
// })(MapContainer);

// // 在另一個元件中使用 MapContainer
// // <MapContainer data={formattedLocations} />