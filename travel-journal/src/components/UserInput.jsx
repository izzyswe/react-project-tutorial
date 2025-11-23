function UserInput({ onAddEntry }) {
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
}