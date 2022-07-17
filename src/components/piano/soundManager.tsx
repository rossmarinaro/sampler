

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