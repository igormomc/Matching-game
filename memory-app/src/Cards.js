import { useState } from 'react'
import Card from './Card'


// const FisherYatesShuffleAlgortihm = (ListOfCards) => {
//       for (let i = ListOfCards.length; i > 0; i--) {
//         const ranIndex = Math.floor(Math.random() * i);
//         const currIndex = i - 1;
//         const tempEl = ListOfCards[currIndex];
//         ListOfCards[currIndex] = ListOfCards[ranIndex];
//         ListOfCards[ranIndex] = tempEl;
//       }

const Cards = () => {
    const [items, setItems] = useState([
        { id: 1, img: require('./img/dog-face_1f436.png'), stat: "", clickable: true, uniqId: 1 },
        { id: 1, img: require('./img/dog-face_1f436.png'), stat: "", clickable: true, uniqId: 2 },
        { id: 2, img: require('./img/star-struck_1f929.png'), stat: "", clickable: true , uniqId: 3},
        { id: 2, img: require('./img/star-struck_1f929.png'), stat: "", clickable: true , uniqId: 4},
        { id: 3, img: require('./img/mount-fuji_1f5fb.png'), stat: "", clickable: true , uniqId: 5},
        { id: 3, img: require('./img/mount-fuji_1f5fb.png'), stat: "", clickable: true , uniqId: 6},
        { id: 4, img: require('./img/otter_1f9a6.png'), stat: "", clickable: true , uniqId: 7},
        { id: 4, img: require('./img/otter_1f9a6.png'), stat: "", clickable: true , uniqId: 8},
        { id: 5, img: require('./img/party-popper_1f389.png'), stat: "", clickable: true , uniqId: 9},
        { id: 5, img: require('./img/party-popper_1f389.png'), stat: "", clickable: true , uniqId: 10},
        { id: 6, img: require('./img/t-rex_1f996.png'), stat: "", clickable: true , uniqId: 11},
        { id: 6, img: require('./img/t-rex_1f996.png'), stat: "", clickable: true , uniqId: 12},
        { id: 7, img: require('./img/weary-cat_1f640.png'), stat: "", clickable: true , uniqId: 13},
        { id: 7, img: require('./img/weary-cat_1f640.png'), stat: "", clickable: true , uniqId: 14},
        { id: 8, img: require('./img/rainbow-flag_1f3f3-fe0f-200d-1f308.png'), stat: "", clickable: true , uniqId: 15},
        { id: 8, img: require('./img/rainbow-flag_1f3f3-fe0f-200d-1f308.png'), stat: "", clickable: true , uniqId: 16},
    ].sort(() => Math.random() - 0.5))

    const [prev, setPrev] = useState(-1)
    const [totalMoves, setTotalMoves] = useState(0);
    const [parsMatched, setParsMatched] = useState(0);

    const addOneTotalMoves = () => {
        setTotalMoves(totalMoves + 1);
    }

    const addOneParsMatched = () => {
        setParsMatched(parsMatched + 1)
    }

    const resetButtonFunc = () => {
        setPrev(-1)
        setTotalMoves(0)
        setParsMatched(0)
        setItems(items.sort(() => Math.random() - 0.5))
        setItems(items.map(item => {
            return { ...item, stat: "", clickable: true }
        }))

    }

    const [needToWait, setNeedToWait] = useState(false)
    function check(current) {
        if (items[current].id === items[prev].id && items[current].clickable === true && needToWait === false ) {
            items[current].stat = "correct"
            items[prev].stat = "correct"
            items[current].clickable = false;
            items[prev].clickable = false;
            addOneTotalMoves();
            addOneParsMatched();
            setItems([...items])
            setPrev(-1)
        } else if (items[current].clickable === true && needToWait === false) {
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setNeedToWait(true)
            addOneTotalMoves();
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
                setNeedToWait(false)
            }, 2000)
        }
    }

    function handleClick(id, uniqId) {
        if (prev === -1) {
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
        } else {
            check(id)
        }
    }

    return (
        <div className="cards">
            <div className="header">
                <div className="header-box1">
                    <h1>Match the pairs 🤔</h1>
                </div>
                <div className="header-box2">
                    <div className='box1'>
                        <div className='titleMoves'>
                            <h1>Pairs matched</h1>
                        </div>
                        <div className='movesCount'>
                            <h1>{parsMatched} / 8</h1>
                        </div>
                    </div>
                    <div className='box2'>
                        <div className='titleMoves2'>
                            <h1>Total moves</h1>
                        </div>
                        <div className='movesCount2'>
                            <h1>{totalMoves}</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                {items.map((item, index) => (
                    <Card key={index} item={item} id={index} handleClick={handleClick} />
                ))}
            </div>
            <div className='buttonContainer'>
                <button class="buttoncont" type="submit" onClick={resetButtonFunc}>
                    Reset game
                </button>
            </div>
        </div>
    )
}

export default Cards