import {useState, useEffect} from 'react';
import {createStage} from '../gameHelpers';

export const useStage = (player, resetPlayer) => {
    const [stage, setStage] = useState(createStage());

    useEffect(() => {
        const updateStage = prevStage => {
            const newStage = prevStage.map(row => 
                row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell))
            )

            //Look into fixing this cause it seems to have a limit on how many "moves" you can do.
            player.tetro.forEach((row, y) => { 
                row.forEach((value, x) => {
                    if (value !== 0) {
                        newStage[y + player.pos.y][x + player.pos.x] = [
                            value,
                            `${player.collided ? 'merged' : 'clear'}`
                        ]
                    }
                })
            })

            if (player.collided){
                resetPlayer();
            }

            return newStage;

        }

        setStage(prev => updateStage(prev))

    }, [player, resetPlayer])

    return [stage, setStage];
}