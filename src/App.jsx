import Header from "./components/Header";
import SideBar from "./components/Sidebar";

export default function App() {
    return (
        <div className="grid grid-cols-12 w-screen h-screen overflow-hidden">
            <SideBar />
            <div className="col-span-12 md:col-span-9">
                <Header />
                <div>Main Body</div>
            </div>
        </div>
    );
}
