import { arrowRight } from "../assets/icons"
import { bigShoe1, shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
    return (
        <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
            <div className="flex flex-1 flex-col">
                <h2 className="font-palanquin text-4xl capitalize font-bold">
                    We Provide You
                    <span className="text-coral-red"> Super </span>
                    <span className="text-coral-red"> Quality </span> Shoes
                </h2>
                <p className="mt-4 lg:max-w-lg info-text">Discover stylish Nike arrivals,perfect for your summer wardrobe. Discover stylish Nike arrivals,perfect for your summer wardrobe.
                </p>
                <p className="mt-6 lg:max-w-lg info-text">Discover stylish Nike arrivals,perfect for your summer wardrobe.</p>
                <div className="mt-11">
                    <Button label="View Details" />
                </div>
            </div>

            <div className="flex-1 flex justify-center items-center">
                <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain" />
            </div>
        </section>
    )
}

export default SuperQuality