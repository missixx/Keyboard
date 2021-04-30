import React from 'react'
import Statistic from './Statistic.js'


class StatisticList extends React.Component {

    constructor(props) {
        super(props)
        this.handleAdd = this.handleAdd.bind(this)
    }

    state = {
        logs: this.props.logs
    }

    handleAdd() {
        const newStatistic = (this.state.logs).slice()
        newStatistic.unshift({
            id: this.state.logs.length + 1,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
            symbols: this.props.valueLength,
            timer: '00:04:23',
            mystakes: 33,
            speed: 3
        })

        this.setState({
            logs: newStatistic
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.isEnd !== prevProps.isEnd) {
            this.handleAdd()
        }
    }


    render() {
        const list = this.state.logs.map(item => <Statistic key={item.id} log={item} />)
        return (
            <div>
                <div className='statistic'>
                    <div className='logContainer'>
                        {list}
                    </div>

                </div>
                <button className='test' onClick={this.handleAdd}>Добавить новый лог</button>
            </div>
        )
    }
}


export default StatisticList