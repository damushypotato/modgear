'use client';

import { useState } from 'react';
import Navbar from '../ui/navbar';
import ColourPicker from '../ui/paint/colourpicker';
import PaintApp from '../3d/paint/paint';
import styles from '@/styles/size.module.css';
import clsx from 'clsx';
import { ColourSelection } from '../lib/definitions';

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
