import { useState } from 'react';
import {
  Button,
  Grid,
  OutlinedInput,
  Stack,
} from '@mui/material';

function ButtonUsage({ onSubmit }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      something: formData.get('something'),
    };
    console.log(data);
    onSubmit(data);
    setInputValue(''); // Clear input value after submission
  };

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <form noValidate onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <OutlinedInput
                  id="something"
                  type="text"
                  name="something"
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="Type something"
                  fullWidth
                />
                <Button disableElevation fullWidth size="large" type="submit" variant="contained" color="primary">
                  Add something
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  )
}

export default ButtonUsage;
