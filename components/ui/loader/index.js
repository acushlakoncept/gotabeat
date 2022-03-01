


export default function Loader({size="md"}) {

    const SIZES = {
        sm: "w-6 h-6",
        md: "w-8 h-8",
        lg: "w-12 h-12",
    }

    return (
        <div className={`sk-circle ${SIZES[size]}`}>
            { Array.from({length: 12}).map((_i, i) => (
                <div key={i} 
                className={`sk-circle${i+1} sk-child`} />
            ))}
        </div>
    )
}