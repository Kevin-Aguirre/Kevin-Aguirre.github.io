import loading from "../media/loading.gif"

export default function Loading() {
    console.log(loading);
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <img src={loading} alt="loading..." />
        </div>
    )
}


