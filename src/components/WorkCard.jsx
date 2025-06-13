const WorkCard = ({name, position, duration, responsibilities, icon}) => (
    <div className="group flex flex-row">
        <div className="flex flex-col h-full justify-start items-center py-2">
            <div className="work-content_logo">
                <img src={icon} alt="logo" className="w-full h-full rounded-full"/>
            </div>
            <div className="work-content_bar"/>
        </div>
        <div className="sm:p-5 px-2.5 py-5">
            <p className="font-bold text-lg md:text-xl text-white-800">{name}</p>
            <p className="text-base md:text-lg mb-5">{position} -- {duration}</p>

            <ul className="list-disc pl-5">
                {responsibilities.map((responsibility, index) => (
                    <li key={index}
                        className="text-sm md:text-base group-hover:text-white transition ease-in-out duration-500">{responsibility}</li>
                ))}
            </ul>

        </div>
    </div>
);

export default WorkCard;