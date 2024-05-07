
const FoodCard = ({ item }) => {
    const { name, image , recipe , price} = item;
    return (
        <div>
            <div className="card text-white bg-gradient-to-br from-pink-400 to-orange-300 h-[550px] shadow">
                <img className="rounded-lg" src={image} alt="Shoes" />
                <p className="absolute bg-black p-1  text-white right-0 bg-opacity-50 mt-3 mr-3">$ {price}</p>
                <div className="p-4">
                    <h2 className="text-2xl">{name}</h2>
                    <p className="text-[16px] mt-4">{recipe}</p>
                    <div className="card-actions lg:ml-28 ml-24 mt-6">
                        <button className="btn btn-outline border-0 border-b-4 text-black uppercase">Add To Card</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;