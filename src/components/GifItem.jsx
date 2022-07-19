export const GifItem = ({ title, url }) => {
  return (
    <div className="card">
      <img src={url} alt="Gif" />
      <p>{ title }</p>
    </div>
  )
}


