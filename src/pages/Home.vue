<script setup>
import { RouterLink } from 'vue-router';




</script>

<template>
<!-- ============================================ -->
<!--                 Promotions                   -->
<!-- ============================================ -->

<section id="promotions-1567">
    <div class="cs-container">
        <ul class="cs-card-group">
            <li class="cs-item">
                <picture class="cs-background">
                    <!--Mobile Image-->
                    <source media="(max-width: 600px)" srcset="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/room1.jpg">
                    <!--Tablet and above Image-->
                    <source media="(min-width: 601px)" srcset="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/room1.jpg">
                    <img loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/room1.jpg" alt="room" width="630" height="354">
                </picture>
                <div class="cs-content">
                    <span class="cs-tag">Freshwater Fishing</span>
                    <h2 class="cs-h2">Get an Extra 30% off</h2>
                    <RouterLink to="/products" class="cs-button-solid">Shop Now</RouterLink>
                </div>
            </li>
            <li class="cs-item">
                <picture class="cs-background">
                    <!--Mobile Image-->
                    <source media="(max-width: 600px)" srcset="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/room2.jpg">
                    <!--Tablet and above Image-->
                    <source media="(min-width: 601px)" srcset="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/room2.jpg">
                    <img loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/room2.jpg" alt="room" width="630" height="354">
                </picture>
                <div class="cs-content">
                    <span class="cs-tag">Freshwater Fishing</span>
                    <h2 class="cs-h2">Buy 2 Items - Get 1 for Free</h2>
                    <RouterLink to="/products" class="cs-button-solid">Shop Now</RouterLink>
                </div>
            </li>
        </ul>
    </div>
</section>

<!-- ============================================ -->
<!--                  Collection                  -->
<!-- ============================================ -->

<section id="collection-1577">
    <div class="cs-container">
        <div class="cs-content">
            <span class="cs-topper">Categories</span>
            <h2 class="cs-title">Top Categories</h2>
        </div>
        <ul class="cs-card-group">
            <li class="cs-item">
                <RouterLink to="/products" class="cs-link">
                    <span class="cs-category">T-Shirts</span>
                    <picture class="cs-background" aria-hidden="true">
                        <source media="(max-width: 600px)"
                                srcset="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/ecomm-offer-tshirts.png">
                        <source media="(min-width: 601px)"
                                srcset="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/ecomm-offer-tshirts.png">
                        <img loading="lazy" decoding="async"
                                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/ecomm-offer-tshirts.png"
                                width="365" height="201" alt="t-shirt">
                    </picture>
                  </RouterLink>
            </li>
            <li class="cs-item">
                <RouterLink to="/products" class="cs-link">
                    <span class="cs-category">Bags</span>
                    <picture class="cs-background" aria-hidden="true">
                        <source media="(max-width: 600px)"
                                srcset="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/ecomm-offer-bags.png">
                        <source media="(min-width: 601px)"
                                srcset="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/ecomm-offer-bags.png">
                        <img loading="lazy" decoding="async"
                                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/ecomm-offer-bags.png" width="365"
                                height="201" alt="purse">
                    </picture>
                  </RouterLink>
            </li>
            <li class="cs-item">
                <RouterLink to="/products" class="cs-link">
                    <span class="cs-category">Shoes</span>
                    <picture class="cs-background" aria-hidden="true">
                        <source media="(max-width: 600px)"
                                srcset="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/ecomm-offer-shoes.png">
                        <source media="(min-width: 601px)"
                                srcset="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/ecomm-offer-shoes.png">
                        <img loading="lazy" decoding="async"
                                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/ecomm-offer-shoes.png"
                                width="365" height="201" alt="shoes">
                    </picture>
                  </RouterLink>
            </li>
            <li class="cs-item">
                <RouterLink to="/products" class="cs-link">
                    <span class="cs-category">Accessories</span>
                    <picture class="cs-background" aria-hidden="true">
                        <source media="(max-width: 600px)"
                                srcset="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/ecomm-offer-accessories.png">
                        <source media="(min-width: 601px)"
                                srcset="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/ecomm-offer-accessories.png">
                        <img loading="lazy" decoding="async"
                                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/ecomm-offer-accessories.png"
                                width="365" height="201" alt="perfume">
                    </picture>
                  </RouterLink>
            </li>
        </ul>
    </div>
</section>
                                
                                
</template>

<style scoped>
  /*-- -------------------------- -->
<---        Promotions          -->
<--- -------------------------- -*/

/* Mobile - 360px */
@media only screen and (min-width: 0rem) {
  #promotions-1567 {
    padding: var(--sectionPadding);
  }
  #promotions-1567 .cs-container {
    width: 100%;
    max-width: 80rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* 48px - 64px */
    gap: clamp(3rem, 6vw, 4rem);
  }
  #promotions-1567 .cs-content {
    /* set text align to left if content needs to be left aligned */
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    /* centers content horizontally, set to flex-start to left align */
    align-items: center;
  }
  #promotions-1567 .cs-card-group {
    width: 100%;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16.25rem, 1fr));
    /* 16px - 20px */
    gap: clamp(1rem, 2.4vw, 1.25rem);
  }
  #promotions-1567 .cs-item {
    list-style: none;
    min-height: 16rem;
    /* 40px - 100px */
    padding: clamp(2.5rem, 7vw, 6.25rem) 1rem;
    /* prevents padding from affecting height and width */
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
  }
  #promotions-1567 .cs-item:hover .cs-background img {
    transform: scale(1.2);
  }
  #promotions-1567 .cs-tag {
    font-size: 1.25rem;
    line-height: 1.2em;
    font-weight: 700;
    margin: 0 0 0.25rem 0;
    color: var(--bodyTextColorWhite);
    display: block;
  }
  #promotions-1567 .cs-h2 {
    font-size: clamp(1.9375rem, 4vw, 2.4375rem);
    line-height: 1.2em;
    font-weight: 700;
    margin: 0 0 1.5rem 0;
    color: var(--bodyTextColorWhite);
    display: block;
  }
  #promotions-1567 .cs-button-solid {
    font-size: 1rem;
    /* 46px - 56px */
    line-height: clamp(2.875rem, 5.5vw, 3.5rem);
    text-decoration: none;
    font-weight: 700;
    text-align: center;
    margin: 0;
    color: #fff;
    min-width: 9.375rem;
    padding: 0 3rem;
    background-color: var(--primary);
    display: inline-block;
    position: relative;
    z-index: 1;
    /* prevents padding from adding to the width */
    box-sizing: border-box;
    transition: color .3s;
  }
  #promotions-1567 .cs-button-solid:before {
    content: '';
    position: absolute;
    height: 100%;
    width: 0%;
    background: #fff;
    opacity: 1;
    top: 0;
    left: 0;
    z-index: -1;
    transition: width .3s;
  }
  #promotions-1567 .cs-button-solid:hover {
    color: var(--headerColor);
  }
  #promotions-1567 .cs-button-solid:hover:before {
    width: 100%;
  }
  #promotions-1567 .cs-background {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
  #promotions-1567 .cs-background:before {
    /* background color overlay */
    content: '';
    position: absolute;
    display: block;
    height: 100%;
    width: 100%;
    background: #000;
    opacity: .4;
    top: 0;
    left: 0;
    z-index: 1;
  }
  #promotions-1567 .cs-background img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    /* Makes img tag act as a background image */
    object-fit: cover;
    transition: transform .6s;
  }
}

/*-- -------------------------- -->
<---         Collection         -->
<--- -------------------------- -*/

/* Mobile - 360px */
@media only screen and (min-width: 0rem) {
  #collection-1577 {
    padding: var(--sectionPadding);
    position: relative;
    z-index: 1;
  }
  #collection-1577 .cs-container {
    width: 100%;
    max-width: 80rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* 48px - 64px */
    gap: clamp(3rem, 6vw, 4rem);
  }
  #collection-1577 .cs-content {
    /* set text align to left if content needs to be left aligned */
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    /* centers content horizontally, set to flex-start to left align */
    align-items: center;
  }
  #collection-1577 .cs-title {
    margin: 0;
  }
  #collection-1577 .cs-topper {
    color: var(--secondary);
  }
  #collection-1577 .cs-card-group {
    list-style: none;
    width: 100%;
    /* changes to 1280px on tablet */
    max-width: 34.375rem;
    margin: auto;
    padding: 0;
    display: grid;
    grid-template-rows: repeat(12, 1fr);
    grid-auto-flow: row;
  }
  #collection-1577 .cs-item {
    max-width: 100%;
    grid-column: span 12;
    position: relative;
  }
  #collection-1577 .cs-item:hover .cs-background img {
    opacity: .5;
    transform: scale(1.4);
  }
  #collection-1577 .cs-link {
    text-decoration: none;
    /* changes at tablet */
    height: 60vw;
    max-height: 21.75rem;
    padding: 2.5rem 1.5rem;
    /* prevents padding from affecting height and width */
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #collection-1577 .cs-background {
    width: 100%;
    height: 100%;
    background-color: #000;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    /* set to -2 so the gradient overlay (z-index: -1) appears in front of the images, but behind the text */
    z-index: -2;
  }
  #collection-1577 .cs-background img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform .6s, opacity .3s;
  }
  #collection-1577 .cs-category {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.2em;
    text-align: center;
    text-decoration: none;
    width: fit-content;
    /* 12px - 20px top & bottom, 16px - 24px sides*/
    padding: clamp(0.75rem, 2vw, 1.25rem) clamp(1rem, 3vw, 1.5rem);
    color: var(--main-white, #ffffff);
    position: relative;
    transition: color .3s;
    /* blurred background - done as a pseudo element so backdrop-filter won't distort the text */
  }
  #collection-1577 .cs-category:hover {
    color: var(--headerColor);
  }
  #collection-1577 .cs-category:hover:before {
    background-color: #ffffff;
  }
  #collection-1577 .cs-category:before {
    content: "";
    width: 100%;
    height: 100%;
    backdrop-filter: blur(8px);
    --webkit-backdrop-filter: blur(8px);
    background-color: rgba(255, 255, 255, 0.2);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: background-color 0.3s;
  }
}
/* Tablet - 768px */
@media only screen and (min-width: 48rem) {
  #collection-1577 .cs-card-group {
    max-width: 80rem;
    grid-template-columns: repeat(12, 1fr);
  }
  #collection-1577 .cs-item {
    /* 180px - 348px */
    height: clamp(11.75rem, 25vw, 21.75rem);
    grid-column: span 3;
  }
}
                                
</style>