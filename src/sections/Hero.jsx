import video from "/assets/thousand_sunny.mp4"

const Hero = () => {
    return (
        <section className="c-space my-20" id="home">
            <div className="grid xl:grid-cols-3 xl:grid-rows-2 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-2 xl:row-span-2">
                    <div>
                        <video width="1000px" autoPlay loop muted style={{borderRadius: '10px'}}>
                            <source src={video} type="video/mp4"/>
                        </video>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/luffy.png" alt="luffy" className="w-full sm:h-[276px] h-fit object-contain"/>

                        <div>
                            <p className="grid-headtext">
                                Hi, I'm Aleksandar!
                            </p>

                            <p className="grid-subtext">
                                Welcome to my portfolio! I'm a software engineer with experience in back end development
                                in Java and Spring Boot primarily, who is also a big fan of One Piece, as you can see.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Hero;