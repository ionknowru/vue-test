import Vue from 'vue';

Vue.config.devtools = true;
Vue.config.productionTip = false;

// Подключим SCSS

module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: '@import "@/scss/app.scss"; '
            }
        }
    }
};