import { useEffect, useState } from 'react';
import { getBonus, getToken } from './request';
import BonusBlock from './components/BonusBlock';
import './assets/styles/common.scss';
import { transformDate } from './assets/helpers/helpers';

function App() {
    const [bonus, setBonus] = useState(null);
    const [date, setDate] = useState(null);
    const [burnBonus, setBurnBonus] = useState(null);
    useEffect(() => {
        getToken()
            .then((response) => {
                getBonus(response.data.accessToken) 
                    .then((res) => {
                        setBonus(res.data.data.currentQuantity)
                        setDate(transformDate(res.data.data.dateBurning))
                        setBurnBonus(res.data.data.forBurningQuantity) 
                    })
            })
    }, [])
  return (
    <div className="App">
        <BonusBlock bonus={bonus} burnBonus={burnBonus} date={date}/>
    </div>
  );
}

export default App;
