import { OptionsManager } from './optionsManager';
import { SoundManager } from './soundManager';
import { KEYBOARD } from './Keyboard';


export function PIANO()
{
    return (
        <div className='bordered' >
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <OptionsManager />
                <SoundManager />     
            </div>
            <KEYBOARD />
        </div>
    );
}