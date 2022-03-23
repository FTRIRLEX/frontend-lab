import React, { useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { useSelector } from 'react-redux';
import classes from './ModalContent.module.css';
import Loader from '../Loader/Loader';

const ModalContent = () => {
  const cocktail = useSelector((state) => state.cocktail.cocktail);
  const loading = useSelector((state) => state.cocktail.loading);
  const ingridients = [];
  const measures = [];
  const result = [];
  const getIngrigients = () => {
    for (let i = 1; i < 16; i++) {
      if (cocktail[0]) {
        if (cocktail[0][`strIngredient${i}`] != null && cocktail[0][`strIngredient${i}`].length) { ingridients.push(cocktail[0][`strIngredient${i}`]); }
        if (cocktail[0][`strMeasure${i}`] != null) { measures.push(cocktail[0][`strMeasure${i}`]); }
      } else break;
    }
  };
  const addIngredientsToTable = () => {
    getIngrigients();
    ingridients.map((el, id) => result.push(
      <tr key={id}>
        <td>{id + 1}</td>
        <td>{el}</td>
        <td>{measures[id]}</td>
      </tr>,
    ));
    return result;
  };
  const ingridientsTR = useMemo(() => addIngredientsToTable(), [cocktail]);
  if (loading) {
    return <Loader className={classes.loader} />;
  }
  return (
    <div className={classes.randomCocktail}>
      <div className={classes.cocktailHeader}>
        <p className={classes.cocktailName}>{cocktail[0].strDrink}</p>
        <FontAwesomeIcon
          icon={faStar}
        // size="lg"
          className={classes.cocktailLiked}
        />
      </div>

      <img
        className={classes.cocktailImg}
        alt="Cocktail"
        src={cocktail[0].strDrinkThumb}
      />

      <div className={classes.cocktailBody}>
        <p
          style={{
            fontSize: '22px',
          }}
        >
          Recipe
        </p>

        <table cellPadding="10">
          <tbody>
            <tr>
              <td />
              <td>Ingredient</td>
              <td>Qnty</td>
              <td />
            </tr>
            {ingridientsTR}
          </tbody>
        </table>
        <p>{cocktail[0].strInstructions}</p>
      </div>
    </div>
  );
};
export default ModalContent;
