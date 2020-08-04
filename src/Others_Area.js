import React from 'react';
import './index.css';
import Card from './Card';
import data from './data'; //Only for testing

function Others_Area(props) {
    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [items, setItems] = useState([]);

    // useEffect(() => {
    //     fetch("https://api.example.com/items") -> replace the link here with the correct API link
    //       .then(res => res.json())
    //       .then(
    //         (result) => {
    //           setIsLoaded(true);
    //           setItems(result.items);
    //         },
    //         (error) => {
    //           setIsLoaded(true);
    //           setError(error);
    //         }
    //       )
    //   }, [])

    //now replace data.products with items

    const retrivedData = data.products.map( item => 
            <Card 
                key={item._id}
                name={item.name}
                image={item.image}
                link={item.link}
                desc={item.desc}
            />
    )
  return (
    <div>
        {retrivedData}
    </div>
  );
}

export default Others_Area;
