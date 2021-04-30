import React from 'react'


class Statistic extends React.Component {

    state = {
        // date: new Date().toLocaleDateString(),
        // time: new Date().toLocaleTimeString(),
        log: this.props.log
    }

    render() {
        return (
            <div className='log'>
                <div>{this.props.log.date} {this.props.log.time}</div>
                <div>Колличество символов: {this.props.log.symbols}</div>
                <div>Затраченное время: {this.props.log.timer}</div>
                <div>Ошибок: {this.props.log.mystakes}</div>
                <div>слов в минуту: {this.props.log.speed}</div>
            </div>
        )
    }
}



export default Statistic