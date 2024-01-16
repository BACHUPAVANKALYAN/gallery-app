// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, setActiveThumbnailId} = props
  const {id, thumbnailUrl, imageUrl} = imageDetails
  const thumbnailClassName = isActive ? 'thumbnail active' : 'thumbnail'

  const onClickThumbnail = () => {
    setActiveThumbnailId(id)
  }
  return (
    <li className="thumbnail-list-item">
      <button type="button" onClick={onClickThumbnail} className="image-text">
        <img src={imageUrl} className={thumbnailClassName} alt={thumbnailUrl} />
      </button>
    </li>
  )
}

export default ThumbnailItem
