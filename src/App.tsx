import { Tldraw } from "@tldraw/tldraw";
import "./styles.css";
import {ChatBoxMain} from './ChatBox/ChatBoxMain';
export default function App() {
  return (
    <>
      <div style={{ position: "fixed", left: 0, inset: 0, width:"100%" }}>
        {/* presistenceKey keeps the user data stored in IndexedDB */}
        <Tldraw persistenceKey="demo"/>
        {/* <Tldraw persistenceKey="demo" shareZone={<CustomShareZone />}/> */}


        {/* ReadOnly */}
        {/* <Tldraw
          persistenceKey="demo"
          onMount={(editor) => {
            editor.updateInstanceState({ isReadonly: true })
          }}
        /> */}

        {/* canvas event */}
        {/* <Tldraw
            onMount={(editor) => {
              editor.on('event', (event) => handleEvent(event))
            }}
          /> */}

          {/* user presence */}
          {/* <Tldraw
          persistenceKey="user-presence-example"
          onMount={(editor) => {
            // For every connected peer you should put a TLInstancePresence record in the
            // store with their cursor position etc.

            const peerPresence = InstancePresenceRecordType.create({
              id: InstancePresenceRecordType.createId(editor.store.id),
              currentPageId: editor.currentPageId,
              userId: 'peer-1',
              userName: USER_NAME,
              cursor: { x: 0, y: 0, type: 'default', rotation: 0 },
              chatMessage: CURSOR_CHAT_MESSAGE,
            })

            editor.store.put([peerPresence])
          }}
        /> */}
      </div>

    {/* <div style={{ position: "fixed",right: 0, width:"20%" }}>
      <ChatBoxMain />
    </div> */}
  </>
  );
}
