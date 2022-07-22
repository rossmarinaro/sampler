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
        <div className="sound-bank">
           <div id="midi-options" className="options">
                <div id="midi-device" className="bordered options"><p>NO DEVICE</p></div>
                <div id="midi-device" className="bordered options"><p>SELECT MIDI DEVICE</p></div>
           </div>
           <div id="synth-options" className="options">
                <div id="partials">
                    <p>Partials</p>
                    <input id="partials-meter-level" className="bordered options" type="range" min="0" max="200"/>
                </div>
                <div id="frequency">
                    <p>frequency</p>
                    <input id="frequency-meter-level" className="bordered options "type="range" min="0" max="1000"/>
                </div>
 
           </div>
        </div>
    );
}