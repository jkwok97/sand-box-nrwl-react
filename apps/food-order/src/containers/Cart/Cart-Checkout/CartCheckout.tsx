// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { UserDataDto } from 'apps/food-order/src/models';
import { FormEvent, useRef, useState } from 'react';
import classes from './CartCheckout.module.css';

interface CartCheckoutProps {
  onCancel: () => void;
  onConfirm: (userData: UserDataDto) => void;
}

const postalCodeRegex =
  /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;

const isEmpty = (value: string) => value.trim() === '';
const isNotValidPostalCode = (value: string) => {
  const match = postalCodeRegex.test(value);
  console.log(match);
  if (match) {
    return false;
  } else {
    return true;
  }
};

const CartCheckout = (props: CartCheckoutProps) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameInputRef = useRef<HTMLInputElement>(null);
  const streetInputRef = useRef<HTMLInputElement>(null);
  const postalInputRef = useRef<HTMLInputElement>(null);
  const cityInputRef = useRef<HTMLInputElement>(null);

  const confirmHandler = (event: FormEvent) => {
    event.preventDefault();

    const enteredName = nameInputRef.current?.value;
    const enteredStreet = streetInputRef.current?.value;
    const enteredPostal = postalInputRef.current?.value;
    const enteredCity = cityInputRef.current?.value;

    const enteredNameIsValid = enteredName ? !isEmpty(enteredName) : false;
    const enteredStreetIsValid = enteredStreet
      ? !isEmpty(enteredStreet)
      : false;
    const enteredPostalIsValid = enteredPostal
      ? !isNotValidPostalCode(enteredPostal)
      : false;
    const enteredCityIsValid = enteredCity ? !isEmpty(enteredCity) : false;

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postalCode: enteredPostalIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postal: enteredPostal,
      city: enteredCity,
    });
  };

  return (
    <form onSubmit={confirmHandler} className={classes.form}>
      <div
        className={`${classes.control} ${
          formInputsValidity.name ? '' : classes.invalid
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please Enter A Valid Name!</p>}
      </div>

      <div
        className={`${classes.control} ${
          formInputsValidity.street ? '' : classes.invalid
        }`}
      >
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && <p>Please Enter A Valid Street!</p>}
      </div>

      <div
        className={`${classes.control} ${
          formInputsValidity.postalCode ? '' : classes.invalid
        }`}
      >
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formInputsValidity.postalCode && (
          <p>Please Enter A Valid Postal Code!</p>
        )}
      </div>

      <div
        className={`${classes.control} ${
          formInputsValidity.city ? '' : classes.invalid
        }`}
      >
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && <p>Please Enter A Valid City!</p>}
      </div>

      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default CartCheckout;
