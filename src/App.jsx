import Header from "./components/Header";
import SideBar from "./components/Sidebar";
import IndexContextFunc from "./context";

export default function App() {
    const { isSeen } = IndexContextFunc();

    return (
        <div className="grid grid-cols-12 w-screen h-screen overflow-hidden">
            <SideBar />
            <div className={`col-span-12 ${isSeen ? "" : "lg:col-span-9"}`}>
                <Header />
                <div className="bg-gray-100 customHeightSM md:customHeight overflow-x-hidden overflow-y-auto">
                    <div>Main Body</div>
                </div>
            </div>
        </div>
    );
}
