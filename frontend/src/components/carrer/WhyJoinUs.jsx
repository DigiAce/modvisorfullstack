const WhyJoinUs = () => {
  return (
    // <div className="w-screen h-full m-auto bg-gray-900 bg-no-repeat bg-cover bg-[url('https://images.unsplash.com/photo-1620121692029-d088224ddc74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNXx8Z3JhcGhpY3MlMjBiYWNrZ3JvdW5kfGVufDB8MHx8fDE3MzUyODE0NTB8MA&ixlib=rb-4.0.3&q=80&w=1080')]">
    <div className="w-full h-full m-auto bg-yell bg-no-repeat bg-cover">
      <div>
        <div className="xl:w-[70%] lg:w-[80%] md:w-[90%] m-auto md:px-0 px-4 md:my-10 bg-textColor rounded-xl overflow-hidden">
          {/* Why Join Us */}
          <section className="w-full h-full flex flex-col justify-center md:py-20 py-10 md:px-20 px-2">
            {/* Heading */}
            <div className="w-fit">
              <h2 className="text-2xl font-bold text-yell  pb-2">
                Why Join Us? Build Your Future with ModVisor
              </h2>
              <div className="rounded-t-full border-[1px] border-gray-500 overflow-hidden">
                <hr className="border-[3px] border-green-400 w-[20%]" />
              </div>
            </div>

            <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-4 mt-8">
              {/* 1 */}
              <div className="flex sm:gap-4 gap-1">
                <span>
                  <ion-icon
                    className="sm:text-5xl text-3xl text-white"
                    name="rocket-outline"
                  ></ion-icon>
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold text-yell">
                    Innovate with Impact
                  </h3>
                  <p className="text-white">
                    Contribute to projects that not only drive business success
                    but also create positive, lasting impacts.
                  </p>
                </div>
              </div>

              {/* 2 */}
              <div className="flex sm:gap-4 gap-2">
                <span>
                  <ion-icon
                    className="sm:text-5xl text-3xl text-white"
                    name="person-outline"
                  ></ion-icon>
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold text-yell">
                    Learn from the Best
                  </h3>
                  <p className="text-white">
                    Collaborate with top-tier experts in financial modelling,
                    boosting your skills and knowledge.
                  </p>
                </div>
              </div>

              {/* 3 */}
              <div className="flex sm:gap-4 gap-2">
                <span>
                  <ion-icon
                    className="sm:text-5xl text-3xl text-white"
                    name="trending-up-outline"
                  ></ion-icon>
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold text-yell">
                    Endless Growth
                  </h3>
                  <p className="text-white">
                    Enjoy limitless opportunities for career development,
                    mentorship, and continuous learning.
                  </p>
                </div>
              </div>

              {/* 4 */}
              <div className="flex sm:gap-4 gap-2">
                <span>
                  <ion-icon
                    className="sm:text-5xl text-3xl text-white"
                    name="cloud-done-outline"
                  ></ion-icon>
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold text-yell">
                    Work Your Way
                  </h3>
                  <p className="text-white">
                    Enjoy flexible working hours with the option to work from
                    home, the office, or anywhere that suits you - Your career,
                    your flexibility.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default WhyJoinUs;
