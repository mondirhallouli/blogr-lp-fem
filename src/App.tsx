import Editor from "./components/Editor";
import Header from "./components/Header";
import Infrastructure from "./components/Infrastructure";

export default function App() {
    return (
        <main className="overflow-x-hidden">
            <Header />
            <Editor />
            <Infrastructure />
        </main>
    )
}