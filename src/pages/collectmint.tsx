import MintNav from "../components/MintNav";

export default function CollectMint() {
  return (
    <>
      <MintNav />
      <div className={`isolate relative flex h-screen bg-[#EBD5B8] mintpage`}>
        <section className="z-10 m-auto flex w-full max-w-lg flex-col gap-4 rounded-2xl px-10 py-4 text-[#CC402E] border-4 border-current collectmint">
          <h1 className="font-gunji my-4 text-center text-3xl font-bold mb-0 pb-0">
            Degen Warriors
          </h1>
          <p className="text-center">
            <b>Verify if your Wallet is on the Warrior List. </b>
          </p>
          <div className="flex justify-around mintdata">
            <input
              className="gap-1 rounded-xl border-2 border-current pb-2 pt-2.5 w-60 bg-[#EBD5B8] text-left pl-5 placeholder-red-500"
              id="username"
              type="text"
              placeholder="Enter You Wallet Address"
            />
            <button className="bg-[#CC402E] verify">Verify</button>
          </div>
        </section>
      </div>
    </>
  );
}
