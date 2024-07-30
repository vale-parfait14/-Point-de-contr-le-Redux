import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Filter from './Filter';
import './App.css';

const App = () => (
  <Provider store={store}>
    <div className="app-container">
      <h1 className="app-header">ToDo Application</h1>
      <AddTodo />
      <Filter />
      <TodoList />
    </div>
  </Provider>
);

export default App;



//////////script perso


const colors = [
  '#FFFFFF', '#000000', '#FF0000', '#00FF00', '#0000FF',
  '#FFFF00', '#00FFFF', '#FF00FF', '#D3D3D3', '#A9A9A9',
  '#FFA500', '#FFC0CB', '#800080', '#40E0D0', '#00FF00',
  '#4B0082', '#F5F5DC', '#800000', '#000080', '#008080',
  '#808000', '#C0C0C0', '#D2691E', '#FF7F50', '#FFD700',
  '#FA8072', '#DDA0DD', '#F0E68C', '#90EE90', '#708090',
  '#8B0000', '#006400', '#00008B', '#FF8C00', '#8B008B',
  '#D3D3D3', '#ADD8E6', '#FFB6C1', '#483D8B', '#6A5ACD'
];



// création de la fonction qui change les couleur dans une composente donnée

function ChangeColors() {
    const change = Math.floor(Math.random() * colors.length);
    return colors[change]
}

function Affiche() {
  document.body.style.backgroundColor = ChangeColors();
  

}

setInterval(Affiche,3000);

