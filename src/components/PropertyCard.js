import React from 'react';
import './PropertyCard.css';

function PropertyCard({ property, onDelete }) {
  const getEmoji = (image) => {
    const emojiMap = {
      'house': '🏠',
      'building': '🏢',
      'villa': '🏡'
    };
    return emojiMap[image] || '🏠';
  };

  return (
    <div className="property-card">
      <div className="card-image">
        <span className="image-emoji">{getEmoji(property.image)}</span>
      </div>
      <div className="card-content">
        <h3>{property.title}</h3>
        <p className="price">{property.price}</p>
        
        <div className="details">
          <div className="detail-item">
            <span className="label">Konum:</span>
            <span className="value">{property.location}</span>
          </div>
          <div className="detail-item">
            <span className="label">Alan:</span>
            <span className="value">{property.area}</span>
          </div>
          <div className="detail-item">
            <span className="label">Oda:</span>
            <span className="value">{property.rooms}</span>
          </div>
        </div>

        <div className="card-actions">
          <button className="btn-view">Detaylari Gor</button>
          <button 
            className="btn-delete"
            onClick={() => onDelete(property.id)}
          >
            Sil
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
