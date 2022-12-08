// Write your code here
import './index.css'

const TransactionItem = props => {
  const {historyItem, onClickDeleteButton} = props
  const {title, amount, type, id} = historyItem

  const deleteButton = () => {
    onClickDeleteButton(id)
  }

  return (
    <li className="list-group-item item_container">
      <p className="m-0">{title}</p>
      <p className="m-0 ">Rs {amount}</p>
      <div className="type_container">
        <p className="m-0">{type}</p>
        <button
          type="button"
          className="delete_button"
          onClick={deleteButton}
          // eslint-disable-next-line react/no-unknown-property
          testid="delete"
        >
          <img
            className="delete_image"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
