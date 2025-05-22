const express = require('express')
const axios = require('axios')

const app = express();
const WINDOW_SIZE = 10



const VALID_IDS = ['p', 'f', 'e', 'r'];
const window = [];



const fetchNumber = async (type) => {
  try {
    if(type === 'p')
    {
            const response = await axios.get(`http://20.244.56.144/evaluation-service/primes`, {
      headers: {
        Authorization: 'Barer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ3ODk0OTM0LCJpYXQiOjE3NDc4OTQ2MzQsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjJlZDQ1YWQ2LTk0MGItNGYzMi05MGY3LWFkODQwYjliNTdjNiIsInN1YiI6IjIyMDAwMzE4NTljc2VoQGdtYWlsLmNvbSJ9LCJlbWFpbCI6IjIyMDAwMzE4NTljc2VoQGdtYWlsLmNvbSIsIm5hbWUiOiJhIHNhaSBzYW5rYXIiLCJyb2xsTm8iOiIyMjAwMDMxODU5IiwiYWNjZXNzQ29kZSI6ImJlVEpqSiIsImNsaWVudElEIjoiMmVkNDVhZDYtOTQwYi00ZjMyLTkwZjctYWQ4NDBiOWI1N2M2IiwiY2xpZW50U2VjcmV0IjoiWGdYU1RKQ1BlWm1xcnRSSCJ9.A_0_jCw6ykNAR4ysiTeUKWv8BgvuSTy01yhXggyzzyc' 
      },
      timeout: 500
    });
    return response.data.numbers || [];
    }
    else if(type === 'f')
    {
        const response = await axios.get(`http://20.244.56.144/evaluation-service/fibo`, {
      headers: {
        Authorization: 'Barer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ3ODk0OTM0LCJpYXQiOjE3NDc4OTQ2MzQsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjJlZDQ1YWQ2LTk0MGItNGYzMi05MGY3LWFkODQwYjliNTdjNiIsInN1YiI6IjIyMDAwMzE4NTljc2VoQGdtYWlsLmNvbSJ9LCJlbWFpbCI6IjIyMDAwMzE4NTljc2VoQGdtYWlsLmNvbSIsIm5hbWUiOiJhIHNhaSBzYW5rYXIiLCJyb2xsTm8iOiIyMjAwMDMxODU5IiwiYWNjZXNzQ29kZSI6ImJlVEpqSiIsImNsaWVudElEIjoiMmVkNDVhZDYtOTQwYi00ZjMyLTkwZjctYWQ4NDBiOWI1N2M2IiwiY2xpZW50U2VjcmV0IjoiWGdYU1RKQ1BlWm1xcnRSSCJ9.A_0_jCw6ykNAR4ysiTeUKWv8BgvuSTy01yhXggyzzyc'

      },
      timeout: 500
    });
    return response.data.numbers || [];
    }
    else if(type === 'e')
    {
        const response = await axios.get(`http://20.244.56.144/evaluation-service/even`, {
      headers: {
        Authorization: 'Barer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ3ODk0OTM0LCJpYXQiOjE3NDc4OTQ2MzQsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjJlZDQ1YWQ2LTk0MGItNGYzMi05MGY3LWFkODQwYjliNTdjNiIsInN1YiI6IjIyMDAwMzE4NTljc2VoQGdtYWlsLmNvbSJ9LCJlbWFpbCI6IjIyMDAwMzE4NTljc2VoQGdtYWlsLmNvbSIsIm5hbWUiOiJhIHNhaSBzYW5rYXIiLCJyb2xsTm8iOiIyMjAwMDMxODU5IiwiYWNjZXNzQ29kZSI6ImJlVEpqSiIsImNsaWVudElEIjoiMmVkNDVhZDYtOTQwYi00ZjMyLTkwZjctYWQ4NDBiOWI1N2M2IiwiY2xpZW50U2VjcmV0IjoiWGdYU1RKQ1BlWm1xcnRSSCJ9.A_0_jCw6ykNAR4ysiTeUKWv8BgvuSTy01yhXggyzzyc' 
      },
      timeout: 500
    });
    return response.data.numbers || [];
    }
    else if(type === 'r')
    {
        const response = await axios.get(`http://20.244.56.144/evaluation-service/rand`, {
      headers: {
        Authorization: 'Barer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ3ODk0OTM0LCJpYXQiOjE3NDc4OTQ2MzQsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjJlZDQ1YWQ2LTk0MGItNGYzMi05MGY3LWFkODQwYjliNTdjNiIsInN1YiI6IjIyMDAwMzE4NTljc2VoQGdtYWlsLmNvbSJ9LCJlbWFpbCI6IjIyMDAwMzE4NTljc2VoQGdtYWlsLmNvbSIsIm5hbWUiOiJhIHNhaSBzYW5rYXIiLCJyb2xsTm8iOiIyMjAwMDMxODU5IiwiYWNjZXNzQ29kZSI6ImJlVEpqSiIsImNsaWVudElEIjoiMmVkNDVhZDYtOTQwYi00ZjMyLTkwZjctYWQ4NDBiOWI1N2M2IiwiY2xpZW50U2VjcmV0IjoiWGdYU1RKQ1BlWm1xcnRSSCJ9.A_0_jCw6ykNAR4ysiTeUKWv8BgvuSTy01yhXggyzzyc' 
      },
      timeout: 500
    });
    return response.data.numbers || [];
    }
    
  } catch (error) {
    console.log('Fetch error:', error.message);
    return [];
  }
};



const updateWindow = (newNumbers) => {
  const prevWindow = [...window];

  for (const num of newNumbers) {
    if (!window.includes(num)) {
      if (window.length >= WINDOW_SIZE) {
        window.shift(); 
      }
      window.push(num); 
    }
  }
const avg = window.length > 0 ? (window.reduce((a, b) => a + b, 0) / window.length).toFixed(2) : "0.00";

  return { prevWindow, currWindow: [...window], avg: parseFloat(avg) };
};



app.get('/numbers/:numberid', async (req, res) => {
  const { numberid } = req.params;

  if (!VALID_IDS.includes(numberid)) {
    return res.status(400).json({ error: "Invalid number ID" });
  }

  const newNumbers = await fetchNumber(numberid);
  const { prevWindow, currWindow, avg } = updateWindow(newNumbers);

  return res.json({
    windowPrevState: prevWindow,
    windowCurrState: currWindow,
    numbers: newNumbers,
    avg,
  });
});



app.listen(9876, () => {
    console.log("PORT is running at 9876");
})