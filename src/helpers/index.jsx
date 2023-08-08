export const GenerateId = () => {
  const a = Math.random().toString(36); 
  const b = Date.now().toString(36);

  return a + b 
}

export const dateFormat = (date) =>{
  const newDate = new Date(date);

  const options = { 
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  }

  return newDate.toLocaleDateString('es-ES', options)
}



