// SearchPlace.js
import React, { useState, useEffect } from "react";

const { kakao } = window;

const SearchPlace = () => {
  
  const [InputText, setInputText] = useState('')
  const [Place, setPlace] = useState('')

  const onChangeText = (e) => {
    setInputText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPlace(InputText)
    setInputText('')
  }

  useEffect(() => {

    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    const map = new kakao.maps.Map(container, options);
    const geocoder = new kakao.maps.services.Geocoder();

    geocoder.addressSearch({Place}, function(result, status) {

      if (status === kakao.maps.services.Status.OK) {
          const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

          const marker = new kakao.maps.Marker({
          map: map,
          position: coords,
        });
  
          const infowindow = new kakao.maps.InfoWindow({
          content: `<div style="width:140px;text-align:center;padding:3px 0;">장소 : ${Place} </div>`
          });

      infowindow.open(map, marker);
      // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
      map.setCenter(coords);
      }
    });
  }, [{Place}]);

  return (
    <>
      <form className="inputForm" onSubmit={handleSubmit}>
        <input placeholder="모임장소를 입력하세요" class = "input-place" onChange={onChangeText} value={InputText} />
        <button type="submit" class = "input-place-button">검색</button>
      </form>
      
      <div id='map' style={{
        width: '440px', 
        height: '200px',
        marginLeft : '5px',
    }}></div>
    </>
  )
}

export default SearchPlace;