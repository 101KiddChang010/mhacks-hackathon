export default function LandingPage() {
  return (
    <>
      <div className="mt-[4rem] flex flex-col items-center justify-center">
        <h1 className="text-center text-5xl font-semibold">
          Introducing Cl
          <span className="text-primary">ai</span>re
        </h1>
        <p className="my-4 text-center text-2xl">
          Your personalized AI medical assistant. Get accurate medical advice,
          quick diagnoses, and access to healthcare providers all in one place.
          Say goodbye to long wait times and hello to convenient healthcare
          management with Claire.
        </p>
        <div className="flex gap-2">
          <button className="h-8 w-[6.25rem] rounded-2xl bg-secondary text-center text-sm text-white">
            Get Started
          </button>
          <button className="h-8 w-[6.25rem] rounded-2xl bg-primary text-center text-sm text-white">
            GitHub Repo
          </button>
        </div>
        <img src="showcase.png" alt="" className="my-8" />
      </div>
    </>
  );
}
