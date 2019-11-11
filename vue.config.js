const path=require('path');

module.exports={
    devServer:{
        proxy:{
            "/restapi":{
                target:" https://h5.ele.me",
                changeOrigin:true
            }
        }
    },
    //别名配置
    configureWebpack:{
        resolve:{
            alias:{
                "@":path.json(__dirname,"./src"),
                "@api":path.json(__dirname,"./src/api"),
                "@common":path.json(__dirname,"./src/common"),
                "@compoents":path.json(__dirname,"./src/compoents"),
                "@pages":path.json(__dirname,"./src/pages"),
                "@router":path.json(__dirname,"./src/router"),
                "@store":path.json(__dirname,"./src/store"),
                "@utils":path.json(__dirname,"./src/utils"),
                "@lib":path.json(__dirname,"./src/lib"),
                "@assets":path.json(__dirname,"./src/assets")

                
                
            }
        }
    }
}