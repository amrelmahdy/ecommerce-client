import Reveal from 'react-awesome-reveal';

// Import Custom Component
import OwlCarousel from '../../features/owl-carousel';
import Blog from './blog';

// Import Utils
import { fadeInUpShorter } from '../../../utils/data/keyframes'
import { blogSlider } from '../../../utils/data/slider';

export default function BlogSection ( props ) {
    const { blog } = props;
    const sliderOptions = { ...blogSlider, responsive: { ...blogSlider.responsive, 768: { items: 2 } } }

    return (
        <section className="post-section">
            <div className="container">
                <Reveal keyframes={ fadeInUpShorter } delay={ 300 } duration={ 1000 } triggerOnce>
                    <div>
                        <h2 className="section-title">Recipes For This Week</h2>
                        <p className="section-info font2">All our new arrivals in a exclusive brand selection</p>
                    </div>
                </Reveal>

                <Reveal keyframes={ fadeInUpShorter } delay={ 500 } duration={ 1000 } triggerOnce>
                    <div className="post-date-in-media media-with-zoom bg-white rounded">
                        <OwlCarousel adClass="mb-2" options={ { margin: 20, nav: false, responsive: { 576: { items: 2 } } } }>
                            {
                                blog ?
                                    blog.slice( 0, 2 ).map( ( item, index ) => (
                                        <Blog blog={ item } key={ "product-one" + index } />
                                    ) )

                                    :
                                    [ 0, 1 ].map( ( item, index ) =>
                                        <div className="skel-pro skel-pro-grid" key={ "product-one" + index }></div>
                                    )
                            }
                        </OwlCarousel>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}