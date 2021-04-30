import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const logs = [
  {
    id: 2,
    date: 'дата',
    time: 'время',
    symbols: 267,
    timer: '01:02:03',
    mystakes: 3,
    speed: 23
  },

  {
    id: 1,
    date: 'дата',
    time: 'время',
    symbols: 234,
    timer: '01:02:03',
    mystakes: 4,
    speed: 45
  }
]

const text = 'На дворе играла кошка с котятами. Вдруг с вышины бросился огромный орел. Орел схватил котенка. Мать кошка быстро вцепилась в орла. Орел бросил котенка и стал бороться с кошкой. Он рвал когтями тело кошки и выклевал ей один глаз. Кошка храбро боролась с орлом. Она перекусила ему крыло. Потом кошка сделала ловкий прыжок и перекусила орлу горло. Так кошка спасла своего котенка.'
// const text = 'There are many big and small libraries everywhere in our country. They have millions of books in different languages. You can find there the oldest and the newest books.Every school has a library. Pupils come to the library to take books on different subjects.The school library where Oleg studies is good. It is a large clean room. There are four big windows in it. The walls are light blue. There are a lot of shelves full of books. You can find books on literature, physics, history, chemistry, geography, biology and other subjects. There are books in English, too.On the walls you can see pictures of some great writers and poets.On the table near the window you can always see beautiful spring and autumn flowers.Oleg likes to go to the library. He can always find there something new, something he needs.'
// const text = 'йцукен'

const keys = [
  {
    id: 1,
    code: 'KeyQ',
    valueEn: 'Q',
    valueRu: 'Й'
  },
  {
    id: 2,
    code: 'KeyW',
    valueEn: 'W',
    valueRu: 'Ц'
  },
  {
    id: 3,
    code: 'KeyE',
    valueEn: 'E',
    valueRu: 'У'
  },
  {
    id: 4,
    code: 'KeyR',
    valueEn: 'R',
    valueRu: 'К'
  },
  {
    id: 5,
    code: 'KeyT',
    valueEn: 'T',
    valueRu: 'Е'
  },
  {
    id: 6,
    code: 'KeyY',
    valueEn: 'Y',
    valueRu: 'Н'
  },
  {
    id: 7,
    code: 'KeyU',
    valueEn: 'U',
    valueRu: 'Г'
  },
  {
    id: 8,
    code: 'KeyI',
    valueEn: 'I',
    valueRu: 'Ш'
  },
  {
    id: 9,
    code: 'KeyO',
    valueEn: 'O',
    valueRu: 'Щ'
  },
  {
    id: 10,
    code: 'KeyP',
    valueEn: 'P',
    valueRu: 'З'
  },
  {
    id: 11,
    code: 'BracketLeft',
    valueEn: '{',
    valueRu: 'Х'
  },
  {
    id: 12,
    code: 'BracketRight',
    valueEn: '}',
    valueRu: 'Ъ'
  },
  {
    id: 13,
    code: 'KeyA',
    valueEn: 'A',
    valueRu: 'Ф'
  },
  {
    id: 14,
    code: 'KeyS',
    valueEn: 'S',
    valueRu: 'Ы'
  },
  {
    id: 15,
    code: 'KeyD',
    valueEn: 'D',
    valueRu: 'В'
  },
  {
    id: 16,
    code: 'KeyF',
    valueEn: 'F',
    valueRu: 'А'
  },
  {
    id: 17,
    code: 'KeyG',
    valueEn: 'G',
    valueRu: 'П'
  },
  {
    id: 18,
    code: 'KeyH',
    valueEn: 'H',
    valueRu: 'Р'
  },
  {
    id: 19,
    code: 'KeyJ',
    valueEn: 'J',
    valueRu: 'О'
  },
  {
    id: 20,
    code: 'KeyK',
    valueEn: 'K',
    valueRu: 'Л'
  },
  {
    id: 21,
    code: 'KeyL',
    valueEn: 'L',
    valueRu: 'Д'
  },
  {
    id: 22,
    code: 'Semicolon',
    valueEn: ':',
    valueRu: 'Ж'
  },
  {
    id: 23,
    code: 'Quote',
    valueEn: '"',
    valueRu: 'Э'
  },
  {
    id: 24,
    code: 'KeyZ',
    valueEn: 'Z',
    valueRu: 'Я'
  },
  {
    id: 25,
    code: 'KeyX',
    valueEn: 'X',
    valueRu: 'Ч'
  },
  {
    id: 26,
    code: 'KeyC',
    valueEn: 'C',
    valueRu: 'С'
  },
  {
    id: 27,
    code: 'KeyV',
    valueEn: 'V',
    valueRu: 'М'
  },
  {
    id: 28,
    code: 'KeyB',
    valueEn: 'B',
    valueRu: 'И'
  },
  {
    id: 29,
    code: 'KeyN',
    valueEn: 'N',
    valueRu: 'Т'
  },
  {
    id: 30,
    code: 'KeyM',
    valueEn: 'M',
    valueRu: 'Ь'
  },
  {
    id: 31,
    code: 'Comma',
    valueEn: '<',
    valueRu: 'Б'
  },
  {
    id: 32,
    code: 'Period',
    valueEn: '>',
    valueRu: 'Ю'
  },
  {
    id: 33,
    code: 'Slash',
    valueEn: '?',
    valueRu: '.'
  },



]

const space = 
  {
    id: 34,
    code: 'Space',
    valueEn: '',
    valueRu: ''
  }


ReactDOM.render(
  <React.StrictMode>
    <App text={text} keys={keys} space={space} logs={logs}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
