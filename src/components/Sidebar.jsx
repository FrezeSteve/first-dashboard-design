import IndexContextFunc from "../context";

export default function SideBar() {
    const { isSeen } = IndexContextFunc();

    return (
        <div className={`bg-[#222e3c] text-white ${isSeen ? "hidden" : "flex flex-col col-span-10 md:col-span-4 lg:col-span-3 xl:col-span-2"}`}>
            <div className="py-6 px-8 text-lg font-semibold">NCIC Performance Appraisal System</div>
            <ul className="grow">
                <li>Pages</li>
            </ul>
        </div>
    );
}
