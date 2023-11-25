import React from 'react'
import './tempcard.css'

export default function TempCard({ data, onClick }) {
  return (
    <div className="image">
      <div className="foto">
        <img
          src="https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-cinema-movie-icon-image_1233832.jpg"
          alt="Cinema"
        ></img>
      </div>
    </div>
  )
}
