import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

const express = require('express')
const app = express()
const port = process.env.PORT || 4000;

app.get('/', (_req: any, res: { send: (arg0: string) => void; }) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

export default App;

