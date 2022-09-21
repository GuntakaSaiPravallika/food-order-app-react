import Input from "../../UI/Input";
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        input={{
          id: props.id,
          type: "number",
          defaultValue: "0",
          min: "0",
          max: "5",
          step: "1",
        }}
      />
      <button type="button">+ Add</button>
    </form>
  );
};

export default MealItemForm;