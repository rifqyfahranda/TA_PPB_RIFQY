import { useLocation } from 'react-router-dom';
import './detail.css';

export default function NetflixDetail() {

    const { state } = useLocation();
    const itemData = state && state.itemData;



    if (!itemData) {
        return <div>Data not found</div>;
    }

    return (
        <div className='detail'>

            <div className="detail-container">
                {/* <img className="detail-image" src={itemData.i.imageUrl} alt={itemData.title} /> */}
                <img src="https://t4.ftcdn.net/jpg/04/56/20/89/360_F_456208906_h2bZ51348xqpFcYXh4sGUiQDF5zolfRm.jpg" alt="Cinema"></img>
                <div className='detail-wrapper'>
                    <h1 className="detail-title">{itemData.imdbId}</h1>
                    <p className="detail-description">tmdbId: {itemData.tmdbId}</p>
                    <p className="detail-description">Type: {itemData.type}</p>
                    <p className="detail-originaltitle">Original Title: {itemData.originalTitle}</p>
                </div>

            </div>
        </div>

    );
}