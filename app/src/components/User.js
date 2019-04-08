import React from 'react';
import Rating from './Rating'
import './user.scss'

class User extends React.Component {
    state = {
        onHover: false,
        user: {}
    }
    setHover = () => {
        this.setState({
            onHover: true
        })
    }
    unsetHover = () => {
        this.setState({
            onHover: false
        })
    }
    updateState = () => {
        const {position, name, picture, description, negative, positive} = this.props

        this.setState(() => ({
            user: {position, name, picture, description, negative, positive}
        }))
    }
    componentDidMount = () => {
        this.updateState()
    }
    componentDidUpdate = (previousProps) => {
        if(this.props !== previousProps){
            this.updateState()
        }
    }
    render(){
        const {position, name, picture, description, negative, positive} = this.state.user
        const total = positive + negative
        return (
            <div 
                className={`user ${position % 2 !== 0 ? 'user--odd' : 'user--even'}`}
                onMouseOver={this.setHover}
                onMouseLeave={this.unsetHover}
                >
                <div className="user__profile">
                    <img src={picture} alt={name} className="user__avatar"/>
                    <div className="user__badge">{position}</div>
                </div>
                <div className="user__info">
                    <h2 className="user__name">{name}</h2>
                    <p className="user__description">{description}</p>
                </div>
                {this.state.onHover === true && 
                    <Rating positive={positive} negative={negative} total={total}/>
                }
            </div>
        );
    }
}

export default User;
