import React, { useState } from 'react';
import './AddProperty.css';

function AddProperty({ onAdd, onCancel }) {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    location: '',
    area: '',
    rooms: '',
    image: 'house'
  });

  const imageOptions = [
    { value: 'house', label: 'House' },
    { value: 'building', label: 'Building' },
    { value: 'villa', label: 'Villa' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.price && formData.location) {
      onAdd(formData);
      setFormData({
        title: '',
        price: '',
        location: '',
        area: '',
        rooms: '',
        image: 'house'
      });
    } else {
      alert('Lutfen tum gerekli alanlari doldurun!');
    }
  };

  return (
    <div className="add-property-form">
      <h2>Yeni Ilan Ekle</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Ilan Basligi *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="orn: Yeni Ev - Istanbul"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Fiyat *</label>
          <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="orn: 2,500,000 TL"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Konum *</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="orn: Besiktas, Istanbul"
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="area">Alan</label>
            <input
              type="text"
              id="area"
              name="area"
              value={formData.area}
              onChange={handleChange}
              placeholder="orn: 150 m2"
            />
          </div>

          <div className="form-group">
            <label htmlFor="rooms">Oda Sayisi</label>
            <input
              type="text"
              id="rooms"
              name="rooms"
              value={formData.rooms}
              onChange={handleChange}
              placeholder="orn: 3+1"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="image">Tur Sec</label>
          <select 
            id="image"
            name="image" 
            value={formData.image}
            onChange={handleChange}
          >
            {imageOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-submit">Ekle</button>
          <button type="button" className="btn-cancel" onClick={onCancel}>Iptal</button>
        </div>
      </form>
    </div>
  );
}

export default AddProperty;
