import { useEffect, useState } from "react";

function App() {
  const [turnx, setTurnx] = useState(true)
  const [x, setX] = useState([])
  const [o, setO] = useState([])
  const [win, setWin] = useState()
  const [combination, setCombination] = useState([])
  const [px, setPx] = useState(0)
  const [po, setPo] = useState(0)

  useEffect (() => {
    if (x.includes(1) && x.includes(2) && x.includes(3)) {setWin(x);setPx(px+1);setCombination([1, 2, 3]);}
    else if (x.includes(4) && x.includes(5) && x.includes(6)) {setWin(x);setPx(px+1);setCombination([4, 5, 6]);}
    else if (x.includes(7) && x.includes(8) && x.includes(9)) {setWin(x);setPx(px+1);setCombination([7, 8, 9]);}
    else if (x.includes(1) && x.includes(4) && x.includes(7)) {setWin(x);setPx(px+1);setCombination([1, 4, 7]);}
    else if (x.includes(2) && x.includes(5) && x.includes(8)) {setWin(x);setPx(px+1);setCombination([2, 5, 8]);}
    else if (x.includes(3) && x.includes(6) && x.includes(9)) {setWin(x);setPx(px+1);setCombination([3, 6, 9]);}
    else if (x.includes(1) && x.includes(5) && x.includes(9)) {setWin(x);setPx(px+1);setCombination([1, 5, 9]);}
    else if (x.includes(3) && x.includes(5) && x.includes(7)) {setWin(x);setPx(px+1);setCombination([3, 5, 7]);}
    else if (o.includes(1) && o.includes(2) && o.includes(3)) {setWin(o);setPo(po+1);setCombination([1, 2, 3]);}
    else if (o.includes(4) && o.includes(5) && o.includes(6)) {setWin(o);setPo(po+1);setCombination([4, 5, 6]);}
    else if (o.includes(7) && o.includes(8) && o.includes(9)) {setWin(o);setPo(po+1);setCombination([7, 8, 9]);}
    else if (o.includes(1) && o.includes(4) && o.includes(7)) {setWin(o);setPo(po+1);setCombination([1, 4, 7]);}
    else if (o.includes(2) && o.includes(5) && o.includes(8)) {setWin(o);setPo(po+1);setCombination([2, 5, 8]);}
    else if (o.includes(3) && o.includes(6) && o.includes(9)) {setWin(o);setPo(po+1);setCombination([3, 6, 9]);}
    else if (o.includes(1) && o.includes(5) && o.includes(9)) {setWin(o);setPo(po+1);setCombination([1, 5, 9]);}
    else if (o.includes(3) && o.includes(5) && o.includes(7)) {setWin(o);setPo(po+1);setCombination([3, 5, 7]);}
    else {
      if (x.length > 0 || o.length > 0) {
        setTurnx(!turnx);
      }
    }
  }, [x, o]); // eslint-disable-line react-hooks/exhaustive-deps

  const Cell = (props) => {
    return (
      <div className={combination.includes(props.num) && win === x ? 'cell cx' : 
                      combination.includes(props.num) && win === o ? 'cell co' : 
                      x.includes(props.num) ? 'cell x' : 
                      o.includes(props.num) ? 'cell o' : 
                      'cell'}
           onClick={() => x.includes(props.num) || o.includes(props.num) || win ? [] : 
                          turnx ? setX([...x, props.num]) : 
                          setO([...o, props.num])}
      >
        {x.includes(props.num) ? 'X' : o.includes(props.num) ? 'O' : ''}
      </div>
    );
  }

  return (
    <div className="app">
      <div className="top">
        <div className="score">
          <p className={turnx ? 'x' : ''}>X = {px}</p>
          <p style={{margin: '0 15px'}}>|</p>
          <p className={!turnx ? 'o' : ''}>O = {po}</p>
        </div>
        <div className="restart">
          <p onClick={() => {setTurnx(true);setX([]);setO([]);setWin()}}>Restart</p>
        </div>
      </div>
      <div className="board">
        <Cell num={1} /><Cell num={2} /><Cell num={3} />
        <Cell num={4} /><Cell num={5} /><Cell num={6} />
        <Cell num={7} /><Cell num={8} /><Cell num={9} />
      </div>
    </div>
  );
}

export default App;
