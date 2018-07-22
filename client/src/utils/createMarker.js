export default marker => {
  console.log(marker)
  return `markers=color:${'blue'}|label:${'h'}|${marker.location}`
}