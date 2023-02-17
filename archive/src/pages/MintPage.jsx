export default function MintPage() {
    return (
        <div className="isolate relative flex h-screen bg-red-200">
            <section className="z-10 m-auto flex w-full max-w-md flex-col gap-4 rounded-lg bg-[#EBD5B8] px-16 py-4 shadow-red-200 shadow-lg text-[#CC402E]">
                <h1 className="my-4 text-center text-3xl font-bold">Degen Warriors</h1>
                <div className="flex flex-col gap-1 rounded-md border-2 border-current py-2 text-center">
                    <small className="">Supply Minted</small>
                    <b>300/1369</b>
                </div>
                <div className="flex flex-col gap-1 rounded-md border-2 border-current py-2 text-center">
                    <small className="">Supply Minted</small>
                    <b>300/1369</b>
                </div>
                <div className="flex flex-col gap-1 rounded-md border-2 border-current py-2 text-center">
                    <small className="">Supply Minted</small>
                    <b>300/1369</b>
                </div>
                <div className="flex items-center gap-4 self-center">
                    <button className="flex aspect-square w-10 rounded-md border-2 border-current">
                        <span className="m-auto mt-px text-3xl leading-none">-</span>
                    </button>
                    <span className="text-xl font-bold">1</span>
                    <button className="flex aspect-square w-10 rounded-md border-2 border-current">
                        <span className="m-auto mt-px text-3xl leading-none align-text-bottom">+</span>
                    </button>
                </div>
                <button className="rounded-md bg-[#CC402E] px-8 py-2 text-white">Connect Wallet</button>
            </section>
        </div>
    );
}