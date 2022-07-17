
import React, { useEffect, useState } from 'react';
import * as Tone from 'tone';

//import 'react-piano/dist/styles.css';


//react piano

const { Piano, KeyboardShortcuts, MidiNumbers } = require('react-piano'),
	   midiToNote = require('midi-note');

//midi 
	require('webmidi');


//-------------------------------- PIANO UI


export function UI ()   
{	
	let 
		initialized = false,
		octave = 1;
	const 
		firstNote = MidiNumbers.fromNote('c3'),
		lastNote = MidiNumbers.fromNote('f5'),
		keyboardShortcuts = KeyboardShortcuts.create({
		firstNote: firstNote,
		lastNote: lastNote,
		keyboardConfig: KeyboardShortcuts.HOME_ROW,
		}),
		synth = new Tone.PolySynth(/* 3,*/ Tone.MonoSynth /* Tone.Synth */).toDestination();

	
	useEffect(()=>{ 

		navigator.requestMIDIAccess().then((access: WebMidi.MIDIAccess) => {
			
			console.log('MIDI ACCESS: ', access);

			const debugEl = document.getElementById('debug');

			function connectToDevice(device: any)
			{
				console.log('connecting to device: ', device);
				assignMidiToKeys();
					
				device.onmidimessage = function(message: WebMidi.MIDIMessageEvent)
				{
					const [command, num, velocity]: any = message.data;
					if (debugEl !== null)
					{
						if (command === 248) //up
							return;

						//console.log(command, key, velocity);
						playNote(num, '16n');
					}
				}
			}
			function updateDeviceList(inputs: any)
			{
				inputs.map((e: any) => {
					const el = document.getElementById('midi-device');
					if (el !== null)
					{
						el.innerText = `${e.name} (${e.manufacturer})`;
						el.addEventListener('click', connectToDevice.bind(null, e));
					}
					return el;
				});
			}			
			updateDeviceList(Array.from(access.inputs.values()));

			access.onstatechange = function(e: any){
				updateDeviceList(Array.from(this.inputs.values()));
			}

			
		
		});

	});



//play note
  	const playNote = (message: number, duration: number | string) => { 
		const key = document.getElementById(`key${message}`); 
		key?.classList.add('.ReactPiano__KeyActive');
		key?.classList.remove('.ReactPiano__Key--natural');
		//console.log('midi num: ', message, 'to note: ', midiToNote(message));
		synth.triggerAttackRelease(`${midiToNote(message * octave)}`, duration);
	},

	assignMidiToKeys = () => {

		if (initialized)
			return;

		initialized = true;

		const pianoKeys = Array.from(document.getElementsByClassName('ReactPiano__Key'));

		//set data names for keys

		for (let i = 0; i < pianoKeys.length; i++)
			pianoKeys[i].setAttribute('id', `key${Number(i + 48)}`); 
		
	}

	return ( 
		<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh'}}>
			<div id="debug"></div>
			<Piano 
				id="piano" className='bordered'
				noteRange={{ first: firstNote, last: lastNote }}
				playNote={(midiNumber: number) => playNote(midiNumber, '16n')}
				stopNote={(midiNumber: number) => synth.releaseAll()}
				width={1000}/* window.innerWidth */
				keyboardShortcuts={keyboardShortcuts}
			/>
		</div>
	  );

}