import { Tldraw } from "@tldraw/tldraw";
import "./styles.css";

export default function App() {
  return (
    <div style={{ position: "fixed", inset: 0 }}>
      <Tldraw persistenceKey="demo" />
    </div>
  );
}
