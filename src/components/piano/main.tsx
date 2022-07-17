import { OptionsManager } from './optionsManager';
import { SoundManager } from './soundManager';
import { UI } from './piano';


export function PIANO()
{
    return (
        <div className='bordered'>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <OptionsManager />
                <SoundManager />
            </div>
            <UI />
        </div>
    );
}