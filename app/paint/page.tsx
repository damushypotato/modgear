import Navbar from '../ui/navbar';
import PaintApp from '../3d/paint/paint';
import styles from '@/styles/size.module.css';
import clsx from 'clsx';

export default function Paint() {
    return (
        <main>
            <Navbar />
            <div className={clsx(styles['canvas-container'], 'canvas-c')}>
                <PaintApp />
            </div>
        </main>
    );
}
