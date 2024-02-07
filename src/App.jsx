import Header from "./components/Header";
import SideBar from "./components/Sidebar";
import IndexContextFunc from "./context";

export default function App() {
    const { isSeen } = IndexContextFunc();

    return (
        <div className="grid grid-cols-12 w-screen h-screen overflow-hidden">
            <SideBar />
            <div className={` ${isSeen ? "col-span-12" : "col-span-2 md:col-span-8 lg:col-span-9 xl:col-span-10 overflow-x-hidden"}`}>
                <Header />
                <div className="bg-gray-100 customHeight overflow-x-hidden overflow-y-auto">
                    <div>Main Body</div>
                </div>
            </div>
        </div>
    );
}
