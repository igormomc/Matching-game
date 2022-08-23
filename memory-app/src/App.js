import Cards from './Cards'

// const arrayOfSelectElements = [
//   {
//     type: "starFace",
//     image: require('./img/dog-face_1f436.png')
//   },
//   {
//     type: "dogFace",
//     image: require('./img/star-struck_1f929.png')
//   },
//   {
//     type: "mountFuji 3",
//     image: require('./img/mount-fuji_1f5fb.png')
//   },
//   {
//     type: "otter",
//     image: require('./img/otter_1f9a6.png')
//   },
//   {
//     type: "party",
//     image: require('./img/party-popper_1f389.png')
//   },
//   {
//     type: "tRex",
//     image: require('./img/t-rex_1f996.png')
//   }
// ];

// const FisherYatesShuffleAlgortihm = (ListOfCards) => {
//   for (let i = ListOfCards.length; i > 0; i--) {
//     const ranIndex = Math.floor(Math.random() * i);
//     const currIndex = i - 1;
//     const tempEl = ListOfCards[currIndex];
//     ListOfCards[currIndex] = ListOfCards[ranIndex];
//     ListOfCards[ranIndex] = tempEl;
//   }
//   return ListOfCards;
// }
// //console.log("her er lista: ", FisherYatesShuffleAlgortihm(arrayOfSelectElements));

function App() {
  return (
    <div className="App">
      <Cards />
    </div>
  );
}

export default App;
