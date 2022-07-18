import { OptionsManager } from './optionsManager';
import { SoundManager } from './soundManager';
import { UI } from './UI';


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