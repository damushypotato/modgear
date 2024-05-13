import Navbar from '../ui/navbar';
import TunerApp from '../ui/tuner/tuner';
import styles from '@/styles/size.module.css';

export default function Tuner() {
    return (
        <main>
            <Navbar />
            <div className={styles['canvas-container']}>
                <TunerApp />
            </div>
        </main>
    );
}
