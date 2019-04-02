import React, { Component } from 'react';

export default class bQ extends Component {

    //"requires": "name, requirement, objective (both task and target), details"

    state = {
        card: {
            questName: '',
            questRequirement: {
                requirement: '',
                value: ''
            },
            questTask: '',
            questTarget: '',
            questDetails: ''
        },
        key: ''
    }

    nameInProgress = (e) => {
        this.setState({
            card: {
                questName: e.target.value,
                questRequirement: this.state.card.questRequirement,
                questTask: this.state.card.questTask,
                questTarget: this.state.card.questTarget,
                questDetails: this.state.questDetails,
            }
        })
        console.log(this.state.card)
    }

    requirementsInProgress = (e) => {
        this.setState({
            card: {
                questName: this.state.card.nameInProgress,
                questRequirement: e.target.value,
                questTask: this.state.card.questTask,
                questTarget: this.state.card.questTarget,
                questDetails: this.state.questDetails,
            }
        })
    }

    requirementPrimer = (e) => {
        this.setState({
            key: e.getAttribute('value')
        })
        console.log(this.state.key)
    }

    requirementValue = () => {
        if (this.state.key === 'location' || 'item card' || 'trait card' || 'structure' || 'level') {
            return (
                <span><input onChange={this.requirementsInProgress} value={this.state.card.questRequirement.value} /></span>
            )
        } else {
            return
        }
    }

    // "location"
    // "item card"
    // "trait card"
    // "structure"
    // "level"

    myFunction = () => {
        document.getElementById("myDropdown").classList.toggle("show");
    };


    render() {
        return (
            <div>
                <h1>Post a Quest:</h1>
                <form>
                    <span>Quest Name<input onChange={this.nameInProgress} size='80' type='text' value={this.state.card.questName} /></span>

                    <span>Requirements<div className="dropdown">
                        <button onClick={this.myFunction} className="dropbtn">Dropdown</button>
                        <div id="myDropdown" className="dropdown-content">
                            <li className="dropdown-item" onClick={this.requirementPrimer} type='text' value='location'>Location</li>
                            <li className="dropdown-item" onClick={this.requirementPrimer} value='item card'>Item Card</li>
                            <li className="dropdown-item" onClick={this.requirementPrimer} value='trait card'>Trait Card</li>
                            <li className="dropdown-item" onClick={this.requirementPrimer} value='structure'>Structure</li>
                            <li className="dropdown-item" onClick={this.requirementPrimer} value='level'>Level</li>

                        </div>
                    </div></span>
                </form>
            </div>
        )
    }
}