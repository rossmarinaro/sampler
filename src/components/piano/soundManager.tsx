import { useEffect } from 'react';
import * as Tone from 'tone';

import { MONOSYNTH, POLYSYNTH } from './synths';

export function SoundManager()
{
    const swapSound = async (_sound: any) => { console.log(_sound)

        const check = async ()=>{

            switch (_sound)
            {
                case 'sound-bank-square': 
                    return 'square';
                case 'sound-bank-saw': 
                    return 'sawtooth';
                case 'sound-bank-sine': 
                    return 'sine';
            }
        }
        const sound: any = await check();
        POLYSYNTH.set({oscillator: { type: sound}});
    };

    useEffect(()=>{

        let sounds = Array.from(document.getElementsByClassName('sound-bank-item'));

        sounds.forEach(i => i.addEventListener('click', e => swapSound(i.getAttribute('id'))));

    });


    return (
        <div className="sound-bank" style={{display: 'flex', justifyContent: 'space-between', width: '30%'}}>
           <div id="sound-bank-square" className="bordered sound-bank-item"><p>Square</p></div>
           <div id="sound-bank-saw" className="bordered sound-bank-item"><p>Saw</p></div>
           <div id="sound-bank-sine" className="bordered sound-bank-item"><p>Sine</p></div>
        </div>
    );
}