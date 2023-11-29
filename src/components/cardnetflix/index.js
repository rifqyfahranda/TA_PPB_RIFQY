import React from 'react'
import './index.css'

export default function Card({ data, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      {data ? (
        <>
          <div className="card-info">
            <img
              src="https://t4.ftcdn.net/jpg/04/56/20/89/360_F_456208906_h2bZ51348xqpFcYXh4sGUiQDF5zolfRm.jpg"
              alt="Cinema"
            ></img>

            <div className="card-detail">
              <h3>{data.title}</h3>
              <p>Type: {data.type}</p>
              <p>Year: {data.year}</p>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
