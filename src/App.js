import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import PropertyList from './components/PropertyList';
import AddProperty from './components/AddProperty';

function App() {
  const [properties, setProperties] = useState([
    {
      id: 1,
      title: 'Yeni Ev - Istanbul',
      price: '2,500,000 TL',
      location: 'Besiktas, Istanbul',
      area: '150 m2',
      rooms: '3+1',
      image: 'house'
    },
    {
      id: 2,
      title: 'Daire - Ankara',
      price: '1,200,000 TL',
      location: 'Cankaya, Ankara',
      area: '120 m2',
      rooms: '2+1',
      image: 'building'
    },
    {
      id: 3,
      title: 'Villa - Izmir',
      price: '3,800,000 TL',
      location: 'Alsancak, Izmir',
      area: '300 m2',
      rooms: '5+1',
      image: 'villa'
    }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);

  const addProperty = (newProperty) => {
    setProperties([...properties, { ...newProperty, id: Date.now() }]);
    setShowAddForm(false);
  };

  const deleteProperty = (id) => {
    setProperties(properties.filter(prop => prop.id !== id));
  };

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <div className="container">
          <div className="header-section">
            <h1>Emlak Ilanlari</h1>
            <button 
              className="btn-add"
              onClick={() => setShowAddForm(!showAddForm)}
            >
              {showAddForm ? 'Iptal Et' : '+ Yeni Ilan Ekle'}
            </button>
          </div>

          {showAddForm && (
            <AddProperty onAdd={addProperty} onCancel={() => setShowAddForm(false)} />
          )}

          <PropertyList 
            properties={properties} 
            onDelete={deleteProperty}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
