
const FoodCard = ({ item }) => {
    const { name, image , recipe } = item;
    return (
        <div>
            <div className="card text-white bg-gradient-to-br from-pink-500 to-orange-400">
                <img className="rounded-lg" src={image} alt="Shoes" />
                <div className="card-body ">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Add To Card</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;