import React from 'react';
import Navbar from './components/Navbar';

import Result from './components/Result';
import SliderSelect from './components/SliderSelect';
import TenureSelect from './components/tenureSelect';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useState } from 'react';





function App() {
  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 5,
    Interest: 5
  })

  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="lg" sx={{ marginTop: 2 }} >
        <Grid container spacing={5} alignItems={'center'}>
          <Grid item xs={10} md={5}  >
            <SliderSelect data={data} setData={setData} />
            <TenureSelect data={data} setData={setData} />
          </Grid>
          <Grid item xs={10} md={5} alignItems={'center'} sx={{ marginLeft:15 }}>
            <Result data={data} />
          </Grid>

        </Grid>

      </Container>
    </div>
  );
}

export default App;
