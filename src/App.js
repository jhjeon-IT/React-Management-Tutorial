import React,{Component} from 'react';
import Customer from './components/Customer';
import './App.css';

const customers=[
  {
  'id' : 1,
  'image' : 'https://placeimg.com/200/200/1',
  'name' : '홍길동',
  'birthday' : '96122',
  'gender' : '남자',
  'job' : '대학생'
},
{
'id' : 2,
'image' : 'https://placeimg.com/200/200/2',
'name' : '두번째',
'birthday' : '98022',
'gender' : '남자',
'job' : '프로그래머'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/200/200/3',
  'name' : '세번째',
  'birthday' : '98055',
  'gender' : '여자',
  'job' : '직딩'
  }
]

function App() {
  return (
    <div>
      {
        customers.map(c =>{
          return(
            <Customer 
              key={c.id} //React 반복문인 map은 key값이 반드시 들어가야한다. PK
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
            />
          );
        })
      }
    </div>
  );
}

export default App;
