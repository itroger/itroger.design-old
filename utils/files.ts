import axios from 'axios'

export const uploadFile: (file: File) => Promise<any> = async file => {
  return new Promise(resolve => {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = async () => {
      const { data } = await axios.post('/api/image', {
        file: fileReader.result
      })
      resolve(data)
    }
  })
}

export const getFiles: () => string[] = () => {
  return Array.from(document.querySelectorAll('.bytemd img')).map(
    e => e.attributes['src'].value.split('/').reverse()[0]
  )
}

export const deleteFiles = async (files: string[]) => {
  if (files.length > 0) {
    await fetch('/api/image', {
      method: 'DELETE',
      body: JSON.stringify({ files })
    })
  }
}
