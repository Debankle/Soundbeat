import * as React from 'react';
import style from './style/main.scss';

type HeaderItemProps = {
    itemLabel: string;
    icon?: string | null;
}

class HeaderItem extends React.Component<HeaderItemProps, {}> {
    itemLabel: string;
    icon: string;

    constructor(props: { itemLabel: string, icon: string }) {
        super(props);
        this.itemLabel = props.itemLabel;
        this.icon = props.icon;
    }

    render() {
        return (
            <div className={style.headeritem}>
                <img src={this.icon} alt="Fun times"></img>
                <h4>{this.itemLabel}</h4>
            </div>
        )
    }
}

export default class Header extends React.Component {
    render() {
        return (
            <div className={style.header}>
                <HeaderItem itemLabel='poop' />
                <HeaderItem itemLabel='pee' />
                <HeaderItem itemLabel='i am very immature' />
            </div>
        )
    }
}