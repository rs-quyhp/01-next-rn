import { Button } from 'antd';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <Button type="primary">Add new</Button>
    </div>
  );
}
