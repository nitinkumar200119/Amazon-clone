import React from 'react'
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Without_remorse/launch/1500x600_Hero-Tall_P._CB669547265_.jpg"
                alt="">
            </img>

            {/* peoduct container(id,title,price,rating,image) */}
            <div className="home__row">
                <Product
                    id="1"
                    title="Think and Grow Rich by Napoleon Hill"
                    price={139.00}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/41+eK8zBwQL._SX319_BO1,204,203,200_.jpg"
                />

                <Product
                    id="2"
                    title="New Apple iPhone 12 (128GB) - Black"
                    price={76000}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71fVoqRC0wL._AC_UY218_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="2"
                    title="Tied Ribbons Set of 4 Buddha Monks Statues Showpiece"
                    price={275.00}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71WBIhxYlZL._AC_UL320_.jpg"
                />

                <Product
                    id="3"
                    title="New Apple iPad Air (10.9-inch, Wi-Fi, 64GB)"
                    price={55000}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71SAHzzQqkL._AC_UY218_.jpg"
                />

                <Product
                    id="4"
                    title="8 Layer Wardrobe  Almirah Foldable Collapsible "
                    price={1549}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/71M6CX0N8QL._AC_UL320_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="5"
                    title="Samsung 34-inch (86.40cm) Curved Monitor- 21:9 Ultrawide QLED"
                    price={85000}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/91pi34PiUPL._AC_UY218_.jpg"
                />
            </div>








        </div>
    )
}

export default Home
