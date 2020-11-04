import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {

    state = {
        characters: [],
    }

    removeCharacter = (index) => {
        const { characters } = this.state

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            })
        })
    }

    handleSubmit = (character) => {
        this.setState({
            characters: [...this.state.characters, character]
        })
    }

    componentDidMount() {

        //load some users from a public API
        const url = 'https://jsonplaceholder.typicode.com/users'

        fetch(url)
            .then((result) => result.json())
            .then((data) => data.map((user) => {
                return {
                    name: user.name,
                    job: `Works at ${user.company.name}`,
                }
            }))
            .then((characters) => {
                this.setState({
                    characters: characters
                })
            })
    }

    render() {
        const { characters } = this.state

        return (
            <div className="App">
                <div className="container">
                    <h1 className="text-center">React Example</h1>
                </div>
                <div className="container">
                    <Table friends={characters} removeCharacter={this.removeCharacter} />
                    <Form handleSubmit={this.handleSubmit} />
                </div>
            </div>
        )
    }
}

export default App