const MintData = () => {
        return <div className={`isolate relative flex h-screen bg-[#EBD5B8] mintpage`}>
                <section className="z-10 m-auto flex w-full max-w-sm flex-col gap-4 rounded-2xl px-16 py-4 text-[#CC402E] border-4 border-current">
                        <h1 className="font-gunji my-4 text-center text-3xl font-bold">
                                Degen Warriors
                        </h1>
                        <div className="flex flex-col gap-1 rounded-xl border-2 border-current py-2 text-center">
                                <small className="">Supply Minted</small>
                                <b>300/1369</b>
                        </div>
                        <div className="flex flex-col gap-1 rounded-xl border-2 border-current py-2 text-center">
                                <small className="">Sale Type</small>
                                <b>WL Sale</b>
                        </div>
                        <div className="flex flex-col gap-1 rounded-xl border-2 border-current py-2 text-center">
                                <small className="">Price</small>
                                <b>0.009ETH</b>
                        </div>
                        <div className="flex items-center gap-4 self-center ">
                                <button className="flex aspect-square w-10 rounded-xl border-2 border-current">
                                        <span className="m-auto mt-px text-3xl leading-none">-</span>
                                </button>
                                <span className="text-xl font-bold">1</span>
                                <button className="flex aspect-square w-10 rounded-xl border-2 border-current">
                                        <span className="m-auto mt-px text-3xl leading-none align-text-bottom">
                                                +
                                        </span>
                                </button>
                        </div>
                        <button className="rounded-lg bg-[#CC402E] px-8 py-2 text-white">
                                Connect Wallet
                        </button>{" "}
                </section>
        </div>
}

export default MintData;