
let diskdb = [];
let ssddb = [];
let renderdb = [];
let maxvalue = 25000;
let minvalue = 120;
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
    let url = corsproxyurl + "https://ecshweb.pchome.com.tw/search/v3.3/all/category/" + catalog + "/results?q=" + keyword + "&page=" + 1 + "&sort=sale/dc";
    console.log(url);
    $.getJSON(url , function (data) {
        let needPage = data['totalPage']
        console.log(needPage);
        for(let page = 1; page != needPage ; page++){
            $.getJSON(corsproxyurl +  "https://ecshweb.pchome.com.tw/search/v3.3/all/category/" + catalog + "/results?q=" + keyword + "&page=" + page + "&sort=sale/dc", function (data2) {
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
    console.log(vm.disktype)
    vm.renderdb = diskdb.concat(ssddb).filter(function (value){
        if(value.capacity > maxvalue){
            return false;
        }
        if(value.capacity < minvalue){
            return false;
        }
        for(let it = 0 ; it != vm.disktype.length ; it++){
            if(vm.disktype[it] == value.catalog){
                return true;
            }
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
            disktype: [],
        }
    },
    created(){
        getData(hardDiskCatalogId);
        getData(solidDiskCataLogId);


    },
    mounted(){
        updateList();
    },
    computed:{

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
        }
    },

}).mount('#app');
