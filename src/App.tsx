import Editor from "./components/Editor";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Infrastructure from "./components/Infrastructure";

export default function App() {
    return (
        <main className="overflow-x-hidden">
            <Header />
            <Editor />
            <Infrastructure />
            <Features />
            <Footer />
        </main>
    )
}