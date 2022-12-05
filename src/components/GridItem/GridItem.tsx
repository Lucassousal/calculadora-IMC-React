import { Classification } from "../../helpers/imc";
import styles from './GridItem.module.css';
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';


type Props = {
  item:Classification;
}

export const GridItem = ({item}:Props) => {
  return (
    <div className={styles.main} style={{backgroundColor: item.color}}>
      <div className={styles.gridIcon}>
        <img src={item.icon === 'up'? upImage : downImage} alt="" />
      </div>
      <div className={styles.gridTitle}>{item.title}</div>

      {item.youIMC &&
        <div className={styles.youImc}>Seu IMC é de {item.youIMC}kg/m²</div>
      }

      <div className={styles.gridInfo}>
        <>
          IMC está enter <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
        </>
      </div>
    </div>
  );
}