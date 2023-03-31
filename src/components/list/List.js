import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import "./list.css"

class List extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      employees: this.props.employees
    }
  }
  render() {
    return (
      <div className='container'>
              <Fragment>
        <table>
        <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.employees.map((item, index) => (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.email}</td>
                    </tr>
                ))}
                </tbody>
        </table>
            </Fragment>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { employees } = state
  return { employees: employees }
}

export default connect(mapStateToProps)(List)
