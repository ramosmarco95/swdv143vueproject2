<script setup>

</script>

<template>
<!-- ============================================ -->
<!--                  Footer                      -->
<!-- ============================================ -->

<footer id="footer-1147">
    <div class="cs-container">
        <div class="cs-top">
            <RouterLink aria-label="go back to home" class="cs-logo" to="/">
                Logo
                <!-- <img class="cs-logo-img" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Logos/charity-logo.svg" alt="logo" width="168" height="48"> -->
            </RouterLink>
            <ul class="cs-ul">
                <li class="cs-li"><RouterLink class="cs-link"  to="/home">Home</RouterLink></li>
                <li  class="cs-li"><RouterLink class="cs-link" to="/products">Products</RouterLink></li>
                <li  class="cs-li"><RouterLink class="cs-link" to="/deals">Deals</RouterLink></li>
                <li  class="cs-li"><RouterLink class="cs-link" to="/contact">Contact</RouterLink></li>
            </ul>
        </div>
        <div class="cs-bottom">
            <!--Social-->
            <ul class="cs-social">
                <li class="cs-social-li">
                    <a href="https://www.facebook.com/" class="cs-social-link" aria-label="facebook" target="_blank" rel="noopener">
                        <img class="cs-social-icon cs-default" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/facebook-white.svg" alt="icon" loading="lazy" decoding="async" width="12" height="12" aria-hidden="true">
                    </a>
                </li>
                <li class="cs-social-li">
                    <a href="https://twitter.com/" class="cs-social-link" aria-label="twitter" target="_blank" rel="noopener">
                        <img class="cs-social-icon cs-default" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/twitter-white.svg" alt="icon" loading="lazy" decoding="async" width="12" height="12" aria-hidden="true">
                    </a>
                </li>
                
            </ul>
            <span class="cs-copyright">
                © Copyright 2023 - <a href="" class="cs-copyright-link">Stitch Non-profit Charity</a>
            </span>
        </div>
    </div>
    <!--Background-->
    <picture class="cs-background">
        <!--Mobile Image-->
        <source media="(max-width: 600px)" srcset="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/kids2.jpg">
        <!--Tablet and above Image-->
        <source media="(min-width: 601px)" srcset="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/kids2.jpg">
        <img loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/kids2.jpg" alt="kids" width="1280" height="568">
    </picture>
</footer>
                                
</template>

 <style scoped>
/*-- -------------------------- -->
<---          Footer            -->
<--- -------------------------- -*/

/* Mobile - 360px */
@media only screen and (min-width: 0rem) {
    #footer-1147 {
        padding: var(--sectionPadding);
        position: relative;
        z-index: 1;
    }
    #footer-1147 .cs-container {
        width: 100%;
        max-width: 80rem;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #footer-1147 .cs-top {
        width: 100%;
        /* 32px - 40px */
        margin-bottom: clamp(2rem, 4vw, 2.5rem);
        padding-bottom: clamp(2rem, 4vw, 2.5rem);
        border-bottom: 1px solid #484848;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }
    #footer-1147 .cs-ul {
        margin: 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        row-gap: 0.5rem;
        /* 28px - 40px */
        column-gap: clamp(1.75rem, 4vw, 2.5rem);
    }
    #footer-1147 .cs-li {
        list-style: none;
    }
    #footer-1147 .cs-link {
        /* 14px - 16px */
        font-size: clamp(0.875rem, 1.5vw, 1rem);
        line-height: 1.5em;
        text-decoration: none;
        margin: 0;
        color: #bababa;
        display: block;
        transition: color 0.3s;
    }
    #footer-1147 .cs-link:hover {
        color: var(--secondary);
    }
    #footer-1147 .cs-logo {
        width: 10.5rem;
        height: auto;
        display: block;
    }
    #footer-1147 .cs-logo-img {
        width: 100%;
        height: auto;
        display: block;
    }
    #footer-1147 .cs-bottom {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
    }
    #footer-1147 .cs-social {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
    }
    #footer-1147 .cs-social-li {
        list-style: none;
    }
    #footer-1147 .cs-social-link {
        width: 2rem;
        height: 2rem;
        background-color: #484848;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: background-color 0.3s;
    }
    #footer-1147 .cs-social-link:hover {
        background-color: var(--secondary);
    }
    #footer-1147 .cs-social-link:hover .cs-social-icon {
        filter: grayscale(1) brightness(0);
        opacity: 1;
    }
    #footer-1147 .cs-social-icon {
        width: 0.75rem;
        height: auto;
        display: block;
        opacity: 0.5;
    }
    #footer-1147 .cs-copyright {
        font-size: 1rem;
        line-height: 1.5em;
        margin: 0;
        color: #bababa;
        display: block;
    }
    #footer-1147 .cs-copyright-link {
        font-size: inherit;
        text-decoration: none;
        color: inherit;
        transition: color 0.3s;
    }
    #footer-1147 .cs-copyright-link:hover {
        color: var(--secondary);
    }
    #footer-1147 .cs-background {
        width: 100%;
        height: 100%;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }
    #footer-1147 .cs-background:before {
        /* background color overlay */
        content: "";
        position: absolute;
        display: block;
        height: 100%;
        width: 100%;
        background: #1a1a1a;
        opacity: 0.96;
        top: 0;
        left: 0;
        z-index: 1;
    }
    #footer-1147 .cs-background img {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        /* Makes img tag act as a background image */
        object-fit: cover;
    }
}
/* Tablet - 768px */
@media only screen and (min-width: 48rem) {
    #footer-1147 .cs-top {
        flex-direction: row;
        justify-content: space-between;
    }
    #footer-1147 .cs-bottom {
        flex-direction: row;
        justify-content: space-between;
    }
}
                                
</style>