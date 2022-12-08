import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: 'Income',
    historyList: [],
    totalIncome: 0,
    totalExpenses: 0,
  }

  changeTitle = event => {
    this.setState({title: event.target.value})
  }

  changeAmount = event => {
    this.setState({amount: event.target.value})
  }

  changeType = event => {
    this.setState({type: event.target.value})
  }

  addButton = () => {
    const {title, amount, type} = this.state
    if (title !== '' && amount !== '') {
      const createHistory = {
        id: uuidv4(),
        title,
        amount,
        type,
      }
      if (type === 'Income') {
        this.setState(prevState => ({
          historyList: [...prevState.historyList, createHistory],
          totalIncome: prevState.totalIncome + parseInt(amount),
          title: '',
          amount: '',
        }))
      } else {
        this.setState(prevState => ({
          historyList: [...prevState.historyList, createHistory],
          totalExpenses: prevState.totalExpenses + parseInt(amount),
          title: '',
          amount: '',
        }))
      }
    }
  }

  onClickDeleteButton = id => {
    const {historyList} = this.state

    const filteredList = historyList.filter(each => {
      if (each.id === id) {
        if (each.type === 'Income') {
          this.setState(prevState => ({
            totalIncome: prevState.totalIncome - each.amount,
          }))
        } else {
          this.setState(prevState => ({
            totalExpenses: prevState.totalExpenses - each.amount,
          }))
        }
      }
      return each.id !== id
    })
    this.setState({historyList: filteredList})
  }

  render() {
    const {
      title,
      amount,
      type,
      historyList,
      totalIncome,
      totalExpenses,
    } = this.state
    return (
      <div className="bg_container pt-5 pb-5">
        <div className="main_container">
          <div className="user_container p-5">
            <h1>Hi, Richard</h1>
            <p className="description">
              Welcome back to your
              <span className="text-primary"> Money Manager</span>
            </p>
          </div>
          <MoneyDetails
            totalIncome={totalIncome}
            totalExpenses={totalExpenses}
          />
          <div className="mt-3 add_and_history_containers">
            <form className="add_transaction_container p-4">
              <h1 className="add_transaction_heading mb-3">Add Transaction</h1>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">TITLE</label>
                <input
                  value={title}
                  onChange={this.changeTitle}
                  type="text"
                  className="form-control pl-2"
                  id="exampleFormControlInput1"
                  placeholder="TITLE"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput2">AMOUNT</label>
                <input
                  value={amount}
                  onChange={this.changeAmount}
                  type="text"
                  className="form-control pl-2"
                  id="exampleFormControlInput2"
                  placeholder="AMOUNT"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect3">TYPE</label>
                <select
                  className="form-control"
                  id="exampleFormControlSelect3"
                  onChange={this.changeType}
                  value={type}
                >
                  {transactionTypeOptions.map(each => (
                    <option
                      id={each.optionId}
                      defaultValue="Income"
                      value={each.displayText}
                      //   value={each.optionId}
                      key={each.optionId}
                    >
                      {each.displayText}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.addButton}
              >
                Add
              </button>
            </form>
            <div className="history_container p-4">
              <h1 className="add_transaction_heading">History</h1>
              <ul className="list-group">
                <li className="list-group-item list_headings_container">
                  <p className="m-0 font">Title</p>
                  <p className="m-0 font">Amount</p>
                  <p className="m-0 head">Type</p>
                </li>
                {historyList.map(eachItem => (
                  <TransactionItem
                    historyItem={eachItem}
                    key={eachItem.id}
                    onClickDeleteButton={this.onClickDeleteButton}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
