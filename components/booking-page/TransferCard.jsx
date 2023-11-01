import Image from "next/image"


const TransferCard = () => {
  return (
    <div className="transfer-card bg-white">
      <div className="transfer-card__image">
        <Image 
          src={"https://res.cloudinary.com/ht4mr7djk/image/upload/f_auto,q_auto/Transfers/CarRental/skoda_octavia.png"}
          alt="Car"
          width={250}
          height={250}
          layout="responsive"
          objectFit="cover"
          quality={100}
          
        />
      </div>
      <div className="transfer-card__text">
        <div className="transfer-card__title text-base font-bold">
          Private Transfer
        </div>
        <div className="transfer-card__descr">
          Travel in style with direct door-to-door service just for you and your group.
          No stops and no waiting for other passengers.
        </div>
      </div>
    </div>
  )
}

export default TransferCard
