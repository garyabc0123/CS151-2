
let diskdb = [];
let ssddb = [];
let renderdb = [];
let maxvalue = 25000;
let minvalue = 30;
let keyword = "硬碟";
let disktype = [];
let vm = "";
hardDiskCatalogId = 'DRAB'
solidDiskCataLogId = 'DRAH'
const corsproxyurl = 'https://api.allorigins.win/raw?url=';
const capacityRegex = /[0-9.]{1,4}[T|G|t|g][b|B]?/;
const capacityNumberRegex = /[0-9.]+/;
const capacityGigaMetricPrefixRegex = /[g|G]/;
const capacityTeraMetricPrefixRegex = /[t|T]/;


function getData(catalog){
    let url = corsproxyurl + "https%3A//ecshweb.pchome.com.tw/search/v3.3/all/category/" + catalog + "/results%3Fq%3D" + keyword + "%26page=" + 1 + "%26sort=sale/dc";
    console.log(url);
    $.getJSON(url , function (data) {
        let needPage = data['totalPage']
        console.log(needPage);
        for(let page = 1; page <= needPage ; page++){
            $.getJSON(corsproxyurl + "https%3A//ecshweb.pchome.com.tw/search/v3.3/all/category/" + catalog + "/results%3Fq%3D" + keyword + "%26page=" + page + "%26sort=sale/dc", function (data2) {
                for (let it = 0 ; it != data2["prods"].length; it++){
                    if(catalog == hardDiskCatalogId){
                        let catalogdetail = "hdd-un"
                        if(data2["prods"][it]["name"].search("2.5") != -1){
                            catalogdetail = "hdd-2.5";
                        }else if(data2["prods"][it]["name"].search("3.5") != -1){
                            catalogdetail = "hdd-3.5";
                        }else{
                            continue;
                        }
                        let capacityStr = data2["prods"][it]["name"].match(capacityRegex);
                        if(capacityStr == null){
                            continue;
                        }
                        capacityStr = capacityStr.reduce(
                            function (a, b) {
                                return a.length > b.length ? a : b;
                            }
                        );
                        let capacity = capacityStr.match(capacityNumberRegex)[0];
                        if(capacityStr.search(capacityGigaMetricPrefixRegex) != -1){
                            capacity *= 1;
                        }else if(capacityStr.search(capacityTeraMetricPrefixRegex) != -1){
                            capacity *= 1000;
                        }else{
                            capacity = 0;
                            continue;
                        }
                        let cp = data2["prods"][it]["price"] / capacity;
                        if(cp <= 0.1 || cp > 31){
                            continue;
                        }
                        diskdb.push({
                            id : data2["prods"][it]["Id"],
                            name: data2["prods"][it]["name"],
                            imgurl : "https://cs-c.ecimg.tw" + data2["prods"][it]["picS"],
                            content: data2["prods"][it]["describe"],
                            price: data2["prods"][it]["price"],
                            capacity: capacity,
                            cpvalue: cp,
                            catalog: catalogdetail,
                            url: "https://24h.pchome.com.tw/prod/" + data2["prods"][it]["Id"]
                        })
                    }
                    if(catalog == solidDiskCataLogId){
                        let catalogdetail = "ssd-un"
                        if(data2["prods"][it]["name"].toLowerCase().search("gen3") != -1){
                            catalogdetail = "ssd-gen3";
                        }else if(data2["prods"][it]["name"].toLowerCase().search("gen4") != -1){
                            catalogdetail = "ssd-gen4";
                        }else if(data2["prods"][it]["name"].toLowerCase().search("2.5") != -1){
                            catalogdetail = "ssd-2.5";
                        }else{
                            continue;
                        }
                        let capacityStr = data2["prods"][it]["name"].match(capacityRegex);
                        if(capacityStr == null){
                            continue;
                        }
                        capacityStr = capacityStr.reduce(
                            function (a, b) {
                                return a.length > b.length ? a : b;
                            }
                        );
                        let capacity = capacityStr.match(capacityNumberRegex)[0];
                        if(capacityStr.search(capacityGigaMetricPrefixRegex) != -1){
                            capacity *= 1;
                        }else if(capacityStr.search(capacityTeraMetricPrefixRegex) != -1){
                            capacity *= 1000;
                        }else{
                            capacity = 0;
                            continue;
                        }
                        let cp = data2["prods"][it]["price"] / capacity;
                        if(cp <= 0.1 || cp > 31){
                            continue;
                        }
                        ssddb.push({
                            id : data2["prods"][it]["Id"],
                            name: data2["prods"][it]["name"],
                            imgurl : "https://cs-c.ecimg.tw" + data2["prods"][it]["picS"],
                            content: data2["prods"][it]["describe"],
                            price: data2["prods"][it]["price"],
                            capacity: capacity,
                            cpvalue: cp,
                            catalog: catalogdetail,
                            url: "https://24h.pchome.com.tw/prod/" + data2["prods"][it]["Id"]
                        })
                    }
                }
            })
        }
    })
}

function updateList(){
    vm.renderdb = diskdb.concat(ssddb).filter(function (value){
        if(value.capacity > vm.maxvalue){
            return false;
        }
        if(value.capacity < vm.minvalue){
            return false;
        }
        if(value.price > vm.maxprice){
            return false;
        }
        if(value.price < vm.minprice){
            return false;
        }
        for(let it = 0 ; it != vm.disktype.length ; it++){
            if(vm.disktype[it] == value.catalog){
                return true;
            }
        }
    }).sort(function (a, b){
        switch (vm.sorttype){
            case "obverseOrderPrice":
                return a.price - b.price;
            case "obverseOrderCap":
                return a.capacity - b.capacity;
            case "obverseOrderCP":
                return a.cpvalue - b.cpvalue;
            case "reverseOrderPrice":
                return b.price - a.price;
            case "reverseOrderCap":
                return b.capacity - a.capacity;
            case "reverseOrderCP":
                return b.cpvalue - a.cpvalue;
            default:
                return a.cpvalue - b.cpvalue;
        }
    })
}

vm = Vue.createApp({
    data(){
        return{
            message: disktype,
            renderdb: renderdb,
            maxvalue: maxvalue,
            minvalue: minvalue,
            maxprice: 99999,
            minprice: 300,
            disktype: [],
            sorttype: "obverseOrderCP",
            lastupdatetime: Date()
        }
    },
    created(){
        //$.ajaxSetup({cache:false});
        getData(hardDiskCatalogId);
        getData(solidDiskCataLogId);


    },
    mounted(){
        updateList();
    },
    methods:{
        toFix(val){
            return val.toFixed(2);
        }
    },
    watch:{
        minvalue: function (){
            updateList();
        },
        maxvalue:function (){
            updateList();
        },
        disktype: function (){
            updateList();
        },
        sorttype: function (){
            updateList();
        },
        minprice: function () {
            updateList();
        },
        maxprice: function () {
            updateList();
        }
    },

}).mount('#app');
