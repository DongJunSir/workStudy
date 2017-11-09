import config from '../js/config';

const movieListService={
    getMovieListData:function(movieType){
        // 拼接服务器路径
        let url=`${config.HTTP}${config.SERVER_PATH}:${config.PORT}/getMovieListData?movieType=${movieType}`;

        // promise里面再用promise可能会有问题？
        // 返回promise对象
        return new Promise(function(resolve, reject) {
            fetch(url)
                .then((response) => {
                    if (response.ok) {
                        return response.json()
                    } else {
                        console.error('服务器繁忙，请稍后再试；\r\nCode:' + response.status)
                    }
                })
                .then((data) => {
                    resolve(data);
                })
                .catch((err)=> {
                    reject(err);
                })
        });
    },
    getMovieDetailData:function(id){
        // 拼接服务器路径
        let url=`${config.HTTP}${config.SERVER_PATH}:${config.PORT}/getMovieDetailData?id=${id}`;

        // promise里面再用promise可能会有问题？
        // 返回promise对象
        return new Promise(function(resolve, reject) {
            fetch(url)
                .then((response) => {
                    if (response.ok) {
                        return response.json()
                    } else {
                        console.error('服务器繁忙，请稍后再试；\r\nCode:' + response.status)
                    }
                })
                .then((data) => {
                    resolve(data);
                })
                .catch((err)=> {
                    reject(err);
                })
        });

    }
}

// 导出默认模块
export default movieListService;