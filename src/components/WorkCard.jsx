const WorkCard = ({name, position, duration, responsibilities, icon}) => (
    <div className="group flex flex-row w-full">
        {/* Route rail — each role is a port; the gold node marks the stop, the line is the course sailed */}
        <div className="flex flex-col items-center py-2">
            <div className="work-content_logo relative">
                <img src={icon} alt={`${name} logo`} className="w-full h-full rounded-full"/>
                <span className="port-node"/>
            </div>
            <div className="work-content_bar"/>
        </div>

        <div className="sm:p-5 px-2.5 py-5 flex-1">
            <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-gold mb-2">{duration}</p>
            <p className="font-display font-semibold text-xl md:text-2xl text-foam">{name}</p>
            <p className="text-base md:text-lg text-white-600 mb-5">{position}</p>

            <ul className="space-y-2.5">
                {responsibilities.map((responsibility, index) => (
                    <li key={index}
                        className="relative pl-5 text-sm md:text-base text-white-600 group-hover:text-foam transition ease-in-out duration-500">
                        <span className="absolute left-0 top-[0.55em] w-1.5 h-1.5 rounded-full bg-teal/70"/>
                        {responsibility}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

export default WorkCard;
