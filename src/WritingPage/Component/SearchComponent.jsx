// SearchPlace.js
import React, { useState } from "react";
import MapContainer from "./AddressSearchComponent";

const SearchPlace = () => {
  
  const [InputText, setInputText] = useState('')
  const [Place, setPlace] = useState('')

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
        <input placeholder="모임장소를 입력하세요" class = "input-place" onChange={onChange} value={InputText} />
        <button type="submit" class = "input-place-button">검색</button>
      </form>
      <MapContainer searchPlace={Place} />
    </>
  )
}

export default SearchPlace;