import React, { Component } from 'react'
import Table from 'rc-table'
import 'rc-table/assets/index.css'
import data from './data'

const customStyles = {
  fontFamily: 'roboto'
}

const columns = [
  {
    title: 'Name', dataIndex: 'name', key: 'name', width: 100,
  },
  {
    title: 'Age', dataIndex: 'age', key: 'age', width: 50,
  },
  {
    title: 'City', dataIndex: 'city', key: 'city', width: 100,
  },
  {
    title: 'Drink of Choice', dataIndex: 'drink', key: 'drink', width: 100,
  }
]

class App extends Component {
  render() {

    return (
      <section className="cf w-100 pv3 f6 ph3 ph4-ns">
        <Table style={customStyles} columns={columns} data={data} />
      </section>
    )
  }
}

export default App
