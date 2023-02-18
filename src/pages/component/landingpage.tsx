import Link from "next/link";

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
          <Link
            href=""
            className="flex h-8 w-[6.25rem] items-center justify-center rounded-2xl bg-secondary text-center text-sm text-white"
          >
            <span>Get Started</span>
          </Link>
          <a
            href="https://github.com/101KiddChang010/mhacks-hackathon"
            className="flex h-8 w-[6.25rem] items-center justify-center rounded-2xl bg-primary text-center text-sm text-white"
          >
            <span>GitHub Repo</span>
          </a>
        </div>
        <img src="showcase.png" alt="" className="my-8" />
        <div className="mt-[4.688rem]">
          <h2 className="text-2xl font-bold tracking-[.12rem] text-secondary">
            WHAT IS CLAIRE
          </h2>
          <p className="mt-[.5rem] text-sm font-medium">
            The innovative and intelligent solution to streamline your
            healthcare needs. Claire is an AI designed to assist you with
            personalized medical advice and connect you with the best healthcare
            providers. With the latest cutting-edge technology and advanced
            machine learning algorithms, our AI is capable of analyzing medical
            data, identifying symptoms, and providing accurate diagnoses. From
            to monitoring your health to scheduling appointments, Claire is your
            one-stop shop for all your medical needs. It’s a convenient and
            efficient way of managing your healthcare.
          </p>
        </div>
        <div className="mt-[4.688rem]">
          <h2 className="text-2xl font-bold tracking-[.12rem] text-secondary">
            HOW CLAIRE WORKS
          </h2>
          <p className="mt-[.5rem] text-sm font-medium">
            Claire is an innovative medical assistant AI that uses the latest
            breakthroughs in natural language processing and artificial
            intelligence to help people take charge of their health. Developed
            with the state-of-the-art GPT-3 language model, Claire is able to
            understand and respond to natural language queries in a way that is
            both accurate and empathetic. Whether you have a specific health
            concern or just need general guidance, Claire is here to help you
            every step of the way. <br />
            <br /> Claire's powerful capabilities are made possible by GPT-3's
            advanced machine learning algorithms, which allow it to analyze vast
            amounts of medical data and generate personalized responses based on
            your individual needs. With Claire, you can get quick and accurate
            medical advice, schedule appointments, and connect with healthcare
            providers from the comfort of your own home. Whether you're looking
            to manage a chronic condition or just want to stay healthy, Claire
            is your partner in achieving optimal health and well-being. <br />
            <br />
            One of the key benefits of Claire is its ability to adapt and learn
            as it interacts with patients. As it receives more data and
            feedback, Claire's responses become more accurate and personalized.
            This means that over time, Claire can become an even more effective
            medical assistant, providing patients with the most up-to-date and
            relevant information. With its cutting-edge technology and
            commitment to patient care, Claire is revolutionizing the healthcare
            industry and transforming the way people think about medical
            assistance.
          </p>
        </div>
        <div className="mt-[4.688rem] mb-[3rem]">
          <h3 className="flex justify-center text-2xl font-bold text-[#474750]">
            Powered By:
          </h3>
          <div className="mt-5 flex gap-[5.313rem]">
            <a href="https://openai.com">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"
                className="max-h-[4.375rem]"
                alt=""
              />
            </a>
            <a href="https://git-scm.com">
              <img
                src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
                className="max-h-[4.375rem]"
                alt=""
              />
            </a>
            <a href="https://next-auth.js.org">
              <img
                src="https://next-auth.js.org/img/logo/logo-sm.png"
                alt=""
                className="max-h-[4.375rem]"
              />
            </a>
            <a href="https://nextjs.org">
              <img
                src="https://static-00.iconduck.com/assets.00/next-js-icon-512x512-zuauazrk.png"
                className="max-h-[4.375rem]"
                alt=""
              />
            </a>
            <a href="https://reactjs.org">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png"
                className="max-h-[4.375rem]"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
