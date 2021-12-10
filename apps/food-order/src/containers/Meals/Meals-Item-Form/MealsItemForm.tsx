import Input from 'apps/food-order/src/components/UI/Input/Input';
import classes from './MealsItemForm.module.css';

export interface MealsItemFormProps {
    id: string;
}

const MealsItemForm = (props: MealsItemFormProps) => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: `amount_${props.id}`,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealsItemForm;
