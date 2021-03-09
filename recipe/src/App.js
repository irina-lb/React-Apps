import './App.css';
import { useEffect, useState } from 'react';
import Recipes from './components/Recipes';

const App = () => {

  const APP_ID = "0414a841";
  const APP_KEY = "1dcba59168d4d5c97d19507534983d3a";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('salad');

  useEffect(() => {
    getRecipes();
  }, [query]);


  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    // console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <div className="top">
        <h1 className="main_title">Your perfect recipe for today</h1>
      </div>
      <form onSubmit={getSearch} className="search_form">
        <input
          className="search_input"
          type="text"
          placeholder="Find yor recipe..."
          value={search}
          onChange={updateSearch} />
        <button
          className="search_button"
          type="submit"
        >Search</button>
      </form>
      <div className="total_recipe">
        {recipes.map(recipe => <Recipes
          title={recipe.recipe.label}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          key={recipe.recipe.label} />)}
      </div>
    </div>
  );
}

export default App;
