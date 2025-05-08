import { useState } from 'react'
import { ImageCard } from './components/ImageCard'
import './App.css'

interface Image {
  src: string;
  legenda: string;
}

// Componente principal da aplicação.
// Aqui poderíamos definir rotas ou layout principal.
function App() {
  const [images, setImages] = useState<Image[]>([])
  const [newImageUrl, setNewImageUrl] = useState('')
  const [newImageLegenda, setNewImageLegenda] = useState('')

  const handleAddImage = (e: React.FormEvent) => {
    e.preventDefault()
    if (newImageUrl && newImageLegenda) {
      setImages([...images, { src: newImageUrl, legenda: newImageLegenda }])
      setNewImageUrl('')
      setNewImageLegenda('')
    }
  }

  return (
    <div className="container">
      <h1>Galeria de Imagens</h1>
      
      <form onSubmit={handleAddImage} className="form">
        <input
          type="text"
          placeholder="URL da imagem"
          value={newImageUrl}
          onChange={(e) => setNewImageUrl(e.target.value)}
        />
        <input
          type="text"
          placeholder="Legenda"
          value={newImageLegenda}
          onChange={(e) => setNewImageLegenda(e.target.value)}
        />
        <button type="submit">Adicionar Imagem</button>
      </form>

      <div className="gallery">
        {images.map((image, index) => (
          <ImageCard key={index} src={image.src} legenda={image.legenda} />
        ))}
      </div>
    </div>
  )
}

export default App
