
const Card = props => {
    const card = props.cardsData? props.cardsData : null;
    return(<div>
        <div className="card-header card-header-name">
            {props.cardsData?props.cardsData.name:""}
            <div className="card-row-parent">
                <div className="card-row-child">Birth Year: {card?card.birth_year:""}</div>
                <div className="card-row-child">Gender: {card?card.gender:""}</div>
            </div>
            <div className="card-row-parent">
                <div className="card-row-child">Eye Color: {card?card.eye_color:""}</div>
                <div className="card-row-child">Skin Color: {card?card.skin_color:""}</div>
            </div>
            <div>
                <div>Height: {card?card.height:""}</div>
            </div>
        </div>
        
    </div>)
}

export default Card;