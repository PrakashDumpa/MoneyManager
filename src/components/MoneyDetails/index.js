/* eslint-disable react/no-unknown-property */
// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {totalIncome, totalExpenses} = props

  return (
    <div className="mt-3 moneyDetails_container">
      <div className="money_details_card_container bg_1 mb-3">
        <img
          className="money_manager_image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png "
          alt="balance"
        />
        <div className="balance ml-3">
          <p className="m-0">Your Balance</p>
          <p className="m-0 h2" testid="balanceAmount">
            Rs {totalIncome - totalExpenses}
          </p>
        </div>
      </div>
      <div className="money_details_card_container bg_2 mb-3">
        <img
          className="money_manager_image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div className="balance ml-3">
          <p className="m-0">Your Income</p>
          <p testid="incomeAmount" className="m-0 h2">
            Rs {totalIncome}
          </p>
        </div>
      </div>
      <div className="money_details_card_container bg_3 mb-3">
        <img
          className="money_manager_image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div className="balance ml-3">
          <p className="m-0">Your Expenses</p>
          <p testid="expensesAmount" className="m-0 h2">
            Rs {totalExpenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
