import * as $ from 'jquery';
import * as config from '../config/config'

export function getMovieList(listType) {
    var pageIndex = 6, pageSize = 5;
    return new Promise(function (resolve, reject) {
        $.get(`${config.SERVER_PATH}/getMovieList?listType=${listType}&start=${pageIndex}&count=${pageSize}`, function (data) {
            if (data) {
                resolve(data);
            }
            else {
                reject(data);
            }

        })
    });

}

export function getMovieDetail(id) {
    return new Promise(function (resolve, reject) {
        $.get(`${config.SERVER_PATH}/getMovieDetail?id=${id}`, function (data) {
            if (data) {
                resolve(data);
            }
            else {
                reject(data);
            }

        })
    });

}