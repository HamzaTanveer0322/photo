import React, { useEffect, useState } from 'react';
import './App.css'; // Import the CSS file
import { Container,Row, Col } from 'react-bootstrap';
function SearchPhoto() {
  const [query, setQuery] = useState('');
  const [photoData, setPhotoData] = useState([]);
useEffect(()=>{
  fetch(`https://pixabay.com/api/?key=42731578-8bcb626fb0dc9e7b2f701ddaf&q=&image_type=photo`)
  .then(response => response.json())
  .then(data => setPhotoData(data.hits))
  .catch(error => console.error('Error fetching data:', error));
},[])
  useEffect(() => {
    if (query) {
      fetch(`https://pixabay.com/api/?key=42731578-8bcb626fb0dc9e7b2f701ddaf&q=${query}&image_type=photo`)
        .then(response => response.json())
        .then(data => setPhotoData(data.hits))
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [query]);

  return (
    <>
      <div className='d-flex justify-content-center '>
        <input 
          className='w-25 form-control  me-2  mt-3'
          type='text'
          onChange={(e) => setQuery(e.target.value)}
          placeholder='search...'
          value={query}
        />
        <button className='btn btn-dark mt-3' onClick={() => setQuery(query)}>search</button>
      </div>
      <Container  className='mt-4'>
      <Row className="g-4">
        {photoData && photoData.map(p => (
              <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
          <div className='photo-item' key={p.id}>
            <img src={p.webformatURL} alt={p.tags}  className="img-fluid rounded shadow" />
          </div>
        </Col>
        ))}
        </Row>
      </Container >
    </>
  );
}

export default SearchPhoto;
