exports.install = function(Vue, options) {
    Vue.prototype.name2path = function(name) {
        return './uniall/' + name + '.png';
    };
    Vue.prototype.groupls = [
        [23, 36, 33],
        [5, 22, 39],
        [8, 13, 7],
        [17, 15, 0],
        [19, 21, 44],
        [20, 40, 25],
        [18, 38, 47],
        [32, 27, 45],
        [24, 12, 28],
        [30, 10, 35],
        [11, 46, 43],
        [9, 4, 2],
        [16, 37, 6],
        [14, 1, 3],
        [41, 42, 26],
        [31, 29, 34],
    ]
    Vue.prototype.alluni = [{
            id: 0,
            name: '东吴大学',
            pathname: 'uni01'
        },
        {
            id: 1,
            name: '中国人民大学',
            pathname: 'uni02'
        },
        {
            id: 2,
            name: '中国科学技术大学',
            pathname: 'uni03'
        },
        {
            id: 3,
            name: '云南民族大学',
            pathname: 'uni04'
        },
        {
            id: 4,
            name: '伦敦大学学院',
            pathname: 'uni05'
        },
        {
            id: 5,
            name: '兰州理工大学',
            pathname: 'uni06'
        },
        {
            id: 6,
            name: '内蒙古科技大学',
            pathname: 'uni07'
        },
        {
            id: 7,
            name: '北京师范大学',
            pathname: 'uni08'
        },
        {
            id: 8,
            name: '北京师范大学珠海分校',
            pathname: 'uni09'
        },
        {
            id: 9,
            name: '北京邮电大学',
            pathname: 'uni10'
        },
        {
            id: 10,
            name: '华东师范大学',
            pathname: 'uni11'
        },
        {
            id: 11,
            name: '华中科技大学',
            pathname: 'uni12'
        },
        {
            id: 12,
            name: '华侨大学',
            pathname: 'uni13'
        },
        {
            id: 13,
            name: '华南师范大学',
            pathname: 'uni14'
        },
        {
            id: 14,
            name: '南开大学',
            pathname: 'uni15'
        },
        {
            id: 15,
            name: '南昌航空大学科技学院',
            pathname: 'uni16'
        },
        {
            id: 16,
            name: '吉林大学',
            pathname: 'uni17'
        },
        {
            id: 17,
            name: '哈尔滨工程大学',
            pathname: 'uni18'
        },
        {
            id: 18,
            name: '四川大学',
            pathname: 'uni19'
        },
        {
            id: 19,
            name: '国防科技大学',
            pathname: 'uni20'
        },
        {
            id: 20,
            name: '国际关系学院',
            pathname: 'uni21'
        },
        {
            id: 21,
            name: '墨尔本大学',
            pathname: 'uni22'
        },
        {
            id: 22,
            name: '大连海事大学',
            pathname: 'uni23'
        },
        {
            id: 23,
            name: '太原理工大学',
            pathname: 'uni24'
        },
        {
            id: 24,
            name: '山东大学',
            pathname: 'uni25'
        },
        {
            id: 25,
            name: '山东大学（威海）',
            pathname: 'uni26'
        },
        {
            id: 26,
            name: '巴黎政治大学',
            pathname: 'uni27'
        },
        {
            id: 27,
            name: '广西师范大学',
            pathname: 'uni28'
        },
        {
            id: 28,
            name: '成均馆大学',
            pathname: 'uni29'
        },
        {
            id: 29,
            name: '新加坡国立大学',
            pathname: 'uni30'
        },
        {
            id: 30,
            name: '江西财经大学',
            pathname: 'uni31'
        },
        {
            id: 31,
            name: '沈阳师范大学',
            pathname: 'uni32'
        },
        {
            id: 32,
            name: '河北大学',
            pathname: 'uni33'
        },
        {
            id: 33,
            name: '浙江大学城市学院',
            pathname: 'uni34'
        },
        {
            id: 34,
            name: '海南大学',
            pathname: 'uni35'
        },
        {
            id: 35,
            name: '清华大学',
            pathname: 'uni36'
        },
        {
            id: 36,
            name: '澳门大学',
            pathname: 'uni37'
        },
        {
            id: 37,
            name: '爱丁堡大学',
            pathname: 'uni38'
        },
        {
            id: 38,
            name: '福建警察学院',
            pathname: 'uni39'
        },
        {
            id: 39,
            name: '纽约大学',
            pathname: 'uni40'
        },
        {
            id: 40,
            name: '莫纳什大学',
            pathname: 'uni41'
        },
        {
            id: 41,
            name: '西安外国语大学',
            pathname: 'uni42'
        },
        {
            id: 42,
            name: '贵州大学',
            pathname: 'uni43'
        },
        {
            id: 43,
            name: '郑州西亚斯学院',
            pathname: 'uni44'
        },
        {
            id: 44,
            name: '重庆工商大学',
            pathname: 'uni45'
        },
        {
            id: 45,
            name: '香港中文大学',
            pathname: 'uni46'
        },
        {
            id: 46,
            name: '马来亚大学',
            pathname: 'uni47'
        },
        {
            id: 47,
            name: '麦吉尔大学',
            pathname: 'uni48'
        }
    ]
};