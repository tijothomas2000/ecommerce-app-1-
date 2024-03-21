import "./FeaturedProducts.css";
import Card from '../Card/Card';
import useFetch from '../../hooks/useFetch';

export default function FeaturedProducts({ type }) {
    const {data,loading,error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);
    return (
        <div className='featured-products'>
            <div className="featured-top">
                <h1>{type} Products</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus hic doloremque eos quaerat quae ab debitis magnam officiis sint consequatur accusantium laudantium vel, quasi esse voluptatibus maxime corporis? Perspiciatis, eius.</p>
            </div>
            <div className="featured-bottom">
                {error?
                "Something went wrong."
                :(loading? "loading"
                : data.map(item => (<Card item={item} key={item.id} />)
                ))}
            </div>
        </div>
    )
}
