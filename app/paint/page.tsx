'use client';

import Navbar from '../ui/navbar';
import PaintApp from '../3d/paint/paint';
import styles from '@/styles/size.module.css';
import clsx from 'clsx';

// export the paint page to display the 3D application
export default function Paint() {
    return (
        <main>
            <Navbar className='absolute' />
            <div className={clsx(styles['canvas-container'], 'canvas-c')}>
                {/* render the application */}
                <PaintApp />
            </div>
        </main>
    );
}
