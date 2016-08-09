import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createCard, updateCard } from 'actions/actionCard'
import { getCards } from 'actions/actionCards'
import { getBoards } from 'actions/actionBoards'
import { getLists } from 'actions/actionLists'
import scriptLoader from 'services/scriptLoader'

export default class App extends Component {
  static get displayName () {
    return 'App'
  }

  constructor (props) {
    super(props)

    this.state = {
      activeView: ''
    }

    this.newCard = this.newCard.bind(this)
    this.updateCard = this.updateCard.bind(this)
    this.getBoards = this.getBoards.bind(this)
    this.getLists = this.getLists.bind(this)
    this.getCards = this.getCards.bind(this)
  }

  componentWillMount () {
    scriptLoader('https://api.trello.com/1/client.js?key=9e881042da78c22bc645d1fa4bdce6d3',
      () => {
        Trello.authorize({
          type: 'popup',
          name: 'Getting Started Application',
          scope: {
            read: true,
            write: true
          },
          expiration: 'never',
          success () {
            console.log('Successful authentication')
          },
          error () {
            console.log('Failed authentication')
          }
        })
      }
    )
  }

  newCard () {
    const { createCard } = this.props

    createCard({
      name: 'TestCard 3',
      desc: 'This is the description of our new card.',
      idList: '56e4db26bb08538feb2621f9',
      pos: 'top'
    })
  }

  updateCard () {
    const { activeCard, updateCard } = this.props

    if (activeCard.id) {
      updateCard({
        name: 'Name changed',
        id: activeCard.id,
        pos: 'top'
      })
    }
  }

  getBoards () {
    const { getBoards } = this.props
    this.setState({ activeView: 'boards' })
    getBoards()
  }

  getLists () {
    const { getLists } = this.props
    this.setState({ activeView: 'lists' })
    getLists('56e4db26bb08538feb2621f8')
  }

  getCards () {
    const { getCards } = this.props
    this.setState({ activeView: 'cards' })
    getCards('56e4db26bb08538feb2621fb')
  }

  render () {
    let { activeView } = this.state

    return (
      <div>
        <button onClick={this.getBoards}>Get Boards</button>
        <button onClick={this.getLists}>Get Lists</button>
        <button onClick={this.getCards}>Get Cards</button>
        <h1>{activeView}</h1>
        <pre>{JSON.stringify(this.props[activeView], null, 2)}</pre>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    createCard,
    updateCard,
    getBoards,
    getLists,
    getCards
  }, dispatch)
}

function mapStateToProps (state) {
  return {
    boards: state.boards,
    lists: state.lists,
    cards: state.cards
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
