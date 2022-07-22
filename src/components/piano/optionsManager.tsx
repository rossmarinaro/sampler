import { useEffect } from "react";
import { MONOSYNTH, POLYSYNTH } from './synths';



export function OptionsManager()
{

    const getSliderVal = (e: any, meter: string) =>{ 
        e.preventDefault();

        switch(meter)
        {
            case 'partials': POLYSYNTH.set({ oscillator : {partialCount: e.target.value} }); break;
            case 'frequency': POLYSYNTH.set({ detune: e.target.value }); break;
        }
    }

    useEffect(()=>{

        const partialsMeter = document.getElementById('partials-meter-level');
        partialsMeter?.addEventListener('change', e => getSliderVal(e, 'partials'));
    
        const frequencyMeter = document.getElementById('frequency-meter-level');
        frequencyMeter?.addEventListener('change', e => getSliderVal(e, 'frequency'));

    });

    return (
        <div style={{float: 'left', width: '30%'}}>
           <div id="midi-device" className="bordered midi-options"><p>NO DEVICE</p></div>
           <div id="synth-options" style={{display: 'flex'}}>
                <div id="partials" className="bordered midi-options">
                    <p>Partials</p>
                    <input id="partials-meter-level" type="range" min="0" max="200"/>
                </div>
                <div id="frequency" className="bordered midi-options">
                    <p>frequency</p>
                    <input id="frequency-meter-level" type="range" min="0" max="1000"/>
                </div>
 
           </div>
        </div>
    );
}