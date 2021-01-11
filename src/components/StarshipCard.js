const StarshipCard = (props) => {
    const card = props.cardsData? props.cardsData : null;
    return(<div>
        {card?<div>
            <div className="card-header card-header-name">
            {props.cardsData?props.cardsData.name:""}
            <div className="card-row-parent">
                <div className="card-row-child">Model: {card?card.model:""}</div>
                <div className="card-row-child">Manufacturer: {card?card.manufacturer:""}</div>
            </div>
            <div className="card-row-parent">
                <div className="card-row-child">Starship Class: {card?card.starship_class:""}</div>
                <div className="card-row-child">Consumables: {card?card.consumables:""}</div>
            </div>
            <div>
                <div>Hyperdrive Rating: {card?card.hyperdrive_rating:""}</div>
            </div>
        </div>
        </div>:<div className="card-header">404 Data Not Found</div>}
    </div>);
}

export default StarshipCard;