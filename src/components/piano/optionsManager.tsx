import { useEffect } from "react";
import { MONOSYNTH } from "./soundManager";



export function OptionsManager()
{

    const getSliderVal = (e: any) =>{
        
		//update sounds
        e.preventDefault();

			MONOSYNTH.oscillator.partialCount = e.target.value;
    }

    useEffect(()=>{
     
        const partials = document.getElementById('partials');
        partials?.addEventListener('click', e => {
            
            e.preventDefault();

            const partialsMeter = document.getElementById('partials-meter');

            if (partialsMeter !== null)
                partials.removeChild(partialsMeter);
            else
            {
                let div = document.createElement('div');
                div.setAttribute('id', 'partials-meter');
                div.innerHTML = `<input id="partials-meter-level" type="range" min="0" max="200"/>`;
                partials.appendChild(div);    
                div.addEventListener('change', e => getSliderVal(e))               
            }
        });
    });

    return (
        <div style={{float: 'left', width: '30%'}}>
           <div id="midi-device" className="bordered midi-options"><p>NO DEVICE</p></div>
           <div id="synth-options" style={{display: 'flex'}}>
                <div id="partials" className="bordered midi-options"><p>Partials</p></div>
                <div id="octaves" className="bordered midi-options"><p>Octaves</p></div>
                <div id="detune" className="bordered midi-options"><p>Detune</p></div>
           </div>
        </div>
    );
}