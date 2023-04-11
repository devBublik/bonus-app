import { useEffect, useState } from 'react';
import { getBonus, getToken } from './request';
import BonusBlock from './components/BonusBlock';
import './assets/styles/common.scss';
import { transformDate } from './assets/helpers/helpers';

function App() {
    const [token, setToken] = useState(null);
    const [bonus, setBonus] = useState(null);
    const [date, setDate] = useState(null);
    const [burnBonus, setBurnBonus] = useState(null);
    useEffect(() => {
        getToken()
            .then((res) => {
                setToken(res.data.accessToken)
            })
    }, [])
    useEffect(() => {
        getBonus(token).then((res) => {
            setBonus(res.data.data.currentQuantity)
            setDate(transformDate(res.data.data.dateBurning))
            setBurnBonus(res.data.data.forBurningQuantity) 
        })
    }, [token])
  return (
    <div className="App">
        <BonusBlock bonus={bonus} burnBonus={burnBonus} date={date}/>
    </div>
  );
}

export default App;
