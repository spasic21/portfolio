// A waypoint between sections — the page reads top-to-bottom as a voyage, so each
// hairline marks a leg of the route. The coordinate is the page's spine, not decoration.
const SectionDivider = ({leg, coord}) => (
    <div className="c-space -my-6 md:-my-8" aria-hidden="true">
        <div className="flex items-center gap-4 opacity-70">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-black-500"/>
            <span className="font-mono text-[10px] sm:text-xs tracking-[0.3em] text-gold/70 uppercase whitespace-nowrap">
                {leg} <span className="text-white-600">&mdash; {coord}</span>
            </span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-black-500"/>
        </div>
    </div>
);

export default SectionDivider;
