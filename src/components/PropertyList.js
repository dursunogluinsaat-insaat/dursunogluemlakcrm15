import React from 'react';
import PropertyCard from './PropertyCard';
import './PropertyList.css';

function PropertyList({ properties, onDelete }) {
  return (
    <div className="property-list">
      {properties.length === 0 ? (
        <div className="empty-state">
          <p>Henuz ilan yok. Yeni bir ilan ekleyin!</p>
        </div>
      ) : (
        <div className="cards-grid">
          {properties.map(property => (
            <PropertyCard 
              key={property.id} 
              property={property}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default PropertyList;
