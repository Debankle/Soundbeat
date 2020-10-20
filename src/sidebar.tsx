import * as React from 'react';
import style from './style/main.scss';

export default class Sidebar extends React.Component {
    label: string;
    constructor(props: any) {
        super(props);
        this.label = props.label;
    }

    render() {
        return (
            <div className={style.sidebar}>
                <p>Hello</p>
            </div>
        );
    }
}