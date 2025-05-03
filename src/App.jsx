function App() {
  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center p-5">
        <section className=" bg-aa-black-950 flex flex-col items-start justify-between p-5 h-[500px] text-aa-red-400">
          <div className="flex flex-col md:flex-row gap-2">
            <h1 className="text-4xl font-semibold uppercase max-w-[350px]">
              Akinlolúwa Adedijo
            </h1>
            <h2 className="text-base text-aa-black-100">
              Frontend Developer & Designer
            </h2>
          </div>
          <div className="uppercase text-2xl font-semibold text-aa-black-100">
            Website in Progress
          </div>
          <div className="w-full flex flex-col md:flex-row md:justify-between gap-3 text-aa-black-100">
            <p className="font-bold">Connect with me</p>
            <ul className="flex gap-4">
              <li>
                <a
                  className="text-aa-black-100 hover:text-aa-red-400 transition duration-150"
                  href="mailto:adedijoakinloluwa@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Email
                </a>
              </li>

              <li>
                <a
                  className="text-aa-black-100 hover:text-aa-red-400 transition duration-150"
                  href="https://www.linkedin.com/in/akinloluwa-adedijo-a362b2177/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedln
                </a>
              </li>
              <li>
                <a
                  className="text-aa-black-100 hover:text-aa-red-400 transition duration-150"
                  href="https://github.com/Akinloluwa-Adedijo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  className="text-aa-black-100 hover:text-aa-red-400 transition duration-150"
                  href="https://www.instagram.com/dsign.ak/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
