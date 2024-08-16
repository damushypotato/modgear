import paints from '@/public/data/paints.json';
import { Paint } from '@/app/types/definitions';

export async function getPaints() {
    return paints as Paint[];
}

export async function getPaint(id: string) {
    return paints.find(paint => paint.id === id) as Paint | null;
}
