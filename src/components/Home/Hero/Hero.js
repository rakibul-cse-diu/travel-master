import React, { useEffect, useState } from 'react';

const fakeData = [
    {
        id: 1,
        styID: "cox",
        name: "Cox's  Bazar",
        img: "https://i.ibb.co/yPLvGHN/Sajek.png",
        details: "Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ..."
    },
    {
        id: 2,
        styID: "sree",
        name: "Sreemangal",
        img: "https://i.ibb.co/FJJ10Nt/Sreemongol.png",
        details: "Sreemangal is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ..."
    },
    {
        id: 3,
        styID: "sun",
        name: "Sundarbans",
        img: "https://i.ibb.co/mCs8b6n/sundorbon.png",
        details: "Sundarbans is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ..."
    }
];

const Hero = () => {
    const [places, setPlaces] = useState([]);
    const [activeItem, setActiveItem] = useState({
        id: 1,
        styID: "cox",
        name: "Cox's  Bazar",
        img: "https://i.ibb.co/yPLvGHN/Sajek.png",
        details: "Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ..."
    });

    const [count, setCount] = useState(0);

    useEffect(() => {
        const newPlaces = [...fakeData];
        setPlaces(newPlaces);
    }, [])


    const handleClickOnCard = (id) => {
        const clickedItem = places.find(place => place.id === id);
        setActiveItem(clickedItem);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (count < 3) {
                setCount(count + 1);
            } else {
                setCount(0);
            }

            setActiveItem(places[count])
            console.log(places)
        }, 5000)

        return () => clearInterval(interval);
    }, [count])



    return (
        <div id='wrapper' className='flex'>
            <div className='w-1/2'>
                {
                    activeItem?.id ? <><h2>{activeItem?.name}</h2>
                        <p>{activeItem?.details}</p></> :
                        <><p>Welcome</p></>
                }
            </div>

            <div className='grid grid-cols-3 gap-2 w-1/2'>
                <div className={`flex flex-col justify-center items-center border-orange-400 relative rounded-[18px] ${activeItem?.id === places[0]?.id ? 'border-2' : 'border-0'}`} onClick={() => handleClickOnCard(places[0].id)}>
                    <img src={places[0]?.img} alt="" width={270} height={400} />
                    <h2 className='absolute bottom-10 text-2xl font-semibold'>{places[0]?.name}</h2>
                </div>
                <div className={`flex flex-col justify-center items-center border-orange-400 relative rounded-[18px] ${activeItem?.id === places[1]?.id ? 'border-2' : 'border-0'}`} onClick={() => handleClickOnCard(places[1].id)}>
                    <img src={places[1]?.img} alt="" width={270} height={400} />
                    <h2 className='absolute bottom-10 text-2xl font-semibold'>{places[1]?.name}</h2>
                </div>
                <div className={`flex flex-col justify-center items-center border-orange-400 relative rounded-[18px] ${activeItem?.id === places[2]?.id ? 'border-2' : 'border-0'}`} onClick={() => handleClickOnCard(places[2].id)}>
                    <img src={places[2]?.img} alt="" width={270} height={400} />
                    <h2 className='absolute bottom-10 text-2xl font-semibold'>{places[2]?.name}</h2>
                </div>
            </div>
        </div>
    );
};

export default Hero;