import Data from '../assets/variants.json';

const allCombinations = Data.validCombinations
.map(vCItem => {
  return {kragenweite: vCItem.optionSet.Kragenweite, manschettenart: vCItem.optionSet.Manschettenart, armellange: vCItem.optionSet.Ärmellänge, basket: false};
});

console.log('Matrica allCombinations', allCombinations);

const initialState = {
   selectedKragenweite: '',
   selectedArmellange: '',
   selectedManschettenart: '',
   Basket: false,
   avaliableKragenweite: ['38', '39', '41', '42', '43'],
   avaliableArmellange: ['84', '86', '89', '91', '94'],
   avaliableManschettenart: ['Knopfmanschette', 'Umschlagmanschette'],
   allCombinations,
   Data,
}

 const avaliableOptions = (imeOdabira, indexOdabira, state) => {

    if(imeOdabira === "Kragenweite"){

        const combinations = state.allCombinations
        .filter(element => element.kragenweite === indexOdabira)
        .map(element => element.armellange);

        if (state.selectedArmellange !== ''){
            const isGrey = combinations.some(element => element === state.selectedArmellange);
            //postoji li element koji je siv, koji nije u combinations
            if(!isGrey){
                state.selectedArmellange = '';
                state.selectedManschettenart = '';
            }
        }

        return combinations;

    } else if (imeOdabira === "Ärmellänge"){

        const combinations =  state.allCombinations
        .filter(element => element.armellange === indexOdabira)
        .map(element => element.kragenweite);

        console.log('combinations ', combinations);

        if(state.selectedKragenweite !== ''){
            const isGrey = combinations.some(element => element === state.selectedKragenweite);

            if(!isGrey){
                state.selectedKragenweite = '';
                state.selectedManschettenart = '';
            }
        }

        return combinations;

  } else if (imeOdabira === "Manschettenart"){

          const combinations =  state.allCombinations
          .filter(element => element.manschettenart === indexOdabira)
          .map(element => element.kragenweite);

        if(state.selectedKragenweite !== ''){
          const isGrey = combinations.some(element => element === state.selectedKragenweite);

          if(!isGrey){
            state.selectedKragenweite = '';
            state.selectedArmellange = '';
          }
        }

        return combinations;
    }
}

const  manschettenartSelectOptions = (imeOdabira, indexOdabira, state) => {

    if(imeOdabira === "Kragenweite"){

        const combinations =  state.allCombinations
        .filter(element => element.kragenweite === indexOdabira)
        .map(element => {
          return element.manschettenart;
        });
        return combinations;

    } else if (imeOdabira === "Ärmellänge"){

          if(state.selectedKragenweite !== ''){
              const combinations =  state.allCombinations
              .filter(element => element.kragenweite === state.selectedKragenweite && element.armellange === indexOdabira)
              .map(element => {
                return element.manschettenart;
              });
              return combinations;
          }
          else {
              const combinations = state.allCombinations
              .filter(element => element.armellange === indexOdabira)
              .map(element => {
                return element.manschettenart;
              });
              return combinations;
          }
    }
}

const armelangeSelectedOption = (imeOdabira, indexOdabira, state) => {
    const combinations = state.allCombinations
    .filter(element => element.manschettenart === indexOdabira)
    .map(element => element.armellange);
    return combinations;
}

const selectedBasket = state => {
    if(state.selectedKragenweite && state.selectedArmellange && state.selectedManschettenart !== ''){
          const combinations = state.allCombinations
          .filter(element => element.kragenweite === state.selectedKragenweite && element.armellange === state.selectedArmellange && element.manschettenart === state.selectedManschettenart)
          .map(element => {
            if(!element.basket)
              element.basket = true;
            return element.basket;
          });
          return combinations;
    } else {
          return false;
    }
  }

const rootReducer = (state = initialState , action) => {
  switch(action.label) {
    // case 'Kragenweite':
    //   return{
    //     ...state,
    //     [action.value.fieldToSelect]: action.value === state[action.value.fieldToSelect] ? '' : action.value.selectedValue
    //   }
    case "Kragenweite":
      return{
        ...state,
        selectedKragenweite: action.value === state.selectedKragenweite ? '' : action.value,
        avaliableArmellange: avaliableOptions(action.label, action.value, state),
        avaliableManschettenart: manschettenartSelectOptions (action.label, action.value, state),
        Basket: state.allCombinations
          .filter(element => element.kragenweite === action.value && element.armellange === state.selectedArmellange && element.manschettenart === state.selectedManschettenart)
          .map(element => element.basket),
      };
    case "Ärmellänge":
      return{
        ...state,
        selectedArmellange: action.value === state.selectedArmellange ? '' : action.value,
        avaliableKragenweite: avaliableOptions(action.label, action.value, state),
        avaliableManschettenart: manschettenartSelectOptions (action.label, action.value, state),
        Basket: state.allCombinations
          .filter(element => element.kragenweite === state.selectedKragenweite && element.armellange === action.value && element.manschettenart === state.selectedManschettenart)
          .map(element => element.basket),
      };
    case "Manschettenart":
      return{
        ...state,
        selectedManschettenart: action.value === state.selectedManschettenart ? '' : action.value,
        avaliableKragenweite: avaliableOptions(action.label, action.value, state),
        avaliableArmellange: armelangeSelectedOption(action.label, action.value, state),
        Basket: state.allCombinations
          .filter(element => element.kragenweite === state.selectedKragenweite && element.armellange === state.selectedArmellange && element.manschettenart === action.value)
          .map(element => element.basket),
      };
    case "Basket":
      return{
        ...state,
        Basket: selectedBasket(state),

      };
    default:
      return state;
    }
};

export default rootReducer;
