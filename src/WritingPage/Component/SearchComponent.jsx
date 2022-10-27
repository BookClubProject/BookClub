// SearchPlace.js
import React, { useState } from "react";
import MapContainer from "./AddressSearchComponent";

const SearchPlace = () => {
  
  const [InputText, setInputText] = useState('')
  const [Place, setPlace] = useState('군자로 11길 5-3')

  const onChange = (e) => {
    setInputText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPlace(InputText)
    setInputText('')
  }

  return (
    <>
      <form className="inputForm" onSubmit={handleSubmit}>
        <input placeholder="검색어를 입력하세요" onChange={onChange} value={InputText} />
        <button type="submit">검색</button>
      </form>
      <MapContainer searchPlace={Place} />
    </>
  )
}

export default SearchPlace;