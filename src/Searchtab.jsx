import React, { useState } from 'react'
import axios from 'axios'

function Searchtab() {
    let c;
    const [state,setState]=useState({});
    const textInput = React.createRef();
    function ok(){
        (async() => {
        const d = new Date(textInput.current.value);
        const month=["january","february","march","april","may","june","july","august","september","october","november","december"];
        const s=d.getDate()+'-'+month[d.getMonth()]+'-'+d.getFullYear();
        
        const u='https://jsonmock.hackerrank.com/api/stocks?date='+s;
        console.log(u);
        await axios({
            method: 'get',
            url: 'https://jsonmock.hackerrank.com/api/stocks?date='+s
          })
            .then(function (response) {
                setState(response.data.data[0]);
                // console.log(state);
        });
        console.log(d);
      })();
    }
  return (
    <div>
            <input ref={textInput} data-testid="app-input" type="date" name='Date' />
            <button data-testid="submit-button" onClick={ok}>Search</button>
            {Object.keys(state).length !== 0 ?
              <ul>
                 {console.log(state)} 
                <li>Open:{state.open}</li>
                <li>Close:{state.close}</li>
                <li>High:{state.high}</li>
                <li>Low:{state.low}</li>
              </ul>
              : null
            }
            
        
    </div>
  )
}

export default Searchtab