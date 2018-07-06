import React, {Component} from 'react';

class Dashboard extends Component {
    constructor(){
        super()

        this.state = {
            search: ''
        }
    }
    render(){
        return (
            <div>
                <h1>Dashboard</h1>
                <input type="text" placeholder="search" value={this.state.search}/>
                
                <button>Search</button>
                <button>Reset</button>
            </div>
        )
    }
}

export default Dashboard;