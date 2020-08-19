import {useState} from 'react';
import {randomTetro} from '../tetrominos';

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos: {x: 0, y: 0},
        tetro: randomTetro().shape,
        collided: false 
    });
    return [player];
}