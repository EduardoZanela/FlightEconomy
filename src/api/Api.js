// CAN USE AXIOS

const BASE_API = 'http://localhost:3000/api';

export default {
  checkToken: async (token) => {
    const req = await fetch(`${BASE_API}/auth/refresh`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({token})
    });
    const json = await req.json();
    return json;
  },
  signIn: async (email, password) => {
    const req = await fetch(`${BASE_API}/auth/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    });
    const json = await req.json();
    return json;
  },
  signUp: async (payload) => {
    const req = await fetch(`${BASE_API}/auth/register`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    const json = await req.json();
    return json;
  },
  getMyFlights: async (token) => {
    return {flights: [
      {
        name: "Flight One"
      },
      {
        name: "Flight Two"
      }
    ]}
  }
}