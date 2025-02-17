export const ShoeCard = ({ imgUrl, changeBigShoeImage, bigShoeImg }) => {
    const handleClick = () => {
        if (bigShoeImg !== imgUrl) {
            changeBigShoeImage(imgUrl.bigShoe)
        }
    }
    return (

        <div
            className={`border-2 rounded-xl 
            ${bigShoeImg === imgUrl.bigShoe ? 'border-coral-red' : 'border-transparent'}
            curdor-pointer max-sm:flex-1
            `}
            onClick={handleClick}
        >

            <div className="flex justify-center items-center bg-card bg-cover bg-center sm:h-40 sm:w-40 rounded-xl max-sm:p-4">
                <img src={imgUrl.thumbnail} alt="Shoe" width={127} height={103} className="object-contain" />
            </div>

        </div>
    )
}
