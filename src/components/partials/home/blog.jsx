import React, { useState } from 'react';
import { connect } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import LightBox from 'react-image-lightbox';

// Import Custom Component
import ALink from "../../common/ALink";
import OwlCarousel from '../../features/owl-carousel';

// Import Utils
import { postSlider } from '../../../utils/data/slider';

// Import Action
// import { actions as ModalAction } from "../../../store/modal";

function Blog ( props ) {
    const { adClass = '', blog } = props;
    let date = new Date( blog.date );
    const [ openLB, setOpenLB ] = useState( false );
    const [ photoIndex, setPhotoIndex ] = useState( 0 );
    let monthArray = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];

    const events = {
        onTranslated: function ( e ) {
            setPhotoIndex( e.item.index );
        }
    };


    function openModal ( e ) {
        e.preventDefault();
        props.showVideo();
    }

    function openLightBox () {
        setOpenLB( true );
    }

    function closeLightBox () {
        setOpenLB( false );
    }

    function moveNextPhoto () {
        setPhotoIndex( ( photoIndex + 1 ) % blog.picture.length );
    }

    function movePrevPhoto () {
        setPhotoIndex( ( photoIndex + blog.picture.length - 1 ) % blog.picture.length );
    }

    return (
        <>
            <article className={ `post media-with-lazy ${ adClass }` }>
                {
                    blog.picture &&
                    ( blog.picture.length > 1 ?
                        <OwlCarousel adClass="owl-theme post-slider mb-0 show-nav-hover" options={ postSlider } events={ events }>
                            {
                                blog.picture.map( ( picture, index ) => (
                                    <figure className="post-media zoom-effect" key={ "Blog:", index }>
                                        <ALink href={ `/pages/blog/${ blog.slug }` }>
                                            <div className="lazy-overlay"></div>

                                            <LazyLoadImage
                                                alt="post_image"
                                                src="https://d-themes.com/react_asset_api/porto/uploads/blog_2_a1228416f4.png"
                                                data-zoom-image={ process.env.NEXT_PUBLIC_ASSET_URI + picture.url }
                                                width="100%"
                                                height="auto"
                                                effect="blur"
                                            />
                                        </ALink>

                                        <div className="post-date">
                                            <span className="day">{ `${ date.getUTCDate() < 10 ? '0' + date.getUTCDate() : date.getUTCDate() }` }</span>
                                            <span className="month">{ monthArray[ date.getUTCMonth() ] }</span>
                                        </div>

                                        <span className="prod-full-screen" onClick={ openLightBox }>
                                            <i className="fas fa-search"></i>
                                        </span>

                                        {
                                            blog.video &&
                                            <a className="btn-play btn-iframe" onClick={ openModal } href="https://www.youtube.com/watch?v=vBPgmASQ1A0"><i className="fas fa-play"></i></a>
                                        }
                                    </figure>
                                ) )
                            }
                        </OwlCarousel>
                        :
                        <figure className="post-media zoom-effect">
                            <ALink href={ `/pages/blog/${ blog.slug }` }>
                                <div className="lazy-overlay"></div>

                                <LazyLoadImage
                                    alt="post_image"
                                    src="https://d-themes.com/react_asset_api/porto/uploads/blog_2_a1228416f4.png"
                                    threshold={ 500 }
                                    width="100%"
                                    height="auto"
                                    effect="blur"
                                />
                            </ALink>

                            <span className="prod-full-screen" onClick={ openLightBox }>
                                <i className="fas fa-search"></i>
                            </span>

                            {
                                blog.video &&
                                <a className="btn-play btn-iframe" onClick={ openModal } href="https://www.youtube.com/watch?v=vBPgmASQ1A0"><i className="fas fa-play"></i></a>
                            }
                        </figure>
                    )
                }

                <div className="post-body">
                    <div className="category-wrap">
                        <div className="category-list">
                            {
                                blog.categories ?
                                    blog.categories.map( ( item, index ) => (
                                        <React.Fragment key={ item.slug + '-' + index }>
                                            <ALink href={ { pathname: '/pages/blog', query: { category: item.slug } } }>
                                                { item.name }
                                            </ALink>
                                            { index < blog.categories.length - 1 ? ', ' : "" }
                                        </React.Fragment>
                                    ) ) : ""
                            }
                        </div>
                    </div>

                    <h2 className="post-title">
                        <ALink href={ `/pages/blog/${ blog.slug }` }>{ blog.title }</ALink>
                    </h2>

                    <div className="post-content">
                        <p>{ blog.content }</p>
                    </div>
                </div>
            </article >
            {
                openLB && (

                    <LightBox
                        mainSrc={ process.env.NEXT_PUBLIC_ASSET_URI + blog.picture[ photoIndex ].url }
                        prevSrc={ process.env.NEXT_PUBLIC_ASSET_URI + blog.picture[ ( photoIndex + blog.picture.length - 1 ) % blog.picture.length ].url }
                        nextSrc={ process.env.NEXT_PUBLIC_ASSET_URI + blog.picture[ ( photoIndex + 1 ) % blog.picture.length ].url }
                        onCloseRequest={ closeLightBox }
                        onMoveNextRequest={ moveNextPhoto }
                        onMovePrevRequest={ movePrevPhoto }
                    />
                )
            }
        </>
    )
}

export default Blog;