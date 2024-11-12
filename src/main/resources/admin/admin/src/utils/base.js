const base = {
    get() {
        return {
            url : "http://localhost:8080/liangcangguanlixitong/",
            name: "liangcangguanlixitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/liangcangguanlixitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "粮仓管理系统"
        } 
    }
}
export default base