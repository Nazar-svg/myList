import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '../UI/Input/Input';

const useStyles = makeStyles({
  root: {
    marginTop: 25,
    display: 'flex',
    justifyContent: 'space-between',
  },
  Input: {
    height: 29,
    width: 300,
    marginTop: 5,
    marginLeft: 30,
    minWidth: 150,
    fontSize: 20,
    cursor: 'pointer',
    color: 'green',
  },
  btn: {
    marginTop: 5,
    marginRight: 25,
  },
});

export default function AdditemPanel(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    label: '',
  });
  const handleChange = (event) => {
    setState({
      label: event.target.value,
    });
    console.log('ffdga', state.label);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (!state.label == '') {
      props.addItemHandler(state.label);
    }
    setState({
      label: '',
    });
  };
  return (
    <form className={classes.root} onSubmit={onSubmit}>
      <Input
        type="text"
        value={state.label}
        className={classes.Input}
        onChange={(event) => handleChange(event)}
      />
      <Button
        onClick={onSubmit}
        variant="contained"
        color="primary"
        className={classes.btn}
      >
        Додати
      </Button>
    </form>
  );
}
