import React from "react";
import "./index.css";

export default function Card({ data, onClick }) {
    return (
        <div className="card" onClick={onClick}>
            {data ? (
                <>
                    <div className="card-info">
                        <img src="https://t4.ftcdn.net/jpg/04/56/20/89/360_F_456208906_h2bZ51348xqpFcYXh4sGUiQDF5zolfRm.jpg" alt="Cinema"></img>

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
    );
}



// import React from "react";

// const Card = ({ data, streamingInfo, onClick }) => {
//     return (
//         <div className="card" onClick={onClick}>
//             <h2>{data.title}</h2>
//             {/* Display other movie details fetched from IMDb */}
//             {/* ... */}

//             {/* Display streaming information */}
//             {streamingInfo && (
//                 <div className="streaming-info">
//                     <p>Service: {streamingInfo.service}</p>
//                     <p>Streaming Type: {streamingInfo.streamingType}</p>
//                     <p>Quality: {streamingInfo.quality}</p>
//                     <a href={streamingInfo.link} target="_blank" rel="noopener noreferrer">
//                         Watch Now
//                     </a>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Card;
