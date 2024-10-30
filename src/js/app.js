import { isWebpSupported } from './__plagin-helper/index.js';
import { handleProductsSlider } from './handleProductsSlider.js';
import { handleReviewsSlider } from './handleReviewsSlider.js';
import { handleVideo } from './handleVideo.js';

isWebpSupported();
handleProductsSlider();
handleVideo();
handleReviewsSlider();
