import React from 'react'
import './ChatsIndex.css'

import ChatDialogueEntry from './ChatDialogueEntry.js'

class ChatsIndex extends React.Component {
    constructor(props) {
        super(props);

        this.chat_entries = [
            {
                id: "1",
                title: "Title",
                status_string: "in progress",
                header_message: "........",
                status_color: "#33cc33",
            },
            {
                id: "2",
                title: "Planned work for <...>",
                status_string: "assigned",
                header_message: "привет",
                status_color: "yelllow"
            }
        ]
        console.log(this.chat_entries);
    }

    render() {
        return (
            <div>
                {this.chat_entries.map((entry)=><ChatDialogueEntry 
                    id={entry.id}
                    title={entry.title} 
                    status_string={entry.status_string}
                    header_message={entry.header_message}
                    status_color={entry.status_color}
                />)}
            </div>
        );
    }
}

export default ChatsIndex;