'use client';

import { useState } from 'react';
import Navbar from '../ui/navbar';
import ColourPicker from '../ui/paint/colourpicker';
import PaintApp from '../ui/paint/paint';
import styles from '@/styles/size.module.css';
import { ColourSelection } from '../lib/definitions';

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
