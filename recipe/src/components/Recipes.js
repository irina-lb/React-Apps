import style from './recipes.module.css';

const Recipes = ({ title, calories, image, ingredients }) => {


    return (

        <div className={style.recipes}>
            <h2 className={style.title}>{title}</h2>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <img className={style.image} src={image} alt="" />

        </div>
    )
}

export default Recipes;