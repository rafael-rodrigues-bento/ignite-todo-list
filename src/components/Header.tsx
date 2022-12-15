import styles from './Header.module.css';

import logoImg from '../assets/logoImg.svg';

export function Header() {
  return (
    <div className={styles.wrapper}>
      <img src={logoImg} alt="Logo do todo" />
    </div>
  )
}