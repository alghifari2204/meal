class MealItem extends HTMLElement {
    set meal(meal) {
      this._meal = meal;
      this.render();
    }
  
    render() {
      this.innerHTML = `
      <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          :host {
            display: block;
            margin-bottom: 18px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            overflow: hidden;
          }
          #mealList {
    margin-top: 32px;
    width: 100%;
    padding: 16px;
  }
  
  #mealList > .placeholder {
    font-weight: lighter;
    color: rgba(0, 0, 0, 0.5);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  
  .meal {
    margin-bottom: 18px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    overflow: hidden;
  }
  
  img {
    width: 100%;
    margin-top: 20px;
  }
  
  .meal-info {
    padding: 24px;
    border-style: dashed;
  }
  
  .meal-info > h2 {
    font-weight: lighter;
  }
  
  .meal-info > p {
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
        </style>
        
        <img class="fan-art-meal" src="${this._meal.strMealThumb}" alt="Fan Art">
        <div class="meal-info">
          <h2>${this._meal.strMeal}</h2>
          <p>${this._meal.strInstructions}</p>
        </div>
      `;
    }
  }
  
  customElements.define("meal-item", MealItem);
  