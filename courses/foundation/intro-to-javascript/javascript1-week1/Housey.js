
const peterHouseWidth = 8;
const peterHouseDepth = 10;
const peterHouseHieght = 10;
const peterGardenSize = 100;
const peterHousePrize = 2500000;

const juliaHouseWidth = 5;
const juliaHouseDepth = 11;
const juliaHouseHeight = 8;
const juliaGardenSize = 70;
const juliaHousePrize = 1000000;

const peterVolume = peterHouseWidth * peterHouseDepth * peterHouseHieght;
const juliaVolume = juliaHouseWidth * juliaHouseDepth * juliaHouseHeight;

const peterEstimatedHousePrize = peterVolume * 2.5 * 1000 + peterGardenSize * 300;
const juliaEstimatedHousePrize = juliaVolume * 2.5 * 1000 + juliaGardenSize * 300;



if (peterHousePrize>peterEstimatedHousePrize) {
    console.log ("Peter is paying too much for the house.")

    } else {
        console.log ("Peter is getting a good deal.");
    }


if (juliaHousePrize>juliaEstimatedHousePrize) {
    console.log ("Julia is paying too much for the house.")

} else {
    console.log("Julia is getting a good deal.");
}