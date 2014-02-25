/**
 * Created by wb-zhangrui on 14-1-21.
 */
module.exports = function(grunt){
    //配置
    grunt.initConfig({
        pkg:grunt.file.readJSON("package.json"),
        jshint:{
            options:{
                eqeqeq:true,//用严格相等运算符取代相等运算符
                trailing:true//行尾不得有多余的空格
            },
            files:['src/js/*.js']//检查目标文件
        },
        concat: {
            css:{
                src:[
                    /*'src/css/base.css',
                    'src/css/a1.css'*/
                    'src/css/*.css'
                ],
                dest:'build/css/<%= pkg.name %>.css'
            },
            js:{
                src:[
                    /*'src/js/base.js',
                    'src/js/a1.js'*/
                    'src/js/*.js'
                ],
                dest:'build/js/<%= pkg.name %>.js'
            }
        },
        cssmin:{
            css:{
                expand:true,//下面文件名的占位符(即*)都要扩展成具体的文件名
                cwd:'build/css/',//需要处理的文件所在的目录
                //src: 'build/css/<%= pkg.name%>.css',
                src: ['*.css','!*.min.css'],//需要处理的文件
                dest: 'build/css/',//处理后的文件名或所在的目录
                ext:'.min.css'//处理后的文件后缀名
                //dest: 'build/css/<%= pkg.name%>.min.css'
            }
        },
        uglify:{
            js:{
                src:"build/js/<%= pkg.name %>.js",
                dest:"build/js/<%= pkg.name %>.min.js"
            }
        }
    });

    //加载插件
    grunt.loadNpmTasks('grunt-contrib-jshint');//检查JavaScript语法
    grunt.loadNpmTasks('grunt-contrib-concat');//合并文件
    grunt.loadNpmTasks('grunt-contrib-cssmin');//压缩css
    grunt.loadNpmTasks('grunt-contrib-uglify');//压缩js代码

    //Ĭ默认任务
    grunt.registerTask('default',['jshint','concat','cssmin','uglify']);
    grunt.registerTask('check',['jshint']);
};
