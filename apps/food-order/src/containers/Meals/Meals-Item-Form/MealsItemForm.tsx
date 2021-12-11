import Input from 'apps/food-order/src/components/UI/Input/Input';
import { FormEvent, useRef, useState } from 'react';
import classes from './MealsItemForm.module.css';

export interface MealsItemFormProps {
  id: string;
  onAddToCard: (amount: number) => void;
}

const MealsItemForm = (props: MealsItemFormProps) => {
  const [isFormValid, setIsFormValid] = useState(true);

  const amountInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    let enteredAmountNumber;
    let enteredAmount;

    if (amountInputRef.current) {
      enteredAmount = amountInputRef.current?.value;
      enteredAmountNumber = +enteredAmount;
    } else {
      enteredAmountNumber = 0;
    }

    if (
      enteredAmount?.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setIsFormValid(false);
      return;
    }

    props.onAddToCard(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
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
      {!isFormValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealsItemForm;
