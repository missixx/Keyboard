import React from 'react'


class Key extends React.Component {



    state = {
        valueEn: this.props.valueEn,
        valueRu: this.props.valueRu,
        currentCode: 0,
        code: this.props.code,
        isPressed: false,
        keyboardTheme: this.props.keyboardTheme
    }

    componentDidMount() {
        this.setState({
            currentCode: this.props.currentCode,
        })
    }

    componentDidUpdate(PrevProps) {
        if (this.state.currentCode !== PrevProps.currentCode || this.props.keyboardTheme !== PrevProps.keyboardTheme) {
            this.setState({
                currentCode: this.props.currentCode,
                isPressed: !this.state.isPressed,
                keyboardTheme: this.props.keyboardTheme
            })
        }

    }

 

    render() {
        return (
            <div className={this.state.keyboardTheme} style={this.state.currentCode === this.state.code ? { backgroundColor: 'green' } : {}} >
                <span className='valueEn'>{this.state.valueEn}</span>
                <span className='valueRu'>{this.state.valueRu}</span>
            </div>

        )
    }
}


export default Key