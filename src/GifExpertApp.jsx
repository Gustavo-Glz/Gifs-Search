import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Piece'])

  const onAddCategory = (newCategory) => {
    // si la nueva categoria ya se encuentra en la lista retornamos
    if (categories.includes(newCategory)) return
    // Si no se encuentra  se inserta en la lista
    setCategories([newCategory, ...categories])
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  )
}

export default GifExpertApp
