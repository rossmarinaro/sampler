import * as Tone from 'tone';

export const MONOSYNTH = new Tone.MonoSynth({
    filterEnvelope: {octaves: 54, sustain: 0.2, baseFrequency: 900}, 
    oscillator : {type: 'square', partialCount: 25}, 
    envelope: {attack: 0.1}, 
    detune: 10
}).toDestination();

export function SoundManager()
{
    return (
        <div style={{display: 'flex', justifyContent: 'space-between', width: '30%'}}>
           <div className="bordered sound-bank-item"><p>MONO</p></div>
           <div className="bordered sound-bank-item"><p>FM</p></div>
           <div className="bordered sound-bank-item"><p>AM</p></div>
        </div>
    );
}