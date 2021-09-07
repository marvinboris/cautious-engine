import React from 'react';
import { Carousel, CarouselItem, CarouselIndicators } from 'reactstrap';

export default ({ items, activeIndex, next, previous, goToIndex, onExiting, onExited }) => {
    const slides = items.map(item => (
        <CarouselItem onExiting={onExiting} onExited={onExited} key={item.src} className="h-100">
            <div className="h-100" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)), url(' + item.src + ')', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        </CarouselItem>
    ));

    return (
        <Carousel id="carousel" activeIndex={activeIndex} next={next} previous={previous} className="h-100 carousel-fade HomeCarousel">
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />

            {slides}
        </Carousel>
    );
}
