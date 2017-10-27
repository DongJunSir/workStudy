/**
 * Created by Administrator on 2017/10/27 0027.
 */
requirejs.config({
    baseUrl: 'app',
    paths: {
        main: 'main'
    }
});

requirejs(['main']);
