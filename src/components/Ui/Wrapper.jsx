export default function Wrapper({children}) {
    return (
        <div className={"w-[1440px] mx-auto"}>
            {children}
        </div>
    )
}