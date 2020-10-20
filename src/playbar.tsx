import * as React from 'react';
import style from './style/main.scss';

export default class Playbar extends React.Component {

    render() {
        return (
            <div className={style.playbar}>
                <h2>Playbar area</h2>
                <button>Play/Pause</button>
                <button>Previous</button>
                <button>Next</button>
            </div>
        )
    }
}