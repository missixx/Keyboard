import React from 'react'



class Timer extends React.Component {

    constructor(props) {
        super(props)
        this.tick = this.tick.bind(this)
    }

    state = {
        hours: 0,
        minutes: 0,
        seconds: 0,
        textLength: this.props.textLength
    }

    tick() {
       
        if (this.state.minutes === 60) {
            this.setState({
                hours: this.state.hours + 1,
                minutes: 0
            })
        } else {


            if (this.state.seconds === 59) {
                this.setState({
                    minutes: this.state.minutes + 1,
                    seconds: 0
                })
            } else {
                this.setState({
                    seconds: this.state.seconds + 1
                })
            }


        }
        this.props.getSeconds(this.state.hours, this.state.minutes, this.state.seconds)
    }

    // componentDidUnmount() {
    //     this.timerID = setInterval(this.tick, 1000)
    // }


    componentDidUpdate(prevProps) {
        if (this.props.isStart !== prevProps.isStart) {
            this.timerID = setInterval(this.tick, 1000)
         
        }

        if (this.props.textLength === 0) {
            clearInterval(this.timerID)
        }
       
    }


    // componentWillUnmount() {
    //     clearInterval(this.timerID)
    // }

    render() {

        return (
            <span>
                <span>{('0' + this.state.hours).substr(-2)} : </span>
                <span>{('0' + this.state.minutes).substr(-2)} : </span>
                <span>{('0' + this.state.seconds).substr(-2)}</span>
            </span>
        )
    }
}


export default Timer