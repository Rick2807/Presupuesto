import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css';

import { dateFormat } from "../helpers";

import SavingIcon from '../img/icono_ahorro.svg'
import HomeIcon from '../img/icono_casa.svg'
import FoodIcon from '../img/icono_comida.svg'
import ExpensesIcon from '../img/icono_gastos.svg'
import LeisureIcon from '../img/icono_ocio.svg'
import HealthIcon from '../img/icono_salud.svg'
import SubscriptionsIcon from '../img/icono_suscripciones.svg'

const Expense = ({e, setEdit, deleteItem}) => {

    const {name, category, amount, id, date} = e; 

    const dictionaryImages = { 
      
      savings: SavingIcon,
      food: FoodIcon,
      home: HomeIcon,
      expenses: ExpensesIcon,
      leisure: LeisureIcon,
      health: HealthIcon,
      subscriptions: SubscriptionsIcon,
    }

    const leadingActions = () => (
      <LeadingActions>
        <SwipeAction onClick={() => setEdit(e)}>
          Edit
        </SwipeAction>
      </LeadingActions>
    );
    
    const trailingActions = () => (
      <TrailingActions>
        <SwipeAction
          destructive={true}
          onClick={() => deleteItem(id)}
        >
          Delete
        </SwipeAction>
      </TrailingActions>
    );
  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
        >
        <div className="gasto sombra">
            <div className="contenido-gasto">
              <img src={dictionaryImages[category]} alt={`${category} image`} />
                <div className="descripcion-gasto">
                    <p className="categoria">{category}</p>
                    <p className="nombre-gasto">{name}</p>
                    <p className="fecha-gasto">
                      Date:  {' '}
                      <span>{dateFormat(date)}</span>
                    </p>
                </div>
            </div>

            <p className="cantidad-gasto"> ${amount}</p>
        </div>
          </SwipeableListItem>
    </SwipeableList>
  )
}

export default Expense