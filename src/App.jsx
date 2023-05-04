import profilpict from './assets/profil.png';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section id="home" className="pt-36">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className=" text-base font-semibold text-primary md:text-xl lg:text-2xl">
                Hello Everyone 😁, this{' '}
                <span className="block font-bold text-dark text-4xl">
                  TESTING MOBILE WEB WITH TAILWIND CSS{' '}
                </span>
              </h1>
              <h2 className="font-medium text-secondary text-lg mb-5">
                Front End Web Developer
              </h2>
              <p className="font-medium text-slate-400 mb-10 leading-relaxed">
                ~Jika kegagalan membuatmu menyerah, maka kamu tidak
                akan pernah menggapai kemenangan
                <br />
                <span className="text-dark font-semibold ">
                  `rico kurnia`
                </span>
              </p>
              <a
                href="#"
                className="rounded full text-base font-semibold text-white bg-primary py-3 px-8 hover:opacity-90 transition duration-300 ease-in-out"
              >
                Register Now
              </a>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="relative mt-10  lg:mt-9 lg:right-0">
                <img
                  src={profilpict}
                  alt="pp"
                  className=" max-w-full mx-auto"
                />
                <span className="absolute bottom-0 -z-10">
                  <svg
                    width="400"
                    height="400"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#14b8a6"
                      d="M53.2,-39C65.9,-26.4,71.2,-4.5,65.2,11.9C59.1,28.3,41.6,39.2,22.9,48.6C4.2,58,-15.7,66,-30.1,60C-44.6,54,-53.6,34.2,-57.9,13.7C-62.2,-6.8,-61.8,-27.9,-51.4,-39.9C-40.9,-52,-20.5,-55,-0.1,-54.9C20.2,-54.8,40.4,-51.6,53.2,-39Z"
                      transform="translate(100 100) scale(1.5)"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of Hero Section */}
      {/* About section */}
      <section id="about" className="pt-36 pb-32">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-10 lg:w-1/2">
              <h4 className=" font-bold uppercase text-primary text-lg mb-3">
                Tentang Saya
              </h4>
              <h2 className=" font-bold text-dark text-3xl mb-4 max-w-md lg:text-4xl">
                Yuk ,belajar web progamming di Cocopedia
              </h2>
              <p className="font-medium text-base text-secondary max-w-xl lg:text-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Quidem exercitationem officia sunt voluptate nam
                facere error qui reprehenderit sequi repellendus?
              </p>
            </div>
            <div className="w-full px-4 lg:w-1/2 lg:pt-10">
              <h3 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl">
                Mari Berteman
              </h3>
              <p className="font-medium text-base text-secondary mb-6 lg:text-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Ullam optio natus aspernatur voluptate
                laboriosam? Totam minus animi quae. Reprehenderit,
                culpa.
              </p>
              <div className="flex items-center">
                {/* Youtube */}
                <a
                  href="#"
                  target="_blank"
                  className="w-9 h-9 mr-3 rounded-full flex justify-center items-center text-slate-300 border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <svg
                    className="fill-current"
                    width="20"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>YouTube</title>
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="#"
                  target={'_blank'}
                  className="w-9 h-9 mr-3 rounded-full flex justify-center items-center text-slate-300 border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <svg
                    className="fill-current"
                    width={20}
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Instagram</title>
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </a>
                <a
                  href="#"
                  target={'_blank'}
                  className="w-9 h-9 mr-3 rounded-full flex justify-center items-center text-slate-300 border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <svg
                    width={80}
                    className="fill-current"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>AMD</title>
                    <path d="M18.324 9.137l1.559 1.56h2.556v2.557L24 14.814V9.137zM2 9.52l-2 4.96h1.309l.37-.982H3.9l.408.982h1.338L3.432 9.52zm4.209 0v4.955h1.238v-3.092l1.338 1.562h.188l1.338-1.556v3.091h1.238V9.52H10.47l-1.592 1.845L7.287 9.52zm6.283 0v4.96h2.057c1.979 0 2.88-1.046 2.88-2.472 0-1.36-.937-2.488-2.747-2.488zm1.237.91h.792c1.17 0 1.63.711 1.63 1.57 0 .728-.372 1.572-1.616 1.572h-.806zm-10.985.273l.791 1.932H2.008zm17.137.307l-1.604 1.603v2.25h2.246l1.604-1.607h-2.246z" />
                  </svg>
                </a>
                <a
                  href="#"
                  target={'_blank'}
                  className="w-9 h-9 mr-3 rounded-full flex justify-center items-center text-slate-300 border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <svg
                    width={80}
                    className="fill-current"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Activision</title>
                    <path d="M1.88 8.91L0 14.284h.985l.27-.718h1.252l.269.718h.985zm3.224.359l-.537.984h2.15v4.03H7.7v-4.03h1.522l1.882 4.837 1.791-4.837h4.567l-.537-.984H12.18l-1.074 2.865L9.94 9.269zm16.21 1.163v3.762h.986v-1.523l1.7 1.702v-3.76h-.896v1.342zm-15.94.09c-1.075 0-1.881.807-1.881 1.881 0 1.075.806 1.88 1.88 1.88.448 0 .895-.179 1.164-.447L6 12.94c-.18.18-.358.27-.627.27a.897.897 0 0 1-.895-.896c0-.448.358-.896.895-.896.18 0 .448.089.537.268l.627-.715c-.27-.269-.716-.448-1.164-.448zm7.522 0v3.672h.985v-3.671zm2.148 0c-.358 0-.804.18-.804.896 0 .896 1.074 1.433.985 1.792-.09.179-.27.178-.359.178h-.626v.806h1.074c.448 0 .895-.269.895-.806 0-.985-1.253-1.611-.984-1.97 0-.09.178-.09.178-.09h.628v-.805zm1.255 0v3.672h.984v-3.671zm3.045 0c-1.075 0-1.88.807-1.88 1.881 0 .985.805 1.88 1.88 1.88 1.074 0 1.88-.805 1.88-1.88 0-1.074-.806-1.88-1.88-1.88zm-11.016.09v3.672h.986v-3.672zm11.016.896c.448 0 .895.358.895.895a.897.897 0 0 1-.895.896c-.538 0-.985-.358-.896-.896 0-.448.358-.895.896-.895zm-17.464.178l.27.896h-.54z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end about section */}
    </>
  );
}

export default App;
