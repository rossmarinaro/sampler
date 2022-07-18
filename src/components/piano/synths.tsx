import * as Tone from 'tone';


export const MONOSYNTH = new Tone.MonoSynth({
    filterEnvelope: {octaves: 54, sustain: 0.2, baseFrequency: 900}, 
    oscillator : {type: 'square', partialCount: 25}, 
    envelope: {attack: 0.1}, 
    detune: 10
}).toDestination();

export const POLYSYNTH = new Tone.PolySynth().toDestination();

POLYSYNTH.set({ 
    oscillator : {type: 'square'}, 
    envelope: {attack: 0.1}, 
})