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
    if (cocktail[0]) {
      Object.keys(cocktail[0])
        .filter((el) => el.includes('strIngredient') && cocktail[0][`${el}`] !== null)
        .forEach((el, id) => {
          ingridients.push(cocktail[0][`${el}`]);
          measures.push(cocktail[0][`strMeasure${id + 1}`]);
        });
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
  const getIngridientItems = useMemo(() => addIngredientsToTable(), [cocktail]);
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
            {getIngridientItems}
          </tbody>
        </table>
        <p>{cocktail[0].strInstructions}</p>
      </div>
    </div>
  );
};
export default ModalContent;
