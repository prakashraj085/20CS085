const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 8008;


app.get('/numbers/primes', async (req, res) => {
  try {
    const response = await fetchData('http://20.244.56.144/numbers/primes');
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the data.' });
  }
});


app.get('/numbers/fibo', async (req, res) => {
  try {
    const response = await fetchData('http://20.244.56.144/numbers/fibo');
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the data.' });
  }
});


app.get('/numbers/odd', async (req, res) => {
  try {
    const response = await fetchData('http://20.244.56.144/numbers/odd');
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the data.' });
  }
});


app.get('/numbers/rand', async (req, res) => {
  try {
    const response = await fetchData('http://20.244.56.144/numbers/rand');
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the data.' });
  }
});

async function fetchData(url) {
  const response = await axios.get(url);
  return response.data;
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
