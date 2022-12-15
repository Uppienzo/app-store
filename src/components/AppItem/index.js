// Write your code here
import './index.css'

const AppItem = props => {
  const {details} = props
  const {appName, imageUrl} = details

  return (
    <li className="app-item">
      <div className="app-container">
        <img src={imageUrl} alt={appName} className="app-image" />
        <p className="app-heading">{appName}</p>
      </div>
    </li>
  )
}

export default AppItem
