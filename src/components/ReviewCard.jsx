import { star } from "../assets/icons"

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
    return (
        <div className="flex justify-center items-center flex-col">
            <img src={imgURL} alt="image" className="rounded-full w-[120px] h-[120px] object-cover" />
            <p className="info-text text-center max-w-sm mt-6   ">{feedback}</p>
            <div className="flex justify-center items-center gap-2.5 mt-3">
                <img src={star} width={24} height={24} className="object-contain m-0" alt="" />
                <p className="text-slate-gray text-xl font-montserrat">({rating})</p>
            </div>
            <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">{customerName}</h3>
        </div>
    )
}

export default ReviewCard