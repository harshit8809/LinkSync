function Logomark() {
    return (
        <svg viewBox="0 0 20 20" className="h-5 w-5" aria-hidden="true">
            <circle cx="7" cy="10" r="6" fill="var(--teal)" opacity="0.85" style={{ mixBlendMode: "multiply" }} />
            <circle cx="13" cy="10" r="6" fill="var(--amber)" opacity="0.85" style={{ mixBlendMode: "multiply" }} />
        </svg>
    );
}


// const AppLogo = () => {
//     return (
//         <a href="#top" className="flex items-center gap-2">
//             <Logomark />
//             <span className="font-display text-lg font-semibold text-ink">LinkSync</span>
//         </a>
//     )
// }

const AppLogo = () => {
    return (
        <div className="flex items-center gap-2">
            <Logomark />
            <span className="font-display text-lg font-semibold text-ink">LinkSync</span>
        </div>
    )
}

export default AppLogo