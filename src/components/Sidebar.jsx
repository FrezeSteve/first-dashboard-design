import IndexContextFunc from "../context";

export default function SideBar() {
    const { isSeen } = IndexContextFunc();

    return <div className={`bg-red-500 col-span-3 ${isSeen ? "hidden" : "col-span-3"}`}>SideBard</div>;
}
