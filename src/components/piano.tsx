
 import React, { useEffect, useState } from 'react';

import * as Tone from 'tone';
import PianoSvg from '../static/piano.svg';
import PianoJs from '../static/piano.js';
//import { ToneKeyboardNote } from './note';



function noteUp (elem: HTMLElement, isSharp: boolean)  
{ 
	elem.style.background = isSharp ? '#777' : '';
}

function noteDown ( elem: HTMLElement, isSharp: boolean)  
{

	const note = elem.dataset.note;

	elem.style.background = isSharp ? 'black' : '#ccc';
	//synth.triggerAttackRelease([`${note}`], "16n");
	//event.stopPropagation();
}

export function Piano ()
{	


	//element.addEventListener("noteon", (e: CustomEvent) => noteon(e.detail));
	//element.addEventListener("noteoff", (e: CustomEvent) => noteoff(e.detail));
	//if (parent) {
		//parent.appendChild(element);
	
		const synth = new Tone.PolySynth(/* 3, */ Tone.Synth).toDestination();
	
		let html = '',
		initialized = false;

		const [attributes, innerHTML ] = useState(PianoSvg),
				data = ['C','D','E','F','G','A','B'];

		useEffect(()=> {

			for (let i = 0; i < 13; i++)
			{
				let key = document.getElementById(`key${[i]}`),
					inputDown = 'mouseover',
					inputUp = 'mouseout';

				key?.addEventListener(inputDown, (e)=> {
					if (key !== null)
						key.style.fill = '#ff0000'; 	
					synth.triggerAttackRelease("C", "16n");
					//e.stopPropagation();
				});

				key?.addEventListener(inputUp, ()=> {
					if (key !== null)
						key.style.fill = key.getAttribute('data') === 'white' ? '#ffffff' : '#000000';
				});

				// document.addEventListener('keydown', ()=> {
				// 	if (key !== null)
				// 		key.style.fill = '#ff0000';
				// });
				// document.addEventListener('keyup', ()=> {
				// 	if (key !== null)
				// 		key.style.fill = key.getAttribute('data') === 'white' ? '#ffffff' : '#000000';
				// });
			} 
			
		});


	return(

		/* React.createElement('svg', ...attributes, {dangerouslySetInnerHTML: {__html: innerHTML}}) */
		<div style={{margin: 'auto'}} id="container" dangerouslySetInnerHTML={PianoJs}></div>
		
	);
}
	




// render() {
// 	if (WebMidi.supported) {
// 		return html`
// 			<div id="container">
// 				<div id="light"></div>
// 				<label>MIDI IN:</label>
// 				<select @change=${this._connectMidi.bind(this)}>
// 					<option value="none">none</option>
// 					${WebMidi.inputs.map(
// 						(input) => html`
// 							<option value=${input.id}>${input.name}</option>
// 						`
// 					)}
// 				</select>
// 			</div>
// 		`;
// 	} else {
// 		return html``;
// 	}
// }




// import { html, LitElement, property, customElement } from "lit-element";
// import "./keyboard";
// //import { ToneKeyboard } from "./keyboard";
// import "./midi-in";



// export default class Piano extends React.Component {
// 	// @property({ type: Boolean })
// 	// polyphonic = false;


// 	// private _clamp(v: number, floor: number, ceil: number) 
// 	// {
// 	// 	return Math.max(Math.min(v, ceil), floor);
// 	// }

// 	// private _scale(v: number, inMin: number, inMax: number, outMin: number, outMax: number) 
// 	// {
// 	// 	return ((v - inMin) / (inMax - inMin)) * (outMax - outMin) + outMin;
// 	// }

// 	// private _resize() 
// 	// {
// 	// //	const width = document.querySelector("#container").clientWidth;
// 	// 	const octaves = this._clamp(Math.floor(/* width */10 / 100) - 1, 1, 8);
// 	// 	const rootNote = Math.ceil(this._scale(octaves, 1, 8, 5, 1));
// 	// 	// (this.shadowRoot.querySelector(
// 	// 	// 	"tone-keyboard"
// 	// 	// ) as ToneKeyboard).rootoctave = rootNote;
// 	// 	// (this.shadowRoot.querySelector(
// 	// 	// 	"tone-keyboard"
// 	// 	// ) as ToneKeyboard).octaves = octaves;
// 	// }

// 	render() {
// 		return (

// 			<div id="container">
// 				{/* <tone-midi-in> </tone-midi-in>
// 				<tone-keyboard ?polyphonic=${this.polyphonic}></tone-keyboard> */}
// 			</div>
// 		)
		
// 	}
// }







