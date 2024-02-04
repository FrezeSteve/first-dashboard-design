export default function App() {
    return (
        <div className="flex w-screen h-screen overflow-hidden">
            <div className="bg-red-500 hidden md:block">SideBard</div>
            <div className="bg-blue-500 grow">
                <div>Header</div>
                <div>Main Body</div>
            </div>
        </div>
    );
}
