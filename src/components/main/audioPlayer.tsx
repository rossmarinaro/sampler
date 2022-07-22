

export function AudioPlayer()
{
    return(
        <form >
            <input className="form-input" id="play-project" type="submit" value="play" name="playButton"/>
            <input className="form-input" id="pause-input" type="submit" value="pause" name="pauseButton"/>
            <input className="form-input" id="stop-input" type="submit" value="stop" name="stopButton"/>
            <input className="form-input" type="submit" value="Open" name="openButton"/>
            <input className="form-input" type="submit" value="Save" name="saveButton"/>
        </form>
    );
}