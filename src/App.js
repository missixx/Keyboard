import React from 'react'
import './App.css';
import audio from './sounds/error.mp3'

import Key from './Key.js'
import Timer from './Timer.js'
import StatisticList from './StatisticList.js'


class App extends React.Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleCode = this.handleCode.bind(this)
    this.handleChangeTheme = this.handleChangeTheme.bind(this)
    this.getSeconds = this.getSeconds.bind(this)
    this.audio = new Audio(audio)
  }


  state = {
    text: this.props.text,
    count: 0,
    mystakeCount: 0,
    value: '',
    keys: this.props.keys,
    space: this.props.space,
    currentCode: 0,
    isStart: false,
    isEnd: false,
    keyboardTheme: ['black', 'white', 'pink'],
    keyboardThemeCount: 0,
    speed: 0,
  }


  handleChangeTheme() {
    if (this.state.keyboardThemeCount === 2) {
      this.setState({
        keyboardThemeCount: 0
      })

    } else {
      this.setState({
        keyboardThemeCount: this.state.keyboardThemeCount + 1
      })
    }

  }


  handleChange(event) {


    // Текст состоит из двух частей, event.currentTarget.value и secondPart, если вторая часть не равна нулю, то метод срабатывает,
    // это нужно для того чтобы в конце, когда весь текст написан(весь текст равен event.currentTarget.value а secondPart == 0 ), 
    // нельзя было производить манипуляции c event.currentTarget.value типа удаления и повторного написания текста.
    // итак мы вводим текст с каждым нажатием клавиши у имеющегося текста первый символ удаляется, вперёд него рендерится введённый символ
    // со своей стилизацией, count нужен чтобы знать какой символ сравнивать, можно и по другому вычислить последний введённый символ, 
    // isStart нужен для таймера.
    if (this.state.text.length > 0) {
      if (event.currentTarget.value[this.state.count] === this.state.text[0]) {
        const secondPart = this.state.text.slice(1, this.state.text.length)
        this.setState({
          text: secondPart,
          value: event.currentTarget.value,
          count: this.state.count + 1,
          isStart: true
        })
      } else {
        this.audio.play()
        this.setState({
          mystakeCount: this.state.mystakeCount + 1
        })
      }
    } else {
      this.setState({
        isEnd: true
      })
    }


  }

  handleCode(event) {
    this.setState({
      currentCode: event.code
    })

  }

  getSeconds(hours, minutes, seconds){
    const speed = this.state.value.length / ( seconds + (minutes * 60) + (hours * 3600))
    this.setState({
      speed: speed
    })
  }



  render() {
    const keys = this.state.keys.map(item => <Key key={item.id} valueEn={item.valueEn} valueRu={item.valueRu} code={item.code} currentCode={this.state.currentCode} keyboardTheme={this.state.keyboardTheme[this.state.keyboardThemeCount]}/>)
    const space = <Key key={this.state.space.id} valueEn={this.state.space.valueEn} valueRu={this.state.space.valueRu} code={this.state.space.code} currentCode={this.state.currentCode} keyboardTheme={this.state.keyboardTheme[this.state.keyboardThemeCount]}/>
    return (
      <div className='container'>
        {/* <StatisticList logs={this.props.logs} valueLength={this.state.value.length} isEnd={this.state.isEnd}/> */}
        <div className='text'>
          <div><span className='greenText'>{this.state.value}</span>{this.state.text}</div>
          <textarea className='textarea' type='text' value={this.state.value} onChange={this.handleChange} onKeyPress={this.handleCode}></textarea>
          <div>Количество ошибок: {this.state.mystakeCount} </div>
          <div>Таймер: <Timer isStart={this.state.isStart} textLength={this.state.text.length} getSeconds={this.getSeconds}/> </div>
        </div>
        <div className='keys'>{keys}</div>
        <div className='space'>{space}</div>
        <button onClick={this.handleChangeTheme}>Сменить тему</button>
        <div className='' >Скорость печати примерно: { Math.round(this.state.speed)} сим/сек ({Math.round(this.state.speed * 60)} сим/мин)</div>
      </div>
    )
  }
}

export default App;
