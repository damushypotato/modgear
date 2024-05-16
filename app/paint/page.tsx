import Navbar from '../ui/navbar';
import PaintApp from '../ui/paint/paint';
import styles from '@/styles/size.module.css';

export default function Paint() {
    return (
        <main>
            <Navbar />
            <div className={styles['canvas-container']}>
                <PaintApp />
            </div>
        </main>
    );
}
