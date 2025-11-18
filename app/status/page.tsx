import { AlertTriangle } from "lucide-react";

export default function StatusPage() {
  return (
    <>
      <div className="flex flex-col w-full max-w-4xl mx-auto min-h-screen p-6 font-sans">
        <section className="flex flex-col items-start text-center bg-neutral-50 sticky top-0 z-10 py-4 border-b border-neutral-200">
          <h1 className="text-3xl font-semibold">Service Status</h1>
          <p>สถานะบริการทั้งหมดจาก rinkai industries</p>
        </section>
        <section className="flex py-6 w-full">
          <div className="flex flex-col gap-2 p-4 border-2 border-orange-600 bg-orange-50 w-full text-orange-600">
            <span className="flex flex-col">
              <AlertTriangle />
              <h1 className="text-lg font-semibold mt-2">
                Critical - This is a critical issue sample
              </h1>
              <p className="font-mono text-sm">
                12 November 2023 22:41(GMT BKK +7)
              </p>
            </span>
            <p className="">
              บริการ web service จากทาง rinkai ไม่สามารถให้บริการได้เนื่องจาก
            </p>
          </div>
        </section>
        <section className="flex flex-col py-6">
          <h2 className="text-xl font-semibold">Recent Updates</h2>
          <ul className="list-disc list-inside">
            <li>Resolved an issue with email delivery.</li>
            <li>Improved performance of the search feature.</li>
          </ul>
        </section>
      </div>
      <div className="flex flex-col items-center justify-center max-w-7xl mx-auto w-full h-screen">
        <p>Hellp</p>
      </div>
    </>
  );
}
