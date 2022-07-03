const format = (date: Date, hasTime: boolean = false): string => {
  const d = new Date(date).toLocaleDateString().split('/')
  const t = new Date(date).toLocaleTimeString()

  const d1 = `${d[0]}年${d[1]}月${d[2]}日`

  return hasTime ? `${d1} ${t}` : d1
}

export default format
