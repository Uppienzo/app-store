import './index.css'

const TabItem = props => {
  const {details, onClickTabItem, activeTabId} = props
  const {tabId, displayText} = details

  const onClickTab = () => {
    onClickTabItem(tabId)
  }

  const isActive = activeTabId === tabId ? 'active-tab-btn' : ''

  return (
    <li className="tab-item">
      <button
        className={`tab-btn ${isActive}`}
        type="button"
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
