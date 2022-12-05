import { useState } from 'react';
import styles from'./App.module.css';
import poweredImage from './assets/powered.png';
import leftArrowImage from './assets/leftarrow.png'
import { classification, calculateIMC, Classification } from './helpers/imc';
import {GridItem} from'./components/GridItem/GridItem'

const App = () => {
  const [heightField, setHeightField] = useState <number>(0);
  const [weightField, setWeightField] = useState <number>(0);
  const [toShow, setToShow] = useState<Classification | null>(null);

  const handleCalculateButton = () => {
    if(heightField && weightField){
      setToShow(calculateIMC(weightField,heightField));
    }else{
      alert('Digite todos os campos');
    }
  };

  const handleClearButton = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="" width={150}/>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC</h1>
          <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>

          <input 
          type="number" 
          placeholder='Digite a sua altura (em metros). Ex: 1.5'
          value={(heightField > 0) ? heightField : ''}
          onChange={e => setHeightField(e.target.valueAsNumber)}
          disabled={toShow ? true : false}
          />
          <input 
          type="number" 
          placeholder='Digite o seu peso (em kg). Ex: 85.5'
          value={(weightField > 0) ? weightField : ''}
          onChange={e => setWeightField(e.target.valueAsNumber)}
          disabled={toShow ? true : false}
          />

          <button onClick={handleCalculateButton} disabled={toShow ? true : false}>Calcular</button>


        </div>
        <div className={styles.rightSide}>
          {!toShow &&
            <div className={styles.grid}>
              {classification.map((item, key)=>(
                <GridItem key={key} item={item}/>
              ))}
            </div>
          }
          {toShow &&
            <div className={styles.rightBig}>
              <div className={styles.rightArrow}>
                <img src={leftArrowImage} alt="" width={25} onClick={handleClearButton}/>
              </div>
              <GridItem item={toShow}/>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App
