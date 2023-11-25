import { useState } from "react";
import axios from 'axios';
import Card from "./Card";
import StarshipCard from "./StarshipCard";

const Cards = () => {
    const [cardType, setCardType] = useState("select");
    const [peopleCard1, setPeopleCard1] = useState();
    const [peopleCard2, setPeopleCard2] = useState();
    const [starshipCard1, setStarshipCard1] = useState();
    const [starshipCard2, setStarshipCard2] = useState();
    const [peopleWinner, setPeopleWinner] = useState();
    const [starshipWinner, setStarshipWinner] = useState();

    const onChangeCardTypeHandler = (event) => {
        setCardType(event.target.value);
        if (event.target.value === "people") {
            getPeopleCardData();
        } else if ((event.target.value === "starships")) {
            getStarshipsCardData();
        }
    }

    const uniqueRandom = (...compareNumbers) => {
        let uniqueNumber;
        do {
            uniqueNumber = Math.floor(Math.random() * 10) + 1;
        } while(compareNumbers.includes(uniqueNumber));
        return uniqueNumber;
    };
    

    const getPeopleCardData = async() => {
        const numberOne = uniqueRandom();
        const numberTwo = uniqueRandom(numberOne);
        const cardOneUrl = `http://swapi.dev/api/people/${numberOne}/`;
        const cardTwoUrl = `http://swapi.dev/api/people/${numberTwo}/`;
        const cardOneResponse = await axios.get(cardOneUrl);
        setPeopleCard1(cardOneResponse.data);
        const cardTwoResponse = await axios.get(cardTwoUrl);
        setPeopleCard2(cardTwoResponse.data);
        if (cardOneResponse.data.height > cardTwoResponse.data.height) {
            setPeopleWinner(cardOneResponse.data.name);
        } else {
            setPeopleWinner(cardTwoResponse.data.name);
        }
    }

    const getStarshipsCardData = async() => {
        let starshipApiRes1 = null;
        let starshipApiRes2 = null;
        const starshipsNumberOne = uniqueRandom();
        const starshipsNumberTwo = uniqueRandom(starshipsNumberOne);
        let starshipCardOneResponse = "";
        let starshipCardTwoResponse = "";
        try {
            const starshipCardUrl1 = `http://swapi.dev/api/starships/${starshipsNumberOne}/`;
            starshipCardOneResponse = await axios.get(starshipCardUrl1);
            setStarshipCard1(starshipCardOneResponse.data);
        } catch(error) {
            starshipApiRes1 = error.response;
        }
        finally {
            console.log(starshipApiRes1);
        }

        try {
            const starshipCardUrl2 = `http://swapi.dev/api/starships/${starshipsNumberTwo}/`;
            starshipCardTwoResponse = await axios.get(starshipCardUrl2);
            setStarshipCard2(starshipCardTwoResponse.data);
        } catch(error) {
            starshipApiRes2 = error.response;
        }
        finally {
            console.log(starshipApiRes2);
        }

        if ((starshipCardOneResponse && Number(starshipCardOneResponse.data.hyperdrive_rating)) > (starshipCardTwoResponse && Number(starshipCardTwoResponse.data.hyperdrive_rating))) {
            setStarshipWinner(starshipCardOneResponse.data.name);
        } else {
            setStarshipWinner(starshipCardTwoResponse? starshipCardTwoResponse.data.name: starshipCardOneResponse? starshipCardOneResponse.data.name:"");
        }
    }

    return(<div>
        Top Trump Card : 
        <select onChange={onChangeCardTypeHandler} value={cardType}>
            <option value="select">Select</option>
            <option value="people">People</option>
            <option value="starships">Starships</option>
        </select>
        {
            cardType === "people"? 
                <div>
                    <div className="card-row-parent">
                        <Card className="card-row-child" cardsData={peopleCard1}/>
                        <Card className="card-row-child" cardsData={peopleCard2}/>
                    </div> 
                    <div>
                        Winner: {peopleWinner}
                    </div>
                    <button onClick={() => {
                        getPeopleCardData();
                    }}>Repeat</button>
                </div>
                : cardType === "starships"? <div>
                    <div className="card-row-parent">
                        <StarshipCard className="card-row-child" cardsData={starshipCard1}/>
                        <StarshipCard className="card-row-child" cardsData={starshipCard2}/>
                    </div> 
                <div>
                    Winner: {starshipWinner}
                </div>
            </div>: ""
        }
        
    </div>);
}

export default Cards;