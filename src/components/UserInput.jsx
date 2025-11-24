import { useState } from "react"

export default function UserInput({ onAddEntry }) {
  const [formData, setFormData] = useState({
    img: '',
    titleImg: '',
    country: '',
    mapUrl: '',
    title: '',
    date: '',
    description: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = () => {
    if (formData.img && formData.country && formData.title) {
      onAddEntry(formData);
      // Reset form
      setFormData({
        img: '',
        titleImg: '',
        country: '',
        mapUrl: '',
        title: '',
        date: '',
        description: ''
      })
    }
  } 
  return(
    <div className="user-input">
      <h2 className="user-input__title">Add New Travel Entry</h2>
      <div className="user-input__form">
        <div className="form-group">
          <label>Image URL:</label>
          <input
            type="text"
            name="img"
            value={formData.img}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
          />
        </div>
        
        <div className="form-group">
          <label>Image Alt Text:</label>
          <input
            type="text"
            name="titleImg"
            value={formData.titleImg}
            onChange={handleChange}
            placeholder="Description of image"
          />
        </div>

        <div className="form-group">
          <label>Country:</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="e.g., Japan"
          />
        </div>

        <div className="form-group">
          <label>Google Maps URL:</label>
          <input
            type="text"
            name="mapUrl"
            value={formData.mapUrl}
            onChange={handleChange}
            placeholder="https://maps.google.com/..."
          />
        </div>

        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g., Tokyo - Japan"
          />
        </div>

        <div className="form-group">
          <label>Date:</label>
          <input
            type="text"
            name="date"
            value={formData.date}
            onChange={handleChange}
            placeholder="e.g., 01-01-25"
          />
        </div>

        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your travel experience..."
            rows="3"
          />
        </div>

        <button onClick={handleSubmit} className="submit-btn">Add Entry</button>
      </div>
    </div>
  )
}
